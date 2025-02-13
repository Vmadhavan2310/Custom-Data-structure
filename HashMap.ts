class HashMap<K,V> {
    private items: [K, V][][];
    private size: number;
    private hashSize: number;
    constructor(num:number) {
        this.size = num;
        this.items = new Array(num).fill(null).map(() => []);
        this.hashSize = 0;
    }

    _hash(key:string):number {
        let hash = 0;
        for(let char of key) {
            hash+=char.charCodeAt(0);
        }
        return hash % this.size;
    }

    set(key: K,value:V):void {
        const index = this._hash(String(key));
        for(let item of this.items[index]) {
            if(item[0] == key) {
                item[1] = value;
                return;
            }
        }
        this.items[index].push([key,value]);
        this.hashSize++;
    }

    get(key: K):V | string {
        const index = this._hash(String(key));
        for(let item of this.items[index]) {
            if(item[0] == key) return item[1]
        }
        return 'nothing found'
    }

    entries():[K,V][] {
        const bucket: [K, V][] = [];
        for(let item of this.items) {
            if(item.length) {
                bucket.push(...item)
            }
        }
        return bucket;
    }

    keys():K[]{
        let keys: K[] = [];
        keys = this.entries().map(item => item[0])
        return keys;
    }

    has(key:K):string {
        return [...this.keys()].includes(key) ? `key ${key} exist` : `Not Exist`
    }

    values():V[] {
        let values: V[] = [];
        values = this.entries().map(item => item[1]);
        return values;
    }

    delete(key: K) {
        const index = this._hash(String(key));
        this.items[index] = this.items[index].filter(item => item[0] != key);
        this.hashSize--;
    }

    clearEntries():void {
        this.items = new Array(this.size).fill(null).map(()=>[]);
        this.hashSize = 0;
    }

    hash_Size():number {
        return this.hashSize;
    }
}
