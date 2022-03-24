
/**
 * Eighth Problem
 * 
    On contact page prompt user to enter his name, make sure that name is a string that isn’t empty and not null, and let the user enter his birth year and make sure that it is a number, and it is less than 2010, and then calculate his age.
    For each prompt if user input valid show him next prompt, if not valid show him the same prompt again until user enters it correctly (use loops). And after validating user input, write all user input on the page like that:
    Name: ahmed
    Birth year: 1998
    Age: 24
 * 
 *  
 */

function askUser() {
    let userName = prompt('Enter Your Name?')
    while(userName === null || userName === '') {
        userName = prompt('Enter Your Valid Name?')
    }

    let userBirth = prompt('Enter Your Birth Year?')
    parseInt(userBirth)
    while(userBirth === null || userBirth === '') {
        userBirth = prompt('Enter Your Valid Birth Year?')
    }

    while(userBirth > 2010){
        userBirth = prompt('Birth Year Must be Less than 2010')
        if(userBirth === null || userBirth === ''){
            userBirth = prompt('Enter Your Valid Birth Year?')
        }
    }


    dataFromUser(userName, userBirth);

}

askUser();

function dataFromUser(Name, birthYear){
    let userAge = 2022 - birthYear;
    document.write('Name: ' + Name + '<br>');
    document.write('Birth Year: ' + birthYear + '<br>')
    document.write('Age: ' + userAge + '<br>')
}



