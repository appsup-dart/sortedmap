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

  group('AvlTreeSet', () {
    late TreeSet set1;

    setUp(() {
      set1 = TreeSet()..addAll(Iterable.generate(10, (i) => i));
    });

    group('iterators', () {
      group('iterator', () {
        late BidirectionalIterator it;
        // late quiver.TreeIterator it;

        setUp(() {
          it = set1.iterator;
        });

        test('current should throw when not moved yet', () {
          expect(() => it.current, throwsStateError);
        });

        test('moveNext should iterate over all elements', () {
          var l = <int>[];
          while (it.moveNext()) {
            l.add(it.current);
          }
          expect(l, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        test('movePrevious should iterate over all elements', () {
          while (it.moveNext()) {}

          var l = <int>[];
          while (it.movePrevious()) {
            l.add(it.current);
          }
          expect(l, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
        });

        test('current should throw when moved past end', () {
          while (it.moveNext()) {}
          expect(() => it.current, throwsStateError);
        });

        test('current should throw when moved past begin', () {
          while (it.moveNext()) {}
          while (it.movePrevious()) {}
          expect(() => it.current, throwsStateError);
        });

        test('moveNext/Previous should throw when concurrently changed', () {
          it.moveNext();

          set1.add(10);

          expect(() => it.moveNext(), throwsConcurrentModificationError);
          expect(() => it.movePrevious(), throwsConcurrentModificationError);
        });

        test(
            'moveNext/Previous should throw when concurrently changed (before first move)',
            () {
          set1.add(10);

          expect(() => it.moveNext(), throwsConcurrentModificationError);
          expect(() => it.movePrevious(), throwsConcurrentModificationError);
        });
      });

      group('reverseIterator', () {
        late BidirectionalIterator it;
        // late quiver.TreeIterator it;

        setUp(() {
          it = set1.reverseIterator;
        });

        test('current should throw when not moved yet', () {
          expect(() => it.current, throwsStateError);
        });

        test('moveNext should iterate over all elements', () {
          var l = <int>[];
          while (it.moveNext()) {
            l.add(it.current);
          }
          expect(l, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
        });

        test('movePrevious should iterate over all elements', () {
          while (it.moveNext()) {}

          var l = <int>[];
          while (it.movePrevious()) {
            l.add(it.current);
          }
          expect(l, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        test('current should throw when moved past end', () {
          while (it.moveNext()) {}
          expect(() => it.current, throwsStateError);
        });

        test('current should throw when moved past begin', () {
          while (it.moveNext()) {}
          while (it.movePrevious()) {}
          expect(() => it.current, throwsStateError);
        });

        test('moveNext/Previous should throw when concurrently changed', () {
          it.moveNext();

          set1.add(10);

          expect(() => it.moveNext(), throwsConcurrentModificationError);
          expect(() => it.movePrevious(), throwsConcurrentModificationError);
        });

        test(
            'moveNext/Previous should throw when concurrently changed (before first move)',
            () {
          set1.add(10);

          expect(() => it.moveNext(), throwsConcurrentModificationError);
          expect(() => it.movePrevious(), throwsConcurrentModificationError);
        });
      });

      group('fromIterator', () {
        group('moveNext', () {
          test('should iterate over all elements from that element inclusive',
              () {
            var it = set1.fromIterator(5);
            var l = <int>[];
            while (it.moveNext()) {
              l.add(it.current);
            }
            expect(l, [5, 6, 7, 8, 9]);
          });
          test(
              'should iterate over all elements without that element when inclusive=false',
              () {
            var it = set1.fromIterator(5, inclusive: false);
            var l = <int>[];
            while (it.moveNext()) {
              l.add(it.current);
            }
            expect(l, [6, 7, 8, 9]);
          });
          test(
              'should iterate over all elements without that element when not contains',
              () {
            var it = set1.fromIterator(5.5);
            var l = <int>[];
            while (it.moveNext()) {
              l.add(it.current);
            }
            expect(l, [6, 7, 8, 9]);
          });

          test('should throw when concurrently changed', () {
            var it = set1.fromIterator(5);
            it.moveNext();

            set1.add(10);

            expect(() => it.moveNext(), throwsConcurrentModificationError);
          });

          test('should throw when concurrently changed (before first move)',
              () {
            var it = set1.fromIterator(0);

            set1.add(10);

            expect(() => it.moveNext(), throwsConcurrentModificationError);
          });

          test('should position beyond end when initializing at 10', () {
            var it = set1.fromIterator(10);
            expect(it.moveNext(), false);
            expect(it.movePrevious(), true);
            expect(it.current, 9);

            it = set1.fromIterator(10);
            expect(it.movePrevious(), true);
            expect(it.current, 9);
          });

          test('should position before begin when initializing at -1', () {
            var it = set1.fromIterator(-1);
            expect(it.movePrevious(), false);
            expect(it.moveNext(), true);
            expect(it.current, 0);

            it = set1.fromIterator(-1);
            expect(it.moveNext(), true);
            expect(it.current, 0);
          });
        });
        group('movePrevious', () {
          test('should iterate over all elements from that element inclusive',
              () {
            var it = set1.fromIterator(5);
            var l = <int>[];
            while (it.movePrevious()) {
              l.add(it.current);
            }
            expect(l, [5, 4, 3, 2, 1, 0]);
          });
          test(
              'should iterate over all elements without that element when inclusive=false',
              () {
            var it = set1.fromIterator(5, inclusive: false);
            var l = <int>[];
            while (it.movePrevious()) {
              l.add(it.current);
            }
            expect(l, [4, 3, 2, 1, 0]);
          });
          test(
              'should iterate over all elements without that element when not contains',
              () {
            var it = set1.fromIterator(4.5);
            var l = <int>[];
            while (it.movePrevious()) {
              l.add(it.current);
            }
            expect(l, [4, 3, 2, 1, 0]);
          });

          test('should throw when concurrently changed', () {
            var it = set1.fromIterator(5);
            it.movePrevious();

            set1.add(10);

            expect(() => it.movePrevious(), throwsConcurrentModificationError);
          });

          test('should throw when concurrently changed (before first move)',
              () {
            var it = set1.fromIterator(5);

            set1.add(10);

            expect(() => it.movePrevious(), throwsConcurrentModificationError);
          });
        });

        test('current should throw when moved past end', () {
          var it = set1.fromIterator(5);
          while (it.moveNext()) {}
          expect(() => it.current, throwsStateError);
        });

        test('current should throw when moved past begin', () {
          var it = set1.fromIterator(5);
          while (it.movePrevious()) {}
          expect(() => it.current, throwsStateError);
        });

        test('movePrevious after reaching end should return last element', () {
          var it = set1.fromIterator(9, inclusive: true);
          expect(it.moveNext(), true);
          expect(it.current, 9);
          expect(it.moveNext(), false);
          expect(it.movePrevious(), true);
          expect(it.current, 9);
        });

        test('moveNext after reaching begin should return first element', () {
          var it = set1.fromIterator(0);
          expect(it.moveNext(), true);
          expect(it.current, 0);
          expect(it.movePrevious(), false);
          expect(it.moveNext(), true);
          expect(it.current, 0);
        });
      });

      group('fromIterator(reversed)', () {
        test(
            'moveNext should iterate over all elements from that element inclusive',
            () {
          var it = set1.fromIterator(5, reversed: true);
          var l = <int>[];
          while (it.moveNext()) {
            l.add(it.current);
          }
          expect(l, [5, 4, 3, 2, 1, 0]);
        });

        test(
            'movePrevious should iterate over all elements from that element inclusive',
            () {
          var it = set1.fromIterator(5, reversed: true);
          var l = <int>[];
          while (it.movePrevious()) {
            l.add(it.current);
          }
          expect(l, [5, 6, 7, 8, 9]);
        });
      });
    });

    test('first', () {
      expect(set1.first, 0);
    });

    test('last', () {
      expect(set1.last, 9);
    });

    test('length', () {
      expect(set1.length, 10);
    });

    test('contains', () {
      expect(set1.contains(5), true);
      expect(set1.contains(10), false);
    });

    test('elementAt', () {
      expect(set1.elementAt(5), 5);
    });

    test('lookup', () {
      expect(set1.lookup(5), 5);
      expect(set1.lookup(10), null);
    });

    test('indexOf', () {
      expect(set1.indexOf(5), 5);
      expect(set1.indexOf(10), -1);
    });
  });

  group('TreeSetView', () {
    late TreeSet set1, set2;

    setUp(() {
      set1 = TreeSet()..addAll(Iterable.generate(30, (i) => i - 10));
      set2 = TreeSetView(
          baseMap: set1 as AvlTreeSet,
          startAt: 0,
          startInclusive: true,
          endAt: 10,
          endInclusive: false);
    });
    group('iterators', () {
      group('iterator', () {
        late BidirectionalIterator it;

        setUp(() {
          it = set2.iterator;
        });

        test('current should throw when not moved yet', () {
          expect(() => it.current, throwsStateError);
        });

        test('moveNext should iterate over all elements', () {
          var l = <int>[];
          while (it.moveNext()) {
            l.add(it.current);
          }
          expect(l, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        test('movePrevious should iterate over all elements', () {
          while (it.moveNext()) {}

          var l = <int>[];
          while (it.movePrevious()) {
            l.add(it.current);
          }
          expect(l, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
        });

        test('current should throw when moved past end', () {
          while (it.moveNext()) {}
          expect(() => it.current, throwsStateError);
        });

        test('current should throw when moved past begin', () {
          while (it.moveNext()) {}
          while (it.movePrevious()) {}
          expect(() => it.current, throwsStateError);
        });

        test('moveNext/Previous should throw when concurrently changed', () {
          it.moveNext();

          set1.add(0.5);

          expect(() => it.moveNext(), throwsConcurrentModificationError);
          expect(() => it.movePrevious(), throwsConcurrentModificationError);
        });

        test(
            'moveNext/Previous should throw when concurrently changed (before first move)',
            () {
          set1.add(0.5);

          expect(() => it.moveNext(), throwsConcurrentModificationError);
          expect(() => it.movePrevious(), throwsConcurrentModificationError);
        });
      });

      group('reverseIterator', () {
        late BidirectionalIterator it;

        setUp(() {
          it = set2.reverseIterator;
        });

        test('current should throw when not moved yet', () {
          expect(() => it.current, throwsStateError);
        });

        test('moveNext should iterate over all elements', () {
          var l = <int>[];
          while (it.moveNext()) {
            l.add(it.current);
          }
          expect(l, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
        });

        test('movePrevious should iterate over all elements', () {
          while (it.moveNext()) {}

          var l = <int>[];
          while (it.movePrevious()) {
            l.add(it.current);
          }
          expect(l, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        test('current should throw when moved past end', () {
          while (it.moveNext()) {}
          expect(() => it.current, throwsStateError);
        });

        test('current should throw when moved past begin', () {
          while (it.moveNext()) {}
          while (it.movePrevious()) {}
          expect(() => it.current, throwsStateError);
        });

        test('moveNext/Previous should throw when concurrently changed', () {
          it.moveNext();

          set1.add(0.5);

          expect(() => it.moveNext(), throwsConcurrentModificationError);
          expect(() => it.movePrevious(), throwsConcurrentModificationError);
        });

        test(
            'moveNext/Previous should throw when concurrently changed (before first move)',
            () {
          set1.add(0.5);

          expect(() => it.moveNext(), throwsConcurrentModificationError);
          expect(() => it.movePrevious(), throwsConcurrentModificationError);
        });
      });

      group('fromIterator', () {
        group('moveNext', () {
          test('should iterate over all elements from that element inclusive',
              () {
            var it = set2.fromIterator(5);
            var l = <int>[];
            while (it.moveNext()) {
              l.add(it.current);
            }
            expect(l, [5, 6, 7, 8, 9]);
          });
          test(
              'should iterate over all elements without that element when inclusive=false',
              () {
            var it = set2.fromIterator(5, inclusive: false);
            var l = <int>[];
            while (it.moveNext()) {
              l.add(it.current);
            }
            expect(l, [6, 7, 8, 9]);
          });
          test(
              'should iterate over all elements without that element when not contains',
              () {
            var it = set2.fromIterator(5.5);
            var l = <int>[];
            while (it.moveNext()) {
              l.add(it.current);
            }
            expect(l, [6, 7, 8, 9]);
          });

          test('should throw when concurrently changed', () {
            var it = set2.fromIterator(5);
            it.moveNext();

            set1.add(0.5);

            expect(() => it.moveNext(), throwsConcurrentModificationError);
          });

          test('should throw when concurrently changed (before first move)',
              () {
            var it = set2.fromIterator(0);

            set1.add(0.5);

            expect(() => it.moveNext(), throwsConcurrentModificationError);
          });

          test('should position beyond end when initializing at 10', () {
            var it = set2.fromIterator(10);
            expect(it.moveNext(), false);
            expect(it.movePrevious(), true);
            expect(it.current, 9);

            it = set2.fromIterator(10);
            expect(it.movePrevious(), true);
            expect(it.current, 9);
          });

          test('should position before begin when initializing at -1', () {
            var it = set2.fromIterator(-1);
            expect(it.movePrevious(), false);
            expect(it.moveNext(), true);
            expect(it.current, 0);

            it = set2.fromIterator(-1);
            expect(it.moveNext(), true);
            expect(it.current, 0);
          });
        });
        group('movePrevious', () {
          test('should iterate over all elements from that element inclusive',
              () {
            var it = set2.fromIterator(5);
            var l = <int>[];
            while (it.movePrevious()) {
              l.add(it.current);
            }
            expect(l, [5, 4, 3, 2, 1, 0]);
          });
          test(
              'should iterate over all elements without that element when inclusive=false',
              () {
            var it = set2.fromIterator(5, inclusive: false);
            var l = <int>[];
            while (it.movePrevious()) {
              l.add(it.current);
            }
            expect(l, [4, 3, 2, 1, 0]);
          });
          test(
              'should iterate over all elements without that element when not contains',
              () {
            var it = set2.fromIterator(4.5);
            var l = <int>[];
            while (it.movePrevious()) {
              l.add(it.current);
            }
            expect(l, [4, 3, 2, 1, 0]);
          });

          test('should throw when concurrently changed', () {
            var it = set2.fromIterator(5);
            it.movePrevious();

            set1.add(0.5);

            expect(() => it.movePrevious(), throwsConcurrentModificationError);
          });

          test('should throw when concurrently changed (before first move)',
              () {
            var it = set2.fromIterator(5);

            set1.add(0.5);

            expect(() => it.movePrevious(), throwsConcurrentModificationError);
          });
        });

        test('current should throw when moved past end', () {
          var it = set2.fromIterator(5);
          while (it.moveNext()) {}
          expect(() => it.current, throwsStateError);
        });

        test('current should throw when moved past begin', () {
          var it = set2.fromIterator(5);
          while (it.movePrevious()) {}
          expect(() => it.current, throwsStateError);
        });

        test('movePrevious after reaching end should return last element', () {
          var it = set2.fromIterator(9, inclusive: true);
          expect(it.moveNext(), true);
          expect(it.current, 9);
          expect(it.moveNext(), false);
          expect(it.movePrevious(), true);
          expect(it.current, 9);
        });

        test('moveNext after reaching begin should return first element', () {
          var it = set2.fromIterator(0);
          expect(it.moveNext(), true);
          expect(it.current, 0);
          expect(it.movePrevious(), false);
          expect(it.moveNext(), true);
          expect(it.current, 0);
        });
      });

      group('fromIterator(reversed)', () {
        test(
            'moveNext should iterate over all elements from that element inclusive',
            () {
          var it = set2.fromIterator(5, reversed: true);
          var l = <int>[];
          while (it.moveNext()) {
            l.add(it.current);
          }
          expect(l, [5, 4, 3, 2, 1, 0]);
        });

        test(
            'movePrevious should iterate over all elements from that element inclusive',
            () {
          var it = set2.fromIterator(5, reversed: true);
          var l = <int>[];
          while (it.movePrevious()) {
            l.add(it.current);
          }
          expect(l, [5, 6, 7, 8, 9]);
        });
      });
    });

    test('first', () {
      expect(set2.first, 0);
    });

    test('last', () {
      expect(set2.last, 9);
    });

    test('length', () {
      expect(set2.length, 10);
    });

    test('contains', () {
      expect(set2.contains(5), true);
      expect(set2.contains(10), false);
    });

    test('elementAt', () {
      expect(set2.elementAt(5), 5);
    });

    test('lookup', () {
      expect(set2.lookup(5), 5);
      expect(set2.lookup(10), null);
    });

    test('indexOf', () {
      expect(set2.indexOf(5), 5);
      expect(set2.indexOf(10), -1);
    });
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
