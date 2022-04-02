function javascriptTips() {
    let jsTips = [
        'var for assign variable value (intialization)',
        'use === instead of ==',
        'undefined, null and NaN are Falsy',
        'create class constractor',
        'self calling (function(param1,param2){body})();'
    ];

    let randItems = jsTips[Math.floor(Math.random() * jsTips.length)]

    alert('Tip of the Day : ' + randItems)
}

function showDate() {
    let theDate = new Date();
    document.getElementById('#show-time').innerHTML = theDate;
}

function emailCheck() {
    var email = prompt('Enter Your Email Address?')
    var convertedMail = String(email).toLowerCase()

    while (convertedMail.endsWith('@') || convertedMail.startsWith('@')) {
        alert('enter a valid email')
        convertedMail = prompt('Enter Your Valid Email Address?')
    }

    (convertedMail.includes('@')) ? document.write('Your Email is Valid') : convertedMail = prompt('Enter Your Valid Email Address??')
}


(function stuGrades() {
    var grads = [60, 100, 10, 15, 85];

    var sorting = grads.sort();
    console.log(sorting)

    var gradReverse = grads.reverse();
    console.log(gradReverse)

    var heigestDegree = sorting.find(el => el <= 100)
    console.log(heigestDegree)

    var belowDegree = sorting.filter(el => el < 60)
    console.log(belowDegree) 


    var arr = [
        {name:'ahmed', degree:95},
        {name:'ali', degree:50}];

    var findDegree = arr.find(el => el.degree <= 100 )
    console.log(findDegree)

    var printStuName = arr.filter(el => el.degree < 60 )
    console.log(printStuName)

    arr.push({name:'khaled', degree: 70}) //adding a new items to the array of object
    console.log(arr)

    arr.pop() //removing the last element of array
    console.log(arr)

    arr.unshift({name:'mahmoud', degree:80}) //adding items to first index
    console.log(arr)
}());
