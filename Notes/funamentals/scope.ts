function doWork(x){
    if(x) {
        let y = 10;
        console.log('Inside if y = ' + y);
    }
    y++;
    console.log('outside if y = ' + y)
}
doWork(true);
doWork(false);
for(let i=0; i<5; i++){
    console.log('in loop i = ' + i);
}
console.log('out loop i = ' + i);
i++;
console.log('out loop with increament i = ' + i);

