// Copyright (c) 2016, Rik Bellens. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.
part of sortedmap;

/// Defines an ordering for a key/value pairs.
class Ordering {
  /// Creates an ordering by key.
  const factory Ordering.byKey() = _OrderingByKey;

  /// Creates an ordering by value.
  const Ordering.byValue();

  /// Creates an ordering by mapped values.
  factory Ordering.byMappedValue(Comparable Function(dynamic v) mapper) =>
      _OrderingByMappedValue(mapper);

  /// Maps a key and value to a pair with the desired natural order.
  ///
  /// Pairs will be ordered according to their `compareTo` method, i.e. first on
  /// value, then on key.
  Pair mapKeyValue<K, V>(Comparable key, dynamic value) =>
      Pair(key, mapValue(value));

  /// Maps a value to a Comparable defining the desired order.
  ///
  /// Override this method to define other orderings.
  Comparable mapValue(dynamic value) => value as Comparable;
}

typedef _Mapper<V> = Comparable Function(V v);

class _OrderingByMappedValue<K extends Comparable, V> extends Ordering {
  final _Mapper<V> mapper;
  const _OrderingByMappedValue(this.mapper) : super.byValue();

  @override
  Comparable mapValue(dynamic value) => mapper(value);
}

class _OrderingByKey extends Ordering {
  const _OrderingByKey() : super.byValue();

  @override
  Comparable mapValue(dynamic value) => 0;
}
