// Copyright (c) 2016, Rik Bellens. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

part of sortedmap;

typedef bool Predicate<T>(T v);
class Filter<T> {

  final Comparator<T> _compare;
  final Predicate<T> _isValid;
  final int limit;
  final bool reverse;

  const Filter({Comparator<T> compare, Predicate<T> isValid, this.limit,
  this.reverse: false}) : _compare = compare, _isValid = isValid;

  int compare(T a, T b) => _compare==null ? Comparable.compare(a as Comparable,b as Comparable) : _compare(a,b);
  bool isValid(T v) => (_isValid ?? (_)=>true)(v);

  @override
  int get hashCode => quiver.hash4(compare, isValid, limit, reverse);

  @override
  bool operator==(other) => other is Filter&&other.compare==compare
      &&other.isValid==isValid&&other.limit==limit&&other.reverse==reverse;
}

class Range<T> extends Function {

  final T start;
  final T end;
  final Comparator<T> comparator;

  Range(this.start, this.end, [this.comparator]);

  bool call(T value) => (start==null || comparator(start, value) <= 0)
      && (end==null || comparator(value, end) <=0);

  @override
  int get hashCode => quiver.hash3(start,end,comparator);

  @override
  bool operator==(other) => other is Range&&other.start==start
      &&other.end==end&&other.comparator==comparator;
}

