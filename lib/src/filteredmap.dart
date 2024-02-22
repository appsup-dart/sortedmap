// Copyright (c) 2016, Rik Bellens. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

part of sortedmap;

/// A [Map] of objects that can be ordered relative to each other and where
/// key/value pairs are filtered before adding them to the map.
abstract class FilteredMap<K extends Comparable, V> implements SortedMap<K, V> {
  /// Creates a [FilteredMap] instance with an optional [Filter] definition
  /// [filter].
  factory FilteredMap([Filter<K, V>? filter]) =>
      _FilteredMap._(filter ?? Filter(), null, null);

  /// The filter to be used to order and filter items.
  Filter<K, V> get filter;

  /// The interval within which no values were filtered out based on the
  /// filter's `limit` or `validInterval`.
  KeyValueInterval get completeInterval {
    var filterInterval = filter.validInterval;
    if (filter.limit == null || length < filter.limit!) {
      return filterInterval;
    }
    if (filter.limit == 0) return KeyValueInterval();

    if (filter.reversed) {
      return KeyValueInterval.fromPairs(
          ordering.indexFromMapEntry(entries.first), filterInterval.end);
    } else {
      return KeyValueInterval.fromPairs(
          filterInterval.start, ordering.indexFromMapEntry(entries.last));
    }
  }
}

class _FilteredMap<K extends Comparable, V> extends _SortedMap<K, V>
    with FilteredMap<K, V> {
  @override
  final Filter<K, V> filter;

  _FilteredMap._(Filter<K, V> filter,
      TreeSet<_MapEntryWithIndex<K, V>>? sortedEntries, TreeMap<K, V>? map)
      : filter = filter,
        super._(filter.ordering, sortedEntries, map);

  @override
  FilteredMap<K, V> clone() => _FilteredMap<K, V>._(
      filter,
      TreeSet(comparator: _SortedMap._compare)..addAll(_sortedEntries),
      TreeMap.from(_map));

  @override
  void _addEntry(K key, V value) {
    if (!filter.validInterval.containsPoint(ordering.mapKeyValue(key, value))) {
      remove(key);
      return;
    }
    super._addEntry(key, value);
    if (filter.limit != null && length > filter.limit!) {
      var toDel = filter.reversed
          ? _sortedEntries.take(length - filter.limit!)
          : _sortedEntries.skip(filter.limit!);
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
      {required Pair start,
      required Pair end,
      int? limit,
      bool reversed = false})
      : filter = Filter(
            validInterval: KeyValueInterval.fromPairs(start, end),
            limit: limit,
            reversed: reversed,
            ordering: _baseMap.ordering);

  @override
  V? operator [](Object? key) {
    var k = _entryForKey(key)?.key;
    return k != null ? _baseMap[k] : null;
  }

  @override
  _MapEntryWithIndex<K, V>? _entryForKey(Object? key, [bool checked = true]) {
    V value = _baseMap[key as K]!;
    var p = ordering.mapEntry(key, value);
    if (checked && !_containsPair(p.index)) return null;
    return p;
  }

  bool _containsPair(Pair pair) => _effectiveInterval.containsPoint(pair);

  KeyValueInterval get _effectiveInterval {
    var keys = this.keys;
    return KeyValueInterval.fromPairs(_entryForKey(keys.first, false)!.index,
        _entryForKey(keys.last, false)!.index);
  }

  @override
  SortedMap<K, V> clone() => FilteredMap(filter)..addAll(_baseMap);

  @override
  K firstKeyAfter(K key, {K Function()? orElse}) =>
      _entryForKey(_baseMap.firstKeyAfter(key, orElse: orElse))!.key;

  @override
  K lastKeyBefore(K key, {K Function()? orElse}) =>
      _entryForKey(_baseMap.lastKeyBefore(key, orElse: orElse))!.key;

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
      {required Pair start,
      required Pair end,
      int? limit,
      bool reversed = false}) {
    throw UnimplementedError();
  }

  @override
  int get length {
    var b = _baseMap;
    if (b is _SortedMap<K, V>) {
      var e = (b._sortedEntries as AvlTreeSet<_MapEntryWithIndex<K, V>>)
          .countUntil(_MapEntryWithIndex.indexOnly(filter.validInterval.end),
              inclusive: true);
      var s = (b._sortedEntries as AvlTreeSet<_MapEntryWithIndex<K, V>>)
          .countUntil(_MapEntryWithIndex.indexOnly(filter.validInterval.start),
              inclusive: false);
      var total = e - s;
      return filter.limit == null ? total : min(total, filter.limit!);
    }
    return super.length;
  }
}
