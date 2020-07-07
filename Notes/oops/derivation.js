var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyBase = /** @class */ (function () {
    function MyBase(msg) {
        this.msg = msg;
    }
    MyBase.prototype.display = function () {
        console.log("The Base Class Message " + this.msg);
    };
    return MyBase;
}());
var MyDerive = /** @class */ (function (_super) {
    __extends(MyDerive, _super);
    function MyDerive(str) {
        var _this = 
        // deep-link to the base class ctor
        _super.call(this, str) || this;
        _this.str = str;
        return _this;
    }
    MyDerive.prototype.printStr = function () {
        console.log("In Derive " + this.str);
    };
    // local to derive class and hence it will be executed
    MyDerive.prototype.display = function (name) {
        console.log("The Dipslay in Derive class " + this.str + " " + name);
    };
    return MyDerive;
}(MyBase));
var d = new MyDerive('Hello OOPs');
d.display('Mahesh');
d.printStr();
