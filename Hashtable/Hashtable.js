class HashTable {
    constructor(size = 7) {
        this.datamap = new Array(size);
    }

    // underscore method only called by other method, not directly
    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23 ) % this.datamap.length;
        }

        return hash;
    }

    set(key, value) {
        let index = this._hash(key); // it will return an index
        if(!this.datamap[index]){
            this.datamap[index] = [];
        }
        this.datamap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);

        if(this.datamap[index]){
            for(let i = 0; i < this.datamap[index].length; i++) {
                if(this.datamap[index][i][0] === key) {
                    return this.datamap[index][i][1];
                }
            }
        }

        return undefined;
    }

    keys() {
        let allKeys = [];
        for(let i = 0; i < this.datamap.length; i++) {
            if(this.datamap[i]) {
                for(let j = 0; j < this.datamap[i].length; j++) {
                    allKeys.push(this.datamap[i][j][0]);
                }
            }
        }
        return allKeys;
    }
}

const hashTable = new HashTable();
console.log(hashTable);