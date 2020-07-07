var ProcessData = /** @class */ (function() {
    function ProcessData() {}
    ProcessData.prototype.generateParameterSum = function(arr) {
        var sum = 0;
        if (arr.length > 0) {
            arr.forEach(function(n, i) {
                sum += n;
            });
        }
        return sum;
    };
    ProcessData.prototype.generateDynamicParameterSum = function() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        var sum = 0;
        if (arr.length > 0) {
            arr.forEach(function(n, i) {
                sum += n;
            });
        }
        return sum;
    };
    return ProcessData;
}());
var o = new ProcessData();
console.log("2 parameters " + o.generateParameterSum([2, 3]));
console.log("3 parameters " + o.generateParameterSum([2, 3, 4]));
console.log("2 parameters " + o.generateDynamicParameterSum(10, 20));
console.log("3 parameters " + o.generateDynamicParameterSum(20, 30, 40));