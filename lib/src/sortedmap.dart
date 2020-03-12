// Copyright (c) 2016, Rik Bellens. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

part of sortedmap;

/// A [Map] of objects that can be ordered relative to each other.
abstract class SortedMap<K extends Comparable, V> implements Map<K, V> {
  /// Creates a [SortedMap] instance with an optional ordering.
  factory SortedMap([Ordering ordering = const Ordering.byKey()]) =>
      _SortedMap._(ordering, null, null);

  /// Creates a [SortedMap] that contains all key/value pairs of [other].
  factory SortedMap.from(Map<K, V> other,
      [Ordering ordering = const Ordering.byKey()]) {
    return SortedMap(ordering)..addAll(other);
  }

  /// Creates a [SortedMap] where the keys and values are computed from the
  /// [iterable].
  ///
  /// For each element of the [iterable] this constructor computes a key/value
  /// pair, by applying [key] and [value] respectively.
  ///
  /// The keys of the key/value pairs do not need to be unique. The last
  /// occurrence of a key will simply overwrite any previous value.
  ///
  /// If no functions are specified for [key] and [value] the default is to
  /// use the iterable value itself.
  factory SortedMap.fromIterable(Iterable iterable,
      {K Function(dynamic) key,
      V Function(dynamic) value,
      Ordering ordering = const Ordering.byKey()}) {
    var map = SortedMap<K, V>(ordering);

    key ??= (v) => v;
    value ??= (v) => v;
    for (var element in iterable) {
      map[key(element)] = value(element);
    }
    return map;
  }

  /// Creates a [SortedMap] associating the given [keys] to [values].
  ///
  /// This constructor iterates over [keys] and [values] and maps each element of
  /// [keys] to the corresponding element of [values].
  ///
  /// If [keys] contains the same object multiple times, the last occurrence
  /// overwrites the previous value.
  ///
  /// It is an error if the two [Iterable]s don't have the same length.
  factory SortedMap.fromIterables(Iterable<K> keys, Iterable<V> values,
      [Ordering ordering = const Ordering.byKey()]) {
    var map = SortedMap<K, V>(ordering);
    var keyIterator = keys.iterator;
    var valueIterator = values.iterator;

    var hasNextKey = keyIterator.moveNext();
    var hasNextValue = valueIterator.moveNext();

    while (hasNextKey && hasNextValue) {
      map[keyIterator.current] = valueIterator.current;
      hasNextKey = keyIterator.moveNext();
      hasNextValue = valueIterator.moveNext();
    }

    if (hasNextKey || hasNextValue) {
      throw ArgumentError('Iterables do not have same length.');
    }
    return map;
  }

  /// The ordering.
  Ordering get ordering;

  /// Makes a copy of this map. The key/value pairs in the map are not cloned.
  SortedMap<K, V> clone();

  /// Get the last key in the map for which the key/value pair is strictly
  /// smaller than that of [key]. Returns [:null:] if no key was not found.
  K lastKeyBefore(K key);

  /// Get the first key in the map for which the key/value pair is strictly
  /// larger than that of [key]. Returns [:null:] if no key was not found.
  K firstKeyAfter(K key);

  /// Gets the keys within the desired bounds and limit.
  Iterable<K> subkeys(
      {Pair<Comparable, Comparable> start,
      Pair<Comparable, Comparable> end,
      int limit,
      bool reversed = false});

  /// Creates a filtered view of this map.
  FilteredMapView<K, V> filteredMapView(
          {Pair<Comparable, Comparable> start,
          Pair<Comparable, Comparable> end,
          int limit,
          bool reversed = false}) =>
      FilteredMapView(this,
          start: start, end: end, limit: limit, reversed: reversed);

  /// Creates a filtered map based on this map.
  FilteredMap<K, V> filteredMap(
          {Pair<K, Comparable> start,
          Pair<K, Comparable> end,
          int limit,
          bool reversed = false}) =>
      FilteredMap(Filter(
          validInterval: KeyValueInterval.fromPairs(start, end),
          ordering: ordering,
          limit: limit,
          reversed: reversed))
        ..addAll(this);

  Pair<Comparable, Comparable> _pairForKey(K key) =>
      containsKey(key) ? ordering.mapKeyValue(key, this[key]) : null;
}

class _SortedMap<K extends Comparable, V> extends MapBase<K, V>
    with SortedMap<K, V> {
  @override
  final Ordering ordering;

  TreeSet<Pair<Comparable, Comparable>> _sortedPairs;
  TreeMap<K, V> _map;

  _SortedMap._(this.ordering, this._sortedPairs, this._map) {
    _sortedPairs ??= TreeSet();
    _map ??= TreeMap();
  }

  @override
  bool containsKey(Object key) => _map.containsKey(key);

  @override
  Iterable<K> get keys => _sortedPairs.map((p) => p.key as K);

  @override
  SortedMap<K, V> clone() => _SortedMap<K, V>._(
      ordering, TreeSet()..addAll(_sortedPairs), TreeMap<K, V>.from(_map));

  @override
  V operator [](Object key) => _map[key];

  @override
  void operator []=(K key, V value) {
    var pair = _pairForKey(key);
    if (pair != null) _sortedPairs.remove(pair);
    _addPair(key, value);
  }

  @override
  bool get isEmpty => _map.isEmpty;

  void _addPair(K key, V value) {
    _map[key] = value;
    _sortedPairs.add(ordering.mapKeyValue(key, value));
  }

  @override
  void clear() {
    _map.clear();
    _sortedPairs.clear();
  }

  @override
  V remove(Object key) {
    if (!_map.containsKey(key)) return null;
    _sortedPairs.remove(_pairForKey(key as K));
    return _map.remove(key);
  }

  @override
  K lastKeyBefore(K key) {
    if (!_map.containsKey(key)) {
      throw StateError('No such key $key in collection');
    }
    var pair = _pairForKey(key);
    var it = _sortedPairs.fromIterator(pair, reversed: true);
    while (it.moveNext() && it.current == pair) {}
    return it.current?.key;
  }

  @override
  K firstKeyAfter(K key) {
    if (!_map.containsKey(key)) {
      throw StateError('No such key $key in collection');
    }
    var pair = _pairForKey(key);
    var it = _sortedPairs.fromIterator(pair);
    while (it.moveNext() && it.current == pair) {}
    return it.current?.key;
  }

  @override
  Iterable<K> subkeys(
      {Pair<Comparable, Comparable> start,
      Pair<Comparable, Comparable> end,
      int limit,
      bool reversed = false}) {
    var it = _subkeys(start, end, limit, reversed);
    if (reversed) return it.toList().reversed;
    return it;
  }

  Iterable<K> _subkeys(Pair<Comparable, Comparable> start,
      Pair<Comparable, Comparable> end, int limit, bool reversed) sync* {
    var from = reversed ? end : start;
    Iterator it = _sortedPairs.fromIterator(from, reversed: reversed);
    var count = 0;
    while (it.moveNext() && (limit == null || count++ < limit)) {
      var cmp = Comparable.compare(it.current, reversed ? start : end);
      if ((reversed && cmp < 0) || (!reversed && cmp > 0)) return;
      yield it.current.key;
    }
  }
}

/// An unmodifiable sorted map.
abstract class UnmodifiableSortedMap<K extends Comparable, V>
    implements SortedMap<K, V> {
  @override
  void operator []=(K key, V value) =>
      throw UnsupportedError('Map view cannot be modified.');

  @override
  void clear() => throw UnsupportedError('Map view cannot be modified.');

  @override
  V remove(Object key) =>
      throw UnsupportedError('Map view cannot be modified.');
}
