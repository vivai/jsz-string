//@flow
"use strict";

import {test} from "tape";
import {EMPTY_STRING, isEmptyString} from "../src/string";

test("Custom error classes", function(t) {

  t.ok(typeof isEmptyString === "function",
      "Function customError is imported.");

  t.ok(typeof EMPTY_STRING === "string",
    "EMPTY_STRING is imported.");

  t.equal(EMPTY_STRING, "", "EMPTY_STRING === ''");

  let str = EMPTY_STRING;
  t.true(isEmptyString(str), `isEmptyString('${str}') returns true`);

  str = "foo";
  t.false(isEmptyString(str), `isEmptyString('${str}') returns false`);

  str = "  ";
  t.true(isEmptyString(str), `isEmptyString('${str}') returns true`);

  t.true(isEmptyString("\n"), "isEmptyString('\\n') returns true");
  t.true(isEmptyString("\t"), "isEmptyString('\\t') returns true");
  t.true(isEmptyString("\t\n\t"), "isEmptyString('\\t\\n\\t') returns true");

  // --------------------------------------------------------------------------
  t.end();

});
