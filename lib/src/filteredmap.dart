// Copyright (c) 2016, Rik Bellens. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

part of sortedmap;

/// A [Map] of objects that can be ordered relative to each other and where
/// key/value pairs are filtered before adding them to the map.
///
/// Key/value pairs of the map are compared using the `compare` function
/// passed in the constructor.
///
/// If the compare function is omitted, the objects are ordered by key which
/// is assumed to be [Comparable], and are compared using their
/// [Comparable.compareTo] method.
/// Non-comparable objects (including `null`) will not work as keys
/// in that case.
abstract class FilteredMap<K,V> implements SortedMap<K,V> {

  /// Creates a new [FilteredMap] instance with an optional [Filter] definition
  /// [filter].
  factory FilteredMap([Filter<Pair<K,V>> filter]) =>
      new _FilteredMap._(filter, null, null);



  /// The filter to be used to order and filter items.
  Filter<Pair<K,V>> get filter;


}


class _FilteredMap<K,V> extends _SortedMap<K,V> implements FilteredMap<K,V> {

  @override
  final Filter<Pair<K,V>> filter;

  _FilteredMap._(Filter<Pair<K,V>> filter, TreeSet<Pair<K,V>> sortedPairs, Map<K,V> map) :
        filter = filter, super._(filter.compare, sortedPairs, map);


  @override
  FilteredMap<K,V> clone() => new _FilteredMap._(this.filter, _sortedPairs.toSet(), new Map.from(_map));


  @override
  void _addPair(Pair<K,V> p) {
    if (filter.isValid!=null&&!filter.isValid(p)) return;
    super._addPair(p);
    if (filter.limit!=null&&length>filter.limit) {
      var toDel = filter.reverse ? _sortedPairs.take(length-filter.limit)
          : _sortedPairs.skip(filter.limit);
      toDel.toList().forEach((p)=>remove(p.key));
    }
  }

}
