class MyClass {
    // private x:number;
    // private y:number;
    // the class members are accessed in a class using 'this' ref
    // constructor(x: number, y: number){
    //     this.x = x;
    //     this.y = y;
    // }

    // constructor with private/public parameters

    constructor(private x:number, private y:number, public z: number){}


    add(): number {
        return (this.x*this.x) + 2*this.x*this.y + (this.y*this.y);
    }
}

// defining instance
let mObj = new MyClass(10,20, 300)
console.log(`Result = ${mObj.add()}`);