var Product = /** @class */ (function () {
    function Product(ProductId, ProductName, Category, Price) {
        this.ProductId = ProductId;
        this.ProductName = ProductName;
        this.Category = Category;
        this.Price = Price;
    }
    return Product;
}());
var Logic = /** @class */ (function () {
    function Logic() {
        this.products = new Array();
    }
    Logic.prototype.getProducts = function () {
        this.products.push(new Product(101, 'Laptop', 'ECT', 120000));
        this.products.push(new Product(102, 'Iron', 'ECL', 2000));
        this.products.push(new Product(103, 'Lays', 'FOD', 20));
        return this.products;
    };
    Logic.prototype.addProduct = function (prd) {
        this.products.push(prd);
        return this.products;
    };
    return Logic;
}());
var logic = new Logic();
logic.getProducts().forEach(function (p, i) {
    console.log(JSON.stringify(p));
});
logic.addProduct(new Product(104, 'Desktop', 'ECT', 3000)).forEach(function (p, i) {
    console.log(JSON.stringify(p));
});
