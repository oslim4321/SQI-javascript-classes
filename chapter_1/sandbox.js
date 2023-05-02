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
*/
