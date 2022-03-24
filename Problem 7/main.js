
/**
 * Seventh Problem
 * 
 * Write a function that takes an array as a parameter, and return the sum of the given array elements.
 *  
 */

function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;
}
var myArr = [6,6,6,6,6];
console.log(sum(myArr)) // 5*6 = 30

