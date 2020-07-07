var arrNames = new Array();
arrNames.push("James Bond");
arrNames.push("Ethan Hunt");
arrNames.push("Indiana Jones");
arrNames.push("Jason Bourn");
function display(n, idx) {
    //console.log('Value at index ' + idx + ' = ' + n);
    console.log("Value at index " + idx + " = " + n);
}
arrNames.forEach(display);
console.log();
// passing callback function impleemtation to a method
// aka 'Anonymous Method'
arrNames.forEach(function (n, idx) {
    console.log("Value at index " + idx + " = " + n);
});
console.log();
// The Callback method pass syntax is simplified
// in ES 6 using Arrow Operators
arrNames.forEach(function (n, idx) {
    console.log("Value at index " + idx + " = " + n);
});
console.log('sort');
arrNames.sort().forEach(function (n, idx) {
    console.log("Value at index " + idx + " = " + n);
});
console.log('Reverse');
arrNames.reverse().forEach(function (n, idx) {
    console.log("Value at index " + idx + " = " + n);
});
console.log('List all strings having the length more than 10');
var res = arrNames.filter(function (n, idx) {
    return n.length > 10;
});
res.forEach(function (n, idx) {
    console.log("Value at index " + idx + " = " + n);
});
