// Copyright (c) 2016, Rik Bellens. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'package:sortedmap/sortedmap.dart';
import 'package:test/test.dart';
import 'benchmark.dart';
import 'dart:math';

void main() {
  group('SortedMap', () {

    test('Add/remove', () {
      var map = new SortedMap();

      map.addAll({
        "b": 1,
        "e": 2,
        "a": 3,
        "c": 4
      });


      expect(map.containsKey("b"), isTrue);

      expect(map.containsKey("d"), isFalse);
      map["d"] = 5;
      expect(map.containsKey("d"), isTrue);
      map.remove("d");
      expect(map.containsKey("d"), isFalse);

    });


    test('Order by key', () {
      var map = new SortedMap();

      map.addAll({
        "b": 1,
        "e": 2,
        "a": 3,
        "c": 4
      });

      var keys = map.keys.toList();

      expect(keys.indexOf("a"), 0);
      expect(keys.indexOf("b"), 1);
      expect(keys.indexOf("c"), 2);
      expect(keys.indexOf("e"), 3);

      map["d"] = 5;
      keys = map.keys.toList();
      expect(keys.indexOf("d"), 3);
      expect(keys.indexOf("e"), 4);

      expect(map.lastKeyBefore("a"), null);
      expect(map.lastKeyBefore("b"), "a");
      expect(map.lastKeyBefore("c"), "b");
      expect(map.lastKeyBefore("d"), "c");
      expect(map.lastKeyBefore("e"), "d");

      map.remove("c");
      keys = map.keys.toList();
      expect(keys.indexOf("d"), 2);
      expect(keys.indexOf("e"), 3);
    });

    test('Order by value', () {
      var map = new SortedMap(const Ordering.byValue());

      map.addAll({
        "b": 1,
        "e": 2,
        "a": 3,
        "c": 4,
        "d": 5
      });
      var keys = map.keys.toList();
      expect(keys.indexOf("a"), 2);
      expect(keys.indexOf("b"), 0);
      expect(keys.indexOf("c"), 3);
      expect(keys.indexOf("d"), 4);
      expect(keys.indexOf("e"), 1);



    });

  });

  group('FilteredMap', () {
    test('isValid', () {
      var map = new FilteredMap(new Filter(
          ordering: const Ordering.byValue(),
          validInterval: new KeyValueInterval(null,2, null,3)));

      map.addAll({
        "b": 1,
        "e": 2,
        "a": 3,
        "c": 4,
        "d": 5
      });

      expect(map.keys, ["e","a"]);
    });
    test('limit', () {
      var map = new FilteredMap(new Filter(
          limit: 3
      ));

      map.addAll({
        "b": 1,
        "e": 2,
        "a": 3,
        "c": 4,
        "d": 5
      });

      expect(map.keys, ["a","b","c"]);
    });
    test('limit reverse', () {
      var map = new FilteredMap(new Filter(
          limit: 3,
          reversed: true,
          ordering: const Ordering.byValue()
      ));

      map.addAll({
        "b": 1,
        "e": 2,
        "a": 3,
        "c": 4,
        "d": 5
      });

      expect(map.keys, ["a","c","d"]);
    });

  });

  group('FilteredMapView', ()
  {
    test('completeInterval', () {
      var map = new SortedMap(const Ordering.byValue());
      map.addAll({
        "b": 1,
        "e": 2,
        "a": 3,
        "c": 4,
        "d": 5
      });

      var filteredMap = map.filteredMap(
          start: new Pair("a", 2), end: new Pair("z", 4));
      expect(filteredMap.completeInterval.start, new Pair("a", 2));
      expect(filteredMap.completeInterval.end, new Pair("z", 4));

      filteredMap = map.filteredMap(
          start: new Pair("a", 2), end: new Pair("z", 4), limit: 2);
      expect(filteredMap.completeInterval.start, new Pair("a", 2));
      expect(filteredMap.completeInterval.end, new Pair("a", 3));

      filteredMap = map.filteredMap(start: new Pair("a", 2),
          end: new Pair("z", 4),
          limit: 2,
          reversed: true);
      expect(filteredMap.completeInterval.start, new Pair("a", 3));
      expect(filteredMap.completeInterval.end, new Pair("z", 4));

      filteredMap =
          map.filteredMapView(start: new Pair("a", 2), end: new Pair("z", 4));
      expect(filteredMap.completeInterval.start, new Pair("a", 2));
      expect(filteredMap.completeInterval.end, new Pair("z", 4));

      filteredMap = map.filteredMapView(
          start: new Pair("a", 2), end: new Pair("z", 4), limit: 2);
      expect(filteredMap.completeInterval.start, new Pair("a", 2));
      expect(filteredMap.completeInterval.end, new Pair("a", 3));

      filteredMap = map.filteredMapView(start: new Pair("a", 2),
          end: new Pair("z", 4),
          limit: 2,
          reversed: true);
      expect(filteredMap.completeInterval.start, new Pair("a", 3));
      expect(filteredMap.completeInterval.end, new Pair("z", 4));
    });


    test('isComplete', () {
      var map = new SortedMap(const Ordering.byValue());
      map.addAll({
        "b": 1,
        "e": 2,
        "a": 3,
        "c": 4,
        "d": 5
      });

      var filteredMap = map.filteredMapView(
          start: new Pair("a", 2), end: new Pair("z", 4));
      expect(filteredMap.isComplete, true);

      filteredMap =
          map.filteredMap(start: new Pair("a", 2), end: new Pair("z", 4))
              .filteredMapView(start: new Pair("a", 1), end: new Pair("z", 4));
      expect(filteredMap.isComplete, false);

      filteredMap =
          map.filteredMap(start: new Pair("a", 2), end: new Pair("z", 4))
              .filteredMapView(start: new Pair("a", 3), end: new Pair("z", 5));
      expect(filteredMap.isComplete, false);

      filteredMap = map.filteredMap(
          start: new Pair("a", 2), end: new Pair("z", 4), limit: 1)
          .filteredMapView(start: new Pair("a", 2), end: new Pair("z", 4));
      expect(filteredMap.isComplete, false);

      filteredMap = map.filteredMap(
          start: new Pair("a", 2), end: new Pair("z", 4), limit: 5)
          .filteredMapView(start: new Pair("a", 2), end: new Pair("z", 4));
      expect(filteredMap.isComplete, true);

      filteredMap = map.filteredMap(start: new Pair("a", 2),
          end: new Pair("z", 4),
          limit: 1,
          reversed: true)
          .filteredMapView(start: new Pair("a", 2), end: new Pair("z", 4));
      expect(filteredMap.isComplete, false);

      filteredMap = map.filteredMap(start: new Pair("a", 2),
          end: new Pair("z", 4),
          limit: 2,
          reversed: true)
          .filteredMapView(start: new Pair("a", 4), end: new Pair("z", 4));
      expect(filteredMap.isComplete, true);

      filteredMap = map.filteredMap(start: new Pair("a", 2),
          end: new Pair("z", 4),
          limit: 2,
          reversed: true)
          .filteredMapView(start: new Pair("a", 4),
          end: new Pair("a", 3),
          limit: 1,
          reversed: true);
      expect(filteredMap.isComplete, true);
    });

    test('view', () {
      var map = new SortedMap(const Ordering.byValue());
      map.addAll({
        "b": 1,
        "e": 2,
        "a": 3,
        "c": 4,
        "d": 5
      });

      var view = map.filteredMapView(start: new Pair("a",2), end: new Pair("z",4), limit: 3, reversed: true);

      expect(view, {"e": 2, "a": 3, "c": 4});

      map["f"] = 4;
      expect(view, {"a": 3, "c": 4, "f": 4});
      map["ac"] = 4;
      expect(view, {"ac": 4, "c": 4, "f": 4});

      map.remove("c");
      expect(view, {"a": 3, "ac": 4, "f": 4});
    });
  });

  group('Performance benchmarks', () {

    Map<String,double> createRandomMap(Map<String,double> map, int count) {
      var random = new Random(1);
      for (var i = 0; i < count; i++) {
        map[random.nextDouble().toString()] = random.nextDouble();
      }
      return map;
    }

    benchmarkTest('Adding values', () {
      createRandomMap(new SortedMap(), 100);
    });

    var map = createRandomMap(new FilteredMap(), 1000);
    benchmarkTest('Cloning', () {
      (map as SortedMap).clone();
//      new SortedMap()..addAll(map);
    });
  });
}