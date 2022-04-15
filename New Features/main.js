/**Old Way For Printing Even Numbers From Array */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        //let result = 0
        console.log(arr[i])
    }
}

/**By New Features [filter] Of ES6 */
let result = arr.filter(e => e % 2 == 0)
console.log(result) //Return Result in Array of Elements

/** Even Numbers By ForEach */
let emptyArr = []
let evenNum = arr.forEach(elem => {
    if (elem % 2 != 0) {
        emptyArr.push(elem)
    }
})
console.log(emptyArr)

/** Square For Each Element By map Method */
let squ = arr.map(el => el * 2)
console.log(squ)

/** Trying For..in For..of & ForEach on Array */
let secArr = [1, 5, 7, 8, , 5, 6, 4, 5]
/** For In */
for (let i in secArr) {
    console.log(i)
    //Return The Index Of Elements
}

/** For OF */
for (let i of secArr) {
    console.log(i)
    //Return The Elements on This Array
    //Didn't Skip Empty Element
}

/** ForEach */
let foreachArray = secArr.forEach(e => console.log(e))
//ForEach Skipping the Empty Element


/**Try Spread Operator */
let arr5 = [80, 60, 40, 20]
//Old
let conv = arr5.join(' ')
console.log(conv)
//NEW ES6
console.log(...arr5)


/**Try Map Collection */
let stuGrad = [
    ['grades', {
        courseName: 'Javascript', grade: 'Excelent'
    }],
    ['grades2', {
        courseName: 'Angular', grade: 'V. Good'
    }],
    ['grades3', {
        courseName: 'TypeScript', grade: 'Good'
    }]
]

var stuGradMap = new Map(stuGrad)

console.log(...stuGradMap.values())

console.log(stuGradMap.get('grades2').courseName)
console.log(stuGradMap.get('grades2').grade)

for (let i of stuGradMap.values()) {
    console.log(i)
}

// for (let i of stuGradMap.values()) {
//     console.log(`Course Name: ${i.courseName}, & Grade ${i.grade}`)
// }

var dropDown = document.getElementById('stu')
for (let i of stuGradMap.values()) {
    console.log(`Course Name: ${i.courseName}, & Grade ${i.grade}`)
    dropDown.innerHTML += `<option id='opt' value="${i.courseName}">${i.courseName}</option>`
}


// By Array Destructuring
for (let [key, val] of stuGradMap) {
    console.log(`Course Name: ${key}, & Grade ${val}`)
}




