// Basic Sets implementation

class mySet {
  constructor() {
    this.items = {};
  }

  // Check if an element exists in the set
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  // Add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.items[element] = true;
      return true;
    }
    return false;
  }

  // Remove an element from the set
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  // Get the size of the set
  size() {
    return Object.keys(this.items).length;
  }

  // Get an array of all elements in the set
  values() {
    return Object.keys(this.items);
  }

  // Clear the set
  clear() {
    this.items = {};
  }
}

// Usage example
const set = new mySet();
set.add(1);
set.add(2);
set.add(3);
console.log(set.size()); // Output: 3
console.log(set.values()); // Output: [ '1', '2', '3' ]
set.delete(2);
console.log(set.size()); // Output: 2
console.log(set.values()); // Output: [ '1', '3' ]
