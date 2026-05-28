@Tags(['benchmark'])
library;

import 'dart:math';

import 'package:sortedmap/sortedmap.dart';
import 'package:sortedmap/src/treeset.dart';
import 'package:test/test.dart';
import 'package:quiver/collection.dart' as quiver;

import 'package:benchmark_test/benchmark_test.dart';

void main() {
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
    });
    benchmark('of FilteredMap', () {
      map.completeInterval;
    });

    setUpEach(() {
      view = map.filteredMapView(
          start: Pair.min(), end: Pair.max(), limit: n ~/ 2, reversed: true);
    });
    benchmark('of FilteredMapView', () {
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
    });
    benchmark('of FilteredMap', () {
      map.length;
    });
    setUpEach(() {
      view = map.filteredMapView(
          start: Pair.min(), end: Pair.max(), limit: n ~/ 2, reversed: true);
    });
    benchmark('of FilteredMapView', () {
      view.length;
    });

    benchmark('of TreeSet', () {
      set.length;
    });

    benchmark('of quiver.TreeSet', () {
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
    });
    benchmark('of FilteredMap', () {
      map.forEach((key, value) {});
    });
    setUpEach(() {
      view = map.filteredMapView(
          start: Pair.min(), end: Pair.max(), limit: n ~/ 2, reversed: true);
    });
    benchmark('of FilteredMapView', () {
      view.forEach((key, value) {});
    });

    void noop(dynamic _) {}

    benchmark('of TreeSet', () {
      set.forEach(noop);
    });

    benchmark('of quiver.TreeSet', () {
      qSet.forEach(noop);
    });
  });

  group('addAll', () {
    var map = SortedMap.from(data, const Ordering.byValue());
    var values = data.values.toList();

    late FilteredMapView view;
    setUpEach(() {
      view = map.filteredMapView(
          start: Pair.min(), end: Pair.max(), limit: n ~/ 2, reversed: true);
    });
    benchmark('to empty SortedMap', () {
      SortedMap(const Ordering.byValue()).addAll(data);
    });

    benchmark('to empty SortedMap, ordered by key', () {
      SortedMap(const Ordering.byKey()).addAll(data);
    });

    benchmark('to empty SortedMap from SortedMap', () {
      SortedMap(const Ordering.byValue()).addAll(map);
    });

    benchmark('to empty SortedMap from FilteredMapView', () {
      SortedMap(const Ordering.byValue()).addAll(view);
    });

    benchmark('to empty FilteredMap', () {
      SortedMap(const Ordering.byValue())
          .filteredMap(start: Pair.min(), end: Pair.max(), limit: n ~/ 3)
          .addAll(data);
    });

    benchmark('to empty TreeSet', () {
      TreeSet().addAll(values);
    });

    benchmark('to empty TreeSet from TreeSet', () {
      TreeSet().addAll(set);
    });

    benchmark('to empty quiver.TreeSet', () {
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

  group('operator []=', () {
    var random = Random(DateTime.now().millisecondsSinceEpoch);
    final data = {for (var i = 0; i < n; i++) 'key$i': random.nextDouble()};

    group('with order by value', () {
      late SortedMap sourceMap, map;
      late double newValue, oldValue;
      setUp(() {
        sourceMap = SortedMap(const Ordering.byValue())..addAll(data);
        oldValue = sourceMap['key${n ~/ 2}']!;
      });

      setUpEach(() {
        map = sourceMap.clone();
        newValue = random.nextDouble();
      });

      benchmark('of SortedMap, replacing existing value', () {
        map['key${n ~/ 2}'] = newValue;
      });

      benchmark('of SortedMap, replacing existing value with same value', () {
        map['key${n ~/ 2}'] = oldValue;
      });

      benchmark('of SortedMap, adding new value', () {
        map['key$n'] = newValue;
      });
    });

    group('with order by mapped value', () {
      late SortedMap sourceMap, map;
      late Map<String, dynamic> newValue, oldValue, sameOrderValue;
      setUp(() {
        sourceMap = SortedMap(Ordering.byMappedValue((v) => v['order']))
          ..addAll({
            for (var k in data.keys) k: {'value': data[k]!, 'order': data[k]!}
          });
        oldValue = sourceMap['key${n ~/ 2}']!;
      });

      setUpEach(() {
        map = sourceMap.clone();
        newValue = {'value': random.nextDouble(), 'order': random.nextDouble()};
        sameOrderValue = {
          'value': random.nextDouble(),
          'order': oldValue['order']
        };
      });

      benchmark('of SortedMap, replacing existing value', () {
        map['key${n ~/ 2}'] = newValue;
      });

      benchmark('of SortedMap, replacing existing value with same value', () {
        map['key${n ~/ 2}'] = oldValue;
      });

      benchmark('of SortedMap, replacing existing value with same order value',
          () {
        map['key${n ~/ 2}'] = sameOrderValue;
      });

      benchmark('of SortedMap, adding new value', () {
        map['key$n'] = newValue;
      });
    });

    group('with order by key', () {
      late SortedMap sourceMap, map;
      late double newValue, oldValue;
      setUp(() {
        sourceMap = SortedMap(const Ordering.byKey())..addAll(data);
        oldValue = sourceMap['key${n ~/ 2}']!;
      });

      setUpEach(() {
        map = sourceMap.clone();
        newValue = random.nextDouble();
      });

      benchmark('of SortedMap, replacing existing value', () {
        map['key${n ~/ 2}'] = newValue;
      });

      benchmark('of SortedMap, replacing existing value with same value', () {
        map['key${n ~/ 2}'] = oldValue;
      });

      benchmark('of SortedMap, adding new value', () {
        map['key$n'] = newValue;
      });
    });
  });
}
