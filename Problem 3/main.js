

/**
 * Third Problem 
 * 
    Make a function that takes today’s temperature as a parameter, prints: “HOT” if the entered temperature are more than or equals 30 and “Cold” if it’s less than 30 (use ternary conditional operator).
 * 
 */

var degFromUser = prompt('Enter the Temprature Degree:');
var degFromUserConverted = parseInt(degFromUser); //convert string to number
todaysTemp(degFromUserConverted);

function todaysTemp(degree) {
    
        //=> Solved by Ternary Operator
        // (degree >= 30)? alert("Hot") : alert("Cold")
     
        // => Solved by If Statement
    if(degree >= 30) {
        alert('Weather is "Hot" Cause its ' + degFromUserConverted + ' degree')
    }else if (degree < 30) {
        alert('Weather is "Cold" Cause its ' + degFromUserConverted + ' degree')
    }else {
        alert('Enter Valid degree!')
    };
};

