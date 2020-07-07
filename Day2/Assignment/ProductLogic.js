"use strict";
exports.__esModule = true;
exports.ProductLogic = void 0;
var ProductLogic = /** @class */ (function () {
    function ProductLogic() {
        this.productMap = new Map();
    }
    ProductLogic.prototype.validateProductId = function (prd) {
        if (this.productMap.size == 0) {
            this.productMap.set(prd.ProductId, prd);
            return true;
        }
        if (!this.productMap.has(prd.ProductId)) {
            this.productMap.set(prd.ProductId, prd);
            return true;
        }
        return false;
    };
    ProductLogic.prototype.validateProduct = function (prd) {
        var error = new Array();
        if (prd.Description.length > 100)
            error.push("Description is more than 100 words");
        if (prd.Price < 0)
            error.push("price can't be negative");
        if (!this.validateProductId(prd))
            error.push("not a unique productId");
        return error;
    };
    ProductLogic.prototype.addProduct = function (prd, prds) {
        if (this.validateProduct(prd).length == 0) {
            prds.push(prd);
            return prds;
        }
        else {
            console.log(this.validateProduct(prd));
            console.log("above validation failure occurs can't add product ");
            return prds;
        }
    };
    ProductLogic.prototype.deleteProduct = function (productId, prds) {
        var count = 0;
        for (var _i = 0, prds_1 = prds; _i < prds_1.length; _i++) {
            var i = prds_1[_i];
            count += 1;
            if (i.ProductId == productId) {
                break;
            }
        }
        prds.splice(count - 1, 1);
        return prds;
    };
    ProductLogic.prototype.updateProduct = function (prd, prds) {
        var validatedResponse = this.validateProduct(prd);
        if (validatedResponse.length == 0) {
            prds[prds.length] = prd;
            return prds;
        }
        if (validatedResponse.length == 1 && validatedResponse[0] == "not a unique productId") {
            var count = 0;
            for (var _i = 0, prds_2 = prds; _i < prds_2.length; _i++) {
                var i = prds_2[_i];
                count += 1;
                if (i.ProductId == prd.ProductId) {
                    break;
                }
            }
            prds.splice(count - 1, 1, prd);
            return prds;
        }
        else {
            console.log(this.validateProduct(prd));
            console.log(" updating product for non-existn");
            return prds;
        }
    };
    ProductLogic.prototype.getProducts = function (prds) {
        prds.forEach(function (prd) { "your result= " + console.log(prd); });
    };
    ProductLogic.prototype.getProductsByCategory = function (name, prds) {
        var poductsByCategory = new Array();
        for (var _i = 0, prds_3 = prds; _i < prds_3.length; _i++) {
            var i = prds_3[_i];
            if (i.Category == name) {
                poductsByCategory.push(i);
            }
        }
        return poductsByCategory;
    };
    ProductLogic.prototype.getProductsByMFC = function (name, prds) {
        var poductsByMfc = new Array();
        for (var _i = 0, prds_4 = prds; _i < prds_4.length; _i++) {
            var i = prds_4[_i];
            if (i.Manufacturer == name) {
                poductsByMfc.push(i);
            }
        }
        return poductsByMfc;
    };
    ProductLogic.prototype.getProductsByCategoryorMFC = function (name, sortBy, prds) {
        switch (sortBy) {
            case "category":
                this.getProducts(this.getProductsByCategory(name, prds));
                break;
            case "manufacturer":
                this.getProducts(this.getProductsByMFC(name, prds));
                break;
        }
    };
    return ProductLogic;
}());
exports.ProductLogic = ProductLogic;
