// Copyright (c) 2016, Rik Bellens. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.
part of sortedmap;

/// A [Pair] represents a key/value pair.
class Pair<K, V> implements Comparable<Pair<K, V>> {
  /// The key.
  final K key;

  /// The value.
  final V value;

  /// When true, null values for key and/or value are interpreted as the maximum
  /// possible value.
  final bool isMax;

  /// When true, null values for key and/or value are interpreted as the minimum
  /// possible value.
  final bool isMin;

  /// Creates a key/value pair.
  const Pair(this.key, this.value)
      : isMax = false,
        isMin = false;

  /// Creates a key/value pair, with null values for key and/or value
  /// interpreted as the maximum possible value.
  Pair.max([this.key, this.value])
      : isMax = key == null || value == null,
        isMin = false;

  /// Creates a key/value pair, with null values for key and/or value
  /// interpreted as the minimum possible value.
  Pair.min([this.key, this.value])
      : isMax = false,
        isMin = key == null || value == null;

  @override
  int get hashCode => quiver.hash4(key, value, isMax, isMin);

  @override
  bool operator ==(dynamic other) =>
      other is Pair &&
      other.key == key &&
      other.value == value &&
      other.isMax == isMax &&
      other.isMin == isMin;

  int _compareValue(Pair<K, V> other) {
    if (value == null) {
      if (other.value == null) {
        if (isMax) return other.isMax ? 0 : 1;
        if (isMin) return other.isMin ? 0 : -1;
        if (other.isMax) return -1;
        if (other.isMin) return 1;
        return 0;
      }
      return isMax ? 1 : isMin ? -1 : throw ArgumentError.notNull();
    }
    if (other.value == null) {
      return -other._compareValue(this);
    }
    return Comparable.compare(value as Comparable, other.value as Comparable);
  }

  int _compareKey(Pair<K, V> other) {
    if (key == null) {
      if (other.key == null) {
        if (isMax) return other.isMax ? 0 : 1;
        if (isMin) return other.isMin ? 0 : -1;
        if (other.isMax) return -1;
        if (other.isMin) return 1;
        return 0;
      }
      return isMax ? 1 : isMin ? -1 : throw ArgumentError.notNull();
    }
    if (other.key == null) {
      return -other._compareKey(this);
    }
    return Comparable.compare(key as Comparable, other.key as Comparable);
  }

  @override
  int compareTo(Pair<K, V> other) {
    var cmp = _compareValue(other);
    if (cmp != 0) return cmp;
    return _compareKey(other);
  }

  @override
  String toString() => 'Pair[$key,$value]';
}
