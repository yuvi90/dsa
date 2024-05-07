[Home](../../readme.md) <br>
[Back](../00_non_linear_ds.md)

# Hash Map

Hash Table or Hash Map is a data structure that is used to store key-value pairs. Given key, you can get associate value with that key for fast lookup.

Javascript's objects is a special implementation of hash table. Object class adds its own keys. Keys may conflict and overwrite the inherited default properties.
Maps which were introduced in 2015 allow you to store key-pairs without conflicting. We mostly use this hash table implementation.
Writing your Own hash table implementation is a very popular JavaScript interview question.

eg.

'in' => 'India'
'au' => 'Australia'
'uk' => 'United Kingdom'

We store key value pairs in a fix sized array but array have a numeric index so we need string as a index to number as an index.
A hashing function accepts string key, converts it into hash code using a defined logic, and then maps it into a numeric index that is within the bounds of the array.
Using the index, store, delete and retrieve the key-value pair.

Hash tables are implemented where constant time lookup and insertion are required.
eg. Database indexing, Caches

Good hashing function is that which creates unique index number every time for different keys to minimize collisions.

# Time Complexity

The time complexity of operations in a HashMap (or HashTable) depends on several factors, including the specific implementation, the size of the hash table, and the hash function used. However, in general, the average and amortized time complexities for common operations in a HashMap are as follows:

Insertion (put operation): O(1) average case, O(n) worst case

- In the average case, inserting an element into a HashMap takes constant time, as long as the hash function distributes the keys evenly.
- In the worst case, when there are collisions or hash function performs poorly, the insertion time can degrade to O(n), where n is the number of elements in the HashMap. This happens when all elements have the same hash and are stored in the same bucket, causing the bucket to form a linked list.

Deletion (remove operation): O(1) average case, O(n) worst case

- Similar to insertion, deletion in the average case takes constant time.
- In the worst case, when all elements are stored in the same bucket and form a linked list, the time complexity becomes O(n) as it may require traversing the entire linked list to find and remove the desired element.

Retrieval (get operation): O(1) average case, O(n) worst case

- In the average case, retrieving an element from a HashMap takes constant time as long as the hash function distributes the keys evenly and there are no collisions.
- In the worst case, when there are collisions or all elements are stored in the same bucket forming a linked list, the retrieval time can degrade to O(n) as it may require traversing the linked list to find the desired element.

It's important to note that the time complexities mentioned above are for the average case and worst case scenarios. In practice, HashMaps provide efficient performance for most operations when the hash function is well-distributed and collisions are minimized.
