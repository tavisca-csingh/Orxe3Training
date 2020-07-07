class ProcessData {
    generateParameterSum(arr:number[]): number {
        let sum: number = 0;
        if(arr.length > 0) {
            arr.forEach((n,i) => {
                sum += n;
            })
        }
        return sum;
    }

    // rest parameters used to create an immutable object
    // syntax ...obj, the obj is immutable with dynamic
    // property declarations for it
    generateDynamicParameterSum(...arr:number[]): number {
        let sum: number = 0;
        if(arr.length > 0) {
            arr.forEach((n,i) => {
                sum += n;
            })
        }
        return sum;
    }
}
let o = new ProcessData();
console.log(`2 parameters ${o.generateParameterSum([2,3])}`);
console.log(`3 parameters ${o.generateParameterSum([2, 3, 4])}`);


console.log(`2 parameters ${o.generateDynamicParameterSum(10,20)}`);
console.log(`3 parameters ${o.generateDynamicParameterSum(20, 30, 40)}`);

