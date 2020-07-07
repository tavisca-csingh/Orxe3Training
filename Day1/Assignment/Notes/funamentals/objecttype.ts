// Comparision
let x = 1;
let y = "1";
// x and y are object compared based on value equlaity
// in JavaScript == is value equality
console.log(x == y); // true
console.log();
// === this is the type+value equality aka 'Deep Equality'
console.log(x === y);  // false

let o1 = {x:10};
console.log('o1.x = ' + o1.x);
let o2 = o1;
console.log('After o2 = o2 expression  o1.x = ' + o1.x + ' o2.x ' + o2.x) ;
o2.x = 100;
console.log('After o2.x update  o1.x = ' + o1.x + ' o2.x ' + o2.x) ;
// Object COpy aka deep copy using Object.assign() method
// a blank object will be allocated and its will be filled
// with the value and schema of o1 and this new object
// will be ponited by o3  
let o3 = Object.assign({},o1);
console.log('After object.assign()  o1.x = ' + o1.x + ' o3.x ' + o3.x) ;
o3.x = 2000;
console.log('After o3.x update  o1.x = ' + o1.x + ' o3.x ' + o3.x) ;


