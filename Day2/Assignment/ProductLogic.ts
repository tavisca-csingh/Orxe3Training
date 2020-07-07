import {Product} from './Product';

export class ProductLogic{

    private productMap = new Map<number,Product>();

    validateProductId(prd:Product):boolean{
        if(this.productMap.size==0){
            this.productMap.set(prd.ProductId,prd);
            return true;
        }
        if(!this.productMap.has(prd.ProductId)){
            this.productMap.set(prd.ProductId,prd)
            return true;
        }
        return false;
    }
    validateProduct(prd:Product):Array<string>{
        let error = new Array<string>();
        if(prd.Description.length > 100)
            error.push("Description is more than 100 words");
        if(prd.Price<0)
            error.push("price can't be negative");
        if(!this.validateProductId(prd))
            error.push("not a unique productId");
        return error;
    }
    addProduct(prd: Product,prds:Array<Product>) : Array<Product> {
        if(this.validateProduct(prd).length == 0){
            prds.push(prd);
            return prds;
        }
        else{
            console.log(this.validateProduct(prd));
            console.log("above validation failure occurs can't add product ");
            return prds;
        }
    }
    deleteProduct(productId:number,prds:Array<Product>):Array<Product>{
        let count =0;
        for(let i of prds){
            count+=1;
            if(i.ProductId == productId){
                break;
            }
        }
        prds.splice(count-1,1);
        return prds;
    }

    updateProduct(prd:Product,prds:Array<Product>):Array<Product>{
        let validatedResponse = this.validateProduct(prd);

        if(validatedResponse.length==0){
            prds[prds.length]=prd;
            return prds;
        }
        if(validatedResponse.length==1 && validatedResponse[0]=="not a unique productId"){
            let count = 0;
            for(let i of prds){
                count+=1;
                if(i.ProductId == prd.ProductId){
                    break;
                }
            }
            prds.splice(count-1,1,prd);
            return prds;
        }
        else{
            console.log(this.validateProduct(prd));
            console.log(" updating product for non-existn");
            return prds;
        }
    }
    getProducts(prds:Array<Product>){
        prds.forEach((prd:Product)=>{`your result= `+console.log(prd)});
    }

    getProductsByCategory(name:string, prds:Array<Product>):Array<Product>{
        let poductsByCategory= new Array<Product>();
        for(let i of prds)
        {
            if(i.Category == name)
            {
                poductsByCategory.push(i);
            }
        }
        return poductsByCategory;
    }

    getProductsByMFC(name:string, prds:Array<Product>):Array<Product>{
        let poductsByMfc = new Array<Product>();
        for(let i of prds)
        {
            if(i.Manufacturer == name)
            {
                poductsByMfc.push(i);
            }
        }
        return poductsByMfc;
    }

    getProductsByCategoryorMFC(name:string,sortBy:string,prds:Array<Product>){
        switch(sortBy){
            case "category":
                this.getProducts(this.getProductsByCategory(name,prds));
                break;
            case "manufacturer":
                this.getProducts(this.getProductsByMFC(name,prds));
                break;
        }
    }   
}






