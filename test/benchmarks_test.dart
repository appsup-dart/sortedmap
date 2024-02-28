import 'dart:async';

import 'package:sortedmap/sortedmap.dart';
import 'package:sortedmap/src/treeset.dart';
import 'package:test/test.dart';
import 'package:quiver/collection.dart' as quiver;

import 'util/benchmark.dart';

Future<void> main() async {
  var n = 10000;

  final data = {for (var i = 0; i < n; i++) 'key$i': i.hashCode};

  var set = TreeSet()..addAll(data.values);
  var qSet = quiver.TreeSet<int>()..addAll(data.values);
  var setView = TreeSetView(
      baseMap: set as AvlTreeSet,
      startAt: set.elementAt(n ~/ 4),
      startInclusive: false,
      endAt: set.elementAt(3 * n ~/ 4),
      endInclusive: true);

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

    benchmark('of TreeSet', () async {
      set.length;
    });

    benchmark('of quiver.TreeSet', () async {
      qSet.length;
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

    benchmark('of TreeSet', () async {
      set.forEach((e) {});
    });

    benchmark('of quiver.TreeSet', () async {
      qSet.forEach((e) {});
    });
  });

  group('addAll', () {
    var map = SortedMap.from(data, const Ordering.byValue());
    var view = map.filteredMapView(
        start: Pair.min(), end: Pair.max(), limit: n ~/ 2, reversed: true);
    var values = data.values.toList();

    benchmark('to empty SortedMap', () async {
      SortedMap(const Ordering.byValue()).addAll(data);
    });

    benchmark('to empty SortedMap from SortedMap', () async {
      SortedMap(const Ordering.byValue()).addAll(map);
    });

    benchmark('to empty SortedMap from FilteredMapView', () async {
      SortedMap(const Ordering.byValue()).addAll(view);
    });

    benchmark('to empty TreeSet', () async {
      TreeSet().addAll(values);
    });

    benchmark('to empty TreeSet from TreeSet', () async {
      TreeSet().addAll(set);
    });

    benchmark('to empty quiver.TreeSet', () async {
      quiver.TreeSet().addAll(values);
    });
  });

  group('elementAt', () {
    benchmark('of TreeSet', () {
      set.elementAt(n ~/ 3);
    });

    late TreeSetView setView;
    setUpEach(() {
      setView = TreeSetView(
          baseMap: set,
          startAt: set.elementAt(n ~/ 4),
          startInclusive: false,
          endAt: set.elementAt(3 * n ~/ 4),
          endInclusive: true);
    });
    benchmark('of TreeSetView', () {
      setView.elementAt(n ~/ 3);
    });

    benchmark('of quiver.TreeSet', () {
      qSet.elementAt(n ~/ 3);
    });
  });

  group('indexOf', () {
    var e = set.elementAt(n ~/ 3);
    benchmark('of TreeSet', () {
      set.indexOf(e);
    });
    benchmark('of TreeSetView', () {
      setView.indexOf(e);
    });
  });

  group('first', () {
    benchmark('of TreeSet', () {
      set.first;
    });

    benchmark('of TreeSetView', () {
      setView.first;
    });

    benchmark('of quiver.TreeSet', () {
      qSet.first;
    });
  });

  group('last', () {
    benchmark('of TreeSet', () {
      set.last;
    });

    benchmark('of TreeSetView', () {
      setView.last;
    });

    benchmark('of quiver.TreeSet', () {
      qSet.last;
    });
  });
}
