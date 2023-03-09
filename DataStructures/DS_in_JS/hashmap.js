/*
    Hash Table or Hash Map is a data structure that is used to store key-value pairs. Given key, you can get assiciate value with that key for fast lookup.

    Javascript's objects is a special implementation of hash table. Object class adds its won keys. Keys may conflict and overwrite the inherited default properties.
    Maps which were introduced in 2015 allow you to store key-pairs without conflicting. We mostly use this hash table implementation.
    Writing your Own hash table implementation is a very popular JavaScript interview question.

    eg.
    'in' => 'India'
    'au' => 'Australia'
    'uk' => 'United Kingdom'

    We store key value pairs in a fix sized array but array have a numeric index so we need string as a index to number as an index.
    A hashing function accepts string key, converts it into hash code using a defined logic, and then maps it into a numeric index that is within the bounds of the array.
    Using the index, store, delete and retreive the key-value pair.

    Hash tables are implemented where constant time lookup and insertion are required.
    eg. Database indexing, Caches

    Good hashing function is that which creates unique index number everytime for different keys to minimize collisions.
*/

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        // this.table[index] = value;

        // Handling Collisions
        const bucket = this.table[index];
        if (!bucket) {
            // no bucket exits
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                // bucket exits with key
                sameKeyItem[1] = value;
            } else {
                // bucket exits without key
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        // return this.table[index];

        // Handling Collisions
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        // this.table[index] = undefined;

        // Handling Collisions
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1);
            }
        }
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new HashTable(10);

table.set('in', 'India');
table.set('au', 'Australia'); //collision
table.set('uk', 'United Kingdom'); //collision

table.display();
table.get('in')