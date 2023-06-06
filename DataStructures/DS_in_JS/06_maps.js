/*
    Maps is a built-in data structure that can hold a collection of key-values pairs. 
    Both KEYS and Values can be any data type.
    To get value, you can use corresponding key.
    Maps are iterables.    

    ===> Maps vs Objects SUMMARY

    Maps are ordered but objects are unordered.
    Keys can be any data type but in Objects it can symbol or strings.
    Maps are iterables while objects are not.
    
    Objects prototype has keys which may collide with your own keys but Maps no keys are present.
    Apart from storing data you can attach functionality to an objects where as maps are restricted to just storing data.
    Number of items in an object must be determined manually where as it is readily available with size property in map.

    ====================> Maps vs Objects
    
    In JavaScript, both objects and maps can be used to store key-value pairs, but they have some differences in terms of their features and intended use cases.

    Objects:
    - Objects are a fundamental data type in JavaScript and have been traditionally used to store key-value pairs.
    - Keys in objects are restricted to be strings or symbols.
    - Objects provide a rich set of built-in methods and features, such as property access with dot notation or square bracket notation, object literal syntax, prototype chain for inheritance, and support for object-oriented programming concepts.
    - Objects have a default behavior of maintaining the insertion order of properties.
    - Objects are commonly used for general-purpose key-value storage, creating complex data structures, representing real-world entities, and implementing object-oriented programming patterns.

    Maps:
    - Maps are a built-in data structure introduced in ES6 specifically designed for key-value storage.
    - Keys in maps can be of any data type, including objects and functions. The original data type of the key is preserved.
    - Maps provide a separate data structure dedicated to key-value storage, with a simpler and more consistent interface compared to objects.
    - Maps have built-in methods for common operations such as `set`, `get`, `has`, `delete`, and `size`, which makes them convenient for working with key-value pairs.
    - Maps maintain the insertion order of elements, so the order of keys remains consistent.
    - Maps also provide the ability to iterate over keys, values, or entries using `forEach`, `for...of` loops, or the `entries`, `keys`, and `values` methods.
    - Maps are commonly used when you need a data structure solely for key-value storage and do not require the additional features and complexity provided by objects.

    In summary, objects are versatile and offer a wide range of features beyond key-value storage, while maps are specialized data structures designed specifically for efficient key-value storage and retrieval. Consider using objects when you need more advanced functionality and object-oriented programming capabilities, and use maps when you prioritize simplicity, consistency, and efficient key-value operations.
*/

const mapDS = new Map([['a', 1], ['b', 2]]);

mapDS.set('c', 3)
mapDS.has('s'); // false
console.log(mapDS.size)
for (const [key, value] of mapDS) {
    console.log(`${key} : ${value}`)
}

mapDS.clear();

// Basic Maps Implementation in JS

// In JavaScript, you can implement a map using various approaches. One common implementation is to use an object or a Map as the underlying data structure to store the key-value pairs. Here's an example implementation using an object:

class myMap {
    constructor() {
        this.items = {};
    }

    // Check if a key exists in the map
    has(key) {
        return Object.prototype.hasOwnProperty.call(this.items, key);
    }

    // Set a value for a key in the map
    set(key, value) {
        this.items[key] = value;
    }

    // Get the value associated with a key in the map
    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    // Remove a key-value pair from the map
    delete(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }

    // Get the size of the map
    size() {
        return Object.keys(this.items).length;
    }

    // Get an array of all keys in the map
    keys() {
        return Object.keys(this.items);
    }

    // Get an array of all values in the map
    values() {
        return Object.values(this.items);
    }

    // Clear the map
    clear() {
        this.items = {};
    }
}

// Usage example
const map = new myMap();
map.set("key1", "value1");
map.set("key2", "value2");
map.set("key3", "value3");
console.log(map.size());  // Output: 3
console.log(map.get("key2"));  // Output: value2
map.delete("key3");
console.log(map.size());  // Output: 2
console.log(map.keys());  // Output: [ 'key1', 'key2' ]
console.log(map.values());  // Output: [ 'value1', 'value2' ]