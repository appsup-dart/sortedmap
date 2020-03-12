part of sortedmap;

class TreeMap<K extends Comparable, V> extends MapBase<K, V> {
  TreeMap();

  factory TreeMap.from(Map<K, V> other) => TreeMap()..addAll(other);

  static int _compareKeys<K extends Comparable, V>(
          Pair<K, V> a, Pair<K, V> b) =>
      Comparable.compare(a.key, b.key);

  final TreeSet<Pair<K, V>> _tree = TreeSet(comparator: _compareKeys);

  @override
  bool get isEmpty => _tree.isEmpty;

  @override
  bool containsKey(Object key) => _tree.lookup(Pair<K, V>(key, null)) != null;

  @override
  V operator [](Object key) => _tree.lookup(Pair<K, V>(key, null))?.value;

  @override
  void operator []=(K key, V value) {
    var p = Pair<K, V>(key, value);
    _tree.remove(
        p); // first remove otherwise not overwritten, could be improved?
    _tree.add(p);
  }

  @override
  void clear() {
    _tree.clear();
  }

  @override
  Iterable<K> get keys => _tree.map((p) => p.key);

  @override
  V remove(Object key) {
    var p = _tree.lookup(Pair<K, V>(key, null));
    if (p != null) _tree.remove(p);
    return p?.value;
  }

  @override
  void addAll(Map<K, V> other) {
    if (other is TreeMap<K, V>) {
      _tree.addAll(other._tree);
    } else {
      super.addAll(other);
    }
  }
}
