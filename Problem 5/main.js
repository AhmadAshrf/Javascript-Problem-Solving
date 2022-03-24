
/**
 * Fifth Problem
 * 
    Write a function that takes 2 parameters: start and end number and print odd numbers between the given 2 numbers.
 * 
 *  
 */

function twoNumbers() {
    let N1 = prompt('Enter First Number:')
    let N2 = prompt('Enter Second Number:')
    let convertedN1 = parseInt(N1);
    let convertedN2 = parseInt(N2);
    oddNumbers(convertedN1, convertedN2);
}
twoNumbers();
function oddNumbers(num1, num2) {
    for(let i = num1; i <= num2; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}

