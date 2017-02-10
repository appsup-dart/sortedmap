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
class FilteredMap<K,V> extends SortedMap<K,V> {

  /// The filter to be used to order and filter items.
  final Filter<Pair<K,V>> filter;

  /// Creates a new [FilteredMap] instance with an optional [Filter] definition
  /// [filter].
  FilteredMap([Filter<Pair<K,V>> filter]) : filter = filter,
        super(filter.compare);

  FilteredMap._(Filter<Pair<K,V>> filter, SplayTreeSet<Pair<K,V>> sortedPairs, Map<K,V> map) :
        filter = filter, super._(filter.compare, sortedPairs, map);


  @override
  FilteredMap<K,V> clone() => new FilteredMap._(this.filter, _sortedPairs.toSet(), new Map.from(_map));


  @override
  void _addPair(Pair<K,V> p) {
    if (filter.isValid!=null&&!filter.isValid(p)) return;
    super._addPair(p);
  }


  @override
  Iterable<Pair<K,V>> get pairs {
    if (filter.limit==null) return super.pairs;
    if (filter.reverse) {
      var skip = _sortedPairs.length - filter.limit;
      return _sortedPairs.skip(skip>0 ? skip : 0);
    } else {
      return _sortedPairs.take(filter.limit);
    }
  }

  @override
  V operator [](Object key) => containsKey(key) ? _map[key] : null;

}
