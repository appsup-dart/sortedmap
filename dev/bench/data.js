window.BENCHMARK_DATA = {
  "lastUpdate": 1708675387806,
  "repoUrl": "https://github.com/appsup-dart/sortedmap",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "committer": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "distinct": true,
          "id": "6918f26836ec0d61b2e47a244afeb98e0b2da9dc",
          "message": "chore: add and refactor benchmark tests",
          "timestamp": "2024-02-20T16:31:20+01:00",
          "tree_id": "c6e34b3162e3932d273170b14133e3bd7369a41a",
          "url": "https://github.com/appsup-dart/sortedmap/commit/6918f26836ec0d61b2e47a244afeb98e0b2da9dc"
        },
        "date": 1708443282627,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 435000,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "795187 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 466,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "932 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 3640000,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "4293419 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 949,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "1898 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 262,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "525 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.189,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 61.4,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "123 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 45.4,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.2,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "5 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "committer": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "distinct": true,
          "id": "92f0f5feee01168ca3a8578f45d6c039357c6e2d",
          "message": "perf: improve speed of addAll on empty sorted map",
          "timestamp": "2024-02-20T16:37:39+01:00",
          "tree_id": "fc5ad012380bb490e22245f40fd72f2cdb8b04b7",
          "url": "https://github.com/appsup-dart/sortedmap/commit/92f0f5feee01168ca3a8578f45d6c039357c6e2d"
        },
        "date": 1708443560239,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 472000,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "860141 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 505,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "1009 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4010000,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "4565237 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1060,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "2120 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 277,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "555 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.201,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 63.4,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "127 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 1610000,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "2473981 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.203,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "5 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "committer": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "distinct": true,
          "id": "c41c43fe71591931f01a4d660735c8faed7e51f7",
          "message": "perf: improve speed of FilteredMapView.length",
          "timestamp": "2024-02-20T19:39:26+01:00",
          "tree_id": "c65740ec9f1fd5e015eb450350b30c9480647e69",
          "url": "https://github.com/appsup-dart/sortedmap/commit/c41c43fe71591931f01a4d660735c8faed7e51f7"
        },
        "date": 1708454465709,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 454000,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "828457 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 469,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "937 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 3890000,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "4399008 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1540000,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "2359523 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 245,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "490 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.194,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 61.4,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "123 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 1560000,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "2385745 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.201,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "5 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "committer": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "distinct": true,
          "id": "6c0217edb89be1c3a873a75c0186720aee671b87",
          "message": "fix: addAll on FilteredMap",
          "timestamp": "2024-02-21T08:56:29+01:00",
          "tree_id": "269e42c29a9c04e2250d01b8441daba8fcb89eca",
          "url": "https://github.com/appsup-dart/sortedmap/commit/6c0217edb89be1c3a873a75c0186720aee671b87"
        },
        "date": 1708502304125,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 432932,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "792638 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 500,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "999 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4061541,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "4490119 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1626753,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "2469791 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 237,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "474 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.202,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 58.4,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "117 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 1533705,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "2352775 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.208,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "5 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "committer": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "distinct": true,
          "id": "8541ec7f3cc6356dc76fa1fa29f0b70e43f5b8c5",
          "message": "refactor: keep sortedEntries iso sortedPairs in SortedMap",
          "timestamp": "2024-02-21T10:26:36+01:00",
          "tree_id": "01a0eabc444de8911e1456d50ce891896aa49aa4",
          "url": "https://github.com/appsup-dart/sortedmap/commit/8541ec7f3cc6356dc76fa1fa29f0b70e43f5b8c5"
        },
        "date": 1708507911608,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 453357,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "826785 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 478,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "956 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4090976,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "4571158 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1469158,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "2283311 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 235,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "471 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.196,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 55,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "110 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 1774647,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "2633288 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.19,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "5 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "committer": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "distinct": true,
          "id": "c7cd0551ec90c30b4fdd9161f41ff321541b932c",
          "message": "test: refactor benchmark test",
          "timestamp": "2024-02-21T10:37:38+01:00",
          "tree_id": "58791b54f6067d6b13812a925cbb9dac4bce63ff",
          "url": "https://github.com/appsup-dart/sortedmap/commit/c7cd0551ec90c30b4fdd9161f41ff321541b932c"
        },
        "date": 1708508359593,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3090272,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "4618603 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 502,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "1005 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4096380,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "5713487 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1451450,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "2507438 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 238,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "477 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.203,
            "range": "±1.12%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 57.1,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "115 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 1893555,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "3153932 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.201,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "5 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "committer": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "distinct": true,
          "id": "917d1e9eb19ce1b95b1fd9e95c5579814aa49b03",
          "message": "perf: improve speed for forEach on SortedMap",
          "timestamp": "2024-02-21T11:29:29+01:00",
          "tree_id": "0338f6479f1765ac820675860f38396423c16187",
          "url": "https://github.com/appsup-dart/sortedmap/commit/917d1e9eb19ce1b95b1fd9e95c5579814aa49b03"
        },
        "date": 1708511439488,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3170725,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "4726292 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1348,
            "range": "±1.08%",
            "unit": "ops/sec",
            "extra": "2696 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4088684,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "5687413 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1634807,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "2778293 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3919,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "7834 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.546,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 56.6,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "114 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 1891430,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "3145564 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.525,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "5 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "committer": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "distinct": true,
          "id": "84dca023164ed84c3f4987366dc12ef7677b988f",
          "message": "test: benchmark test TreeSet.elementAt",
          "timestamp": "2024-02-22T20:17:19+01:00",
          "tree_id": "a0d1f110c8220ee8cfc2c7e07bdb65daf34b1a11",
          "url": "https://github.com/appsup-dart/sortedmap/commit/84dca023164ed84c3f4987366dc12ef7677b988f"
        },
        "date": 1708629801365,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 2650442,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "4129738 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1360,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "2719 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 3441150,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "5043783 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1372760,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "2392342 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3860,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "7716 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.557,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 49.8,
            "range": "±1.22%",
            "unit": "ops/sec",
            "extra": "100 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2489248,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "3945294 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.548,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 18339,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "36584 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "committer": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "distinct": true,
          "id": "331fd7a3f81534ba3128c47b684c0f06bbb247a9",
          "message": "perf: TreeSet.elementAt",
          "timestamp": "2024-02-22T20:22:50+01:00",
          "tree_id": "094e7071105b6c4371e7d68a9f902d246305cfc7",
          "url": "https://github.com/appsup-dart/sortedmap/commit/331fd7a3f81534ba3128c47b684c0f06bbb247a9"
        },
        "date": 1708629841014,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3113001,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "4663658 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1373,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "2745 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4206303,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "5813906 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1435124,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "2487712 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3899,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "7793 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.563,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 52,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "104 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2768197,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "4260721 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.55,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 4536321,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "6093291 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "committer": {
            "email": "rik.bellens@appsup.be",
            "name": "rikbellens",
            "username": "rbellens"
          },
          "distinct": true,
          "id": "e21786a081647427367074d4146043f736ac4739",
          "message": "test: add benchmarks for TreeSet.first/last",
          "timestamp": "2024-02-23T09:01:34+01:00",
          "tree_id": "7fa8f545fbd3034cd9e21df1bce97c86d7308f98",
          "url": "https://github.com/appsup-dart/sortedmap/commit/e21786a081647427367074d4146043f736ac4739"
        },
        "date": 1708675387293,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3122475,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "4686669 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1373,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "2745 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 3984046,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "5550150 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1405124,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "2433226 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3910,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "7816 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.566,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 51.1,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "103 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2768659,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "4269574 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.557,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 4385023,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "5991178 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2555446,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "4024580 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 4843416,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "6383646 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 4599634,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "6195358 samples"
          }
        ]
      }
    ]
  }
}