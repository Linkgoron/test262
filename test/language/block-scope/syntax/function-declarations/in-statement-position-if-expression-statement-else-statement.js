// Copyright (C) Copyright 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    function declarations in statement position in strict mode:
    if ( Expression ) Statement else Statement
negative: SyntaxError
flags: [onlyStrict]
---*/
if (true) {} else function g() {}

