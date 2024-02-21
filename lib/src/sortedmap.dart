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
      {K Function(dynamic)? key,
      V Function(dynamic)? value,
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
  /// smaller than that of [key].
  K lastKeyBefore(K key, {K Function()? orElse});

  /// Get the first key in the map for which the key/value pair is strictly
  /// larger than that of [key].
  K firstKeyAfter(K key, {K Function()? orElse});

  /// Gets the keys within the desired bounds and limit.
  Iterable<K> subkeys(
      {required Pair start,
      required Pair end,
      int? limit,
      bool reversed = false});

  /// Creates a filtered view of this map.
  FilteredMapView<K, V> filteredMapView(
          {required Pair start,
          required Pair end,
          int? limit,
          bool reversed = false}) =>
      FilteredMapView(this,
          start: start, end: end, limit: limit, reversed: reversed);

  /// Creates a filtered map based on this map.
  FilteredMap<K, V> filteredMap(
          {required Pair start,
          required Pair end,
          int? limit,
          bool reversed = false}) =>
      FilteredMap(Filter(
          validInterval: KeyValueInterval.fromPairs(start, end),
          ordering: ordering,
          limit: limit,
          reversed: reversed))
        ..addAll(this);

  _MapEntryWithIndex<K, V>? _entryForKey(K? key) =>
      containsKey(key) ? ordering.mapEntry(key!, this[key] as V) : null;
}

class _MapEntryWithIndex<K extends Comparable, V> implements MapEntry<K, V> {
  final K? _key;

  final V? _value;

  final Pair index;

  _MapEntryWithIndex.indexOnly(Pair pair)
      : _key = null,
        _value = null,
        index = pair;

  _MapEntryWithIndex(K key, V value, this.index)
      : _key = key,
        _value = value;

  @override
  V get value => _value as V;

  @override
  K get key => _key as K;
}

extension _OrderingX on Ordering {
  _MapEntryWithIndex<K, V> mapEntry<K extends Comparable, V>(K key, V value) =>
      _MapEntryWithIndex(key, value, mapKeyValue(key, value));

  Pair indexFromMapEntry<K extends Comparable, V>(MapEntry<K, V> entry) =>
      entry is _MapEntryWithIndex<K, V>
          ? entry.index
          : mapKeyValue(entry.key, entry.value);
}

class _SortedMap<K extends Comparable, V> extends MapBase<K, V>
    with SortedMap<K, V> {
  @override
  final Ordering ordering;

  final TreeSet<_MapEntryWithIndex<K, V>> _sortedEntries;
  final TreeMap<K, V> _map;

  _SortedMap._(this.ordering, TreeSet<_MapEntryWithIndex<K, V>>? sortedPairs,
      TreeMap<K, V>? map)
      : _sortedEntries = sortedPairs ??
            TreeSet(comparator: (a, b) => Comparable.compare(a.index, b.index)),
        _map = map ?? TreeMap();

  @override
  bool containsKey(Object? key) => _map.containsKey(key);

  @override
  Iterable<K> get keys => _sortedEntries.map<K>((p) => p.key);

  @override
  Iterable<V> get values => _sortedEntries.map<V>((p) => p.value);

  @override
  Iterable<MapEntry<K, V>> get entries => _sortedEntries;

  @override
  SortedMap<K, V> clone() => _SortedMap<K, V>._(
      ordering,
      TreeSet(comparator: (a, b) => Comparable.compare(a.index, b.index))
        ..addAll(_sortedEntries),
      TreeMap<K, V>.from(_map));

  @override
  V? operator [](Object? key) => _map[key as K];

  @override
  void addAll(Map<K, V> other) {
    if (other is _SortedMap<K, V> &&
        other.ordering == ordering &&
        this is! FilteredMap) {
      _sortedEntries.addAll(other._sortedEntries);
      _map.addAll(other._map);
      return;
    }
    super.addAll(other);
  }

  @override
  void operator []=(K key, V value) {
    var entry = _entryForKey(key);
    if (entry != null) _sortedEntries.remove(entry);
    _addEntry(key, value);
  }

  @override
  bool get isEmpty => _map.isEmpty;

  void _addEntry(K key, V value) {
    _map[key] = value;
    _sortedEntries.add(ordering.mapEntry(key, value));
  }

  @override
  void clear() {
    _map.clear();
    _sortedEntries.clear();
  }

  @override
  V? remove(Object? key) {
    if (!_map.containsKey(key)) return null;
    _sortedEntries.remove(_entryForKey(key as K?));
    return _map.remove(key);
  }

  @override
  K lastKeyBefore(K key, {K Function()? orElse}) {
    if (!_map.containsKey(key)) {
      throw StateError('No such key $key in collection');
    }
    var entry = _entryForKey(key)!;
    var it = _sortedEntries.fromIterator(entry, reversed: true);
    bool hasMore;
    while ((hasMore = it.moveNext()) && it.current.index == entry.index) {}

    if (!hasMore) {
      if (orElse != null) return orElse();
      throw StateError('No element.');
    }
    return it.current.key;
  }

  @override
  K firstKeyAfter(K key, {K Function()? orElse}) {
    if (!_map.containsKey(key)) {
      throw StateError('No such key $key in collection');
    }
    var pair = _entryForKey(key)!;
    var it = _sortedEntries.fromIterator(pair);
    bool hasMore;
    while ((hasMore = it.moveNext()) && it.current.index == pair.index) {}
    if (!hasMore) {
      if (orElse != null) return orElse();
      throw StateError('No element.');
    }
    return it.current.key;
  }

  @override
  Iterable<K> subkeys(
      {required Pair start,
      required Pair end,
      int? limit,
      bool reversed = false}) {
    var it = _subkeys(start, end, limit, reversed);
    if (reversed) return it.toList().reversed;
    return it;
  }

  Iterable<K> _subkeys(Pair start, Pair end, int? limit, bool reversed) sync* {
    var from = reversed ? end : start;
    var it = _sortedEntries.fromIterator(_MapEntryWithIndex.indexOnly(from),
        reversed: reversed);
    var count = 0;
    while (it.moveNext() && (limit == null || count++ < limit)) {
      var cmp = Comparable.compare(it.current.index, reversed ? start : end);
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
  V remove(Object? key) =>
      throw UnsupportedError('Map view cannot be modified.');
}
