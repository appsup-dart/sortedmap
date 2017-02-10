// Copyright (c) 2016, Rik Bellens. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'package:sortedmap/sortedmap.dart';
import 'package:test/test.dart';


void main() {
  group('SortedMap', () {

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
      var map = new SortedMap((a,b)=>Comparable.compare(a.value, b.value));

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
          isValid: (v)=>v.value>=2&&v.value<=3
      ));

      map.addAll({
        "b": 1,
        "e": 2,
        "a": 3,
        "c": 4,
        "d": 5
      });

      expect(map.keys, ["a","e"]);
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

      map.remove("b");
      expect(map.keys, ["a","c","d"]);
    });
    test('limit reverse', () {
      var map = new FilteredMap(new Filter(
          limit: 3,
          reverse: true,
          compare: (a,b)=>Comparable.compare(a.value,b.value)
      ));

      map.addAll({
        "b": 1,
        "e": 2,
        "a": 3,
        "c": 4,
        "d": 5
      });

      expect(map.keys, ["a","c","d"]);

      map.remove("c");
      expect(map.keys, ["e","a","d"]);
    });

  });
}