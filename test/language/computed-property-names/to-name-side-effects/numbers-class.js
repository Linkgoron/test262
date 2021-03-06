// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    to name, accessor side effects numbers 2
includes: [compareArray.js]
---*/
var counter = 0;
var key1 = {
  valueOf: function() {
    assert.sameValue(counter++, 0, "The result of `counter++` is `0`");
    return 1;
  },
  toString: null
};
var key2 = {
  valueOf: function() {
    assert.sameValue(counter++, 1, "The result of `counter++` is `1`");
    return 2;
  },
  toString: null
};

class C {
  a() { return 'A'; }
  [key1]() { return 'B'; }
  c() { return 'C'; }
  [key2]() { return 'D'; }
}
assert.sameValue(counter, 2, "The value of `counter` is `2`");
assert.sameValue(new C().a(), 'A', "`new C().a()` returns `'A'`. Defined as `a() { return 'A'; }`");
assert.sameValue(new C()[1](), 'B', "`new C()[1]()` returns `'B'`. Defined as `[key1]() { return 'B'; }`");
assert.sameValue(new C().c(), 'C', "`new C().c()` returns `'C'`. Defined as `c() { return 'C'; }`");
assert.sameValue(new C()[2](), 'D', "`new C()[2]()` returns `'D'`. Defined as `[key2]() { return 'D'; }`");
assert(
  compareArray(Object.keys(C.prototype), []),
  "`compareArray(Object.keys(C.prototype), [])` returns `true`"
);
assert(
  compareArray(Object.getOwnPropertyNames(C.prototype), ['1', '2', 'constructor', 'a', 'c']),
  "`compareArray(Object.getOwnPropertyNames(C.prototype), ['1', '2', 'constructor', 'a', 'c'])` returns `true`"
);
