/*
    Merging Two Sorted Arrays

    eg. 
    [1,4,5] + [3,6,8,10] => [1,3,4,5,6,8,10]
*/

let arr_1 = [1, 4, 5]
let arr_2 = [3, 6, 8, 10]

function merge(arr_1, arr_2) {
    let merged_array = [...arr_1, ...arr_2];
    
    
    return merged_array;
}

console.log(merge(arr_1, arr_2));