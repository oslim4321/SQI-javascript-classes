// alert("hello world"); //  we use semicolon to mark the end of a stateent just like . ending the line of a sentence

// javascript run code from top to bottom
console.log(1);
console.log(2);
// the console is a function to log out value to you browser console, it just use for testing

// lets talk about variable
// basically what variable do is to give us a way to store VALUES eg name, email, number and then use that varibale whenever we want to
// we have differnt way of making var
// example 1

// let age = 20;
// let year = 2023;
// console.log(age, year);

// age = 30;
// console.log(age);

// now what if we want to create a variable and we dont want the vakue of the var to change
// well in this case we use a different keyword called
// example 2
const point = 100;
console.log(point);

/* no allowed gonna throw error */
// point = 50; X
// console.log(point); X

// so there is othere old way of creating variable and that is :
var old = 60;
console.log(old);
old = 60;
console.log(old);

/* When using var there are few RULES we must follow eg 
    1) using space on varible name is gonna throw error/ we can use camelCase instead
    2)var name can only contain (letters, Numbers, under_scroll, or $dollar sign. they cant also start with a number
    3) there is also some reserve keyword in javascript we cant use eg (let and const)
    4) also please try to make your name meaningfull so that any other dev could be able to understand your code and kit coculd be self documented
    5) also please make comment to document your code for oher dev to know what you are trying to do
    6) not all browsers understand let and const, there are some old browsers that dont understand let and const eg (internet explorer), so use goggle chrome
*/

/* DATA TYPE */
// we have 7 data type in javascript and they have there own unique and things they can do
// Number : 1,2,3,4,5,6
// String : 'hello world', 'welcome to selim class' "oslim@gmail.com"
// Boolean : false, true
// Null : Explicitly set a variable with no value / just like undefine
// undefined : for variable that have not yet been defined
/* Object : Complex data structure - Array, Dates, Literal, etc, they can perform different function, infact alot of javascript is base around using
 object*/
// Symbol : Used with object, they are a new Addition to javascript language which they are closely link to object

/* A VARIABLE CAN HOLD ANY DATA TYPE 
    we can also override a var with a different type of data too
    eg if we store a var with a String at the start we can override it to a Number
*/

// LESSON 9
// STRING
console.log("hello world");

let email = "oslim@gmail.com";
console.log(email);
// STRING CONCATENATION
// concatenation is just a way of joining 2 string together
let firstName = "selim";
let lastName = "sooto";
let fullName = firstName + lastName;

console.log(fullName);
// let fullNames = firstName + " " + lastName;

// console.log(fullNames);

// GETTING CHARACTER

console.log(fullName[5]);

// STRING LENGTH

console.log(fullName.length);

// STRING METHODS

// string have several different function associated with them, this functions are called methods

// the differenet between method and function is
// A fuunction is Snipppet of codes which perform some kinda specific Tasks
// A Method is just a function that is associted with a particular object or Data Type
// they actually means the same thing if i said a function or method they are both performng a task
// example
//1) String length
//2) String slice()
//3) String substring()
//4) String substr()
//5) String replace()
//6) String replaceAll()
//7) String toUpperCase()
//8) String toLowerCase()
//9) String concat()
//10) String trim()
//11) String trimStart()
//12) String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

let userEmail = "adewaleselim6@gmail.com";

/* INDEX-OF */
/*To get the last index of  */
// let results = userEmail.lastIndexOf("e");

/* SLICE */
/* to slice/delete a string 
first parameter is where we go from 
second parameter is where we go to 
the second parameter will go back to the starting point to count 
*/
// let results = userEmail.slice(2, 5);

/* SUBSTR */
/* this delete the array from the starting position
the first parameter start from the staring point just like slice
but the second parameter carries on from where the starting point ends
*/
// let results = userEmail.substr(4, 10);

/* REPLACE */
// this will only replace the first charater it meet
// let results = userEmail.replace("e", "o");

// console.log(results, "replace");

/* NUMBER DATA TYPE */
