"use strict";
exports.__esModule = true;
var utility_1 = require("./utility");
var strObj = new utility_1.StringUtility();
var str = "Mahesh Sabnis";
console.log("Length of " + str + " = " + strObj.getStringLength(str));
console.log("To Upper case " + strObj.changeCase(str, 'U'));
console.log("To Lower case " + strObj.changeCase(str, 'L'));