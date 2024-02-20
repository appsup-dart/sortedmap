import 'dart:async';

import 'package:sortedmap/sortedmap.dart';
import 'package:test/test.dart';

import 'util/benchmark.dart';

Future<void> main() async {
  group('FilteredMap', () {
    var n = 10000;
    late FilteredMap map;
    late FilteredMapView view;
    setUpAll(() {
      map = SortedMap(const Ordering.byValue()).filteredMap(
          start: Pair.min(), end: Pair.max(), limit: n, reversed: true);
      map.addAll({for (var i = 0; i < n; i++) 'key$i': i.hashCode});
      view = map.filteredMapView(
          start: Pair.min(), end: Pair.max(), limit: n ~/ 2, reversed: true);
    });
    benchmark('FilteredMap.completeInterval', () async {
      map.completeInterval;
    });
    benchmark('FilteredMapView.completeInterval', () async {
      view.completeInterval;
    });
  });
}
