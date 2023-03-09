/*
    Maps
    
    Maps is a built-in data structure that can hold a collection of key-values pairs. 
    Both KEYS and Values can be any data type.
    To get value, you can use corresponding key.
    Maps are interables.    

    Maps vs Objects

    Maps are ordered but objects are unordered.
    Keys can be any data type but in Objects it can symbol or strings.
    Maps are interables while objects are not.
    
    Objects prototype has keys which may collide with your own keys but Maps no keys are present.
    Apart from storing data you can attach functionality to an objects where as maps are restricted to just storing data.
    Number of items in an object must be determined manually where as it is readily available with sizr property in map.

*/

const map = new Map([['a', 1],['b', 2]]);

map.set('c', 3)
map.has('s'); // false
console.log(map.size)
for (const [key, value] of map) {
    console.log(`${key} : ${value}`)
}

map.clear();