// Copyright (c) 2016, Rik Bellens. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

part of sortedmap;



/// A [Map] of objects that can be ordered relative to each other.
abstract class SortedMap<K extends Comparable,V> implements Map<K,V> {

  /// Creates a new [SortedMap] instance with an optional ordering.
  factory SortedMap([Ordering<K,V> ordering = const Ordering.byKey()]) =>
      new _SortedMap._(ordering, null, null);


  /// Creates a [SortedMap] that contains all key/value pairs of [other].
  factory SortedMap.from(Map<K,V> other, [Ordering<K,V> ordering = const Ordering.byKey()]) {
    return new SortedMap(ordering)..addAll(other);
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
      {K key(element),
        V value(element),
        Ordering<K,V> ordering: const Ordering.byKey()}) {
    SortedMap<K, V> map = new SortedMap<K, V>(ordering);

    if (key == null) key = (K v)=>v;
    if (value == null) value = (V v)=>v;
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
      [Ordering<K,V> ordering = const Ordering.byKey()]) {
    SortedMap<K, V> map = new SortedMap<K, V>(ordering);
    Iterator<K> keyIterator = keys.iterator;
    Iterator<V> valueIterator = values.iterator;

    bool hasNextKey = keyIterator.moveNext();
    bool hasNextValue = valueIterator.moveNext();

    while (hasNextKey && hasNextValue) {
      map[keyIterator.current] = valueIterator.current;
      hasNextKey = keyIterator.moveNext();
      hasNextValue = valueIterator.moveNext();
    }

    if (hasNextKey || hasNextValue) {
      throw new ArgumentError("Iterables do not have same length.");
    }
    return map;
  }

  /// The ordering.
  Ordering<K,V> get ordering;

  /// Makes a copy of this map. The key/value pairs in the map are not cloned.
  SortedMap<K,V> clone();

  /// Get the last key in the map for which the key/value pair is strictly
  /// smaller than that of [key]. Returns [:null:] if no key was not found.
  K lastKeyBefore(K key);

  /// Get the first key in the map for which the key/value pair is strictly
  /// larger than that of [key]. Returns [:null:] if no key was not found.
  K firstKeyAfter(K key);

  /// Gets the keys within the desired bounds and limit.
  Iterable<K> subkeys({Pair<K,Comparable> start, Pair<K,Comparable> end, int limit, bool reversed: false});

  /// Creates a filtered view of this map.
  FilteredMapView<K,V> filteredMapView({Pair<K,Comparable> start, Pair<K,Comparable> end, int limit, bool reversed: false}) =>
      new FilteredMapView(this, start: start, end: end, limit: limit, reversed: reversed);

  /// Creates a new filtered map based on this map.
  FilteredMap<K,V> filteredMap({Pair<K,Comparable> start, Pair<K,Comparable> end, int limit, bool reversed: false}) =>
      new FilteredMap(new Filter(validInterval: new KeyValueInterval.fromPairs(start, end), ordering: ordering, limit: limit, reversed: reversed))..addAll(this);


  Pair<K,Comparable> _pairForKey(K key) => containsKey(key) ? ordering.mapKeyValue(key, this[key]) : null;

}


class _SortedMap<K extends Comparable,V> extends MapBase<K,V> with SortedMap<K,V> {

  @override
  final Ordering<K,V> ordering;

  TreeSet<Pair<K,Comparable>> _sortedPairs;
  Map<K,V> _map;

  _SortedMap._(this.ordering, this._sortedPairs, this._map) {
    _sortedPairs ??= new TreeSet();
    _map ??= {};
  }

  @override
  bool containsKey(Object key) => _map.containsKey(key);

  @override
  Iterable<K> get keys => _sortedPairs.map((p)=>p.key);

  @override
  SortedMap<K,V> clone() => new _SortedMap<K,V>._(this.ordering, new TreeSet()..addAll(_sortedPairs), new Map<K,V>.from(_map));

  @override
  V operator [](Object key) => _map[key];


  @override
  void operator []=(K key, V value) {
    _sortedPairs.remove(_pairForKey(key));
    _addPair(key,value);
  }

  void _addPair(K key, V value) {
    _map[key] = value;
    _sortedPairs.add(ordering.mapKeyValue(key,value));
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
      throw new StateError("No such key $key in collection");
    }
    var pair = _pairForKey(key);
    var it = _sortedPairs.fromIterator(pair, reversed: true);
    while (it.moveNext()&&it.current==pair);
    return it.current?.key;
  }

  @override
  K firstKeyAfter(K key) {
    if (!_map.containsKey(key)) {
      throw new StateError("No such key $key in collection");
    }
    var pair = _pairForKey(key);
    var it = _sortedPairs.fromIterator(pair);
    while (it.moveNext()&&it.current==pair);
    return it.current?.key;
  }

  @override
  Iterable<K> subkeys({Pair<K,Comparable> start, Pair<K,Comparable> end, int limit, bool reversed: false}) {
    var it = _subkeys(start, end, limit, reversed);
    if (reversed) return it.toList().reversed;
    return it;
  }

  Iterable<K> _subkeys(Pair<K,Comparable> start, Pair<K,Comparable> end, int limit, bool reversed) sync* {
    var from = reversed ? end : start;
    Iterator it = _sortedPairs.fromIterator(from, reversed: reversed);
    int count = 0;
    while (it.moveNext()&&(limit==null||count++<limit)) {
      var cmp = Comparable.compare(it.current, reversed ? start : end);
      if ((reversed&&cmp<0)||(!reversed&&cmp>0)) return;
      yield it.current.key;
    }
  }

}

/// An unmodifiable sorted map.
abstract class UnmodifiableSortedMap<K extends Comparable,V> implements SortedMap<K,V> {
  @override
  void operator []=(K key, V value) =>
      throw new UnsupportedError("Map view cannot be modified.");

  @override
  void clear() =>
      throw new UnsupportedError("Map view cannot be modified.");

  @override
  V remove(Object key) =>
      throw new UnsupportedError("Map view cannot be modified.");


}