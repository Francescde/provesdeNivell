export class Tower {

    _store: number[] = [];

    constructor(levels:number){
        if(levels<0){
            throw new Error('The tower showld be at least of size 0');
        }
        for(let size=levels; size>0; --size){
           this._store.push(size);
        }
    }

    push(val: number) {
        if(this._store.length>0) {
            if(this._store[this._store.length-1]<=val){
                throw new Error('The last level is smaller than the new one');
            }
        }
        this._store.push(val);
    }

    pop(): number | undefined {
        return this._store.pop();
    }

    lastLevelSize(): number | undefined {
        return this._store[this.levels()-1];
    }

    levels(): number{
        return this._store.length;
    }
}
