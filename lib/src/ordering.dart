// Copyright (c) 2016, Rik Bellens. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.
part of sortedmap;

/// Defines an ordering for a key/value pairs.
class Ordering<K extends Comparable,V> {

  /// Creates an ordering by key.
  const factory Ordering.byKey() = _OrderingByKey<K,V>;

  /// Creates an ordering by value.
  const Ordering.byValue();

  /// Creates an ordering by mapped values.
  factory Ordering.byMappedValue(Comparable mapper(V v)) => new _OrderingByMappedValue(mapper);

  /// Maps a key and value to a pair with the desired natural order.
  ///
  /// Pairs will be ordered according to their `compareTo` method, i.e. first on
  /// value, then on key.
  Pair<K,Comparable> mapKeyValue(K key, V value) => new Pair(key,mapValue(value));

  /// Maps a value to a Comparable defining the desired order.
  ///
  /// Override this method to define other orderings.
  Comparable mapValue(V value) => value as Comparable;

}

typedef Comparable _Mapper<V>(V v);

class _OrderingByMappedValue<K extends Comparable,V> extends Ordering<K,V> {

  final _Mapper<V> mapper;
  const _OrderingByMappedValue(this.mapper) : super.byValue();

  @override
  Comparable mapValue(V value) => mapper(value);

}



class _OrderingByKey<K extends Comparable,V> extends Ordering<K,V> {
  const _OrderingByKey() : super.byValue();

  @override
  Comparable mapValue(V value) => 0;

}

