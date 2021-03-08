// @dart=2.9

import 'package:sortedmap/sortedmap.dart';

void main() {
  var map = SortedMap(Ordering.byValue());

  map.addAll({'a': 3, 'b': 2, 'c': 4, 'd': 1});

  print(map.lastKeyBefore('c')); // a
  print(map.firstKeyAfter('d')); // b
}
