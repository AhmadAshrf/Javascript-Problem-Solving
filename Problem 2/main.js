

/**
 * Second Problem 
 * 
    Make a function in external JS file, that takes 2 parameters and return sum of them (function return the result, don't alert or print inside it), and in your page make another function that asks the user to enter 2 numbers (prompt), call the sum function, and display the result returned by the function in the console;
 * 
 */

function askUser() {
    let n1 = prompt('Enter First Number?');
    let n2 = prompt('Enter Second Number?');
    while(n1 === null || n2 === null || n1 === '' || n2 === '') {
        alert('Please Enter a Valid Numbers!')
        n1 = prompt('Enter First Number?');
        n2 = prompt('Enter Second Number?');
    }
    alert('Sum is ' + summition(n1, n2))
    console.log('Sum is: ' + summition(n1, n2) + ' From Console');
};

askUser(); //call func

function summition(num1, num2){
    let sum = parseInt(num1) + parseInt(num2);
    return sum;
};

/**
 * Third Problem 
 */

