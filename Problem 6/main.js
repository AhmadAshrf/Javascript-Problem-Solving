
/**
 * Sixth Problem
 * 
 * Make a function that takes Student faculty as a parameter, checks:
	If the entered faculty: FCI, show message: “You’re eligible to Programing tracks”.
	If the entered faculty: Engineering, show message: “You’re eligible to Network and Embedded tracks”.
	If the entered faculty: Commerce, show message: “You’re eligible to ERP and Social media tracks”.
    For any other faculty, show message: “You’re eligible to SW fundamentals track”.
    (Use switch(). And why it’s better in that case?)
 *  
 */

function askUser(){
    let department = prompt('what is your department?');
    
    while(department === '' || department === null){
        department = prompt('what is your valid department?')
    }

    stuFaculty(department);
}

askUser();

function stuFaculty(givenCase) {
    switch (givenCase) {
        case 'FCI':
            alert('You are eligible to Programing tracks')
            break;
        case 'Engineering' :
            alert('You are eligible to Network and Embedded tracks')
            break;
        case 'Commerce' :
            alert('You are eligible to ERP and Social media tracks')
            break;
        default: 
            alert('You are eligible to SW fundamentals track')
            break;
    }
}
