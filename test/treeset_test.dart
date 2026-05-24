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
    late TreeSet set1;
    late TreeSetView from0To10Ex, startAt0Take5, endAt10Take5;

    setUp(() {
      set1 = TreeSet()..addAll(Iterable.generate(30, (i) => i - 10));
      from0To10Ex = TreeSetView(
          baseMap: set1 as AvlTreeSet,
          startAt: 0,
          startInclusive: true,
          endAt: 10,
          endInclusive: false);
      startAt0Take5 = TreeSetView(
          baseMap: set1 as AvlTreeSet,
          startAt: 0,
          startInclusive: true,
          endAt: 10,
          endInclusive: false,
          limit: 5,
          limitFromStart: true);
      endAt10Take5 = TreeSetView(
          baseMap: set1 as AvlTreeSet,
          startAt: 0,
          startInclusive: true,
          endAt: 10,
          endInclusive: false,
          limit: 5,
          limitFromStart: false);
    });
    group('iterators', () {
      group('iterator', () {
        late BidirectionalIterator itFrom0To10Ex,
            itStartAt0Take5,
            itEndAt10Take5;

        setUp(() {
          itFrom0To10Ex = from0To10Ex.iterator;
          itStartAt0Take5 = startAt0Take5.iterator;
          itEndAt10Take5 = endAt10Take5.iterator;
        });

        test('current should throw when not moved yet', () {
          expect(() => itFrom0To10Ex.current, throwsStateError);
          expect(() => itStartAt0Take5.current, throwsStateError);
          expect(() => itEndAt10Take5.current, throwsStateError);
        });

        test('moveNext should iterate over all elements', () {
          var l = <int>[];
          while (itFrom0To10Ex.moveNext()) {
            l.add(itFrom0To10Ex.current);
          }
          expect(l, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
          l.clear();
          while (itStartAt0Take5.moveNext()) {
            l.add(itStartAt0Take5.current);
          }
          expect(l, [0, 1, 2, 3, 4]);
          l.clear();
          while (itEndAt10Take5.moveNext()) {
            l.add(itEndAt10Take5.current);
          }
          expect(l, [5, 6, 7, 8, 9]);
        });

        test('movePrevious should iterate over all elements', () {
          while (itFrom0To10Ex.moveNext()) {}
          while (itStartAt0Take5.moveNext()) {}
          while (itEndAt10Take5.moveNext()) {}

          var l = <int>[];
          while (itFrom0To10Ex.movePrevious()) {
            l.add(itFrom0To10Ex.current);
          }
          expect(l, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
          l.clear();
          while (itStartAt0Take5.movePrevious()) {
            l.add(itStartAt0Take5.current);
          }
          expect(l, [4, 3, 2, 1, 0]);
          l.clear();
          while (itEndAt10Take5.movePrevious()) {
            l.add(itEndAt10Take5.current);
          }
          expect(l, [9, 8, 7, 6, 5]);
        });

        test('current should throw when moved past end', () {
          while (itFrom0To10Ex.moveNext()) {}
          while (itStartAt0Take5.moveNext()) {}
          while (itEndAt10Take5.moveNext()) {}
          expect(() => itFrom0To10Ex.current, throwsStateError);
          expect(() => itStartAt0Take5.current, throwsStateError);
          expect(() => itEndAt10Take5.current, throwsStateError);
        });

        test('current should throw when moved past begin', () {
          while (itFrom0To10Ex.moveNext()) {}
          while (itFrom0To10Ex.movePrevious()) {}
          while (itStartAt0Take5.moveNext()) {}
          while (itStartAt0Take5.movePrevious()) {}
          while (itEndAt10Take5.moveNext()) {}
          while (itEndAt10Take5.movePrevious()) {}
          expect(() => itFrom0To10Ex.current, throwsStateError);
          expect(() => itStartAt0Take5.current, throwsStateError);
          expect(() => itEndAt10Take5.current, throwsStateError);
        });

        test('moveNext/Previous should throw when concurrently changed', () {
          itFrom0To10Ex.moveNext();
          itStartAt0Take5.moveNext();
          itEndAt10Take5.moveNext();

          set1.add(0.5);

          expect(() => itFrom0To10Ex.moveNext(),
              throwsConcurrentModificationError);
          expect(() => itStartAt0Take5.moveNext(),
              throwsConcurrentModificationError);
          expect(() => itEndAt10Take5.moveNext(),
              throwsConcurrentModificationError);
          expect(() => itFrom0To10Ex.movePrevious(),
              throwsConcurrentModificationError);
          expect(() => itStartAt0Take5.movePrevious(),
              throwsConcurrentModificationError);
          expect(() => itEndAt10Take5.movePrevious(),
              throwsConcurrentModificationError);
        });

        test(
            'moveNext/Previous should throw when concurrently changed (before first move)',
            () {
          set1.add(0.5);

          expect(() => itFrom0To10Ex.moveNext(),
              throwsConcurrentModificationError);
          expect(() => itFrom0To10Ex.movePrevious(),
              throwsConcurrentModificationError);
          expect(() => itStartAt0Take5.moveNext(),
              throwsConcurrentModificationError);
          expect(() => itEndAt10Take5.moveNext(),
              throwsConcurrentModificationError);
          expect(() => itStartAt0Take5.movePrevious(),
              throwsConcurrentModificationError);
          expect(() => itEndAt10Take5.movePrevious(),
              throwsConcurrentModificationError);
        });
      });

      group('reverseIterator', () {
        late BidirectionalIterator itFrom0To10Ex,
            itStartAt0Take5,
            itEndAt10Take5;

        setUp(() {
          itFrom0To10Ex = from0To10Ex.reverseIterator;
          itStartAt0Take5 = startAt0Take5.reverseIterator;
          itEndAt10Take5 = endAt10Take5.reverseIterator;
        });

        test('current should throw when not moved yet', () {
          expect(() => itFrom0To10Ex.current, throwsStateError);
          expect(() => itStartAt0Take5.current, throwsStateError);
          expect(() => itEndAt10Take5.current, throwsStateError);
        });

        test('moveNext should iterate over all elements', () {
          var l = <int>[];
          while (itFrom0To10Ex.moveNext()) {
            l.add(itFrom0To10Ex.current);
          }
          expect(l, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
          l.clear();
          while (itStartAt0Take5.moveNext()) {
            l.add(itStartAt0Take5.current);
          }
          expect(l, [4, 3, 2, 1, 0]);
          l.clear();
          while (itEndAt10Take5.moveNext()) {
            l.add(itEndAt10Take5.current);
          }
          expect(l, [9, 8, 7, 6, 5]);
        });

        test('movePrevious should iterate over all elements', () {
          while (itFrom0To10Ex.moveNext()) {}
          while (itStartAt0Take5.moveNext()) {}
          while (itEndAt10Take5.moveNext()) {}
          var l = <int>[];
          while (itFrom0To10Ex.movePrevious()) {
            l.add(itFrom0To10Ex.current);
          }
          expect(l, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
          l.clear();
          while (itStartAt0Take5.movePrevious()) {
            l.add(itStartAt0Take5.current);
          }
          expect(l, [0, 1, 2, 3, 4]);
          l.clear();
          while (itEndAt10Take5.movePrevious()) {
            l.add(itEndAt10Take5.current);
          }
          expect(l, [5, 6, 7, 8, 9]);
        });

        test('current should throw when moved past end', () {
          while (itFrom0To10Ex.moveNext()) {}
          while (itStartAt0Take5.moveNext()) {}
          while (itEndAt10Take5.moveNext()) {}
          expect(() => itFrom0To10Ex.current, throwsStateError);
          expect(() => itStartAt0Take5.current, throwsStateError);
          expect(() => itEndAt10Take5.current, throwsStateError);
        });

        test('current should throw when moved past begin', () {
          while (itFrom0To10Ex.moveNext()) {}
          while (itFrom0To10Ex.movePrevious()) {}
          while (itStartAt0Take5.moveNext()) {}
          while (itStartAt0Take5.movePrevious()) {}
          while (itEndAt10Take5.moveNext()) {}
          while (itEndAt10Take5.movePrevious()) {}
          expect(() => itFrom0To10Ex.current, throwsStateError);
          expect(() => itStartAt0Take5.current, throwsStateError);
          expect(() => itEndAt10Take5.current, throwsStateError);
        });

        test('moveNext/Previous should throw when concurrently changed', () {
          itFrom0To10Ex.moveNext();
          itStartAt0Take5.moveNext();
          itEndAt10Take5.moveNext();
          set1.add(0.5);

          expect(() => itFrom0To10Ex.moveNext(),
              throwsConcurrentModificationError);
          expect(() => itFrom0To10Ex.movePrevious(),
              throwsConcurrentModificationError);
          expect(() => itStartAt0Take5.moveNext(),
              throwsConcurrentModificationError);
          expect(() => itEndAt10Take5.moveNext(),
              throwsConcurrentModificationError);
          expect(() => itStartAt0Take5.movePrevious(),
              throwsConcurrentModificationError);
          expect(() => itEndAt10Take5.movePrevious(),
              throwsConcurrentModificationError);
        });

        test(
            'moveNext/Previous should throw when concurrently changed (before first move)',
            () {
          set1.add(0.5);

          expect(() => itFrom0To10Ex.moveNext(),
              throwsConcurrentModificationError);
          expect(() => itFrom0To10Ex.movePrevious(),
              throwsConcurrentModificationError);
          expect(() => itStartAt0Take5.moveNext(),
              throwsConcurrentModificationError);
          expect(() => itEndAt10Take5.moveNext(),
              throwsConcurrentModificationError);
          expect(() => itStartAt0Take5.movePrevious(),
              throwsConcurrentModificationError);
          expect(() => itEndAt10Take5.movePrevious(),
              throwsConcurrentModificationError);
        });
      });

      group('fromIterator', () {
        group('moveNext', () {
          test('should iterate over all elements from that element inclusive',
              () {
            var itFrom0To10Ex = from0To10Ex.fromIterator(5);
            var l = <int>[];
            while (itFrom0To10Ex.moveNext()) {
              l.add(itFrom0To10Ex.current);
            }
            expect(l, [5, 6, 7, 8, 9]);

            var itStartAt0Take5 = startAt0Take5.fromIterator(3);
            l = <int>[];
            while (itStartAt0Take5.moveNext()) {
              l.add(itStartAt0Take5.current);
            }
            expect(l, [3, 4]);

            itStartAt0Take5 = startAt0Take5.fromIterator(5);
            l = <int>[];
            while (itStartAt0Take5.moveNext()) {
              l.add(itStartAt0Take5.current);
            }
            expect(l, []);

            var itEndAt10Take5 = endAt10Take5.fromIterator(1);
            l = <int>[];
            while (itEndAt10Take5.moveNext()) {
              l.add(itEndAt10Take5.current);
            }
            expect(l, [5, 6, 7, 8, 9]);
          });
          test(
              'should iterate over all elements without that element when inclusive=false',
              () {
            var it = from0To10Ex.fromIterator(5, inclusive: false);
            var l = <int>[];
            while (it.moveNext()) {
              l.add(it.current);
            }
            expect(l, [6, 7, 8, 9]);
          });
          test(
              'should iterate over all elements without that element when not contains',
              () {
            var it = from0To10Ex.fromIterator(5.5);
            var l = <int>[];
            while (it.moveNext()) {
              l.add(it.current);
            }
            expect(l, [6, 7, 8, 9]);
          });

          test('should throw when concurrently changed', () {
            var it = from0To10Ex.fromIterator(5);
            it.moveNext();

            set1.add(0.5);

            expect(() => it.moveNext(), throwsConcurrentModificationError);
          });

          test('should throw when concurrently changed (before first move)',
              () {
            var it = from0To10Ex.fromIterator(0);

            set1.add(0.5);

            expect(() => it.moveNext(), throwsConcurrentModificationError);
          });

          test('should position beyond end when initializing at 10', () {
            var it = from0To10Ex.fromIterator(10);
            expect(it.moveNext(), false);
            expect(it.movePrevious(), true);
            expect(it.current, 9);

            it = from0To10Ex.fromIterator(10);
            expect(it.movePrevious(), true);
            expect(it.current, 9);
          });

          test('should position before begin when initializing at -1', () {
            var it = from0To10Ex.fromIterator(-1);
            expect(it.movePrevious(), false);
            expect(it.moveNext(), true);
            expect(it.current, 0);

            it = from0To10Ex.fromIterator(-1);
            expect(it.moveNext(), true);
            expect(it.current, 0);
          });
        });
        group('movePrevious', () {
          test('should iterate over all elements from that element inclusive',
              () {
            var it = from0To10Ex.fromIterator(5);
            var l = <int>[];
            while (it.movePrevious()) {
              l.add(it.current);
            }
            expect(l, [5, 4, 3, 2, 1, 0]);
          });
          test(
              'should iterate over all elements without that element when inclusive=false',
              () {
            var it = from0To10Ex.fromIterator(5, inclusive: false);
            var l = <int>[];
            while (it.movePrevious()) {
              l.add(it.current);
            }
            expect(l, [4, 3, 2, 1, 0]);
          });
          test(
              'should iterate over all elements without that element when not contains',
              () {
            var it = from0To10Ex.fromIterator(4.5);
            var l = <int>[];
            while (it.movePrevious()) {
              l.add(it.current);
            }
            expect(l, [4, 3, 2, 1, 0]);
          });

          test('should throw when concurrently changed', () {
            var it = from0To10Ex.fromIterator(5);
            it.movePrevious();

            set1.add(0.5);

            expect(() => it.movePrevious(), throwsConcurrentModificationError);
          });

          test('should throw when concurrently changed (before first move)',
              () {
            var it = from0To10Ex.fromIterator(5);

            set1.add(0.5);

            expect(() => it.movePrevious(), throwsConcurrentModificationError);
          });
        });

        test('current should throw when moved past end', () {
          var it = from0To10Ex.fromIterator(5);
          while (it.moveNext()) {}
          expect(() => it.current, throwsStateError);
        });

        test('current should throw when moved past begin', () {
          var it = from0To10Ex.fromIterator(5);
          while (it.movePrevious()) {}
          expect(() => it.current, throwsStateError);
        });

        test('movePrevious after reaching end should return last element', () {
          var it = from0To10Ex.fromIterator(9, inclusive: true);
          expect(it.moveNext(), true);
          expect(it.current, 9);
          expect(it.moveNext(), false);
          expect(it.movePrevious(), true);
          expect(it.current, 9);
        });

        test('moveNext after reaching begin should return first element', () {
          var it = from0To10Ex.fromIterator(0);
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
          var it = from0To10Ex.fromIterator(5, reversed: true);
          var l = <int>[];
          while (it.moveNext()) {
            l.add(it.current);
          }
          expect(l, [5, 4, 3, 2, 1, 0]);
        });

        test(
            'movePrevious should iterate over all elements from that element inclusive',
            () {
          var it = from0To10Ex.fromIterator(5, reversed: true);
          var l = <int>[];
          while (it.movePrevious()) {
            l.add(it.current);
          }
          expect(l, [5, 6, 7, 8, 9]);
        });
      });
    });

    test('first', () {
      expect(from0To10Ex.first, 0);
      expect(startAt0Take5.first, 0);
      expect(endAt10Take5.first, 5);
    });

    test('last', () {
      expect(from0To10Ex.last, 9);
      expect(startAt0Take5.last, 4);
      expect(endAt10Take5.last, 9);
    });

    test('length', () {
      expect(from0To10Ex.length, 10);

      expect(startAt0Take5.length, 5);
      expect(endAt10Take5.length, 5);
    });

    test('contains', () {
      expect(from0To10Ex.contains(5), true);
      expect(from0To10Ex.contains(10), false);
      expect(startAt0Take5.contains(5), false);
      expect(startAt0Take5.contains(10), false);
      expect(endAt10Take5.contains(5), true);
      expect(endAt10Take5.contains(10), false);
    });

    test('elementAt', () {
      expect(from0To10Ex.elementAt(5), 5);
      expect(startAt0Take5.elementAt(4), 4);
      expect(() => startAt0Take5.elementAt(5), throwsRangeError);
      expect(endAt10Take5.elementAt(4), 9);
      expect(() => endAt10Take5.elementAt(5), throwsRangeError);
    });

    test('lookup', () {
      expect(from0To10Ex.lookup(5), 5);
      expect(from0To10Ex.lookup(10), null);
      expect(startAt0Take5.lookup(5), null);
      expect(startAt0Take5.lookup(10), null);
      expect(endAt10Take5.lookup(5), 5);
      expect(endAt10Take5.lookup(10), null);
    });

    test('indexOf', () {
      expect(from0To10Ex.indexOf(5), 5);
      expect(from0To10Ex.indexOf(10), -1);
      expect(startAt0Take5.indexOf(5), -1);
      expect(startAt0Take5.indexOf(10), -1);
      expect(startAt0Take5.indexOf(4), 4);
      expect(endAt10Take5.indexOf(5), 0);
      expect(endAt10Take5.indexOf(10), -1);
      expect(endAt10Take5.indexOf(9), 4);
      expect(endAt10Take5.indexOf(4), -1);
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
