import 'package:quiver/collection.dart' as quiver;
import 'package:sortedmap/src/treeset.dart';
import 'package:test/test.dart';
import 'dart:math';

void main() {
  Set<double> createRandomSet(Set<double> set, int count) {
    var random = Random(1);
    for (var i = 0; i < count; i++) {
      set.add(random.nextDouble());
    }
    return set;
  }

  test('compare', () {
    var set1 = createRandomSet(TreeSet(), 100);
    var set2 = createRandomSet(quiver.TreeSet(), 100);

    expect(set1.toList(), set2.toList());
  });

  test('iterator', () {
    var set1 = TreeSet()..addAll(Iterable.generate(10, (i) => i));
    //var set1 = quiver.TreeSet()..addAll(Iterable.generate(10,(i)=>i));

    expect((set1.iterator..moveNext()).current, 0);
    expect(() => (set1.iterator..movePrevious()).current, throwsStateError);
    expect((set1.reverseIterator..moveNext()).current, 9);
    expect(
        () => (set1.reverseIterator..movePrevious()).current, throwsStateError);
    expect((set1.fromIterator(9)..moveNext()).current, 9);
    expect(
        () => (set1.fromIterator(9)
              ..moveNext()
              ..moveNext())
            .current,
        throwsStateError);
    expect(
        (set1.fromIterator(9)
              ..moveNext()
              ..moveNext()
              ..movePrevious())
            .current,
        9);

    expect((set1.fromIterator(5)..moveNext()).current, 5);
    expect(
        (set1.fromIterator(5)
              ..moveNext()
              ..movePrevious())
            .current,
        4);
    expect((set1.fromIterator(5)..movePrevious()).current, 5);
    expect((set1.fromIterator(5, reversed: true)..movePrevious()).current, 5);
    expect((set1.fromIterator(5, reversed: true)..moveNext()).current, 5);
    expect(
        (set1.fromIterator(5, reversed: true)
              ..movePrevious()
              ..movePrevious())
            .current,
        6);
    expect(
        (set1.fromIterator(5, reversed: true)
              ..moveNext()
              ..moveNext())
            .current,
        4);

    expect((set1.fromIterator(5, inclusive: false)..moveNext()).current, 6);
    expect(
        (set1.fromIterator(5, inclusive: false)
              ..moveNext()
              ..movePrevious())
            .current,
        5);
    expect((set1.fromIterator(5, inclusive: false)..movePrevious()).current, 4);
    expect(
        (set1.fromIterator(5, inclusive: false, reversed: true)..movePrevious())
            .current,
        6);
    expect(
        (set1.fromIterator(5, inclusive: false, reversed: true)..moveNext())
            .current,
        4);
    expect(
        (set1.fromIterator(5, inclusive: false, reversed: true)
              ..movePrevious()
              ..movePrevious())
            .current,
        7);
    expect(
        (set1.fromIterator(5, inclusive: false, reversed: true)
              ..moveNext()
              ..moveNext())
            .current,
        3);

    expect((set1.fromIterator(4.5)..moveNext()).current, 5);
    expect(
        (set1.fromIterator(4.5)
              ..moveNext()
              ..movePrevious())
            .current,
        4);
    expect((set1.fromIterator(4.5)..movePrevious()).current, 4);
    expect((set1.fromIterator(4.5, reversed: true)..movePrevious()).current, 5);
    expect((set1.fromIterator(4.5, reversed: true)..moveNext()).current, 4);
    expect(
        (set1.fromIterator(4.5, reversed: true)
              ..movePrevious()
              ..movePrevious())
            .current,
        6);
    expect(
        (set1.fromIterator(4.5, reversed: true)
              ..moveNext()
              ..moveNext())
            .current,
        3);
    expect(
        (set1.fromIterator(4.5, reversed: true)
              ..movePrevious()
              ..moveNext())
            .current,
        4);
    expect(
        (set1.fromIterator(4.5, reversed: true)
              ..moveNext()
              ..movePrevious())
            .current,
        5);

    expect((set1.fromIterator(4.5, inclusive: false)..moveNext()).current, 5);
    expect(
        (set1.fromIterator(4.5, inclusive: false)
              ..moveNext()
              ..movePrevious())
            .current,
        4);
    expect(
        (set1.fromIterator(4.5, inclusive: false)..movePrevious()).current, 4);
    expect(
        (set1.fromIterator(4.5, inclusive: false, reversed: true)
              ..movePrevious())
            .current,
        5);
    expect(
        (set1.fromIterator(4.5, inclusive: false, reversed: true)..moveNext())
            .current,
        4);
    expect(
        (set1.fromIterator(4.5, inclusive: false, reversed: true)
              ..movePrevious()
              ..movePrevious())
            .current,
        6);
    expect(
        (set1.fromIterator(4.5, inclusive: false, reversed: true)
              ..moveNext()
              ..moveNext())
            .current,
        3);
  });

  test('movePrevious after reaching end should return last element', () {
    var set1 = TreeSet()..addAll(Iterable.generate(10, (i) => i));
    var it = set1.fromIterator(9, inclusive: true);
    expect(it.moveNext(), true);
    expect(it.current, 9);
    expect(it.moveNext(), false);
    expect(it.movePrevious(), true);
    expect(it.current, 9);
  });

  test('moveNext after reaching begin should return first element', () {
    var set1 = TreeSet()..addAll(Iterable.generate(10, (i) => i));
    var it = set1.iterator;
    expect(it.moveNext(), true);
    expect(it.current, 0);
    expect(it.movePrevious(), false);
    expect(it.moveNext(), true);
    expect(it.current, 0);
  });

  test('AvlTreeSet.countUntil', () {
    var set = TreeSet() as AvlTreeSet;
    set.addAll(Iterable.generate(10, (i) => i));

    for (var i = 0; i < 10; i++) {
      expect(set.countUntil(i), i + 1);
      expect(set.countUntil(i, inclusive: false), i);
      expect(set.countUntil(i - 0.1), i);
    }
  });
}
