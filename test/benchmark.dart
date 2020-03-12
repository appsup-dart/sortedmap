import 'package:test/test.dart';
import 'package:benchmark_harness/benchmark_harness.dart';

class TemplateBenchmark extends BenchmarkBase {
  final void Function() _run;
  final void Function() _setup;
  final void Function() _teardown;

  const TemplateBenchmark(String name, this._run,
      {void Function() setup, void Function() teardown})
      : _setup = setup,
        _teardown = teardown,
        super(name, emitter: const _Emitter());

  @override
  void run() => _run();

  // Not measured setup code executed prior to the benchmark runs.
  @override
  void setup() => _setup == null ? null : _setup();

  // Not measures teardown code executed after the benchark runs.
  @override
  void teardown() => _teardown == null ? null : _teardown();
}

class _Emitter implements ScoreEmitter {
  const _Emitter();

  @override
  void emit(String testName, double value) {
    print('$testName(RunTime): ${value} us.');
  }
}

void benchmarkTest(String name, void Function() body,
    {void Function() setup, void Function() teardown}) {
  test(name, () {
    TemplateBenchmark(name, body, setup: setup, teardown: teardown).report();
  });
}
