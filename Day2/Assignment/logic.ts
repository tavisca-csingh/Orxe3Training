import {ProductLogic} from './ProductLogic';
import { Product } from './Product';

let productLogic = new ProductLogic();
let products:Array<Product>=[];
productLogic.addProduct(new Product(101, 'Laptop', 'ECT','HP','description for hp laptop', 120000),products);
productLogic.addProduct(new Product(102, 'Iron', 'ECL','Philips','description for Iron', 2000),products);
productLogic.addProduct(new Product(103, 'Chips', 'Fod','Lays','description for Lays', 20),products);

//question 1
console.log("question 1\n");
console.log(`List all Products\n`);
productLogic.getProducts(products);
console.log("######################################################################\n");

//question2
console.log("question 2\n");
console.log(`get product by category \n`);
productLogic.getProductsByCategoryorMFC('ECT','category',products);

console.log(`get product by manufacturer \n`);
productLogic.getProductsByCategoryorMFC('Philips','manufacturer',products);

//question 3
console.log("######################################################################\n");

console.log("question 3\n");
products = productLogic.addProduct(new Product(103, 'Laptop', 'ECT','Dell','description for hp laptop', -20000),products);
console.log("get products\n");
productLogic.getProducts(products);

//question 4
console.log("######################################################################\n");
console.log("update product\n");
console.log("for invalid product updation\n");
products= productLogic.updateProduct(new Product(103, 'Laptop', 'ECT','Dell','description for hp laptop', -20000),products);
console.log("######################################################################\n");

console.log("for existing product updation\n");
products = productLogic.updateProduct(new Product(101, 'Laptop', 'ECT','HP','description for hp laptop updated', 125000),products);
productLogic.getProducts(products);

console.log("######################################################################\n");
console.log("for non-existing product updation\n");
products = productLogic.updateProduct(new Product(104, 'Laptop', 'ECT','Dell','description for hp laptop', 20000),products);
productLogic.getProducts(products);
console.log("######################################################################\n");


console.log("delete product whose id is 103\n");
products = productLogic.deleteProduct(103,products);
productLogic.getProducts(products);
console.log("######################################################################\n");

