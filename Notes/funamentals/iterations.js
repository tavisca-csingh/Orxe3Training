var names = ["Tejas", "Mahesh", "Ramesh", "Ram", "Sabnis"];
// traditional for.. loop
console.log('Simple For loop');
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log();
console.log('for..in loop');
// for..in loop, ES 3+ , simplification of the for..loop
for (var i in names) {
    console.log(names[i]);
}
console.log();
console.log('for..of loop ES6');
// for..of loop in ES 6, using the itarator pattern in ES 6
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var n = names_1[_i];
    console.log(n);
}
