/*
    OBJECTS
    
    Object is a built-in data structure that can hold a unordered collection of key-value pairs.
    Key must either be a string or symbol data type where as the value can be of any data type and can hold methods or functions.
    To get value, you can use corresponding key using dot operator or [] notation.
    Ojects are not interables.
*/

const obj1 = {
    name: "Yuvi",
    greet: function () {
        console.log("Good Morning")
    },
    'age-now': 28,
}

console.log(obj1.name);
console.log(obj1['age-now']);
obj1.greet();

/*
    Insert O(1)
    Remove O(1)
    Access O(1)
    Search O(n)

    Object.keys() - O(n)
    Object.values() - O(n)
    Object.entries() - O(n)
*/