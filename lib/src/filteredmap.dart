// Copyright (c) 2016, Rik Bellens. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

part of sortedmap;

/// A [Map] of objects that can be ordered relative to each other and where
/// key/value pairs are filtered before adding them to the map.
abstract class FilteredMap<K extends Comparable, V> implements SortedMap<K, V> {
  /// Creates a [FilteredMap] instance with an optional [Filter] definition
  /// [filter].
  factory FilteredMap([Filter<K, V> filter]) =>
      _FilteredMap._(filter ?? Filter(), null, null);

  /// The filter to be used to order and filter items.
  Filter<K, V> get filter;

  /// The interval within which no values were filtered out based on the
  /// filter's `limit` or `validInterval`.
  KeyValueInterval get completeInterval {
    var keys = this.keys;
    var filterInterval = filter.validInterval;
    if (filter.limit == null || keys.length < filter.limit) {
      return filterInterval;
    }
    if (filter.limit == 0) return null;

    if (filter.reversed) {
      return KeyValueInterval.fromPairs(
          _pairForKey(keys.first), filterInterval.end);
    } else {
      return KeyValueInterval.fromPairs(
          filterInterval.start, _pairForKey(keys.last));
    }
  }
}

class _FilteredMap<K extends Comparable, V> extends _SortedMap<K, V>
    with FilteredMap<K, V> {
  @override
  final Filter<K, V> filter;

  _FilteredMap._(Filter<K, V> filter,
      TreeSet<Pair<Comparable, Comparable>> sortedPairs, TreeMap<K, V> map)
      : filter = filter,
        super._(filter.ordering, sortedPairs, map);

  @override
  FilteredMap<K, V> clone() => _FilteredMap<K, V>._(
      filter, TreeSet()..addAll(_sortedPairs), TreeMap.from(_map));

  @override
  void _addPair(K key, V value) {
    if (!filter.validInterval.containsPoint(ordering.mapKeyValue(key, value))) {
      return;
    }
    super._addPair(key, value);
    if (filter.limit != null && length > filter.limit) {
      var toDel = filter.reversed
          ? _sortedPairs.take(length - filter.limit)
          : _sortedPairs.skip(filter.limit);
      toDel.toList().forEach((p) => remove(p.key));
    }
  }
}

/// A filtered view on a [SortedMap] or [FilteredMap].
class FilteredMapView<K extends Comparable, V> extends MapBase<K, V>
    with SortedMap<K, V>, FilteredMap<K, V>, UnmodifiableSortedMap<K, V> {
  final SortedMap<K, V> _baseMap;

  @override
  final Filter<K, V> filter;

  /// Creates a FilteredMapView from a SortedMap.
  FilteredMapView(this._baseMap,
      {Pair<Comparable, Comparable> start,
      Pair<Comparable, Comparable> end,
      int limit,
      bool reversed = false})
      : filter = Filter(
            validInterval: KeyValueInterval.fromPairs(start, end),
            limit: limit,
            reversed: reversed,
            ordering: _baseMap.ordering);

  @override
  V operator [](Object key) => _baseMap[_pairForKey(key)?.key];

  @override
  Pair<Comparable, Comparable> _pairForKey(Object key, [bool checked = true]) {
    var value = _baseMap[key];
    var p = ordering.mapKeyValue(key as K, value);
    if (checked && !_containsPair(p)) return null;
    return p;
  }

  bool _containsPair(Pair<Comparable, Comparable> pair) =>
      _effectiveInterval.containsPoint(pair);

  KeyValueInterval get _effectiveInterval {
    var keys = this.keys;
    return KeyValueInterval.fromPairs(
        _pairForKey(keys.first, false), _pairForKey(keys.last, false));
  }

  @override
  SortedMap<K, V> clone() => FilteredMap(filter)..addAll(_baseMap);

  @override
  K firstKeyAfter(K key) => _pairForKey(_baseMap.firstKeyAfter(key))?.key;

  @override
  K lastKeyBefore(K key) => _pairForKey(_baseMap.lastKeyBefore(key))?.key;

  @override
  Iterable<K> get keys => _baseMap.subkeys(
      start: filter.validInterval.start,
      end: filter.validInterval.end,
      limit: filter.limit,
      reversed: filter.reversed);

  /// Returns true when the [completeInterval] is within the complete interval
  /// of the base map.
  bool get isComplete {
    if (_baseMap is! FilteredMap) return true;
    return (_baseMap as FilteredMap)
        .completeInterval
        .contains(completeInterval);
  }

  @override
  Ordering get ordering => _baseMap.ordering;

  @override
  Iterable<K> subkeys(
      {Pair<Comparable, Comparable> start,
      Pair<Comparable, Comparable> end,
      int limit,
      bool reversed = false}) {
    throw UnimplementedError();
  }
}
