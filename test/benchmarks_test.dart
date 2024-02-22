import 'dart:async';

import 'package:sortedmap/sortedmap.dart';
import 'package:sortedmap/src/treeset.dart';
import 'package:test/test.dart';

import 'util/benchmark.dart';

Future<void> main() async {
  var n = 10000;

  final data = {for (var i = 0; i < n; i++) 'key$i': i.hashCode};

  group('completeInterval', () {
    late FilteredMap map;
    late FilteredMapView view;
    setUpAll(() {
      map = SortedMap(const Ordering.byValue()).filteredMap(
          start: Pair.min(), end: Pair.max(), limit: n, reversed: true);
      map.addAll(data);
      view = map.filteredMapView(
          start: Pair.min(), end: Pair.max(), limit: n ~/ 2, reversed: true);
    });
    benchmark('of FilteredMap', () async {
      map.completeInterval;
    });
    benchmark('of FilteredMapView', () async {
      view.completeInterval;
    });
  });

  group('length', () {
    late FilteredMap map;
    late FilteredMapView view;
    setUpAll(() {
      map = SortedMap(const Ordering.byValue()).filteredMap(
          start: Pair.min(), end: Pair.max(), limit: n, reversed: true);
      map.addAll(data);
      view = map.filteredMapView(
          start: Pair.min(), end: Pair.max(), limit: n ~/ 2, reversed: true);
    });
    benchmark('of FilteredMap', () async {
      map.length;
    });
    benchmark('of FilteredMapView', () async {
      view.length;
    });
  });

  group('forEach', () {
    late FilteredMap map;
    late FilteredMapView view;
    setUpAll(() {
      map = SortedMap(const Ordering.byValue()).filteredMap(
          start: Pair.min(), end: Pair.max(), limit: n, reversed: true);
      map.addAll(data);
      view = map.filteredMapView(
          start: Pair.min(), end: Pair.max(), limit: n ~/ 2, reversed: true);
    });
    benchmark('of FilteredMap', () async {
      map.forEach((key, value) {});
    });
    benchmark('of FilteredMapView', () async {
      view.forEach((key, value) {});
    });
  });

  group('addAll', () {
    var map = SortedMap.from(data, const Ordering.byValue());
    var view = map.filteredMapView(
        start: Pair.min(), end: Pair.max(), limit: n ~/ 2, reversed: true);

    benchmark('to empty SortedMap', () async {
      SortedMap(const Ordering.byValue()).addAll(data);
    });

    benchmark('to empty SortedMap from SortedMap', () async {
      SortedMap(const Ordering.byValue()).addAll(map);
    });

    benchmark('to empty SortedMap from FilteredMapView', () async {
      SortedMap(const Ordering.byValue()).addAll(view);
    });
  });

  group('elementAt', () {
    var set = TreeSet()..addAll(data.values);
    benchmark('of TreeSet', () {
      set.elementAt(n ~/ 3);
    });
  });
}
