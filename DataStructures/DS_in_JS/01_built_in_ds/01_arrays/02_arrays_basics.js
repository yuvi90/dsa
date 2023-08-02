/*
 
Arrays holds reference. It passes its value by REFERENCE

Some important concepts for copying data structure.

1. Shallow Copy:
Shallow copy refers to the process of creating a new data structure that is a replica of the original data structure, but it only duplicates the top-level structure. If the original data contains references to other objects (e.g., nested objects or arrays), the shallow copy creates new references to the same nested objects instead of duplicating them. Consequently, changes made to the nested objects in the shallow copy will also be reflected in the original data.

2. Deep Copy:
Deep copy, on the other hand, is the process of creating a completely independent duplicate of the original data structure along with all its nested objects. It recursively duplicates the entire data structure, ensuring that any nested objects are also duplicated independently. As a result, modifications to the nested objects in the deep copy have no effect on the original data.

In summary, the primary difference between a shallow copy and a deep copy lies in how they handle nested objects. Shallow copy replicates only the top-level structure and shares references to nested objects, while deep copy creates an entirely independent copy of the entire data structure, including all nested objects.

*/

const names = ["john", "steve", "ram"];
const namesNew = names;
console.log(names);
console.log(namesNew);
namesNew[2] = "sita";
console.log(names);
console.log(namesNew);

//----Spread Operator
const rating = [1, 2, 3, 3, 5];
const copyRating = [...rating]; //COPY OF RATINGS WITH NO REFERENCE
copyRating[3] = 4;
console.log(rating);
console.log(copyRating);
