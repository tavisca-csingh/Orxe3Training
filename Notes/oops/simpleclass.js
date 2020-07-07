var MyClass = /** @class */ (function () {
    // private x:number;
    // private y:number;
    // the class members are accessed in a class using 'this' ref
    // constructor(x: number, y: number){
    //     this.x = x;
    //     this.y = y;
    // }
    // constructor with private/public parameters
    function MyClass(x, y) {
        this.x = x;
        this.y = y;
    }
    MyClass.prototype.add = function () {
        return (this.x * this.x) + 2 * this.x * this.y + (this.y * this.y);
    };
    return MyClass;
}());
// defining instance
var mObj = new MyClass(10, 20);
console.log("Result = " + mObj.add());
