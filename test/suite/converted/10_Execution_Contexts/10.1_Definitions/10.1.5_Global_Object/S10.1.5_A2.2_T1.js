// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Global object properties have attributes { DontEnum }
 *
 * @section 10.1.5, 15.1
 * @path 10_Execution_Contexts/10.1_Definitions/10.1.5_Global_Object/S10.1.5_A2.2_T1.js
 * @description Function execution context - Value Properties
 */

function test() {
  //CHECK#1
  for (var x in this) {
    if ( x === 'NaN' ) {
      $ERROR("#1: 'NaN' have attribute DontEnum");
    } else if ( x === 'Infinity' ) {
      $ERROR("#1: 'Infinity' have attribute DontEnum");
    } else if ( x === 'undefined' ) {
      $ERROR("#1: 'undefined' have attribute DontEnum");
    } 
  }
}

test();
