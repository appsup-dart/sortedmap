window.BENCHMARK_DATA = {
  "lastUpdate": 1779986559772,
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
          "id": "1ab8a5715182f9b9d97b4f7bcce8976cc7df2c1c",
          "message": "test: compare benchmarks with quiver.TreeSet",
          "timestamp": "2024-02-26T17:39:37+01:00",
          "tree_id": "885fb3400f29751eee27d5120d725713ff2cc0cc",
          "url": "https://github.com/appsup-dart/sortedmap/commit/1ab8a5715182f9b9d97b4f7bcce8976cc7df2c1c"
        },
        "date": 1708965667839,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3163662,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "6327323 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1353,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "2706 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4367256,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "8734512 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1606270,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "3212540 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 4066,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "8132 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.558,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 54.5,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "109 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2935189,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "5870377 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.56,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 4541493,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9082986 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 23519,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "47039 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2573060,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "5146120 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 4999344,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9998687 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 5013068,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "10026136 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 4799378,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9598755 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 5433595,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "10867189 samples"
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
          "id": "8273472a181f8ebad4d9c87bc1ca34222dd36b09",
          "message": "perf: improve speed of TreeSet.first/last",
          "timestamp": "2024-02-26T17:40:05+01:00",
          "tree_id": "884656072e2f51e152b22a8d21c49a884712cdff",
          "url": "https://github.com/appsup-dart/sortedmap/commit/8273472a181f8ebad4d9c87bc1ca34222dd36b09"
        },
        "date": 1708965826631,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3092912,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "6185824 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1305,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "2610 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4186373,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "8372746 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1646241,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "3292483 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3908,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "7817 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.537,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 51.3,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "103 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2796089,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "5592177 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.542,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 4482700,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "8965399 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 23984,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "47968 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2463118,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "4926235 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 4989296,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9978592 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 4993977,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9987954 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5289955,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "10579909 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 5493482,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "10986964 samples"
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
          "id": "7b90b3625fba894554055b224b155a248c0fee7b",
          "message": "test: add more benchmark tests for TreeSet",
          "timestamp": "2024-02-26T17:50:27+01:00",
          "tree_id": "a37152248a4d05f57f935871330f0420fe09164e",
          "url": "https://github.com/appsup-dart/sortedmap/commit/7b90b3625fba894554055b224b155a248c0fee7b"
        },
        "date": 1708967242006,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3165376,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "6330752 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1292,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "2585 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4039104,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "8078208 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1557503,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "3115006 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4343946,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "8687892 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4471683,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "8943366 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3903,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "7806 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.535,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4790,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "9581 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5522,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "11044 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 43.4,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2788382,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "5576763 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.519,
            "range": "±0.62%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 193,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "387 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 176,
            "range": "±0.72%",
            "unit": "ops/sec",
            "extra": "353 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 551,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "1103 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 4806850,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "9613700 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 24072,
            "range": "±0.07%",
            "unit": "ops/sec",
            "extra": "48145 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2503324,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "5006647 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 5485312,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "10970624 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 5836276,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "11672552 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5741025,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "11482050 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 5783405,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "11566810 samples"
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
          "id": "cb98a5c3d40e3b558a957aeed58ecd064a178136",
          "message": "perf: improve speed of TreeSet.forEach",
          "timestamp": "2024-02-26T18:09:23+01:00",
          "tree_id": "fa67a232169117d944e51fc46a62b99cb63a7c95",
          "url": "https://github.com/appsup-dart/sortedmap/commit/cb98a5c3d40e3b558a957aeed58ecd064a178136"
        },
        "date": 1708967463209,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3053792,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "6107585 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1325,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "2650 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4060790,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "8121581 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1628685,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "3257370 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4325387,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8650773 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4299104,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8598207 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 4297,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "8594 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.553,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 5466,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "10932 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5938,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "11877 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 44.7,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2847869,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "5695737 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.549,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 192,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "384 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 180,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "361 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 566,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "1132 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 4462988,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "8925977 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 24124,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "48248 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2487174,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "4974348 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 4996544,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9993087 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 4935039,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9870078 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5122280,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "10244559 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 5144000,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "10287999 samples"
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
          "id": "7c8b6e1b4779082b3d57675e5eac38a58902ff45",
          "message": "perf: improve speed of TreeSet.addAll",
          "timestamp": "2024-02-26T18:22:58+01:00",
          "tree_id": "14408c3875df76e1875b7f6b127933844e2d2986",
          "url": "https://github.com/appsup-dart/sortedmap/commit/7c8b6e1b4779082b3d57675e5eac38a58902ff45"
        },
        "date": 1708968522384,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3096117,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "6192234 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1335,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "2671 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4120756,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "8241511 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1664738,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "3329475 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4436715,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8873430 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4369094,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8738188 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 4260,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "8521 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.555,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 5577,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "11154 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5740,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "11480 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 46.7,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2792349,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "5584697 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.556,
            "range": "±0.77%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 196,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "393 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 3800801,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "7601601 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 560,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "1120 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 4453587,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8907174 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 23956,
            "range": "±0.07%",
            "unit": "ops/sec",
            "extra": "47913 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2542971,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "5085941 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 5255668,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "10511336 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 4948545,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9897089 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 4846960,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "9693920 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 4886489,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9772977 samples"
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
          "id": "33d649a6425fa4fedf3c2a90f81f8346245b723a",
          "message": "feat: TreeSetView",
          "timestamp": "2024-02-27T16:31:23+01:00",
          "tree_id": "aa25acad4264eb82c47f3b6f789cdd8fc2d277dd",
          "url": "https://github.com/appsup-dart/sortedmap/commit/33d649a6425fa4fedf3c2a90f81f8346245b723a"
        },
        "date": 1709048016454,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3012578,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "6025155 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1322,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "2644 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4063148,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "8126296 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1636701,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "3273402 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4311381,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "8622762 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4398017,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "8796033 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3313,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "6626 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.541,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4101,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8202 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5371,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "10743 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 46.5,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2776060,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "5552121 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.539,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 197,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "395 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 3795584,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "7591167 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 559,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "1118 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 4437298,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "8874595 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 13917,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "27835 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 23787,
            "range": "±0.07%",
            "unit": "ops/sec",
            "extra": "47575 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2515603,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "5031205 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 927158,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "1854317 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 4815112,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "9630224 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 713419,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "1426838 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 5615534,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "11231067 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5513834,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "11027668 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 9164,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "18328 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 6017808,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "12035615 samples"
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
          "id": "259151433a911b5d22d684e4be5471e3d9a421a4",
          "message": "perf: improve speed of TreeSetView.first/last/elementAt",
          "timestamp": "2024-02-27T20:01:38+01:00",
          "tree_id": "d1b73c3cf00f2088eefbf77c7d9dfdfcff9fc863",
          "url": "https://github.com/appsup-dart/sortedmap/commit/259151433a911b5d22d684e4be5471e3d9a421a4"
        },
        "date": 1709060644325,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3066517,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "6133034 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1279,
            "range": "±1.10%",
            "unit": "ops/sec",
            "extra": "2558 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4151854,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "8303708 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1624248,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "3248495 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4348929,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "8697858 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4398340,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "8796681 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3317,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "6635 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 0.533,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4221,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "8442 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5692,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "11385 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 46.5,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2759529,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "5519058 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 0.528,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 199,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "398 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 3882800,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "7765600 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 560,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "1120 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 4517562,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9035124 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 459471,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "918942 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 23576,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "47152 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2541428,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "5082856 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 942439,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "1884877 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 4891295,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "9782590 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 1352193,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "2704386 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 5107026,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "10214052 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5701318,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "11402636 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 1293288,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "2586575 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 4921411,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9842823 samples"
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
          "id": "ac0ee98e11b8ef8106778901dc21e8a27925e1e5",
          "message": "refactor: use TreeSetView in FilteredMapView",
          "timestamp": "2024-02-28T12:11:44+01:00",
          "tree_id": "00e70ccdfb441b0c306eab8bba7df9a1c7530d9b",
          "url": "https://github.com/appsup-dart/sortedmap/commit/ac0ee98e11b8ef8106778901dc21e8a27925e1e5"
        },
        "date": 1709118801514,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3174243,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "6348487 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 441575,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "883149 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4202950,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "8405899 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1697159,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "3394318 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4489126,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "8978251 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4483504,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "8967008 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3115,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "6230 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 79.9,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "160 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 3958,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "7917 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5738,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "11476 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 44.9,
            "range": "±0.99%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2814973,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "5629946 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 41.6,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 203,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "406 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 3898655,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "7797310 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 566,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "1133 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 2583845,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "5167690 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 413994,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "827989 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 24135,
            "range": "±0.07%",
            "unit": "ops/sec",
            "extra": "48270 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2480052,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "4960104 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 892648,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "1785295 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 5241782,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "10483563 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 1235250,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "2470500 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 5012241,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "10024481 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5048176,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "10096351 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 1217125,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "2434250 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 5294943,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "10589885 samples"
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
          "id": "a3b9c33d261b22c7698e50efffa9022d9e2e11cd",
          "message": "perf: improve speed of TreeSetView.elementAt",
          "timestamp": "2024-02-28T13:39:28+01:00",
          "tree_id": "c1228fadd94766b135d3aa5a5318e1ed2f9276c7",
          "url": "https://github.com/appsup-dart/sortedmap/commit/a3b9c33d261b22c7698e50efffa9022d9e2e11cd"
        },
        "date": 1709124064225,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3070002,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "6140004 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 527247,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "1054494 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4049514,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "8099028 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1591932,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "3183863 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4292782,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "8585564 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4276352,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8552704 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3151,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "6303 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 102,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "204 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4215,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "8431 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5640,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "11280 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 45.7,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2802889,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "5605777 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 46.2,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 197,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "395 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 3881069,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "7762138 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 561,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "1123 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 3509803,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "7019606 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 506464,
            "range": "±0.09%",
            "unit": "ops/sec",
            "extra": "1012929 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 23816,
            "range": "±0.07%",
            "unit": "ops/sec",
            "extra": "47633 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2778466,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "5556931 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 1042041,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "2084082 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 4952641,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9905281 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 1421237,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "2842473 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 5189766,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "10379532 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5169976,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "10339952 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 1374998,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "2749996 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 5024121,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "10048241 samples"
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
          "id": "1e771fe0e75f070a395f19045df7332166215215",
          "message": "perf: improve speed of TreeSetView.elementAt",
          "timestamp": "2024-02-28T15:18:28+01:00",
          "tree_id": "5f60503286ed682cd9704ff000fa64468d372744",
          "url": "https://github.com/appsup-dart/sortedmap/commit/1e771fe0e75f070a395f19045df7332166215215"
        },
        "date": 1709130013776,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3077225,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "6154449 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 832737,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "1665473 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4061063,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "8122126 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1646848,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "3293697 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4223623,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8447245 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4314486,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8628972 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3897,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "7795 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 196,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "393 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4858,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "9717 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5679,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "11359 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 46.3,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2772521,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "5545041 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 64.7,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "130 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 193,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "387 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 3819366,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "7638732 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 566,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "1132 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 3288748,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "6577495 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 992089,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "1984178 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 24526,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "49053 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2761082,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "5522164 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 2449140,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "4898279 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 4853656,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9707312 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 5678301,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "11356601 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 4969079,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9938157 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5026457,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "10052914 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 5621876,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "11243752 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 5116577,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "10233154 samples"
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
          "id": "14dad5b8b1ac15e9a78b3302a7bbb855173f3df9",
          "message": "perf: improve speed of FilteredMapView.completeInterval",
          "timestamp": "2024-02-28T15:38:31+01:00",
          "tree_id": "b53718945779f18f68a4818df588f5e886806147",
          "url": "https://github.com/appsup-dart/sortedmap/commit/14dad5b8b1ac15e9a78b3302a7bbb855173f3df9"
        },
        "date": 1709131212880,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3236849,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "6473698 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1164270,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "2328540 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4054423,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "8108845 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1283696,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "2567391 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4332880,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8665759 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4373154,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8746307 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3937,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "7874 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 191,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "382 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4797,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9595 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5739,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "11478 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 46,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2834807,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "5669613 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 62.4,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "125 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 195,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "390 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 3866890,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "7733780 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 566,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "1132 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 3389252,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "6778503 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 985702,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "1971404 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 23963,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "47927 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2780000,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "5559999 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 2500004,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "5000008 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 4772674,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9545347 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 5964755,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "11929510 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 4888366,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9776731 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 4798943,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9597886 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 5791264,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "11582529 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 4809364,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9618728 samples"
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
          "id": "20c5f0c4e11ecb85d86ab3f4d36b3cd3a02864c3",
          "message": "perf: improve speed of FilteredMapView.forEach",
          "timestamp": "2024-02-28T16:58:05+01:00",
          "tree_id": "d715bd4b5ad93675d98108dcd0a1238c5275de4f",
          "url": "https://github.com/appsup-dart/sortedmap/commit/20c5f0c4e11ecb85d86ab3f4d36b3cd3a02864c3"
        },
        "date": 1709135998799,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3068891,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "6137781 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1142714,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "2285428 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 3954727,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "7909453 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1279349,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "2558699 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4049855,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8099711 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4083565,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8167131 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 4007,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "8015 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 7780,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "15561 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4967,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9934 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5771,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "11543 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 46.9,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2618672,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "5237344 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 106,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "212 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 195,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "391 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 3662314,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "7324628 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 567,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "1135 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 3312185,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "6624369 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 977355,
            "range": "±0.09%",
            "unit": "ops/sec",
            "extra": "1954710 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 24413,
            "range": "±0.07%",
            "unit": "ops/sec",
            "extra": "48826 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2741637,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "5483273 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 2405240,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "4810479 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 4544325,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9088649 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 5713195,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "11426390 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 4864948,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9729895 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5136468,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "10272936 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 5774661,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "11549321 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 4963767,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9927535 samples"
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
          "id": "d5487734d2c6ec9d9204bbd8cf64e9546732e5f6",
          "message": "perf: improve speed of SortedMap.addAll",
          "timestamp": "2024-02-29T09:41:49+01:00",
          "tree_id": "aa9d66d35d6bec1e0d460b7e9eca477546c480f6",
          "url": "https://github.com/appsup-dart/sortedmap/commit/d5487734d2c6ec9d9204bbd8cf64e9546732e5f6"
        },
        "date": 1709196223491,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3177665,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "6355331 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1175644,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "2351289 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4069363,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "8138725 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1271553,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "2543106 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4298631,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8597261 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4244755,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8489509 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3904,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "7809 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 7807,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "15615 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4896,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "9792 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5584,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "11169 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 53.5,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "108 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2747711,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "5495421 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 122,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "245 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 192,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "385 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 3828741,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "7657482 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 447,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "894 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 3385089,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "6770177 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 991825,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "1983651 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 24235,
            "range": "±0.06%",
            "unit": "ops/sec",
            "extra": "48471 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2740735,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "5481469 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 2371217,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "4742433 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 4855166,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "9710332 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 5838945,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "11677890 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 5083814,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "10167629 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5325648,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "10651295 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 5975574,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "11951148 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 4982983,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9965966 samples"
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
          "id": "76b025d2569830ed92ac92a7b40aef8fa1a691d6",
          "message": "test: add benchmark tests for addAll",
          "timestamp": "2024-04-22T21:03:12+02:00",
          "tree_id": "0cee38aa95c8087e027050ca93aa8d567aa93fc4",
          "url": "https://github.com/appsup-dart/sortedmap/commit/76b025d2569830ed92ac92a7b40aef8fa1a691d6"
        },
        "date": 1713812714527,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3145417,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "6290835 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1162879,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "2325757 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4049340,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "8098679 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1258338,
            "range": "±0.09%",
            "unit": "ops/sec",
            "extra": "2516676 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4159385,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8318769 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4220296,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "8440592 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3997,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "7994 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 7949,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "15898 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4864,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "9728 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5776,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "11553 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 53.1,
            "range": "±0.96%",
            "unit": "ops/sec",
            "extra": "107 samples"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key",
            "value": 46.4,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2703747,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "5407494 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 121,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "243 samples"
          },
          {
            "name": "addAll to empty FilteredMap",
            "value": 2.29,
            "range": "±2.69%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 198,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "396 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 3758979,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "7517958 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 566,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "1133 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 3351751,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "6703501 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 996971,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "1993942 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 23980,
            "range": "±0.07%",
            "unit": "ops/sec",
            "extra": "47960 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2718801,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "5437601 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 2458741,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "4917481 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 4895225,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9790449 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 5478010,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "10956020 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 4757379,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9514757 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5075777,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "10151553 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 5276673,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "10553345 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 4409464,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8818928 samples"
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
          "id": "9ef6e1b463bf697a97ec3cb6ebf1b84d865d2a8c",
          "message": "perf: improve speed of addAll to empty map",
          "timestamp": "2024-04-22T21:11:59+02:00",
          "tree_id": "0453d16cd2874774877fbebf0e00630a85c64200",
          "url": "https://github.com/appsup-dart/sortedmap/commit/9ef6e1b463bf697a97ec3cb6ebf1b84d865d2a8c"
        },
        "date": 1713814211303,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3038150,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "6076299 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1163042,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "2326084 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 3944025,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "7888049 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1254669,
            "range": "±0.09%",
            "unit": "ops/sec",
            "extra": "2509338 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4143495,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8286989 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4195694,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8391387 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 4000,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "8001 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 7920,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "15840 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4652,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "9305 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5864,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "11729 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 138,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "277 samples"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key",
            "value": 98,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "196 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2628795,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "5257590 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 405,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "810 samples"
          },
          {
            "name": "addAll to empty FilteredMap",
            "value": 2.34,
            "range": "±2.83%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 856,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "1712 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 3622519,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "7245037 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 530,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "1061 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 3222574,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "6445149 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 1355091,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "2710181 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 23584,
            "range": "±0.07%",
            "unit": "ops/sec",
            "extra": "47169 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2566719,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "5133438 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 2298173,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "4596346 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 4764504,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "9529008 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 5766329,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "11532657 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 4783052,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9566103 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 4396038,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8792075 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 5797230,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "11594460 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 4134360,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8268719 samples"
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
          "id": "d8899539a56ef26750340434c86e615364e86fba",
          "message": "perf: addAll to empty SortedMap from FilteredMapView",
          "timestamp": "2024-04-22T21:28:30+02:00",
          "tree_id": "a63edf7b099874d4c59369636f300d88856e8ac5",
          "url": "https://github.com/appsup-dart/sortedmap/commit/d8899539a56ef26750340434c86e615364e86fba"
        },
        "date": 1713814233019,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3196162,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "6392324 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1112081,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "2224161 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4021966,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8043931 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1273615,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "2547229 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4156611,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8313222 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4258304,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "8516608 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 4042,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "8084 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 8001,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "16002 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4641,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "9282 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5706,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "11413 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 138,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "277 samples"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key",
            "value": 99.6,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "200 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2646645,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "5293290 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 637,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "1274 samples"
          },
          {
            "name": "addAll to empty FilteredMap",
            "value": 2.33,
            "range": "±3.52%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 895,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "1791 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 3624669,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "7249337 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 514,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "1028 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 3194845,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "6389690 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 1348241,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "2696482 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 24187,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "48375 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2576549,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "5153097 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 2284740,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "4569480 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 5309533,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "10619066 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 5910699,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "11821397 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 4923251,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9846502 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5379071,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "10758141 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 5952911,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "11905821 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 4932818,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9865636 samples"
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
          "id": "b88f2371a02d4be6cd1d85ceac430a8c52ee2326",
          "message": "chore(release): publish packages\n\n - sortedmap@0.5.4",
          "timestamp": "2024-07-10T17:41:33+02:00",
          "tree_id": "5de3cd078155b74db2640e2ecbbad2fb6f49dfcd",
          "url": "https://github.com/appsup-dart/sortedmap/commit/b88f2371a02d4be6cd1d85ceac430a8c52ee2326"
        },
        "date": 1779556445298,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3335886,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "6671772 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1170983,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "2341966 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4206276,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "8412551 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1302225,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "2604449 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4670555,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9341110 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4871132,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9742264 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3814,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "7629 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 7635,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "15271 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4403,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "8807 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5874,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "11749 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 163,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "327 samples"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key",
            "value": 111,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "222 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 3030807,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "6061614 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 704,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "1409 samples"
          },
          {
            "name": "addAll to empty FilteredMap",
            "value": 2.18,
            "range": "±10.71%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 959,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "1919 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 4305091,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "8610182 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 552,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "1104 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 3419118,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "6838236 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 1324782,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "2649564 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 24262,
            "range": "±0.09%",
            "unit": "ops/sec",
            "extra": "48525 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2660051,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "5320101 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 2336481,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "4672962 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 6026809,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "12053618 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 5890794,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "11781587 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 5993168,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "11986335 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5296661,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "10593322 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 5814709,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "11629418 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 5682086,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "11364171 samples"
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
          "id": "b28e6fbeddf400006a155eada7e91177681292f4",
          "message": "style: fix lints and set min sdk to 3.0.0",
          "timestamp": "2026-05-24T14:39:12+02:00",
          "tree_id": "1a33f274b0b5df968f226dea17df7bc0b7b1e630",
          "url": "https://github.com/appsup-dart/sortedmap/commit/b28e6fbeddf400006a155eada7e91177681292f4"
        },
        "date": 1779626454282,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3722195,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "7444390 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1129668,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "2259336 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 3234093,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "6468186 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1219931,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "2439861 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4635976,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9271951 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4589282,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9178564 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 2491,
            "range": "±0.67%",
            "unit": "ops/sec",
            "extra": "4983 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 5925,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "11851 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4701,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "9402 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5793,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "11586 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 174,
            "range": "±1.06%",
            "unit": "ops/sec",
            "extra": "348 samples"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key",
            "value": 115,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "230 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 3089268,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "6178536 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 444,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "889 samples"
          },
          {
            "name": "addAll to empty FilteredMap",
            "value": 2.44,
            "range": "±2.04%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 992,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "1984 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 4085307,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "8170614 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 560,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "1121 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 3504935,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "7009869 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 1224060,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "2448120 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 21580,
            "range": "±0.06%",
            "unit": "ops/sec",
            "extra": "43160 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2643842,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "5287684 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 2356907,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "4713813 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 5414366,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "10828731 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 6262299,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "12524597 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 5331353,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "10662706 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5155740,
            "range": "±0.93%",
            "unit": "ops/sec",
            "extra": "10311479 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 5980941,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "11961882 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 5107191,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "10214382 samples"
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
          "id": "b12bd58f96b0b9df59ca34f57e46f42541c5a125",
          "message": "test: add benchmark tests for operator []=",
          "timestamp": "2026-05-24T14:45:06+02:00",
          "tree_id": "7de628321f1c79c3bd6d69544955f36ea35ebe7b",
          "url": "https://github.com/appsup-dart/sortedmap/commit/b12bd58f96b0b9df59ca34f57e46f42541c5a125"
        },
        "date": 1779627293417,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3408841,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "6817682 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1107140,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "2214280 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 3598202,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "7196404 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1182413,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "2364826 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4785597,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9571193 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4864108,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9728216 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 2880,
            "range": "±0.51%",
            "unit": "ops/sec",
            "extra": "5761 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 5951,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "11903 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4842,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "9685 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5935,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "11871 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 166,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "333 samples"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key",
            "value": 110,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "220 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2966505,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "5933011 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 447,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "895 samples"
          },
          {
            "name": "addAll to empty FilteredMap",
            "value": 2.34,
            "range": "±2.61%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 908,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "1817 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 4107512,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "8215023 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 534,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "1068 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 3550442,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "7100883 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 1216169,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "2432338 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 24226,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "48452 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2455081,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "4910162 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 2098279,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "4196557 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 5440239,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "10880477 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 5876366,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "11752732 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 5470799,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "10941598 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 4610577,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "9221154 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 5846672,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "11693344 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 5424163,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "10848325 samples"
          },
          {
            "name": "operator []= of SortedMap, replacing existing value",
            "value": 331628,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "663256 samples"
          },
          {
            "name": "operator []= of SortedMap, replacing existing value with same value",
            "value": 345458,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "690916 samples"
          },
          {
            "name": "operator []= of SortedMap, adding new value",
            "value": 572372,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "1144743 samples"
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
          "id": "4dc5e1e0b44e0f00bd5e4022ab9ccc5cd3621686",
          "message": "test: add benchmark tests for operator []=",
          "timestamp": "2026-05-24T15:21:13+02:00",
          "tree_id": "4231da69b27dae0df35a5413c0710b6673c67988",
          "url": "https://github.com/appsup-dart/sortedmap/commit/4dc5e1e0b44e0f00bd5e4022ab9ccc5cd3621686"
        },
        "date": 1779629001532,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3438955,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "6877909 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1196810,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "2393620 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 3605207,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "7210414 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1279661,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "2559322 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4955949,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9911898 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 5066064,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "10132128 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3081,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "6163 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 6068,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "12137 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4556,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "9112 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5672,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "11344 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 163,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "327 samples"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key",
            "value": 111,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "223 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 3044230,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "6088461 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 438,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "877 samples"
          },
          {
            "name": "addAll to empty FilteredMap",
            "value": 2.21,
            "range": "±3.22%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 972,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "1945 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 4181953,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "8363905 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 532,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "1065 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 3414129,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "6828258 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 1295568,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "2591136 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 24137,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "48274 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2529359,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "5058717 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 2280024,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "4560048 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 6070338,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "12140675 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 6177323,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "12354646 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 6096037,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "12192073 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5226543,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "10453086 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 6332018,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "12664036 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 6002273,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "12004546 samples"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value",
            "value": 333013,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "666027 samples"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value",
            "value": 339962,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "679924 samples"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value",
            "value": 581588,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "1163176 samples"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value",
            "value": 364252,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "728504 samples"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value",
            "value": 361863,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "723725 samples"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value",
            "value": 563407,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "1126814 samples"
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
          "id": "8bf19b52dcc62c1ce287b6103c46e6b0a249e7ae",
          "message": "test: add benchmark tests for operator []=",
          "timestamp": "2026-05-24T15:34:34+02:00",
          "tree_id": "aa7fb0a4f5322788f020d47e08e4f682b6082f35",
          "url": "https://github.com/appsup-dart/sortedmap/commit/8bf19b52dcc62c1ce287b6103c46e6b0a249e7ae"
        },
        "date": 1779630632014,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3461168,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "6922356 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1181982,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "2363964 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 3403648,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "6807296 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1282261,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "2564525 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4701344,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9402687 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4816402,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9632803 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 2978,
            "range": "±0.68%",
            "unit": "ops/sec",
            "extra": "5956 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 5979,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "11959 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4491,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "8982 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5761,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "11523 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 161,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "323 samples"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key",
            "value": 108,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "217 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2978172,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "5956344 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 427,
            "range": "±0.57%",
            "unit": "ops/sec",
            "extra": "855 samples"
          },
          {
            "name": "addAll to empty FilteredMap",
            "value": 2.18,
            "range": "±3.54%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 946,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "1892 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 4003088,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "8006176 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 546,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "1093 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 3338538,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "6677075 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 1284845,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "2569689 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 24411,
            "range": "±0.09%",
            "unit": "ops/sec",
            "extra": "48823 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2523679,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "5047358 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 2280177,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "4560354 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 5156916,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "10313832 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 6043771,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "12087542 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 5859029,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "11718058 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 4981860,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "9963720 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 6054414,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "12108828 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 5768183,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "11536366 samples"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value",
            "value": 334389,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "668779 samples"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value",
            "value": 342555,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "685111 samples"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value",
            "value": 577540,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "1155079 samples"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value",
            "value": 304304,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "608608 samples"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same value",
            "value": 334324,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "668648 samples"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same order value",
            "value": 314063,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "628127 samples"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, adding new value",
            "value": 522950,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "1045900 samples"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value",
            "value": 367694,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "735389 samples"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value",
            "value": 364603,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "729205 samples"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value",
            "value": 554655,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "1109309 samples"
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
          "id": "1fb141d3a9f0b242f1dd74134eae727a942133ce",
          "message": "perf: improve speed of operator[]=",
          "timestamp": "2026-05-24T15:49:33+02:00",
          "tree_id": "c4bebf0c5b7ffe49977e6a0404451d2687cddd7b",
          "url": "https://github.com/appsup-dart/sortedmap/commit/1fb141d3a9f0b242f1dd74134eae727a942133ce"
        },
        "date": 1779630842641,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3365187,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "6730374 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1118793,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "2237586 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 3571386,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "7142773 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1193612,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "2387224 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4656956,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "9313911 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4662029,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "9324058 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 2925,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "5851 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 5928,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "11856 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4823,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "9646 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5971,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "11943 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 165,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "331 samples"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key",
            "value": 110,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "220 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 2943758,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "5887516 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 446,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "893 samples"
          },
          {
            "name": "addAll to empty FilteredMap",
            "value": 2.35,
            "range": "±2.75%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 913,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "1827 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 4031901,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "8063802 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 540,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "1081 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 3475211,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "6950422 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 1239446,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "2478891 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 24153,
            "range": "±0.07%",
            "unit": "ops/sec",
            "extra": "48306 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2447187,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "4894374 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 2089014,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "4178027 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 5089799,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "10179597 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 5431199,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "10862398 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 5075866,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "10151732 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5112942,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "10225884 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 5446849,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "10893698 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 4352257,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "8704514 samples"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value",
            "value": 322850,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "645699 samples"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value",
            "value": 1449702,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "2899403 samples"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value",
            "value": 552791,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "1105582 samples"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value",
            "value": 298176,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "596352 samples"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same value",
            "value": 1337428,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "2674855 samples"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same order value",
            "value": 623944,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "1247936 samples"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, adding new value",
            "value": 501514,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "1003027 samples"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value",
            "value": 529648,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "1059297 samples"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value",
            "value": 1391245,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "2782490 samples"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value",
            "value": 538909,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "1077817 samples"
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
          "id": "fa00ab17f4d25ba0b36673975d2473041a9baed3",
          "message": "test: add randomness to benchmark tests for operator[]=",
          "timestamp": "2026-05-24T20:56:16+02:00",
          "tree_id": "e7bbf6854da54f41c99dde40f75cbd9ac13a688b",
          "url": "https://github.com/appsup-dart/sortedmap/commit/fa00ab17f4d25ba0b36673975d2473041a9baed3"
        },
        "date": 1779649108206,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "completeInterval of FilteredMap",
            "value": 3441630,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "6883259 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 1223341,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "2446681 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 3585500,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "7171000 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1305676,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "2611353 samples"
          },
          {
            "name": "length of TreeSet",
            "value": 4714473,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9428945 samples"
          },
          {
            "name": "length of quiver.TreeSet",
            "value": 4913893,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "9827785 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 3086,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "6173 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 6120,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "12240 samples"
          },
          {
            "name": "forEach of TreeSet",
            "value": 4548,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "9096 samples"
          },
          {
            "name": "forEach of quiver.TreeSet",
            "value": 5834,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "11668 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 164,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "329 samples"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key",
            "value": 110,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "221 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 3042836,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "6085672 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 433,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "867 samples"
          },
          {
            "name": "addAll to empty FilteredMap",
            "value": 2.14,
            "range": "±11.28%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty TreeSet",
            "value": 976,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "1952 samples"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet",
            "value": 4201755,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "8403509 samples"
          },
          {
            "name": "addAll to empty quiver.TreeSet",
            "value": 548,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "1097 samples"
          },
          {
            "name": "elementAt of TreeSet",
            "value": 3445364,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "6890727 samples"
          },
          {
            "name": "elementAt of TreeSetView",
            "value": 1299904,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "2599808 samples"
          },
          {
            "name": "elementAt of quiver.TreeSet",
            "value": 23789,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "47579 samples"
          },
          {
            "name": "indexOf of TreeSet",
            "value": 2565818,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "5131635 samples"
          },
          {
            "name": "indexOf of TreeSetView",
            "value": 2328035,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "4656070 samples"
          },
          {
            "name": "first of TreeSet",
            "value": 5609335,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "11218669 samples"
          },
          {
            "name": "first of TreeSetView",
            "value": 5975591,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "11951182 samples"
          },
          {
            "name": "first of quiver.TreeSet",
            "value": 5368008,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "10736017 samples"
          },
          {
            "name": "last of TreeSet",
            "value": 5615829,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "11231657 samples"
          },
          {
            "name": "last of TreeSetView",
            "value": 6079714,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "12159428 samples"
          },
          {
            "name": "last of quiver.TreeSet",
            "value": 4547909,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "9095817 samples"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value",
            "value": 364714,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "729428 samples"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value",
            "value": 1372702,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "2745404 samples"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value",
            "value": 477472,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "954944 samples"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value",
            "value": 350014,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "700027 samples"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same value",
            "value": 1241870,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "2483741 samples"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same order value",
            "value": 508180,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "1016360 samples"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, adding new value",
            "value": 484498,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "968996 samples"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value",
            "value": 535840,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "1071679 samples"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value",
            "value": 1343521,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "2687041 samples"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value",
            "value": 557197,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "1114394 samples"
          }
        ]
      }
    ],
    "Dart Benchmarks": [
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
          "id": "b854b4ff5c8b923db690452ea5f7707766710242",
          "message": "chore: upgrade to benchmark_test 0.1.1+1",
          "timestamp": "2026-05-28T15:31:12+02:00",
          "tree_id": "09792036cdd2bacfda48d2bee5961223aaabf847",
          "url": "https://github.com/appsup-dart/sortedmap/commit/b854b4ff5c8b923db690452ea5f7707766710242"
        },
        "date": 1779982234734,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "completeInterval of FilteredMap [jit]",
            "value": 2342200,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 4684400\nmean latency: 0 microseconds"
          },
          {
            "name": "completeInterval of FilteredMapView [jit]",
            "value": 1026825.5,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2053651\nmean latency: 1 microseconds"
          },
          {
            "name": "length of FilteredMap [jit]",
            "value": 2551362,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5102724\nmean latency: 0 microseconds"
          },
          {
            "name": "length of FilteredMapView [jit]",
            "value": 1082847,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2165694\nmean latency: 1 microseconds"
          },
          {
            "name": "length of TreeSet [jit]",
            "value": 2803724,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5607448\nmean latency: 0 microseconds"
          },
          {
            "name": "length of quiver.TreeSet [jit]",
            "value": 2844573.5,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5689147\nmean latency: 0 microseconds"
          },
          {
            "name": "forEach of FilteredMap [jit]",
            "value": 3105.3183388771754,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 6211\nmean latency: 322 microseconds"
          },
          {
            "name": "forEach of FilteredMapView [jit]",
            "value": 6127.8927618766675,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 12256\nmean latency: 163 microseconds"
          },
          {
            "name": "forEach of TreeSet [jit]",
            "value": 4542.191131003092,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 9085\nmean latency: 220 microseconds"
          },
          {
            "name": "forEach of quiver.TreeSet [jit]",
            "value": 5833.655814306956,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 11668\nmean latency: 171 microseconds"
          },
          {
            "name": "addAll to empty SortedMap [jit]",
            "value": 158.88210947476972,
            "range": "±0.88%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 318\nmean latency: 6294 microseconds"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key [jit]",
            "value": 106.95539959836748,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 214\nmean latency: 9350 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap [jit]",
            "value": 2098090.5,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 4196181\nmean latency: 0 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView [jit]",
            "value": 424.7470631239097,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 850\nmean latency: 2354 microseconds"
          },
          {
            "name": "addAll to empty FilteredMap [jit]",
            "value": 2.1482720159212736,
            "range": "±10.76%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5\nmean latency: 465490 microseconds"
          },
          {
            "name": "addAll to empty TreeSet [jit]",
            "value": 948.7552211529425,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 1898\nmean latency: 1054 microseconds"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet [jit]",
            "value": 2619545,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5239090\nmean latency: 0 microseconds"
          },
          {
            "name": "addAll to empty quiver.TreeSet [jit]",
            "value": 550.6971165858778,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 1102\nmean latency: 1816 microseconds"
          },
          {
            "name": "elementAt of TreeSet [jit]",
            "value": 2262495.5,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 4524991\nmean latency: 0 microseconds"
          },
          {
            "name": "elementAt of TreeSetView [jit]",
            "value": 1101914.5,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2203829\nmean latency: 1 microseconds"
          },
          {
            "name": "elementAt of quiver.TreeSet [jit]",
            "value": 23990.284087443215,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 47981\nmean latency: 42 microseconds"
          },
          {
            "name": "indexOf of TreeSet [jit]",
            "value": 1861933,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 3723866\nmean latency: 1 microseconds"
          },
          {
            "name": "indexOf of TreeSetView [jit]",
            "value": 1729130.5000000002,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 3458261\nmean latency: 1 microseconds"
          },
          {
            "name": "first of TreeSet [jit]",
            "value": 2898522,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5797044\nmean latency: 0 microseconds"
          },
          {
            "name": "first of TreeSetView [jit]",
            "value": 3211674,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 6423348\nmean latency: 0 microseconds"
          },
          {
            "name": "first of quiver.TreeSet [jit]",
            "value": 2851170.5,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5702341\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSet [jit]",
            "value": 2758866.5,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5517733\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSetView [jit]",
            "value": 3200634.0000000005,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 6401268\nmean latency: 0 microseconds"
          },
          {
            "name": "last of quiver.TreeSet [jit]",
            "value": 2808970.5,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5617941\nmean latency: 0 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value [jit]",
            "value": 335067.664932335,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 670136\nmean latency: 3 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value [jit]",
            "value": 1090337.5,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2180675\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value [jit]",
            "value": 460733,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 921466\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value [jit]",
            "value": 325641.67435832566,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 651284\nmean latency: 3 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same value [jit]",
            "value": 1052715.5,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2105431\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same order value [jit]",
            "value": 466256.5337434663,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 932514\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, adding new value [jit]",
            "value": 425561.5,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 851123\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value [jit]",
            "value": 481041.7594791202,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 962084\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value [jit]",
            "value": 1112413,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2224826\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value [jit]",
            "value": 488647,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 977294\nmean latency: 2 microseconds"
          },
          {
            "name": "completeInterval of FilteredMap [aot]",
            "value": 2967647.5,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 5935295\nmean latency: 0 microseconds"
          },
          {
            "name": "completeInterval of FilteredMapView [aot]",
            "value": 1139424.5,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2278849\nmean latency: 1 microseconds"
          },
          {
            "name": "length of FilteredMap [aot]",
            "value": 2836611,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 5673222\nmean latency: 0 microseconds"
          },
          {
            "name": "length of FilteredMapView [aot]",
            "value": 1133480.5,
            "range": "±0.07%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2266961\nmean latency: 1 microseconds"
          },
          {
            "name": "length of TreeSet [aot]",
            "value": 3381254.4999999995,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 6762509\nmean latency: 0 microseconds"
          },
          {
            "name": "length of quiver.TreeSet [aot]",
            "value": 3407500.4999999995,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 6815001\nmean latency: 0 microseconds"
          },
          {
            "name": "forEach of FilteredMap [aot]",
            "value": 3255.9316254358655,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 6512\nmean latency: 307 microseconds"
          },
          {
            "name": "forEach of FilteredMapView [aot]",
            "value": 6448.064755628995,
            "range": "±0.09%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 12897\nmean latency: 155 microseconds"
          },
          {
            "name": "forEach of TreeSet [aot]",
            "value": 4826.369688018423,
            "range": "±0.09%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 9653\nmean latency: 207 microseconds"
          },
          {
            "name": "forEach of quiver.TreeSet [aot]",
            "value": 7377.345075753409,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 14755\nmean latency: 136 microseconds"
          },
          {
            "name": "addAll to empty SortedMap [aot]",
            "value": 128.5535976322221,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 258\nmean latency: 7779 microseconds"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key [aot]",
            "value": 84.9382923306218,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 170\nmean latency: 11773 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap [aot]",
            "value": 2289929.5,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 4579859\nmean latency: 0 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView [aot]",
            "value": 354.26388312189926,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 709\nmean latency: 2823 microseconds"
          },
          {
            "name": "addAll to empty FilteredMap [aot]",
            "value": 2.3173273985033775,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 5\nmean latency: 431532 microseconds"
          },
          {
            "name": "addAll to empty TreeSet [aot]",
            "value": 584.2998772920275,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 1169\nmean latency: 1711 microseconds"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet [aot]",
            "value": 2894594.5,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 5789189\nmean latency: 0 microseconds"
          },
          {
            "name": "addAll to empty quiver.TreeSet [aot]",
            "value": 418.1855244855868,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 837\nmean latency: 2391 microseconds"
          },
          {
            "name": "elementAt of TreeSet [aot]",
            "value": 2793104.5,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 5586209\nmean latency: 0 microseconds"
          },
          {
            "name": "elementAt of TreeSetView [aot]",
            "value": 1243331.5,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2486663\nmean latency: 1 microseconds"
          },
          {
            "name": "elementAt of quiver.TreeSet [aot]",
            "value": 29315.44136911726,
            "range": "±0.06%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 58631\nmean latency: 34 microseconds"
          },
          {
            "name": "indexOf of TreeSet [aot]",
            "value": 1947911.9999999998,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 3895824\nmean latency: 1 microseconds"
          },
          {
            "name": "indexOf of TreeSetView [aot]",
            "value": 1776550.5,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 3553101\nmean latency: 1 microseconds"
          },
          {
            "name": "first of TreeSet [aot]",
            "value": 3734324.5,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7468649\nmean latency: 0 microseconds"
          },
          {
            "name": "first of TreeSetView [aot]",
            "value": 3933759.5,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7867519\nmean latency: 0 microseconds"
          },
          {
            "name": "first of quiver.TreeSet [aot]",
            "value": 3716293.5,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7432587\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSet [aot]",
            "value": 3724185.4999999995,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7448371\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSetView [aot]",
            "value": 3927000.5,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7854001\nmean latency: 0 microseconds"
          },
          {
            "name": "last of quiver.TreeSet [aot]",
            "value": 3449811,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 6899622\nmean latency: 0 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value [aot]",
            "value": 311277.3443613278,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 622555\nmean latency: 3 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value [aot]",
            "value": 1097538,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2195076\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value [aot]",
            "value": 416508,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 833016\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value [aot]",
            "value": 303062.5,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 606125\nmean latency: 3 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same value [aot]",
            "value": 1034016,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2068032\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same order value [aot]",
            "value": 421043,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 842086\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, adding new value [aot]",
            "value": 402980.29850985075,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 805961\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value [aot]",
            "value": 441666.77916661045,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 883334\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value [aot]",
            "value": 1073396,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2146792\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value [aot]",
            "value": 455500.5,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 911001\nmean latency: 2 microseconds"
          },
          {
            "name": "completeInterval of FilteredMap [js]",
            "value": 309022.5,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 618045\nmean latency: 3 microseconds"
          },
          {
            "name": "completeInterval of FilteredMapView [js]",
            "value": 174771,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 349542\nmean latency: 6 microseconds"
          },
          {
            "name": "length of FilteredMap [js]",
            "value": 268262.5,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 536525\nmean latency: 4 microseconds"
          },
          {
            "name": "length of FilteredMapView [js]",
            "value": 171167,
            "range": "±4.39%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 342334\nmean latency: 6 microseconds"
          },
          {
            "name": "length of TreeSet [js]",
            "value": 343502.5,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 687005\nmean latency: 3 microseconds"
          },
          {
            "name": "length of quiver.TreeSet [js]",
            "value": 350817.5,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 701635\nmean latency: 3 microseconds"
          },
          {
            "name": "forEach of FilteredMap [js]",
            "value": 688,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 1376\nmean latency: 1453 microseconds"
          },
          {
            "name": "forEach of FilteredMapView [js]",
            "value": 1366,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 2732\nmean latency: 732 microseconds"
          },
          {
            "name": "forEach of TreeSet [js]",
            "value": 2182.5,
            "range": "±3.23%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 4365\nmean latency: 458 microseconds"
          },
          {
            "name": "forEach of quiver.TreeSet [js]",
            "value": 3600,
            "range": "±3.72%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 7200\nmean latency: 278 microseconds"
          },
          {
            "name": "addAll to empty SortedMap [js]",
            "value": 74.46276861569216,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 149\nmean latency: 13430 microseconds"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key [js]",
            "value": 64.87025948103792,
            "range": "±1.09%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 130\nmean latency: 15415 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap [js]",
            "value": 251838.5,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 503677\nmean latency: 4 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView [js]",
            "value": 135.5,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 271\nmean latency: 7380 microseconds"
          },
          {
            "name": "addAll to empty FilteredMap [js]",
            "value": 0.8493290300662477,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 5\nmean latency: 1177400 microseconds"
          },
          {
            "name": "addAll to empty TreeSet [js]",
            "value": 590.5,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 1181\nmean latency: 1693 microseconds"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet [js]",
            "value": 324941.5,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 649883\nmean latency: 3 microseconds"
          },
          {
            "name": "addAll to empty quiver.TreeSet [js]",
            "value": 129.87012987012986,
            "range": "±0.80%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 260\nmean latency: 7700 microseconds"
          },
          {
            "name": "elementAt of TreeSet [js]",
            "value": 413083.5,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 826167\nmean latency: 2 microseconds"
          },
          {
            "name": "elementAt of TreeSetView [js]",
            "value": 228783.5,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 457567\nmean latency: 4 microseconds"
          },
          {
            "name": "elementAt of quiver.TreeSet [js]",
            "value": 11669.5,
            "range": "±4.19%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 23339\nmean latency: 86 microseconds"
          },
          {
            "name": "indexOf of TreeSet [js]",
            "value": 345341,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 690682\nmean latency: 3 microseconds"
          },
          {
            "name": "indexOf of TreeSetView [js]",
            "value": 305715,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 611430\nmean latency: 3 microseconds"
          },
          {
            "name": "first of TreeSet [js]",
            "value": 498284.50000000006,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 996569\nmean latency: 2 microseconds"
          },
          {
            "name": "first of TreeSetView [js]",
            "value": 505056,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 1010112\nmean latency: 2 microseconds"
          },
          {
            "name": "first of quiver.TreeSet [js]",
            "value": 495716.50000000006,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 991433\nmean latency: 2 microseconds"
          },
          {
            "name": "last of TreeSet [js]",
            "value": 491979.49999999994,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 983959\nmean latency: 2 microseconds"
          },
          {
            "name": "last of TreeSetView [js]",
            "value": 502139,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 1004278\nmean latency: 2 microseconds"
          },
          {
            "name": "last of quiver.TreeSet [js]",
            "value": 495815,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 991630\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value [js]",
            "value": 46799.49999999999,
            "range": "±4.34%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 93599\nmean latency: 21 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value [js]",
            "value": 159989.5,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 319979\nmean latency: 6 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value [js]",
            "value": 65398,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 130796\nmean latency: 15 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value [js]",
            "value": 45714.5,
            "range": "±4.34%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 91429\nmean latency: 22 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same value [js]",
            "value": 154725.5,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 309451\nmean latency: 6 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same order value [js]",
            "value": 61684.99999999999,
            "range": "±4.36%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 123370\nmean latency: 16 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, adding new value [js]",
            "value": 64799,
            "range": "±4.36%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 129598\nmean latency: 15 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value [js]",
            "value": 62076.99999999999,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 124154\nmean latency: 16 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value [js]",
            "value": 154482,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 308964\nmean latency: 6 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value [js]",
            "value": 65290.5,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 130581\nmean latency: 15 microseconds"
          },
          {
            "name": "completeInterval of FilteredMap [wasm]",
            "value": 1905947.5,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 3811895\nmean latency: 1 microseconds"
          },
          {
            "name": "completeInterval of FilteredMapView [wasm]",
            "value": 515038.2424808788,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1030077\nmean latency: 2 microseconds"
          },
          {
            "name": "length of FilteredMap [wasm]",
            "value": 1908654,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 3817308\nmean latency: 1 microseconds"
          },
          {
            "name": "length of FilteredMapView [wasm]",
            "value": 513389.7433051283,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1026780\nmean latency: 2 microseconds"
          },
          {
            "name": "length of TreeSet [wasm]",
            "value": 2338249.5,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 4676499\nmean latency: 0 microseconds"
          },
          {
            "name": "length of quiver.TreeSet [wasm]",
            "value": 2399440,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 4798880\nmean latency: 0 microseconds"
          },
          {
            "name": "forEach of FilteredMap [wasm]",
            "value": 1954.2264083028376,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 3909\nmean latency: 512 microseconds"
          },
          {
            "name": "forEach of FilteredMapView [wasm]",
            "value": 3552.795714246431,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 7106\nmean latency: 281 microseconds"
          },
          {
            "name": "forEach of TreeSet [wasm]",
            "value": 3346.4063006235824,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 6693\nmean latency: 299 microseconds"
          },
          {
            "name": "forEach of quiver.TreeSet [wasm]",
            "value": 6715.724655289133,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 13432\nmean latency: 149 microseconds"
          },
          {
            "name": "addAll to empty SortedMap [wasm]",
            "value": 64.48961717163537,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 129\nmean latency: 15506 microseconds"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key [wasm]",
            "value": 45.05086539742042,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 91\nmean latency: 22197 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap [wasm]",
            "value": 1081222.5,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 2162445\nmean latency: 1 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView [wasm]",
            "value": 219.56854780356596,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 440\nmean latency: 4554 microseconds"
          },
          {
            "name": "addAll to empty FilteredMap [wasm]",
            "value": 1.3574713458160967,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 5\nmean latency: 736664 microseconds"
          },
          {
            "name": "addAll to empty TreeSet [wasm]",
            "value": 374.25935123715453,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 749\nmean latency: 2672 microseconds"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet [wasm]",
            "value": 2146227.5,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 4292455\nmean latency: 0 microseconds"
          },
          {
            "name": "addAll to empty quiver.TreeSet [wasm]",
            "value": 296.80677878700965,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 594\nmean latency: 3369 microseconds"
          },
          {
            "name": "elementAt of TreeSet [wasm]",
            "value": 2678879,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 5357758\nmean latency: 0 microseconds"
          },
          {
            "name": "elementAt of TreeSetView [wasm]",
            "value": 713839.5,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1427679\nmean latency: 1 microseconds"
          },
          {
            "name": "elementAt of quiver.TreeSet [wasm]",
            "value": 32034.291777103448,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 64069\nmean latency: 31 microseconds"
          },
          {
            "name": "indexOf of TreeSet [wasm]",
            "value": 1860331.4999999998,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 3720663\nmean latency: 1 microseconds"
          },
          {
            "name": "indexOf of TreeSetView [wasm]",
            "value": 1491034.5,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 2982069\nmean latency: 1 microseconds"
          },
          {
            "name": "first of TreeSet [wasm]",
            "value": 3344280,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 6688560\nmean latency: 0 microseconds"
          },
          {
            "name": "first of TreeSetView [wasm]",
            "value": 3503464.4999999995,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 7006929\nmean latency: 0 microseconds"
          },
          {
            "name": "first of quiver.TreeSet [wasm]",
            "value": 3378874,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 6757748\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSet [wasm]",
            "value": 3306446.5,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 6612893\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSetView [wasm]",
            "value": 3509838.5,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 7019677\nmean latency: 0 microseconds"
          },
          {
            "name": "last of quiver.TreeSet [wasm]",
            "value": 3255122.5,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 6510245\nmean latency: 0 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value [wasm]",
            "value": 159618.68076263848,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 319238\nmean latency: 6 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value [wasm]",
            "value": 751283.5,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1502567\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value [wasm]",
            "value": 215823.2841767158,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 431647\nmean latency: 5 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value [wasm]",
            "value": 154473.76828934756,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 308948\nmean latency: 6 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same value [wasm]",
            "value": 691261.6543691728,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1382524\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same order value [wasm]",
            "value": 228369.3858153071,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 456739\nmean latency: 4 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, adding new value [wasm]",
            "value": 208462.44839147385,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 416957\nmean latency: 5 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value [wasm]",
            "value": 243785.6343215485,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 487572\nmean latency: 4 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value [wasm]",
            "value": 764855.5,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1529711\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value [wasm]",
            "value": 238284.00000000003,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 476568\nmean latency: 4 microseconds"
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
          "id": "b854b4ff5c8b923db690452ea5f7707766710242",
          "message": "chore: upgrade to benchmark_test 0.1.1+1",
          "timestamp": "2026-05-28T15:31:12+02:00",
          "tree_id": "09792036cdd2bacfda48d2bee5961223aaabf847",
          "url": "https://github.com/appsup-dart/sortedmap/commit/b854b4ff5c8b923db690452ea5f7707766710242"
        },
        "date": 1779984004837,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "completeInterval of FilteredMap [jit]",
            "value": 2294679.5,
            "range": "±0.71%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 4589359\nmean latency: 0 microseconds"
          },
          {
            "name": "completeInterval of FilteredMapView [jit]",
            "value": 1034952,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2069904\nmean latency: 1 microseconds"
          },
          {
            "name": "length of FilteredMap [jit]",
            "value": 2454414.5,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 4908829\nmean latency: 0 microseconds"
          },
          {
            "name": "length of FilteredMapView [jit]",
            "value": 1060969.5,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2121939\nmean latency: 1 microseconds"
          },
          {
            "name": "length of TreeSet [jit]",
            "value": 2698088,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5396176\nmean latency: 0 microseconds"
          },
          {
            "name": "length of quiver.TreeSet [jit]",
            "value": 2681952.5,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5363905\nmean latency: 0 microseconds"
          },
          {
            "name": "forEach of FilteredMap [jit]",
            "value": 3040.1655817860033,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 6081\nmean latency: 329 microseconds"
          },
          {
            "name": "forEach of FilteredMapView [jit]",
            "value": 6060.6939349562845,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 12122\nmean latency: 165 microseconds"
          },
          {
            "name": "forEach of TreeSet [jit]",
            "value": 4516.849573661392,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 9035\nmean latency: 221 microseconds"
          },
          {
            "name": "forEach of quiver.TreeSet [jit]",
            "value": 5562.721863906805,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 11126\nmean latency: 180 microseconds"
          },
          {
            "name": "addAll to empty SortedMap [jit]",
            "value": 160.6362392362495,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 322\nmean latency: 6225 microseconds"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key [jit]",
            "value": 107.06088976064672,
            "range": "±0.56%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 215\nmean latency: 9340 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap [jit]",
            "value": 2032524,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 4065048\nmean latency: 0 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView [jit]",
            "value": 436.8953635604273,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 874\nmean latency: 2289 microseconds"
          },
          {
            "name": "addAll to empty FilteredMap [jit]",
            "value": 2.1269436542848768,
            "range": "±9.53%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5\nmean latency: 470158 microseconds"
          },
          {
            "name": "addAll to empty TreeSet [jit]",
            "value": 942.7063469729178,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 1886\nmean latency: 1061 microseconds"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet [jit]",
            "value": 2474008,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 4948016\nmean latency: 0 microseconds"
          },
          {
            "name": "addAll to empty quiver.TreeSet [jit]",
            "value": 551.8590000254935,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 1104\nmean latency: 1812 microseconds"
          },
          {
            "name": "elementAt of TreeSet [jit]",
            "value": 2226912,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 4453824\nmean latency: 0 microseconds"
          },
          {
            "name": "elementAt of TreeSetView [jit]",
            "value": 1079800.5,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2159601\nmean latency: 1 microseconds"
          },
          {
            "name": "elementAt of quiver.TreeSet [jit]",
            "value": 23552.064286810695,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 47105\nmean latency: 42 microseconds"
          },
          {
            "name": "indexOf of TreeSet [jit]",
            "value": 1840779.5000000002,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 3681559\nmean latency: 1 microseconds"
          },
          {
            "name": "indexOf of TreeSetView [jit]",
            "value": 1710999,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 3421998\nmean latency: 1 microseconds"
          },
          {
            "name": "first of TreeSet [jit]",
            "value": 2888446.5,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5776893\nmean latency: 0 microseconds"
          },
          {
            "name": "first of TreeSetView [jit]",
            "value": 3284116.5,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 6568233\nmean latency: 0 microseconds"
          },
          {
            "name": "first of quiver.TreeSet [jit]",
            "value": 2908784.5,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5817569\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSet [jit]",
            "value": 2706747.5,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5413495\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSetView [jit]",
            "value": 3190984.9999999995,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 6381970\nmean latency: 0 microseconds"
          },
          {
            "name": "last of quiver.TreeSet [jit]",
            "value": 2745378.5,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5490757\nmean latency: 0 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value [jit]",
            "value": 314086.5,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 628173\nmean latency: 3 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value [jit]",
            "value": 1111316.5,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2222633\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value [jit]",
            "value": 444253.5,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 888507\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value [jit]",
            "value": 303340,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 606680\nmean latency: 3 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same value [jit]",
            "value": 1034125.5,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2068251\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same order value [jit]",
            "value": 510912.2445438778,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 1021825\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, adding new value [jit]",
            "value": 391377.49999999994,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 782755\nmean latency: 3 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value [jit]",
            "value": 485656.5,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 971313\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value [jit]",
            "value": 1123194,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2246388\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value [jit]",
            "value": 492968.00000000006,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 985936\nmean latency: 2 microseconds"
          },
          {
            "name": "completeInterval of FilteredMap [aot]",
            "value": 2959881.9999999995,
            "range": "±0.59%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 5919764\nmean latency: 0 microseconds"
          },
          {
            "name": "completeInterval of FilteredMapView [aot]",
            "value": 1119579,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2239158\nmean latency: 1 microseconds"
          },
          {
            "name": "length of FilteredMap [aot]",
            "value": 2819337.5,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 5638675\nmean latency: 0 microseconds"
          },
          {
            "name": "length of FilteredMapView [aot]",
            "value": 1099335,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2198670\nmean latency: 1 microseconds"
          },
          {
            "name": "length of TreeSet [aot]",
            "value": 3367935.4999999995,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 6735871\nmean latency: 0 microseconds"
          },
          {
            "name": "length of quiver.TreeSet [aot]",
            "value": 3382924.5000000005,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 6765849\nmean latency: 0 microseconds"
          },
          {
            "name": "forEach of FilteredMap [aot]",
            "value": 3188.495217257174,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 6377\nmean latency: 314 microseconds"
          },
          {
            "name": "forEach of FilteredMapView [aot]",
            "value": 6360.758291184935,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 12722\nmean latency: 157 microseconds"
          },
          {
            "name": "forEach of TreeSet [aot]",
            "value": 4758.086046513954,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 9517\nmean latency: 210 microseconds"
          },
          {
            "name": "forEach of quiver.TreeSet [aot]",
            "value": 7364.474224340214,
            "range": "±0.08%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 14729\nmean latency: 136 microseconds"
          },
          {
            "name": "addAll to empty SortedMap [aot]",
            "value": 127.62821899805866,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 256\nmean latency: 7835 microseconds"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key [aot]",
            "value": 84.57627287290674,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 170\nmean latency: 11824 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap [aot]",
            "value": 2286158.5,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 4572317\nmean latency: 0 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView [aot]",
            "value": 350.2380219595742,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 701\nmean latency: 2855 microseconds"
          },
          {
            "name": "addAll to empty FilteredMap [aot]",
            "value": 2.2750416105110562,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 5\nmean latency: 439552 microseconds"
          },
          {
            "name": "addAll to empty TreeSet [aot]",
            "value": 576.6606352161753,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 1154\nmean latency: 1734 microseconds"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet [aot]",
            "value": 2867463.5,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 5734927\nmean latency: 0 microseconds"
          },
          {
            "name": "addAll to empty quiver.TreeSet [aot]",
            "value": 416.2321546085094,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 833\nmean latency: 2403 microseconds"
          },
          {
            "name": "elementAt of TreeSet [aot]",
            "value": 2768876.5,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 5537753\nmean latency: 0 microseconds"
          },
          {
            "name": "elementAt of TreeSetView [aot]",
            "value": 1236122,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2472244\nmean latency: 1 microseconds"
          },
          {
            "name": "elementAt of quiver.TreeSet [aot]",
            "value": 29257.61965094454,
            "range": "±0.07%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 58516\nmean latency: 34 microseconds"
          },
          {
            "name": "indexOf of TreeSet [aot]",
            "value": 1939170,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 3878340\nmean latency: 1 microseconds"
          },
          {
            "name": "indexOf of TreeSetView [aot]",
            "value": 1759432.5,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 3518865\nmean latency: 1 microseconds"
          },
          {
            "name": "first of TreeSet [aot]",
            "value": 3706909.5,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7413819\nmean latency: 0 microseconds"
          },
          {
            "name": "first of TreeSetView [aot]",
            "value": 3859230.5,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7718461\nmean latency: 0 microseconds"
          },
          {
            "name": "first of quiver.TreeSet [aot]",
            "value": 3695866.5,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7391733\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSet [aot]",
            "value": 3714108,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7428216\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSetView [aot]",
            "value": 3891894,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7783788\nmean latency: 0 microseconds"
          },
          {
            "name": "last of quiver.TreeSet [aot]",
            "value": 3529992.5,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7059985\nmean latency: 0 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value [aot]",
            "value": 294550.35272482364,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 589101\nmean latency: 3 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value [aot]",
            "value": 1076346,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2152692\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value [aot]",
            "value": 396929.8015350992,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 793860\nmean latency: 3 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value [aot]",
            "value": 278216.5,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 556433\nmean latency: 4 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same value [aot]",
            "value": 1019200,
            "range": "±0.07%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2038400\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same order value [aot]",
            "value": 409279.7953601023,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 818560\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, adding new value [aot]",
            "value": 378329.8108350946,
            "range": "±0.50%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 756660\nmean latency: 3 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value [aot]",
            "value": 426146.99999999994,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 852294\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value [aot]",
            "value": 1087020,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2174040\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value [aot]",
            "value": 454789,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 909578\nmean latency: 2 microseconds"
          },
          {
            "name": "completeInterval of FilteredMap [js]",
            "value": 308674.5,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 617349\nmean latency: 3 microseconds"
          },
          {
            "name": "completeInterval of FilteredMapView [js]",
            "value": 164393,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 328786\nmean latency: 6 microseconds"
          },
          {
            "name": "length of FilteredMap [js]",
            "value": 257170.5,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 514341\nmean latency: 4 microseconds"
          },
          {
            "name": "length of FilteredMapView [js]",
            "value": 163038.5,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 326077\nmean latency: 6 microseconds"
          },
          {
            "name": "length of TreeSet [js]",
            "value": 330826,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 661652\nmean latency: 3 microseconds"
          },
          {
            "name": "length of quiver.TreeSet [js]",
            "value": 339097,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 678194\nmean latency: 3 microseconds"
          },
          {
            "name": "forEach of FilteredMap [js]",
            "value": 589.5,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 1179\nmean latency: 1696 microseconds"
          },
          {
            "name": "forEach of FilteredMapView [js]",
            "value": 1272,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 2544\nmean latency: 786 microseconds"
          },
          {
            "name": "forEach of TreeSet [js]",
            "value": 2199.5,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 4399\nmean latency: 455 microseconds"
          },
          {
            "name": "forEach of quiver.TreeSet [js]",
            "value": 3604,
            "range": "±3.73%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 7208\nmean latency: 277 microseconds"
          },
          {
            "name": "addAll to empty SortedMap [js]",
            "value": 72.56461232604373,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 146\nmean latency: 13781 microseconds"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key [js]",
            "value": 62.56206554121152,
            "range": "±1.16%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 126\nmean latency: 15984 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap [js]",
            "value": 251051,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 502102\nmean latency: 4 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView [js]",
            "value": 133.7325349301397,
            "range": "±0.86%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 268\nmean latency: 7478 microseconds"
          },
          {
            "name": "addAll to empty FilteredMap [js]",
            "value": 0.8163265306122449,
            "range": "±0.91%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 5\nmean latency: 1225000 microseconds"
          },
          {
            "name": "addAll to empty TreeSet [js]",
            "value": 555.7221389305347,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 1112\nmean latency: 1799 microseconds"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet [js]",
            "value": 315276,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 630552\nmean latency: 3 microseconds"
          },
          {
            "name": "addAll to empty quiver.TreeSet [js]",
            "value": 132.8007988017973,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 266\nmean latency: 7530 microseconds"
          },
          {
            "name": "elementAt of TreeSet [js]",
            "value": 385156,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 770312\nmean latency: 3 microseconds"
          },
          {
            "name": "elementAt of TreeSetView [js]",
            "value": 215802,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 431604\nmean latency: 5 microseconds"
          },
          {
            "name": "elementAt of quiver.TreeSet [js]",
            "value": 11635.5,
            "range": "±4.19%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 23271\nmean latency: 86 microseconds"
          },
          {
            "name": "indexOf of TreeSet [js]",
            "value": 327604,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 655208\nmean latency: 3 microseconds"
          },
          {
            "name": "indexOf of TreeSetView [js]",
            "value": 287680,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 575360\nmean latency: 3 microseconds"
          },
          {
            "name": "first of TreeSet [js]",
            "value": 465843.99999999994,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 931688\nmean latency: 2 microseconds"
          },
          {
            "name": "first of TreeSetView [js]",
            "value": 469200,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 938400\nmean latency: 2 microseconds"
          },
          {
            "name": "first of quiver.TreeSet [js]",
            "value": 466362,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 932724\nmean latency: 2 microseconds"
          },
          {
            "name": "last of TreeSet [js]",
            "value": 461132.5,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 922265\nmean latency: 2 microseconds"
          },
          {
            "name": "last of TreeSetView [js]",
            "value": 468860.00000000006,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 937720\nmean latency: 2 microseconds"
          },
          {
            "name": "last of quiver.TreeSet [js]",
            "value": 452306.5,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 904613\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value [js]",
            "value": 44246.5,
            "range": "±4.34%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 88493\nmean latency: 23 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value [js]",
            "value": 159397.5,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 318795\nmean latency: 6 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value [js]",
            "value": 63602,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 127204\nmean latency: 16 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value [js]",
            "value": 43836.5,
            "range": "±4.34%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 87673\nmean latency: 23 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same value [js]",
            "value": 150459.5,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 300919\nmean latency: 7 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same order value [js]",
            "value": 60463,
            "range": "±4.36%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 120926\nmean latency: 17 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, adding new value [js]",
            "value": 61371.00000000001,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 122742\nmean latency: 16 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value [js]",
            "value": 63908,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 127816\nmean latency: 16 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value [js]",
            "value": 154372,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 308744\nmean latency: 6 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value [js]",
            "value": 63402.5,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 126805\nmean latency: 16 microseconds"
          },
          {
            "name": "completeInterval of FilteredMap [wasm]",
            "value": 1944207.5,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 3888415\nmean latency: 1 microseconds"
          },
          {
            "name": "completeInterval of FilteredMapView [wasm]",
            "value": 510943.7445281277,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1021888\nmean latency: 2 microseconds"
          },
          {
            "name": "length of FilteredMap [wasm]",
            "value": 1924005,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 3848010\nmean latency: 1 microseconds"
          },
          {
            "name": "length of FilteredMapView [wasm]",
            "value": 506457.24677137664,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1012915\nmean latency: 2 microseconds"
          },
          {
            "name": "length of TreeSet [wasm]",
            "value": 2364101.5,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 4728203\nmean latency: 0 microseconds"
          },
          {
            "name": "length of quiver.TreeSet [wasm]",
            "value": 2455202.5,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 4910405\nmean latency: 0 microseconds"
          },
          {
            "name": "forEach of FilteredMap [wasm]",
            "value": 1904.2315033580267,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 3809\nmean latency: 525 microseconds"
          },
          {
            "name": "forEach of FilteredMapView [wasm]",
            "value": 3469.795282078357,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 6940\nmean latency: 288 microseconds"
          },
          {
            "name": "forEach of TreeSet [wasm]",
            "value": 3250.4073633901435,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 6501\nmean latency: 308 microseconds"
          },
          {
            "name": "forEach of quiver.TreeSet [wasm]",
            "value": 6563.911387196273,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 13128\nmean latency: 152 microseconds"
          },
          {
            "name": "addAll to empty SortedMap [wasm]",
            "value": 62.5263007455517,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 126\nmean latency: 15993 microseconds"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key [wasm]",
            "value": 43.49967375244686,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 87\nmean latency: 22989 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap [wasm]",
            "value": 1046569.5,
            "range": "±0.58%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 2093139\nmean latency: 1 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView [wasm]",
            "value": 213.1404320910624,
            "range": "±1.02%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 427\nmean latency: 4692 microseconds"
          },
          {
            "name": "addAll to empty FilteredMap [wasm]",
            "value": 1.3210810987907087,
            "range": "±0.54%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 5\nmean latency: 756956 microseconds"
          },
          {
            "name": "addAll to empty TreeSet [wasm]",
            "value": 362.2592787092977,
            "range": "±0.65%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 725\nmean latency: 2760 microseconds"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet [wasm]",
            "value": 2119587.5,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 4239175\nmean latency: 0 microseconds"
          },
          {
            "name": "addAll to empty quiver.TreeSet [wasm]",
            "value": 327.1321399086727,
            "range": "±0.79%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 655\nmean latency: 3057 microseconds"
          },
          {
            "name": "elementAt of TreeSet [wasm]",
            "value": 2700511,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 5401022\nmean latency: 0 microseconds"
          },
          {
            "name": "elementAt of TreeSetView [wasm]",
            "value": 708317.6458411771,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1416636\nmean latency: 1 microseconds"
          },
          {
            "name": "elementAt of quiver.TreeSet [wasm]",
            "value": 31376.96862303138,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 62754\nmean latency: 32 microseconds"
          },
          {
            "name": "indexOf of TreeSet [wasm]",
            "value": 1906433.5,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 3812867\nmean latency: 1 microseconds"
          },
          {
            "name": "indexOf of TreeSetView [wasm]",
            "value": 1493762.5,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 2987525\nmean latency: 1 microseconds"
          },
          {
            "name": "first of TreeSet [wasm]",
            "value": 3523839.5000000005,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 7047679\nmean latency: 0 microseconds"
          },
          {
            "name": "first of TreeSetView [wasm]",
            "value": 3740391.0000000005,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 7480782\nmean latency: 0 microseconds"
          },
          {
            "name": "first of quiver.TreeSet [wasm]",
            "value": 3529936.5,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 7059873\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSet [wasm]",
            "value": 3531810.5,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 7063621\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSetView [wasm]",
            "value": 3658133.5,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 7316267\nmean latency: 0 microseconds"
          },
          {
            "name": "last of quiver.TreeSet [wasm]",
            "value": 3570101,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 7140202\nmean latency: 0 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value [wasm]",
            "value": 145978.92701053648,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 291958\nmean latency: 7 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value [wasm]",
            "value": 729889.1350554324,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1459779\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value [wasm]",
            "value": 198742.30125769874,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 397485\nmean latency: 5 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value [wasm]",
            "value": 138451.29232306153,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 276903\nmean latency: 7 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same value [wasm]",
            "value": 686538.5,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1373077\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same order value [wasm]",
            "value": 243120.87843956077,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 486242\nmean latency: 4 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, adding new value [wasm]",
            "value": 195220.70716893926,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 390442\nmean latency: 5 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value [wasm]",
            "value": 242267.25773274226,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 484535\nmean latency: 4 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value [wasm]",
            "value": 736537,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1473074\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value [wasm]",
            "value": 236375.26362473637,
            "range": "±0.46%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 472751\nmean latency: 4 microseconds"
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
          "id": "b854b4ff5c8b923db690452ea5f7707766710242",
          "message": "chore: upgrade to benchmark_test 0.1.1+1",
          "timestamp": "2026-05-28T15:31:12+02:00",
          "tree_id": "09792036cdd2bacfda48d2bee5961223aaabf847",
          "url": "https://github.com/appsup-dart/sortedmap/commit/b854b4ff5c8b923db690452ea5f7707766710242"
        },
        "date": 1779986558771,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "completeInterval of FilteredMap [jit]",
            "value": 2502727,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5005454\nmean latency: 0 microseconds"
          },
          {
            "name": "completeInterval of FilteredMapView [jit]",
            "value": 1030387.5,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2060775\nmean latency: 1 microseconds"
          },
          {
            "name": "length of FilteredMap [jit]",
            "value": 2536982,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5073964\nmean latency: 0 microseconds"
          },
          {
            "name": "length of FilteredMapView [jit]",
            "value": 1077102,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2154204\nmean latency: 1 microseconds"
          },
          {
            "name": "length of TreeSet [jit]",
            "value": 2877442.5,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5754885\nmean latency: 0 microseconds"
          },
          {
            "name": "length of quiver.TreeSet [jit]",
            "value": 2912054.5,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5824109\nmean latency: 0 microseconds"
          },
          {
            "name": "forEach of FilteredMap [jit]",
            "value": 3065.779263893,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 6132\nmean latency: 326 microseconds"
          },
          {
            "name": "forEach of FilteredMapView [jit]",
            "value": 6012.822621732659,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 12026\nmean latency: 166 microseconds"
          },
          {
            "name": "forEach of TreeSet [jit]",
            "value": 4603.854978568175,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 9208\nmean latency: 217 microseconds"
          },
          {
            "name": "forEach of quiver.TreeSet [jit]",
            "value": 5740.799072032479,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 11482\nmean latency: 174 microseconds"
          },
          {
            "name": "addAll to empty SortedMap [jit]",
            "value": 161.06914005036526,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 323\nmean latency: 6209 microseconds"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key [jit]",
            "value": 109.44855917718671,
            "range": "±0.61%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 219\nmean latency: 9137 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap [jit]",
            "value": 2059482,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 4118964\nmean latency: 0 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView [jit]",
            "value": 431.0930481625346,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 863\nmean latency: 2320 microseconds"
          },
          {
            "name": "addAll to empty FilteredMap [jit]",
            "value": 2.10092684488689,
            "range": "±9.82%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5\nmean latency: 475980 microseconds"
          },
          {
            "name": "addAll to empty TreeSet [jit]",
            "value": 950.7461507777424,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 1902\nmean latency: 1052 microseconds"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet [jit]",
            "value": 2634546.5,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5269093\nmean latency: 0 microseconds"
          },
          {
            "name": "addAll to empty quiver.TreeSet [jit]",
            "value": 554.6602705842671,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 1110\nmean latency: 1803 microseconds"
          },
          {
            "name": "elementAt of TreeSet [jit]",
            "value": 2237570,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 4475140\nmean latency: 0 microseconds"
          },
          {
            "name": "elementAt of TreeSetView [jit]",
            "value": 1069917.5,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2139835\nmean latency: 1 microseconds"
          },
          {
            "name": "elementAt of quiver.TreeSet [jit]",
            "value": 23702.739269868034,
            "range": "±0.07%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 47406\nmean latency: 42 microseconds"
          },
          {
            "name": "indexOf of TreeSet [jit]",
            "value": 1892027.0000000002,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 3784054\nmean latency: 1 microseconds"
          },
          {
            "name": "indexOf of TreeSetView [jit]",
            "value": 1778444,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 3556888\nmean latency: 1 microseconds"
          },
          {
            "name": "first of TreeSet [jit]",
            "value": 2977267,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5954534\nmean latency: 0 microseconds"
          },
          {
            "name": "first of TreeSetView [jit]",
            "value": 3408053.5,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 6816107\nmean latency: 0 microseconds"
          },
          {
            "name": "first of quiver.TreeSet [jit]",
            "value": 3232769,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 6465538\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSet [jit]",
            "value": 2826353,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5652706\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSetView [jit]",
            "value": 3420931.5,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 6841863\nmean latency: 0 microseconds"
          },
          {
            "name": "last of quiver.TreeSet [jit]",
            "value": 2966869.5,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 5933739\nmean latency: 0 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value [jit]",
            "value": 333943.8330280835,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 667888\nmean latency: 3 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value [jit]",
            "value": 1144437.5,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2288875\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value [jit]",
            "value": 471907.00000000006,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 943814\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value [jit]",
            "value": 325219.1747808252,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 650439\nmean latency: 3 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same value [jit]",
            "value": 1060065.5,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2120131\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same order value [jit]",
            "value": 502770.5,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 1005541\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, adding new value [jit]",
            "value": 431231.78438410786,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 862464\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value [jit]",
            "value": 498269.2508653745,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 996539\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value [jit]",
            "value": 1136317,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 2272634\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value [jit]",
            "value": 508922.5,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "compile: jit\nsamples: 1017845\nmean latency: 2 microseconds"
          },
          {
            "name": "completeInterval of FilteredMap [aot]",
            "value": 2934926.5,
            "range": "±0.55%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 5869853\nmean latency: 0 microseconds"
          },
          {
            "name": "completeInterval of FilteredMapView [aot]",
            "value": 1167194.5,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2334389\nmean latency: 1 microseconds"
          },
          {
            "name": "length of FilteredMap [aot]",
            "value": 2797420.5,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 5594841\nmean latency: 0 microseconds"
          },
          {
            "name": "length of FilteredMapView [aot]",
            "value": 1129506,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2259012\nmean latency: 1 microseconds"
          },
          {
            "name": "length of TreeSet [aot]",
            "value": 3379426.9999999995,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 6758854\nmean latency: 0 microseconds"
          },
          {
            "name": "length of quiver.TreeSet [aot]",
            "value": 3385808.5,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 6771617\nmean latency: 0 microseconds"
          },
          {
            "name": "forEach of FilteredMap [aot]",
            "value": 3233.762318469592,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 6468\nmean latency: 309 microseconds"
          },
          {
            "name": "forEach of FilteredMapView [aot]",
            "value": 6401.875163434313,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 12804\nmean latency: 156 microseconds"
          },
          {
            "name": "forEach of TreeSet [aot]",
            "value": 4721.405571888562,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 9443\nmean latency: 212 microseconds"
          },
          {
            "name": "forEach of quiver.TreeSet [aot]",
            "value": 7287.051846311451,
            "range": "±0.10%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 14575\nmean latency: 137 microseconds"
          },
          {
            "name": "addAll to empty SortedMap [aot]",
            "value": 128.32374733303809,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 257\nmean latency: 7793 microseconds"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key [aot]",
            "value": 84.9440643336363,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 170\nmean latency: 11772 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap [aot]",
            "value": 2293058,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 4586116\nmean latency: 0 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView [aot]",
            "value": 352.43585667408536,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 705\nmean latency: 2837 microseconds"
          },
          {
            "name": "addAll to empty FilteredMap [aot]",
            "value": 2.2766731612563045,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 5\nmean latency: 439237 microseconds"
          },
          {
            "name": "addAll to empty TreeSet [aot]",
            "value": 580.3607134287771,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 1161\nmean latency: 1723 microseconds"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet [aot]",
            "value": 2879206,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 5758412\nmean latency: 0 microseconds"
          },
          {
            "name": "addAll to empty quiver.TreeSet [aot]",
            "value": 417.1235459997352,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 835\nmean latency: 2397 microseconds"
          },
          {
            "name": "elementAt of TreeSet [aot]",
            "value": 2786704,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 5573408\nmean latency: 0 microseconds"
          },
          {
            "name": "elementAt of TreeSetView [aot]",
            "value": 1255830,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2511660\nmean latency: 1 microseconds"
          },
          {
            "name": "elementAt of quiver.TreeSet [aot]",
            "value": 29192.854035729822,
            "range": "±0.06%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 58386\nmean latency: 34 microseconds"
          },
          {
            "name": "indexOf of TreeSet [aot]",
            "value": 1927462,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 3854924\nmean latency: 1 microseconds"
          },
          {
            "name": "indexOf of TreeSetView [aot]",
            "value": 1767288.5,
            "range": "±0.13%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 3534577\nmean latency: 1 microseconds"
          },
          {
            "name": "first of TreeSet [aot]",
            "value": 3713253.0000000005,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7426506\nmean latency: 0 microseconds"
          },
          {
            "name": "first of TreeSetView [aot]",
            "value": 3904646,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7809292\nmean latency: 0 microseconds"
          },
          {
            "name": "first of quiver.TreeSet [aot]",
            "value": 3677221.0000000005,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7354442\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSet [aot]",
            "value": 3523677,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7047354\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSetView [aot]",
            "value": 3906073.5,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 7812147\nmean latency: 0 microseconds"
          },
          {
            "name": "last of quiver.TreeSet [aot]",
            "value": 3437510.5,
            "range": "±0.14%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 6875021\nmean latency: 0 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value [aot]",
            "value": 304348.5,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 608697\nmean latency: 3 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value [aot]",
            "value": 1086551.5,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2173103\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value [aot]",
            "value": 411052.5,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 822105\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value [aot]",
            "value": 289462.71053728944,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 578926\nmean latency: 3 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same value [aot]",
            "value": 1026859,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2053718\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same order value [aot]",
            "value": 434645.7826771086,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 869292\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, adding new value [aot]",
            "value": 394314.3028428486,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 788629\nmean latency: 3 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value [aot]",
            "value": 439471.5,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 878943\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value [aot]",
            "value": 1079198,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 2158396\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value [aot]",
            "value": 453131.7734341133,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "compile: aot\nsamples: 906264\nmean latency: 2 microseconds"
          },
          {
            "name": "completeInterval of FilteredMap [js]",
            "value": 310997,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 621994\nmean latency: 3 microseconds"
          },
          {
            "name": "completeInterval of FilteredMapView [js]",
            "value": 174189,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 348378\nmean latency: 6 microseconds"
          },
          {
            "name": "length of FilteredMap [js]",
            "value": 259319,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 518638\nmean latency: 4 microseconds"
          },
          {
            "name": "length of FilteredMapView [js]",
            "value": 163213,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 326426\nmean latency: 6 microseconds"
          },
          {
            "name": "length of TreeSet [js]",
            "value": 342960,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 685920\nmean latency: 3 microseconds"
          },
          {
            "name": "length of quiver.TreeSet [js]",
            "value": 339748.5,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 679497\nmean latency: 3 microseconds"
          },
          {
            "name": "forEach of FilteredMap [js]",
            "value": 686.1569215392303,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 1373\nmean latency: 1457 microseconds"
          },
          {
            "name": "forEach of FilteredMapView [js]",
            "value": 1303.5,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 2607\nmean latency: 767 microseconds"
          },
          {
            "name": "forEach of TreeSet [js]",
            "value": 2200,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 4400\nmean latency: 455 microseconds"
          },
          {
            "name": "forEach of quiver.TreeSet [js]",
            "value": 3588.9999999999995,
            "range": "±3.72%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 7178\nmean latency: 279 microseconds"
          },
          {
            "name": "addAll to empty SortedMap [js]",
            "value": 72,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 144\nmean latency: 13889 microseconds"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key [js]",
            "value": 61.84538653366583,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 124\nmean latency: 16169 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap [js]",
            "value": 264632.5,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 529265\nmean latency: 4 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView [js]",
            "value": 134.5962113659023,
            "range": "±0.90%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 270\nmean latency: 7430 microseconds"
          },
          {
            "name": "addAll to empty FilteredMap [js]",
            "value": 0.829737802854298,
            "range": "±0.66%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 5\nmean latency: 1205200 microseconds"
          },
          {
            "name": "addAll to empty TreeSet [js]",
            "value": 567.216391804098,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 1135\nmean latency: 1763 microseconds"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet [js]",
            "value": 313700,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 627400\nmean latency: 3 microseconds"
          },
          {
            "name": "addAll to empty quiver.TreeSet [js]",
            "value": 133.7325349301397,
            "range": "±0.81%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 268\nmean latency: 7478 microseconds"
          },
          {
            "name": "elementAt of TreeSet [js]",
            "value": 404363,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 808726\nmean latency: 2 microseconds"
          },
          {
            "name": "elementAt of TreeSetView [js]",
            "value": 223586,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 447172\nmean latency: 4 microseconds"
          },
          {
            "name": "elementAt of quiver.TreeSet [js]",
            "value": 11585,
            "range": "±4.19%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 23170\nmean latency: 86 microseconds"
          },
          {
            "name": "indexOf of TreeSet [js]",
            "value": 331557,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 663114\nmean latency: 3 microseconds"
          },
          {
            "name": "indexOf of TreeSetView [js]",
            "value": 298486,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 596972\nmean latency: 3 microseconds"
          },
          {
            "name": "first of TreeSet [js]",
            "value": 488507.99999999994,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 977016\nmean latency: 2 microseconds"
          },
          {
            "name": "first of TreeSetView [js]",
            "value": 497769.5,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 995539\nmean latency: 2 microseconds"
          },
          {
            "name": "first of quiver.TreeSet [js]",
            "value": 494271,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 988542\nmean latency: 2 microseconds"
          },
          {
            "name": "last of TreeSet [js]",
            "value": 485197.5,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 970395\nmean latency: 2 microseconds"
          },
          {
            "name": "last of TreeSetView [js]",
            "value": 500300,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 1000600\nmean latency: 2 microseconds"
          },
          {
            "name": "last of quiver.TreeSet [js]",
            "value": 492721.5,
            "range": "±4.38%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 985443\nmean latency: 2 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value [js]",
            "value": 45785,
            "range": "±4.34%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 91570\nmean latency: 22 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value [js]",
            "value": 154027.5,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 308055\nmean latency: 6 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value [js]",
            "value": 66423,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 132846\nmean latency: 15 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value [js]",
            "value": 45502,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 91004\nmean latency: 22 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same value [js]",
            "value": 153457.5,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 306915\nmean latency: 7 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same order value [js]",
            "value": 64014,
            "range": "±4.36%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 128028\nmean latency: 16 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, adding new value [js]",
            "value": 63066.5,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 126133\nmean latency: 16 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value [js]",
            "value": 65126.5,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 130253\nmean latency: 15 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value [js]",
            "value": 158809,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 317618\nmean latency: 6 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value [js]",
            "value": 65733.5,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "compile: js\nsamples: 131467\nmean latency: 15 microseconds"
          },
          {
            "name": "completeInterval of FilteredMap [wasm]",
            "value": 1928375.4999999998,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 3856751\nmean latency: 1 microseconds"
          },
          {
            "name": "completeInterval of FilteredMapView [wasm]",
            "value": 506656.7466716267,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1013314\nmean latency: 2 microseconds"
          },
          {
            "name": "length of FilteredMap [wasm]",
            "value": 1919034.5000000002,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 3838069\nmean latency: 1 microseconds"
          },
          {
            "name": "length of FilteredMapView [wasm]",
            "value": 501566,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1003132\nmean latency: 2 microseconds"
          },
          {
            "name": "length of TreeSet [wasm]",
            "value": 2371351.5,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 4742703\nmean latency: 0 microseconds"
          },
          {
            "name": "length of quiver.TreeSet [wasm]",
            "value": 2410422,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 4820844\nmean latency: 0 microseconds"
          },
          {
            "name": "forEach of FilteredMap [wasm]",
            "value": 1926.8179157069656,
            "range": "±0.38%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 3854\nmean latency: 519 microseconds"
          },
          {
            "name": "forEach of FilteredMapView [wasm]",
            "value": 3495.0945690299927,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 6991\nmean latency: 286 microseconds"
          },
          {
            "name": "forEach of TreeSet [wasm]",
            "value": 3303.826549106172,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 6608\nmean latency: 303 microseconds"
          },
          {
            "name": "forEach of quiver.TreeSet [wasm]",
            "value": 6598.10741260895,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 13197\nmean latency: 152 microseconds"
          },
          {
            "name": "addAll to empty SortedMap [wasm]",
            "value": 62.82985674792661,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 126\nmean latency: 15916 microseconds"
          },
          {
            "name": "addAll to empty SortedMap, ordered by key [wasm]",
            "value": 44.363847352475254,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 89\nmean latency: 22541 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap [wasm]",
            "value": 1033075,
            "range": "±0.52%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 2066150\nmean latency: 1 microseconds"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView [wasm]",
            "value": 216.36401521643646,
            "range": "±0.89%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 433\nmean latency: 4622 microseconds"
          },
          {
            "name": "addAll to empty FilteredMap [wasm]",
            "value": 1.3357626403218654,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 5\nmean latency: 748636 microseconds"
          },
          {
            "name": "addAll to empty TreeSet [wasm]",
            "value": 370.10565242733867,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 741\nmean latency: 2702 microseconds"
          },
          {
            "name": "addAll to empty TreeSet from TreeSet [wasm]",
            "value": 2068809.5,
            "range": "±0.37%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 4137619\nmean latency: 0 microseconds"
          },
          {
            "name": "addAll to empty quiver.TreeSet [wasm]",
            "value": 292.54772122298925,
            "range": "±0.70%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 586\nmean latency: 3418 microseconds"
          },
          {
            "name": "elementAt of TreeSet [wasm]",
            "value": 2696750,
            "range": "±0.43%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 5393500\nmean latency: 0 microseconds"
          },
          {
            "name": "elementAt of TreeSetView [wasm]",
            "value": 707719.5,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1415439\nmean latency: 1 microseconds"
          },
          {
            "name": "elementAt of quiver.TreeSet [wasm]",
            "value": 30955.95356606965,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 61912\nmean latency: 32 microseconds"
          },
          {
            "name": "indexOf of TreeSet [wasm]",
            "value": 1813022.5,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 3626045\nmean latency: 1 microseconds"
          },
          {
            "name": "indexOf of TreeSetView [wasm]",
            "value": 1476796.5,
            "range": "±0.33%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 2953593\nmean latency: 1 microseconds"
          },
          {
            "name": "first of TreeSet [wasm]",
            "value": 3367736,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 6735472\nmean latency: 0 microseconds"
          },
          {
            "name": "first of TreeSetView [wasm]",
            "value": 3651435.9999999995,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 7302872\nmean latency: 0 microseconds"
          },
          {
            "name": "first of quiver.TreeSet [wasm]",
            "value": 3494368,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 6988736\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSet [wasm]",
            "value": 3387916.5,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 6775833\nmean latency: 0 microseconds"
          },
          {
            "name": "last of TreeSetView [wasm]",
            "value": 3622813.5,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 7245627\nmean latency: 0 microseconds"
          },
          {
            "name": "last of quiver.TreeSet [wasm]",
            "value": 3360238.5,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 6720477\nmean latency: 0 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value [wasm]",
            "value": 146228.1344296639,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 292457\nmean latency: 7 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, replacing existing value with same value [wasm]",
            "value": 720120,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1440240\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by value of SortedMap, adding new value [wasm]",
            "value": 205876,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 411752\nmean latency: 5 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value [wasm]",
            "value": 141755.216489567,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 283511\nmean latency: 7 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same value [wasm]",
            "value": 677092.6614536693,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1354186\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, replacing existing value with same order value [wasm]",
            "value": 218892.1716617425,
            "range": "±0.42%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 437785\nmean latency: 5 microseconds"
          },
          {
            "name": "operator []= with order by mapped value of SortedMap, adding new value [wasm]",
            "value": 198831.5,
            "range": "±0.48%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 397663\nmean latency: 5 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value [wasm]",
            "value": 239352.76064723934,
            "range": "±0.53%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 478706\nmean latency: 4 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, replacing existing value with same value [wasm]",
            "value": 722720.5,
            "range": "±0.44%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 1445441\nmean latency: 1 microseconds"
          },
          {
            "name": "operator []= with order by key of SortedMap, adding new value [wasm]",
            "value": 233128.5,
            "range": "±0.47%",
            "unit": "ops/sec",
            "extra": "compile: wasm\nsamples: 466257\nmean latency: 4 microseconds"
          }
        ]
      }
    ]
  }
}