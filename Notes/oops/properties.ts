class DemoProps {
    constructor(private val: number){}

    set Value(v: number) {
        this.val = v;
    }
    get Value(): number {
        return this.val;
    }
}

let obj =  new DemoProps(1000);

console.log(`value = ${obj.Value}`);
obj.Value = 600;
console.log(`value = ${obj.Value}`);

