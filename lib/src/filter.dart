// Copyright (c) 2016, Rik Bellens. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

part of sortedmap;

/// The signature of a generic predicate function.
///
/// A [Predicate] function returns true if [v] matches the predicate.
///
typedef bool Predicate<T>(T v);

/// Defines a filter that can be used with [FilteredMap] objects.
///
/// A [Filter] defines:
///
/// * an ordering through the [compare] method
/// * a predicate through the [isValid] method
/// * a [limit] of the number of elements
///
/// The [reverse] property determines if the limit is applied from the start or
/// from the end.
///
class Filter<T> {

  final Comparator<T> _compare;
  final Predicate<T> _isValid;

  /// The number of elements allowed in a set.
  final int limit;

  /// Determines if the limit is applied from the start or from the end.
  final bool reverse;

  /// Creates a new [Filter] instance.
  const Filter({Comparator<T> compare, Predicate<T> isValid, this.limit,
  this.reverse: false}) : _compare = compare, _isValid = isValid;

  /// Compares two items.
  int compare(T a, T b) => _compare==null ? Comparable.compare(a as Comparable,b as Comparable) : _compare(a,b);

  /// Checks if an item is valid.
  bool isValid(T v) => (_isValid ?? (_)=>true)(v);

  @override
  int get hashCode => quiver.hash4(compare, isValid, limit, reverse);

  @override
  bool operator==(dynamic other) => other is Filter&&other.compare==compare
      &&other.isValid==isValid&&other.limit==limit&&other.reverse==reverse;
}

/// A predicate function that accepts all values between (including) a lower and
/// upper limit.
class Range<T> extends Function {

  /// The lower limit.
  final T start;

  /// The upper limit.
  final T end;

  final Comparator<T> _comparator;

  /// Creates a new range wit lower limit [start] and upper limit [end].
  /// An optional [comparator] function defines the ordering.
  Range(this.start, this.end, [this._comparator]);

  /// The [Comparator] function that defines the ordering.
  Comparator<T> get comparator => (_comparator ?? Comparable.compare as Comparator<T>);

  /// Checks if a [value] is between the lower and upper limit.
  bool call(T value) => (start==null || comparator(start, value) <= 0)
      && (end==null || comparator(value, end) <=0);

  @override
  int get hashCode => quiver.hash3(start,end,comparator);

  @override
  bool operator==(dynamic other) => other is Range&&other.start==start
      &&other.end==end&&other.comparator==comparator;
}

