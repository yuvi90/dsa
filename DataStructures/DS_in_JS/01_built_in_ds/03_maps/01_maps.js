/* 

 Basic Maps Implementation in JS :

 In JavaScript, you can implement a map using various approaches. One common implementation is to use an object or a Map as the underlying data structure to store the key-value pairs. Here's an example implementation using an object:

 */

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
console.log(map.size()); // Output: 3
console.log(map.get("key2")); // Output: value2
map.delete("key3");
console.log(map.size()); // Output: 2
console.log(map.keys()); // Output: [ 'key1', 'key2' ]
console.log(map.values()); // Output: [ 'value1', 'value2' ]
