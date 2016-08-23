//@flow

/**
 * @module jsz-string
 * This module provides utilities for working with strings.
 */

/**
 * The empty string "".
 */
const EMPTY_STRING = "";

/**
 * Return true if the string is solely composed of whitespace.
 */
function isEmptyString(str:string):boolean {
  return str.trim() === EMPTY_STRING;
}

//- export ---------------------------------------------------------------------
export {EMPTY_STRING, isEmptyString}
