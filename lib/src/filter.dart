// Copyright (c) 2016, Rik Bellens. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.



part of sortedmap;

/// Defines a filter that can be used with [FilteredMap] objects.
///
/// A [Filter] defines:
///
/// * an [ordering]
/// * a [limit] of the number of elements
/// * a [validInterval], i.e. an upper and lower limit (inclusive) of valid values.
///
/// The [reversed] property determines if the limit is applied from the start or
/// from the end.
///
class Filter<K extends Comparable, V> {
  /// The ordering.
  final Ordering ordering;

  /// The number of elements allowed in a set.
  final int? limit;

  /// Determines if the limit is applied from the start or from the end.
  final bool reversed;

  /// The interval of acceptable values.
  final KeyValueInterval validInterval;

  /// Creates a [Filter] instance.
  const Filter(
      {this.ordering = const Ordering.byKey(),
      this.limit,
      this.reversed = false,
      this.validInterval = const KeyValueInterval()});

  @override
  int get hashCode => quiver.hash4(ordering, limit, reversed, validInterval);

  @override
  bool operator ==(dynamic other) =>
      other is Filter &&
      other.ordering == ordering &&
      other.limit == limit &&
      other.reversed == reversed &&
      other.validInterval == validInterval;
}

/// Defines an interval.
class KeyValueInterval {
  final Comparable? _startKey;
  final Comparable? _startValue;
  final Comparable? _endKey;
  final Comparable? _endValue;

  /// Creates a interval from individual keys and values.
  const KeyValueInterval(
      [this._startKey, this._startValue, this._endKey, this._endValue]);

  /// Creates a interval from key/value pairs.
  factory KeyValueInterval.fromPairs(Pair start, Pair end) =>
      KeyValueInterval(start.key, start.value, end.key, end.value);

  /// The lower limit.
  Pair get start => Pair.min(_startKey, _startValue);

  /// The upper limit.
  Pair get end => Pair.max(_endKey, _endValue);

  /// Returns true if this interval is unbounded.
  bool get isUnlimited =>
      start.key == null &&
      start.value == null &&
      end.key == null &&
      end.value == null;

  /// Creates a interval replacing the lower limit.
  KeyValueInterval startAt(Comparable key, Comparable value) =>
      KeyValueInterval(key, value, _endKey, _endValue);

  /// Creates a interval replacing the upper limit.
  KeyValueInterval endAt(Comparable key, Comparable value) =>
      KeyValueInterval(_startKey, _startValue, key, value);

  /// Returns true if `point` is within the bounds (inclusive) of this interval.
  bool containsPoint(Pair p) =>
      _isAfterStart(p.key, p.value) && _isBeforeEnd(p.key, p.value);

  bool _isAfterStart(Comparable? key, Comparable? value) {
    if (start.value == null) {
      if (value != null) return true;
    } else {
      if (value == null) return false;
      var cmp = Comparable.compare(start.value!, value);
      if (cmp > 0) return false;
      if (cmp < 0) return true;
    }
    if (start.key == null) return true;
    if (key == null) return false;
    return (Comparable.compare(start.key!, key)) <= 0;
  }

  bool _isBeforeEnd(Comparable? key, Comparable? value) {
    if (end.value == null) {
      if (value != null) return true;
    } else {
      if (value == null) return false;
      var cmp = Comparable.compare(end.value!, value);
      if (cmp > 0) return true;
      if (cmp < 0) return false;
    }
    if (end.key == null) return true;
    if (key == null) return false;
    return (Comparable.compare(end.key!, key)) >= 0;
  }

  /// Returns true if this interval contains the interval `other`.
  bool contains(KeyValueInterval other) =>
      containsPoint(other.start) && containsPoint(other.end);

  @override
  int get hashCode => quiver.hash2(start, end);

  @override
  bool operator ==(dynamic other) =>
      other is KeyValueInterval && other.start == start && other.end == end;

  @override
  String toString() => 'KeyValueInterval[$start,$end]';
}
