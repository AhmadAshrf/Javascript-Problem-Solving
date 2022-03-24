

/**
 * Fourth Problem 
 * 
    Make a function takes 2 parameters: Temperature and Actual feel temperature you have 3 cases:
        Prints normal if both of temperature and actualFeel between 25 and 30.
	    Prints Cold if both of temperature and actualFeel less than 25.
	    Prints Hot if both of temperature and actualFeel higher than 30.

 * 
 * 
 */

function askUser() {
    let takenTemp = prompt('Enter Your Temprature :');
    let takenActFeel = prompt('Enter Your Acutal Feel :')

    calc(takenTemp, takenActFeel);
}
askUser(); //calling

function calc(temp, actFeel) {
    while(temp >= 40 && actFeel >= 40) {
        alert('Wooow! Your temp is: ' + temp + '! and Your act Feel: ' + actFeel + '! LoooL');
        temp = prompt('Enter Your Temprature Again :');
        actFeel = prompt('Enter Your Act Feel Again :')   
    }
    if((temp >= 25 && temp <=30) || (actFeel >= 25 && actFeel <= 30)) {
        alert('normal');
    }else if(temp < 25 && actFeel < 25) {
        alert('cold');
    }else if(temp < 40 && actFeel < 40) {
        alert('hot')
    }else {
        alert('Not of Range')
    }
}
