window.BENCHMARK_DATA = {
  "lastUpdate": 1708507912486,
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
            "value": 0.435,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "795187 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 0.000466,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "932 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 3.64,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "4293419 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 0.000949,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "1898 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 0.000262,
            "range": "±1.11%",
            "unit": "ops/sec",
            "extra": "525 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 1.89e-7,
            "range": "±0.45%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 0.0000614,
            "range": "±0.94%",
            "unit": "ops/sec",
            "extra": "123 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 0.0000454,
            "range": "±0.82%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 2e-7,
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
            "value": 0.472,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "860141 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 0.000505,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "1009 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 4.01,
            "range": "±0.41%",
            "unit": "ops/sec",
            "extra": "4565237 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 0.00106,
            "range": "±0.22%",
            "unit": "ops/sec",
            "extra": "2120 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 0.000277,
            "range": "±0.74%",
            "unit": "ops/sec",
            "extra": "555 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 2.01e-7,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 0.0000634,
            "range": "±0.97%",
            "unit": "ops/sec",
            "extra": "127 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 1.61,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "2473981 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 2.03e-7,
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
            "value": 0.454,
            "range": "±0.49%",
            "unit": "ops/sec",
            "extra": "828457 samples"
          },
          {
            "name": "completeInterval of FilteredMapView",
            "value": 0.000469,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "937 samples"
          },
          {
            "name": "length of FilteredMap",
            "value": 3.89,
            "range": "±0.63%",
            "unit": "ops/sec",
            "extra": "4399008 samples"
          },
          {
            "name": "length of FilteredMapView",
            "value": 1.54,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "2359523 samples"
          },
          {
            "name": "forEach of FilteredMap",
            "value": 0.000245,
            "range": "±0.84%",
            "unit": "ops/sec",
            "extra": "490 samples"
          },
          {
            "name": "forEach of FilteredMapView",
            "value": 1.94e-7,
            "range": "±0.69%",
            "unit": "ops/sec",
            "extra": "5 samples"
          },
          {
            "name": "addAll to empty SortedMap",
            "value": 0.0000614,
            "range": "±0.87%",
            "unit": "ops/sec",
            "extra": "123 samples"
          },
          {
            "name": "addAll to empty SortedMap from SortedMap",
            "value": 1.56,
            "range": "±0.19%",
            "unit": "ops/sec",
            "extra": "2385745 samples"
          },
          {
            "name": "addAll to empty SortedMap from FilteredMapView",
            "value": 2.01e-7,
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
      }
    ]
  }
}