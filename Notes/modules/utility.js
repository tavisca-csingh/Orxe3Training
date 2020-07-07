"use strict";
exports.__esModule = true;
exports.StringUtility = void 0;
var StringUtility = /** @class */ (function () {
    function StringUtility() {
    }
    StringUtility.prototype.getStringLength = function (str) {
        return str.length;
    };
    StringUtility.prototype.changeCase = function (str, c) {
        switch (c) {
            case 'U':
                str = str.toUpperCase();
                break;
            case 'L':
                str = str.toLowerCase();
                break;
        }
        return str;
    };
    return StringUtility;
}());
exports.StringUtility = StringUtility;
