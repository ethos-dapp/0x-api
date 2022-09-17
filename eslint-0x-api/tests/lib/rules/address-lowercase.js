/**
 * @fileoverview Require address to be in lowercase
 * @author 
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/address-lowercase"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("address-lowercase", rule, {
  valid: [
    {
      code: "'0xdef1c0ded9bec7f1a1670819833240f027b25eff'",
    }
  ],
  invalid: [
    {
      code: "'0xDef1C0ded9bec7F1a1670819833240f027b25EfF'",
      errors: [{ message: "Address is not lowercased.", type: "Literal" }],
    },
  ],
});
