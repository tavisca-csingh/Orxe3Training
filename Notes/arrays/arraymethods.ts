let arrNames = new Array<string>();

arrNames.push("James Bond");
arrNames.push("Ethan Hunt");
arrNames.push("Indiana Jones");
arrNames.push("Jason Bourn");

function display(n: string, idx:number):void{
    //console.log('Value at index ' + idx + ' = ' + n);
    console.log(`Value at index ${idx} = ${n}`);
}

arrNames.forEach(display);
console.log();
// passing callback function impleemtation to a method
// aka 'Anonymous Method'
arrNames.forEach(function(n: string, idx:number){
    console.log(`Value at index ${idx} = ${n}`);
});
console.log();
// The Callback method pass syntax is simplified
// in ES 6 using Arrow Operators
arrNames.forEach((n:string, idx:number) => {
    console.log(`Value at index ${idx} = ${n}`);
});
console.log('sort');
arrNames.sort().forEach((n:string, idx:number) => {
    console.log(`Value at index ${idx} = ${n}`);
});

console.log('Reverse');
arrNames.reverse().forEach((n:string, idx:number) => {
    console.log(`Value at index ${idx} = ${n}`);
});
console.log('List all strings having the length more than 10');

let res =arrNames.filter((n:string,idx:number) => {
    return n.length > 10;
}); 

res.forEach((n:string, idx:number) => {
    console.log(`Value at index ${idx} = ${n}`);
});






