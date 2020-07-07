class Product {
    constructor(
        public ProductId: number,
        public ProductName: string,
        public Category: string,
        public Price: number
    ){}
}

class Logic {
    private products: Array<Product>;

    constructor(){
        this.products = new Array<Product>();
    }

    getProducts(): Array<Product> {
        this.products.push(new Product(101, 'Laptop', 'ECT', 120000));
        this.products.push(new Product(102, 'Iron', 'ECL', 2000));
        this.products.push(new Product(103, 'Lays', 'FOD', 20));
        return this.products;
    }

    addProduct(prd: Product) : Array<Product> {
        this.products.push(prd);
        return this.products;
    }
}

let logic = new Logic();
logic.getProducts().forEach((p,i) => {
    console.log(JSON.stringify(p));
}); 

logic.addProduct(new Product(104, 'Desktop', 'ECT', 3000)).forEach((p,i) => {
    console.log(JSON.stringify(p));
}); 