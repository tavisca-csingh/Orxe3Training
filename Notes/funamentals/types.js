// datatype declaration
// implicit type declaration based in initial value or assignment
var n1 = 100; // n1 is now number
console.log('n1 = ' + n1 + ' Type of n1 = ' + typeof (n1));
// explit type declaration
var n2;
n2 = 1000;
console.log('n2 = ' + n2 + ' Type of n2 = ' + typeof (n2));
var str1;
str1 = "Mahesh";
console.log('str1 = ' + str1 + ' Type of str1 = ' + typeof (str1));
var val; // default to 'any' data type
val = 100;
console.log('val = ' + val + ' Type of val = ' + typeof (val));
val = "Mahesh";
console.log('val = ' + val + ' Type of val = ' + typeof (val));
// union types
var val1;
val1 = 100;
console.log('val1 = ' + val1 + ' Type of val1 = ' + typeof (val1));
val1 = "Mahesh";
console.log('val1 = ' + val1 + ' Type of val1 = ' + typeof (val1));
function SummationOrConcatination(values) {
    var result;
    if (typeof (values) === 'number') {
        result = values;
    }
    if (typeof (values) === 'string') {
        result += values;
        result = result.toUpperCase();
    }
    console.log(result);
}
SummationOrConcatination(100);
SummationOrConcatination("Mahesh");
