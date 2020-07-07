import {StringUtility} from './utility';

let strObj = new StringUtility();

let str = "Mahesh Sabnis";

console.log(`Length of ${str} = ${strObj.getStringLength(str)}`);
console.log(`To Upper case ${strObj.changeCase(str, 'U')}`);
console.log(`To Lower case ${strObj.changeCase(str, 'L')}`);
