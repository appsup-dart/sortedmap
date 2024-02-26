import 'dart:collection';
import 'dart:math';

abstract class TreeSet<V> extends SetMixin<V> implements Set<V> {
  final Comparator<V> comparator;

  /// Create a [TreeSet] with an ordering defined by [comparator] or the
  /// default `(a, b) => a.compareTo(b)`.
  factory TreeSet({Comparator<V>? comparator}) {
    return AvlTreeSet(comparator: comparator ?? _defaultCompare);
  }

  TreeSet._(this.comparator);

  static int _defaultCompare<V>(V a, V b) => (a as Comparable).compareTo(b);

  BidirectionalIterator<V> fromIterator(V anchor,
      {bool reversed = false, bool inclusive = true});

  @override
  BidirectionalIterator<V> get iterator;

  BidirectionalIterator<V> get reverseIterator;

  @override
  bool get isEmpty => length == 0;

  @override
  TreeSet<V> toSet() => TreeSet(comparator: comparator)..addAll(this);

  int indexOf(V element);
}

class AvlTreeSet<V> extends TreeSet<V> {
  AvlNode<V>? _root;

  AvlTreeSet({required Comparator<V> comparator}) : super._(comparator);

  @override
  int get length => _root?.length ?? 0;

  @override
  V elementAt(int index) {
    RangeError.checkNotNegative(index, 'index');
    if (index >= length) {
      throw IndexError.withLength(index, length,
          indexable: this, name: 'index');
    }
    return _root!.elementAt(index);
  }

  @override
  bool add(V element) {
    if (_root == null) {
      _root = AvlNode(object: element);
      return true;
    }

    var newRoot = _root!.add(comparator, element);
    var added = newRoot == _root;
    _root = newRoot;
    return added;
  }

  /// Test to see if an element is stored in the tree
  _Path<V>? _getPath(V? element) {
    if (element == null) return null;
    var x = _root;
    _Path<V>? path;
    while (x != null) {
      path = _Path(x, path);
      var compare = comparator(element, x.object);
      if (compare == 0) {
        // This only means our node matches; we need to search for the exact
        // element. We could have been glutons and used a hashmap to back.
        return path;
      } else if (compare < 0) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    return null;
  }

  @override
  bool addAll(Iterable<V> items) {
    if (_root == null &&
        items is AvlTreeSet<V> &&
        identical((items as dynamic).comparator, comparator)) {
      _root = items._root;
      return _root != null;
    }
    var modified = false;
    for (var ele in items) {
      modified = add(ele) ? true : modified;
    }
    return modified;
  }

  @override
  void clear() {
    _root = null;
  }

  @override
  bool containsAll(Iterable<Object?> items) {
    for (var ele in items) {
      if (!contains(ele)) return false;
    }
    return true;
  }

  @override
  bool remove(Object? item) {
    if (item is! V) return false;

    if (_root == null) return false;
    var newRoot = _root!.remove(comparator, item);
    if (newRoot == _root) return false;
    _root = newRoot;
    return true;
  }

  @override
  void removeAll(Iterable items) {
    for (var ele in items) {
      remove(ele);
    }
  }

  @override
  void retainAll(Iterable<Object?> elements) {
    var chosen = <V>[];
    for (var target in elements) {
      if (target is V && contains(target)) {
        chosen.add(target);
      }
    }
    clear();
    addAll(chosen);
  }

  @override
  void retainWhere(bool Function(V element) test) {
    var chosen = <V>[];
    for (var target in this) {
      if (test(target)) {
        chosen.add(target);
      }
    }
    clear();
    addAll(chosen);
  }

  @override
  void removeWhere(bool Function(V element) test) {
    var damned = <V>[];
    for (var target in this) {
      if (test(target)) {
        damned.add(target);
      }
    }
    removeAll(damned);
  }

  @override
  V get first {
    if (_root == null) throw StateError('No element');
    var min = _root!.minimumNode;
    return min.object;
  }

  @override
  V get last {
    if (_root == null) throw StateError('No element');
    var max = _root!.maximumNode;
    return max.object;
  }

  @override
  V? lookup(Object? element) {
    if (element is! V || _root == null) return null;
    var x = _root;
    var compare = 0;
    while (x != null) {
      compare = comparator(element, x.object);
      if (compare == 0) {
        return x.object;
      } else if (compare < 0) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    return null;
  }

  @override
  BidirectionalIterator<V> get iterator => TreeIterator(this);

  @override
  BidirectionalIterator<V> get reverseIterator =>
      TreeIterator(this, reversed: true);

  @override
  bool contains(Object? object) {
    var x = _getPath(object as V?);
    return x != null;
  }

  @override
  Set<V> intersection(Set<Object?> other) {
    var set = TreeSet<V>(comparator: comparator);

    // Optimized for sorted sets
    if (other is TreeSet<V>) {
      var i1 = iterator;
      var i2 = other.iterator;
      var hasMore1 = i1.moveNext();
      var hasMore2 = i2.moveNext();
      while (hasMore1 && hasMore2) {
        var c = comparator(i1.current, i2.current);
        if (c == 0) {
          set.add(i1.current);
          hasMore1 = i1.moveNext();
          hasMore2 = i2.moveNext();
        } else if (c < 0) {
          hasMore1 = i1.moveNext();
        } else {
          hasMore2 = i2.moveNext();
        }
      }
      return set;
    }

    // Non-optimized version.
    for (var target in this) {
      if (other.contains(target)) {
        set.add(target);
      }
    }
    return set;
  }

  @override
  Set<V> union(Set<V> other) {
    var set = TreeSet<V>(comparator: comparator);

    if (other is TreeSet) {
      var i1 = iterator;
      var i2 = other.iterator;
      var hasMore1 = i1.moveNext();
      var hasMore2 = i2.moveNext();
      while (hasMore1 && hasMore2) {
        var c = comparator(i1.current, i2.current);
        if (c == 0) {
          set.add(i1.current);
          hasMore1 = i1.moveNext();
          hasMore2 = i2.moveNext();
        } else if (c < 0) {
          set.add(i1.current);
          hasMore1 = i1.moveNext();
        } else {
          set.add(i2.current);
          hasMore2 = i2.moveNext();
        }
      }
      if (hasMore1 || hasMore2) {
        i1 = hasMore1 ? i1 : i2 as BidirectionalIterator<V>;
        do {
          set.add(i1.current);
        } while (i1.moveNext());
      }
      return set;
    }

    // Non-optimized version.
    return set
      ..addAll(this)
      ..addAll(other);
  }

  @override
  Set<V> difference(Set<Object?> other) {
    var set = TreeSet<V>(comparator: comparator);

    if (other is TreeSet) {
      var i1 = iterator;
      var i2 = other.iterator;
      var hasMore1 = i1.moveNext();
      var hasMore2 = i2.moveNext();
      while (hasMore1 && hasMore2) {
        var c = comparator(i1.current, i2.current);
        if (c == 0) {
          hasMore1 = i1.moveNext();
          hasMore2 = i2.moveNext();
        } else if (c < 0) {
          set.add(i1.current);
          hasMore1 = i1.moveNext();
        } else {
          hasMore2 = i2.moveNext();
        }
      }
      if (hasMore1) {
        do {
          set.add(i1.current);
        } while (i1.moveNext());
      }
      return set;
    }

    // Non-optimized version.
    for (var target in this) {
      if (!other.contains(target)) {
        set.add(target);
      }
    }
    return set;
  }

  @override
  BidirectionalIterator<V> fromIterator(V anchor,
      {bool reversed = false, bool inclusive = true}) {
    return TreeIterator.atAnchor(this,
        anchor: anchor, reversed: reversed, inclusive: inclusive);
  }

  int countUntil(V v, {bool inclusive = true}) {
    var x = _root;
    var i = 0;
    while (x != null) {
      var compare = comparator(v, x.object);
      if (compare == 0) {
        i += x.left?.length ?? 0;
        return inclusive ? i + 1 : i;
      } else if (compare < 0) {
        x = x.left;
      } else {
        i += (x.left?.length ?? 0) + 1;
        x = x.right;
      }
    }
    return i;
  }

  @override
  int indexOf(V element) {
    var p = _getPath(element);
    if (p == null) return -1;
    return p.index;
  }
}

class AvlNode<V> {
  final V object;
  final AvlNode<V>? left;
  final AvlNode<V>? right;

  final int height;
  final int length;

  AvlNode({required this.object, this.left, this.right})
      : assert(object != null),
        height = max(left?.height ?? 0, right?.height ?? 0) + 1,
        length = (left?.length ?? 0) + (right?.length ?? 0) + 1;

  int get balanceFactor => (right?.height ?? 0) - (left?.height ?? 0);

  AvlNode<V> get minimumNode {
    if (left == null) return this;
    return left!.minimumNode;
  }

  AvlNode<V> get maximumNode {
    if (right == null) return this;
    return right!.maximumNode;
  }

  AvlNode<V> add(Comparator<V> comparator, V element) {
    var compare = comparator(element, object);
    if (compare == 0) {
      return this;
    } else if (compare < 0) {
      var newLeft = left?.add(comparator, element) ?? AvlNode(object: element);
      if (newLeft == left) return this;
      return AvlNode(
        object: object,
        left: newLeft,
        right: right,
      ).balance();
    } else {
      var newRight =
          right?.add(comparator, element) ?? AvlNode(object: element);
      if (newRight == right) return this;
      return AvlNode(
        object: object,
        left: left,
        right: newRight,
      ).balance();
    }
  }

  AvlNode<V> prepend(AvlNode<V>? other) {
    return AvlNode(
            object: object, left: left?.prepend(other) ?? other, right: right)
        .balanceDeep();
  }

  AvlNode<V> balanceDeep() {
    var node = this;
    while (node.balanceFactor.abs() > 1) {
      node = node.balance();
    }
    return node;
  }

  AvlNode<V>? remove(Comparator<V> comparator, V element) {
    var compare = comparator(element, object);
    if (compare == 0) {
      if (left == null) return right;
      if (right == null) return left;
      return right!.prepend(left);
    } else if (compare < 0) {
      var newLeft = left?.remove(comparator, element);
      if (newLeft == left) return this;
      return AvlNode(
        object: object,
        left: newLeft,
        right: right,
      ).balance();
    } else {
      var newRight = right?.remove(comparator, element);
      if (newRight == right) return this;
      return AvlNode(
        object: object,
        left: left,
        right: newRight,
      ).balance();
    }
  }

  /// This function will left rotate/pivot N with its right child, placing
  /// it on the left of its right child.
  ///
  ///      N                      Y
  ///     / \                    / \
  ///    A   Y                  N   Z
  ///       / \      ==>       / \ / \
  ///      B   Z              A  BC   D
  ///         / \
  ///        C   D
  ///
  /// When their is no right element, will return `this`.
  AvlNode<V> rotateLeft() {
    return AvlNode(
        object: right!.object,
        left: AvlNode(object: object, left: left, right: right!.left),
        right: right!.right);
  }

  /// This function will right rotate/pivot N with its left child, placing
  /// it on the right of its left child.
  ///
  ///          N                      Y
  ///         / \                    / \
  ///        Y   A                  Z   N
  ///       / \          ==>       / \ / \
  ///      Z   B                  D  CB   A
  ///     / \
  ///    D   C
  ///
  /// Assertion: must have a left element
  AvlNode<V> rotateRight() {
    return AvlNode(
      object: left!.object,
      left: left!.left,
      right: AvlNode(object: object, left: left!.right, right: right),
    );
  }

  /// This function will double rotate node with right/left operations.
  /// node is S.
  ///
  ///      S                      G
  ///     / \                    / \
  ///    A   C                  S   C
  ///       / \      ==>       / \ / \
  ///      G   B              A  DC   B
  ///     / \
  ///    D   C
  AvlNode<V> rotateRightLeft() {
    var left =
        AvlNode(object: object, left: this.left, right: this.right!.left!.left);
    var right = AvlNode(
        object: this.right!.object,
        left: this.right!.left!.right,
        right: this.right!.right);
    return AvlNode(object: this.right!.left!.object, left: left, right: right);
  }
  /*=> AvlNode(
    object: object,
    left: left,
    right: right.rotateRight()
  ).rotateLeft();*/

  /// This function will double rotate node with left/right operations.
  /// node is S.
  ///
  ///        S                      G
  ///       / \                    / \
  ///      C   A                  C   S
  ///     / \          ==>       / \ / \
  ///    B   G                  B  CD   A
  ///       / \
  ///      C   D
  AvlNode<V> rotateLeftRight() {
    var left = AvlNode(
        object: this.left!.object,
        left: this.left!.left,
        right: this.left!.right!.left);
    var right = AvlNode(
        object: object, left: this.left!.right!.right, right: this.right);
    return AvlNode(object: this.left!.right!.object, left: left, right: right);
  }
  /*=> AvlNode(
      object: object,
      left: left.rotateLeft(),
      right: right
  ).rotateRight();*/

  // AVL balancing act (for height balanced trees)
  // Now that we've inserted, we've unbalanced some trees, we need
  //  to follow the tree back up to the _root double checking that the tree
  //  is still balanced and _maybe_ perform a single or double rotation.
  //  Note: Left additions == -1, Right additions == +1
  //  Balanced Node = { -1, 0, 1 }, out of balance = { -2, 2 }
  //  Single rotation when Parent & Child share signed balance,
  //  Double rotation when sign differs!
  AvlNode<V> balance() {
    var balanceFactor = this.balanceFactor;
    if (balanceFactor >= 2) {
      // Heavy on the right side - Test for which rotation to perform
      if (right!.balanceFactor >= 1) {
        // Single (left) rotation; this will balance everything to zero
        return rotateLeft();
      } else {
        // Double (Right/Left) rotation
        // node will now be old node.right.left
        return rotateRightLeft();
      }
    } else if (balanceFactor <= -2) {
      // Heavy on the left side - Test for which rotation to perform
      if (left!.balanceFactor <= -1) {
        return rotateRight();
      } else {
        // Double (Left/Right) rotation
        // node will now be old node.left.right
        return rotateLeftRight();
      }
    }
    return this;
  }

  V elementAt(int index) {
    var l = left?.length ?? 0;
    if (index < l) {
      return left!.elementAt(index);
    }
    if (index == l) {
      return this.object;
    }
    return right!.elementAt(index - l - 1);
  }
}

abstract class BidirectionalIterator<E> implements Iterator<E> {
  /// Move back to the previous element.
  ///
  /// Returns true and updates [current] if successful. Returns false
  /// and updates [current] to an implementation defined state if there is no
  /// previous element
  bool movePrevious();
}

class TreeIterator<V> extends BidirectionalIterator<V> {
  final TreeCursor<V> _cursor;

  final bool reversed;

  TreeIterator(AvlTreeSet<V> tree, {this.reversed = false})
      : _cursor = TreeCursor(tree)
          .._state =
              reversed ? _TreeCursorState.after : _TreeCursorState.before;

  TreeIterator.atAnchor(AvlTreeSet<V> tree,
      {required V anchor, this.reversed = false, bool inclusive = true})
      : _cursor = TreeCursor(tree) {
    _cursor.positionOn(anchor, inclusive: inclusive);
  }

  @override
  V get current {
    if (_cursor._state != _TreeCursorState.on) {
      throw StateError(
          'TreeIterator not initialized. Call `moveNext` or `movePrevious` first.');
    }
    return _cursor.current;
  }

  @override
  bool moveNext() {
    return reversed ? _cursor.movePrevious() : _cursor.moveNext();
  }

  @override
  bool movePrevious() {
    return reversed ? _cursor.moveNext() : _cursor.movePrevious();
  }
}

class _Path<V> {
  final AvlNode<V> node;
  final _Path<V>? parent;

  final AvlNode<V> root;

  _Path(this.node, this.parent) : root = parent?.root ?? node;

  factory _Path.from(Iterable<AvlNode<V>> nodes, [_Path<V>? parent]) {
    if (nodes.isEmpty) return parent!;
    return _Path.from(nodes.skip(1), _Path(nodes.first, parent));
  }

  factory _Path.minimum(AvlNode<V> node, [_Path<V>? parent]) {
    if (node.left == null) return _Path(node, parent);
    return _Path.minimum(node.left!, _Path(node, parent));
  }

  factory _Path.maximum(AvlNode<V> node, [_Path<V>? parent]) {
    if (node.right == null) return _Path(node, parent);
    return _Path.maximum(node.right!, _Path(node, parent));
  }

  int get leftIndex =>
      (parent?.leftIndex ?? 0) +
      (node == parent?.node.right ? ((parent!.node.left?.length ?? 0) + 1) : 0);

  int get index => leftIndex + (node.left?.length ?? 0);

  _Path<V>? next() {
    var current = node;
    if (current.right != null) {
      return _Path.minimum(current.right!, this);
    }
    var l = node;
    var p = parent;
    while (p != null && p.node.right == l) {
      l = p.node;
      p = p.parent;
    }
    return p;
  }

  _Path<V>? previous() {
    var current = node;
    if (current.left != null) {
      return _Path.maximum(current.left!, this);
    }
    var l = node;
    var p = parent;
    while (p != null && p.node.left == l) {
      l = p.node;
      p = p.parent;
    }
    return p;
  }
}

enum _TreeCursorState {
  /// The cursor is before the element pointed to by path or before the first
  /// element if path is null.
  ///
  /// A call to `moveNext` will move the cursor to the element pointed to by
  /// path, or to the first element if path is null. A call to `movePrevious`
  /// will move the cursor to the element that comes before the element pointed
  /// to by path.
  before,

  /// The cursor is after the element pointed to by path or after the last
  /// element if path is null.
  ///
  /// A call to `movePrevious` will move the cursor to the element pointed to
  /// by path, or to the last element if path is null. A call to `moveNext` will
  /// move the cursor to the element that comes after the element pointed to by
  /// path.
  after,

  /// The cursor is on the element pointed to by path.
  ///
  /// A call to `current` will return the element pointed to by path.
  ///
  /// A call to `moveNext` will move the cursor to the element that comes after
  /// the element pointed to by path. A call to `movePrevious` will move the
  /// cursor to the element that comes before the element pointed to by path.
  on,

  /// The cursor will be on the element pointed to by path after the next call
  /// to `moveNext` or `movePrevious`.
  willBeOnAfterFirstMove,

  /// The cursor will be after the element pointed to by path after the next
  /// call to `moveNext` or before the element pointed to by path after the
  /// next call to `movePrevious`.
  willBeOnNextOrPreviousAfterFirstMove,
}

class TreeCursor<V> extends BidirectionalIterator<V> {
  final AvlNode<V>? _root;
  final AvlTreeSet<V> tree;

  _Path<V>? _path;

  _TreeCursorState _state = _TreeCursorState.before;

  TreeCursor(this.tree) : _root = tree._root;

  void _position(V anchor, _TreeCursorState state) {
    if (tree._root != _root) {
      throw ConcurrentModificationError(tree);
    }

    if (_root == null) {
      _state = state;
      return;
    }

    var p = _path = _Path(_root!, null);
    while (true) {
      var compare = tree.comparator(anchor, p.node.object);
      if (compare == 0) {
        _state = state;
        return;
      } else if (compare < 0) {
        if (p.node.left == null) {
          break;
        }
        p = _path = _Path(p.node.left!, p);
      } else {
        if (p.node.right == null) {
          break;
        }
        p = _path = _Path(p.node.right!, p);
      }
    }
    var compare = tree.comparator(anchor, p.node.object);
    if (compare > 0) {
      _state = _TreeCursorState.after;
    } else if (compare < 0) {
      _state = _TreeCursorState.before;
    } else {
      _state = state;
    }
  }

  void positionAfter(V anchor) {
    _position(anchor, _TreeCursorState.after);
  }

  void positionBefore(V anchor) {
    _position(anchor, _TreeCursorState.before);
  }

  void positionOn(V anchor, {bool inclusive = true}) {
    _position(
        anchor,
        inclusive
            ? _TreeCursorState.willBeOnAfterFirstMove
            : _TreeCursorState.willBeOnNextOrPreviousAfterFirstMove);
  }

  @override
  V get current {
    if (_path == null) {
      throw StateError('TreeCursor not pointing to a value.');
    }
    return _path!.node.object;
  }

  @override
  bool moveNext() {
    if (tree._root != _root) {
      throw ConcurrentModificationError(tree);
    }
    switch (_state) {
      case _TreeCursorState.willBeOnAfterFirstMove:
        _state = _TreeCursorState.on;
        return true;

      case _TreeCursorState.before:
        if (_root == null) return false;
        _path ??= _Path.minimum(_root!);
        _state = _TreeCursorState.on;
        return true;
      case _TreeCursorState.on:
      case _TreeCursorState.after:
      case _TreeCursorState.willBeOnNextOrPreviousAfterFirstMove:
        _path = _path?.next();
        if (_path == null) {
          _state = _TreeCursorState.after;
          return false;
        }
        _state = _TreeCursorState.on;
        return true;
    }
  }

  @override
  bool movePrevious() {
    if (tree._root != _root) {
      throw ConcurrentModificationError(tree);
    }
    switch (_state) {
      case _TreeCursorState.willBeOnAfterFirstMove:
        _state = _TreeCursorState.on;
        return true;
      case _TreeCursorState.after:
        if (_root == null) return false;
        _path ??= _Path.maximum(_root!);
        _state = _TreeCursorState.on;
        return true;
      case _TreeCursorState.on:
      case _TreeCursorState.before:
      case _TreeCursorState.willBeOnNextOrPreviousAfterFirstMove:
        _path = _path?.previous();
        if (_path == null) {
          _state = _TreeCursorState.before;
          return false;
        }
        _state = _TreeCursorState.on;
        return true;
    }
  }
}
