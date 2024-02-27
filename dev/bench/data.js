window.BENCHMARK_DATA = {
  "lastUpdate": 1709048017034,
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
      }
    ]
  }
}