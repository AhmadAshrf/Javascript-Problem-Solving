/**
 * 
    Implement the following classes (Add classes’ variables and method according to your logic):
	    Person class with need variables and methods.
	    Employee class that inherits from Person class and add need variables and methods.
	    Student class that inherits from Person class and add need variables and methods.
        In Employee class add static method: displayHTRules(), that prints the company’s HR rules.
        Add variable that counts the number of Employee object.
        Try private members, getters and setters.
        Implement Mixin that has some functions like: showSalary() and add it to the employee class. 
        Make a literal object “ScientificDepartment” that has properties: name, Location, Address which is
        composed from: City, Street, zip code, and add display function that prints all content of the object.
 * 
 */

class Person {
    name;
    age;
    constructor(user_Name, user_Age) {
        if(new.target === Person){ // Handle Abstract Class in Javascript
            throw new Error('Person is Abstract Class!')
        }else{
            this.name = user_Name;
            this.age = user_Age;
        }
    }

    showData() {
        console.log('Employee Name is: ' + this.name + ' Age : ' + this.age)

    }
}

class Employee extends Person {
    jobTitle;
    salary;
    counter = 0; //counter initialization

    constructor(theJobTitle, user_Name, user_Age, salary){
        if(new.target !== Employee) {
            throw new Error('Employee is a Sealed Class!')
        }else{
            super();
            this.jobTitle = theJobTitle;
            this.name = user_Name;
            this.age = user_Age;
            this.salary = salary;
            this.counter++;

            //Interfaces Impelementation - Mixin_ES7
            Object.assign(Employee.prototype, empMixin) 
        }
    }

    static displayHrRules() { //The Static Method
        console.log('Hello From Static Method HR Rules....')
   }

    showData() {
        console.log(this.counter)
        console.log('Employee Name is: ' + this.name + ' Age : ' + this.age + ' Job Title is : ' + this.jobTitle)
    }
}

let empMixin = {    //Interfaces Impelementation - Mixin_ES7
    showSalary(){
        console.log('From Mixin Salary is :' + this.salary)
    }
}

class Student extends Person {
    #stu_ID; //Private Member

    constructor(user_Name, user_Age, stuID){
        super();
        this.name = user_Name;
        this.age = user_Age;
        this.#stu_ID = stuID;
    }


    get stu_ID() {
        return this.#stu_ID;
    }

    set stu_ID(sID) {
        if(sID === undefined || sID === null || sID === '') {
            throw new Error('Student id Must be a Number...');
        }else{
            this.#stu_ID = sID
        }
    }

    showStuData() {
        console.log('Student Name is: ' + this.name + ' Age : ' + this.age + ' Student ID : ' + this.stu_ID)
    }
}



//Assign data to Class Members (Variables)
var emp = new Employee();
emp.jobTitle = 'Software Engineer';
emp.name = 'Ahmed';
emp.age = 23;
emp.salary = 9000;

emp.showSalary();
emp.showData()
Employee.displayHrRules(); //calling static method

//Sending Data to Constructor
var stu = new Student('Ali', 20, 227891)
stu.showStuData()


//var person = new Person() // Showing the Abstract Error

/*
//Showing the Seal Class Can't Inherted
class Test extends Employee {
    constructor(){
        super()
    }
    show(){
        console.log('Hello From Seal, The Class Cant be Inherted!')
    }
}

var seal = new Test();
seal.show()
*/

//Literal Objects / Object Initializer / Anonymous Class [Impelementation]...
var ScientificDepartment = {
    name : 'Ahmed Ashraf',
    location : 'Suez, Egypt',
    Address : 'Bla Bla Bla',
    City : {
        Street : ' Me4 Ha2olk XD',
        ZIP : 55887
    },
    dispaly() {
        document.write('My Name is: ' + this.name + '<br>')
        document.write('Located In: ' + this.location + '<br>')
        document.write('My Address is: ' + this.Address + '<br>')
        document.write('Street is: ' + this.City.Street + '<br>')
        document.write('ZIP is: ' + this.City.ZIP + '<br>')
    }
}

ScientificDepartment.dispaly(); //Literal Object Calling

