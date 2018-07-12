import 'package:test/test.dart';
import 'package:benchmark_harness/benchmark_harness.dart';


class TemplateBenchmark extends BenchmarkBase {
  final void Function() _run;
  final void Function() _setup;
  final void Function() _teardown;

  const TemplateBenchmark(String name, this._run, {void setup(),
    void teardown()}) : _setup = setup, _teardown = teardown, super(name, emitter: const _Emitter());


  void run() => _run();

  // Not measured setup code executed prior to the benchmark runs.
  void setup() => _setup==null ? null : _setup();

  // Not measures teardown code executed after the benchark runs.
  void teardown() => _teardown==null ? null : _teardown();
}

class _Emitter implements ScoreEmitter {

  const _Emitter();

  @override
  void emit(String testName, double value) {
    print("$testName(RunTime): ${value} us.");
  }
}

void benchmarkTest(String name, void body(), {void setup(), void teardown()}) {
  test(name, () {
    new TemplateBenchmark(name, body, setup: setup, teardown: teardown).report();
  });
}
