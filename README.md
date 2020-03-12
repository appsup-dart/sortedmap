
Contains a `SortedMap` and `FilteredMap` class, which hold a map of objects that can be ordered relative to each other.

Unlike `SplayTreeMap` the objects can be ordered on both key and value or a combination of both.

The `FilteredMap` also allows to specify an `isValid` function on key/value pairs and limit the number of objects 
allowed in the map.


## SortedMap

A simple usage example:

    import 'package:sortedmap/sortedmap.dart';

    main() {
      var map = new SortedMap(Ordering.byValue());
      
      map.addAll({
        "a": 3,
        "b": 2,
        "c": 4,
        "d": 1
      });
      
      print(map.lastKeyBefore("c")); // a
      print(map.firstKeyAfter("d")); // b
      
    }

## FilteredMap

A simple usage example:

    import 'package:sortedmap/sortedmap.dart';

    main() {
      var map = new FilteredMap(new Filter(
        compare: (Pair a, Pair b)=>Comparable.compare(a.value, b.value),
        isValid: (Pair v) => v.key!="b",
        limit: 2));
      
      map.addAll({
        "a": 3,
        "b": 2,
        "c": 4,
        "d": 1
      });
      
      print(map.keys); // (d, a)
      
    }

## Features and bugs

Please file feature requests and bugs at the [issue tracker][tracker].

[tracker]: https://github.com/appsup-dart/sortedmap/issues
