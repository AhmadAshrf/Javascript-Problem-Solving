/**
 * First Problem 
 * 
    On your page, show alert for the user that say “Welcome to my site”, then show him prompt ask him to enter his name and write to the page  “ welcome + his name”.
 * 
 */
function welcomeMssg(){ 
    //This Function SelfInvok
    //Safe Strict Mode
    'use strict' 
    //Welcome Message
    alert('Welcome to Our Website ...');
    var userName = prompt('What is Your Name ?');
    while(userName === null || userName === ''){
        userName = prompt('Please Enter a Vaild Name!');
    }
    alert('Welcome ' + userName + ' In Our Website');
};

