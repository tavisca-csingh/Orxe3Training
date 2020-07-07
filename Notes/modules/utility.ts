export class StringUtility {
    getStringLength(str: string): number {
        return str.length;
    }

    changeCase(str: string, c: string) : string {

        switch(c){
            case 'U':
                str = str.toUpperCase();
                break;
            case 'L':
                str = str.toLowerCase();
                break;
        }  

        return str;
    }
}