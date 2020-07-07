var DemoProps = /** @class */ (function () {
    function DemoProps(val) {
        this.val = val;
    }
    Object.defineProperty(DemoProps.prototype, "Value", {
        get: function () {
            return this.val;
        },
        set: function (v) {
            this.val = v;
        },
        enumerable: false,
        configurable: true
    });
    return DemoProps;
}());
var obj = new DemoProps(1000);
console.log("value = " + obj.Value);
obj.Value = 600;
console.log("value = " + obj.Value);
