export class Tower {

    store: number[] = [];

    constructor(levels:number){
        for(let size=levels; size>0; --size){
           this.store.push(size);
        }
    }

    push(val: number) {
        if(this.store.length>0) {
            if(this.store[this.store.length-1]<=val){
                throw new Error('The last level is smaller than the new one');
            }
        }
        this.store.push(val);
    }

    pop(): number | undefined {
        return this.store.pop();
    }

    lastLevelSize(): number | undefined {
        return this.store[this.store.length-1];
    }

    levels(): number{
        return this.store.length;
    }
}
