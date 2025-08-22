//print statements:
// i. alert()-pop-up
// ii.console.log() - right click on webpage -> inspect ->console -> to check something/error
// iii. document.writenln() - webpage
//character, alphabetsalphanumeric - "",''
//alert('Helo world')
//console.log("Hello,javascript!")
//console.log(134565)
//document.writeln (Hello,js'')

//DATA TYPES:
// i. premetive data type: number (integer ,float), string,(a-z,A-Z special character)","", boolen(true/false),undefined,( wHEN UH DECLARE variable
// but didnot assign value),null
// ii. complex data type: array,object,json - object
// How to check  data type : typeof
console.log(typeof 12345)
console.log(typeof 123.44)
console.log(typeof "Hello world")
console.log(typeof true)

//variable: is a container which store value/data..
//variable name should not starts with numeric digit,will not accept any special character,only accept$ doolar underscore
// no space b/w variable name
//try to keep camel casing , must be meaningful num2
//fullName,firstName,secondNum
//variable declaration:
//var :before Es6,global scope,allow redeclaration
//let: after Es6, local scope/block-scope/function scope,didn't allow redeclaration but 
//only in block Scope, value can be update
//const: after ES6, constant- value cant't be change

var userName;//declaration
userName = 'John123';// expression/assignment
console.log('userName')
{
    var number=20;

}{
let number= 20;}
console.log(number);//number is not defined
// diff b/w var and let
// diff b/w let and const
// operators
// Arithmetic operators: + - * / % **
// Assignment operators: = += -= *= /= %=
// sum += num
// sum = sum + num
// Comparison operators: >greater than, <less than, >=(grater than or equal), <=(grater than or equal, than or equal), ==, !=
 
//console.log(5 > 2); // true
//console.log(5 > 2); // false
//console.log(5 >= 2); // true
//console.log(5 <= 2); // false
//console.log(6 == 6); // true
//console.log(6 == 4); // true
//console.log(5 != 4); // true

//console.log(10 == 10); // true
//console.log(10 == "10"); // true
//console.log(10 === 10);// true
//console.log(10 === "10");// false

// Logical operators: && || !
// multiple conditions
// 5 > 4 && 6 > 3: true
// 6 > 3 && 2 > 6: false
// 5 > 4 && 6 > 3: true
// 6 > 3 && 2 > 6: true

// Termary Operator ? :
// conditional based operator - after if-else

// sum of two numbers.
let num1 = 50;
let num2 = 8;
let result = num1 + num2
console.log(result)    