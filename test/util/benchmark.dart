import 'dart:io';
import 'dart:math' as math;

import 'package:meta/meta.dart';
import 'package:test/test.dart';
import 'package:test_api/hooks.dart';

import 'dart:developer';

final bool isProfileMode = Platform.environment['PROFILE_MODE'] == 'true';

@isTest
void benchmark(String description, dynamic Function() body,
        {Duration minDuration = const Duration(seconds: 2),
        int minSamples = 5}) =>
    test(description, () async {
      var sw = Stopwatch();

      if (isProfileMode) {
        print('Profiling: $description');
        print('  - open the CPU profiler');
        print('  - select the main #2 isolate');
        print('  - start recording');
        print('  - resume the debugger');
        debugger(message: 'START: $description');
      }
      var i = 0;
      sw.start();
      var sum = 0;
      var sum2 = 0;

      while (sw.elapsed < minDuration || i < minSamples) {
        i++;

        var s = sw.elapsed.inMicroseconds;
        await body();
        var v = sw.elapsed.inMicroseconds - s;

        sum += v;
        sum2 += v * v;
      }
      sw.stop();

      // Compute the sample mean (estimate of the population mean).
      var mean = sum / i;
      // Compute the sample variance (estimate of the population variance).
      var variance = (sum2 - mean * mean * i) / (i - 1);
      // Compute the sample standard deviation (estimate of the population standard deviation).
      var sd = math.sqrt(variance);
      // Compute the standard error of the mean (a.k.a. the standard deviation of the sampling distribution of the sample mean).
      var sem = sd / math.sqrt(i);
      // Compute the degrees of freedom.
      var df = i - 1;
      // Compute the critical value.
      var critical = tTable[df.round().toString()] ?? tTable['infinity']!;
      // Compute the margin of error.
      var moe = sem * critical;
      // Compute the relative margin of error.
      var rme = (moe / mean) * 100;

      var hz = 1 / (sum / i) * 1000 * 1000;

      var l = -(math.log(hz) / math.ln10).ceil() + 3;

      print(
          '${TestHandle.current.name} x ${hz.toStringAsFixed(math.max(l, 0))} ops/sec ±${rme.toStringAsFixed(2)}% ($i runs sampled)');
      if (isProfileMode) {
        print('  - stop recording');
        debugger(message: 'END: $description');
      }
    }, timeout: Timeout(minDuration * 2));

const tTable = {
  '0': 12.706,
  '1': 12.706,
  '2': 4.303,
  '3': 3.182,
  '4': 2.776,
  '5': 2.571,
  '6': 2.447,
  '7': 2.365,
  '8': 2.306,
  '9': 2.262,
  '10': 2.228,
  '11': 2.201,
  '12': 2.179,
  '13': 2.16,
  '14': 2.145,
  '15': 2.131,
  '16': 2.12,
  '17': 2.11,
  '18': 2.101,
  '19': 2.093,
  '20': 2.086,
  '21': 2.08,
  '22': 2.074,
  '23': 2.069,
  '24': 2.064,
  '25': 2.06,
  '26': 2.056,
  '27': 2.052,
  '28': 2.048,
  '29': 2.045,
  '30': 2.042,
  'infinity': 1.96
};
