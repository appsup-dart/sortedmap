// Copyright (c) 2016, Rik Bellens. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

// @dart=2.9

/// Contains a [SortedMap] and [FilteredMap] class, which hold a map of objects
/// that can be ordered relative to each other.
///
/// Unlike [SplayTreeMap] the objects can be ordered on both key and value or a
/// combination of both.
///
/// The [FilteredMap] also allows to specify an isValid function on key/value
/// pairs and limit the number of objects allowed in the map.
///
library sortedmap;

import 'dart:collection';
import 'package:quiver/core.dart' as quiver;
import 'src/treeset.dart';
import 'src/treemap.dart';

part 'src/filter.dart';
part 'src/filteredmap.dart';
part 'src/sortedmap.dart';
part 'src/ordering.dart';
part 'src/pair.dart';
