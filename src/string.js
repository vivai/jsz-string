//@flow

/**
 * @module jsz-string
 * This module ontains some utilities for working with string.
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
