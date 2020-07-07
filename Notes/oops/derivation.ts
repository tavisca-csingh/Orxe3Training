class MyBase {
    constructor(private msg: string){}

    display(): void {
        console.log(`The Base Class Message ${this.msg}`);
    }
}

class MyDerive extends MyBase {
    constructor(private str: string){
        // deep-link to the base class ctor
        super(str);
    }
    printStr(): void {
        console.log(`In Derive ${this.str}`);
    }
    // local to derive class and hence it will be executed
    display(): void {
        console.log(`The Dipslay in Derive class ${this.str}`);
    }
}

let d = new MyDerive('Hello OOPs');
d.display('Mahesh');
d.printStr();