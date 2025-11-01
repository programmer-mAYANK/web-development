// Object in JavaScript: {} key : value, value can be any data types - string,number,function,array,boolean,object
// complex data types - object,array

// let user = {
//     userName: "john doe",
//     age: 25,
//     skills: ["MERN Stack", "Java FS"],
//     "email id": "john@email.com",
//     address: {
//         city: "Noida",
//         country: "India",
//         pincode: 201301
//     }
        
// }
// console.log(user)
// dot notation, array notation(property in string)
// console.log("User name: " + user.userName)
// console.log("User Email: " + user["email id"])
// nested object's property


// insert,delete,update
// user.salary = 25000;
// console.log(user.salary)
// user.age = 26;
// console.log(user.age)
// user.skills.push("Python")
// console.log(user.skills)
//

// Object's property - Object.keys(object) - in array
// Object's values - Object.values(object) - in array
// Object's key - value - object
// let user = new Object();
// user.userName = "John Doe";
// user.age = 28;
// console.log(user);
//
// Q12
//var student = {name: "David Rayy", sclass: "VI", rollno: 12};
// console.log(student);
// console.log(Object.keys(student).length); // 3 
//
// Q13
// var student = {name: "David Rayy", sclass: "VI", rollno: 12};
// console.log("Before delete:", student);
// delete student.rollno;
// console.log("After delete:", student);
//
// Q14
// var student = {name: "David Rayy", sclass: "VI", rollno: 12};
// console.log(student);
//
// Q15
// var student = {name: "David Rayy", sclass: "VI", rollno: 12};
// console.log(Object.keys(student));
// console.log(Object.keys(student).length);

// Q1. Find employess whose salary more than 5000
// Q2. Find employees whose name starts with "J"
// Q3. Increase salary of employees by 10%
// Q4. Count employees earning more than 5000 - length

// let employees = [
//     { name: "John", salary: 40000 },
//     { name: "David", salary: 60000 },
//     { name: "Alice", salary: 30000 },
//     { name: "Bob", salary: 55000 },
//     { name: "Jack", salary: 65000 },
// ];

// Q1. Find employess whose salary more than 5000
// for (let i=0; i < employees.length; i++) {
//     (employees[i].salary > 50000);
//         console.log(employees[i]);
//     }
    
// Q2. Find employees whose name starts with "J"     
// for (let i=0; i < employees.length; i++) {
//     if (employees[i].name.startsWith("J")) {
//         console.log(employees[i]);
//     }
// }
// const jEmployees = employees.filter(e => e.name.startsWith("J"));
// console.log("Employees whose name starts with J:", jEmployees);

// Q3. Increase salary of employees by 10%
// for (let i=0; i < employees.length; i++) {
//     employees[i].salary = employees[i].salary * 1.1;
// }
// console.log("Employees with increased salary by 10%:", employees);

// Q4. Count employees earning more than 5000 - length
// for (let i = 0; i < employees.length; i++) {
//     let increase = employees[i].salary * 10 / 100;
//     employees[i].salary = employees[i].salary + increase
// }
// console.log(employees)

// object inside function:

// let user = {
// username: "John",
//    age: 25,
//    greet() {
//        console.log("Hello my name is " + this.username +"and i have a " + car.brand + "car")
//    }
//}

// let car = {
//     brand: "Toyota",
//     speed: 120,
//     color: "black",
//     start : function() { // before ES6 
//         console.log("Car started...")
//     },
//     stop(){ // ES6
//     console.log("Car stopped..")    

//     }
// }
// console.log(car)
// car.start()
// car.stop()
//

// Hello,My name is John and I have a Toyota car


// return -> return a + b
// console.log -> in console what should print

// function sum(a, b) {
//     console.log(a + b)
// }
// sum(10,20); // 30

// function sum(a, b) {
//     return 10;
// }
// sum(10, 20);
//
// Object Constructor Function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// adding method to the person prototype
// Person.prototype.greet = function() {
//     console.log("Hello, my name is "+this.name + " and my age is" + this.age);
// }
// creating instance of Person
// let person1 = new Person("Alice", 20)
// let person2 = new Person("John",21)
// console.log(person1)

// person1.greet(); // Hello, my name is Alice and my age is 20

// let person = {
//     name: "Alice",
//     age: 24,
//     greet(){
//         console.log("Hello, my name is " + this.name + " and my age is " + this.age);
//     }
// }
// let car = {
//     brand: "Toyota",
//     speed: 120,
//     greet(){
//         console.log("I drive a " + this.brand + " car.");
//     }
// }
// My name is Alice and I drive a Toyota car.
// person.greet();

let student = {
    name: "Aman",
    age: 22,
    grade: "A",
    subjects: ["Math", "Science", "English"]
};
console.log("Student Name: " + student.name);
console.log("Student Age: " + student.age);
console.log("Student Grade: " + student.grade);
console.log("Student Subjects: " + student.subjects.join(", "));

// Object ke andar methods bhi ho sakta hain:
// (Methods = function jo object ke andar hote hain)

let person = {
    name: "Alice",
    greet: function () {
        console.log("Hello, my name is " + this.name + " and my age is " + this.age);
    }
};