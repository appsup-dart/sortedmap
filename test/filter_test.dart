import 'package:sortedmap/sortedmap.dart';
import 'package:test/test.dart';

void main() {
  group('KeyValueInterval', () {
    group('KeyValueInterval.containsPoint', () {
      test('interval to infinity', () {
        var i = KeyValueInterval.fromPairs(Pair.min('a', 1), Pair.max());

        expect(i.containsPoint(Pair('a', 2)), isTrue);

        expect(i.containsPoint(Pair('a', 1)), isTrue);

        expect(i.containsPoint(Pair.min('a', null)), isFalse);
        expect(i.containsPoint(Pair.max('a', null)), isTrue);

        expect(i.containsPoint(Pair.min()), isFalse);
        expect(i.containsPoint(Pair.max()), isTrue);
      });

      test('interval from -infinity', () {
        var i = KeyValueInterval.fromPairs(Pair.min(), Pair.max('a', 2));

        expect(i.containsPoint(Pair('a', 1)), isTrue);

        expect(i.containsPoint(Pair('a', 2)), isTrue);

        expect(i.containsPoint(Pair.min('a', null)), isTrue);
        expect(i.containsPoint(Pair.max('a', null)), isFalse);

        expect(i.containsPoint(Pair.min()), isTrue);
        expect(i.containsPoint(Pair.max()), isFalse);
      });
    });
  });
}
