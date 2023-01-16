//  A variable is a container for storing data
//  A variable behaves as if it was the value that it contains

// Two steps :
//1. Declaration (var, let, const)
//2. Assignment (= assignment operator)

let firstName = "Soe"; //strings
let age = 26; // numbers
let student = false; // boolean

console.log('Hello',firstName);
console.log('You are',age,'years old');
console.log('Enrolled:',student);

document.getElementById('p1').innerHTML = 'Hello '+firstName;
document.getElementById('p2').innerHTML = 'You are '+age+' years old.';
document.getElementById('p3').innerHTML = 'Enrolled: '+student;

/*
    arithmetic expression is a combination of....
    operands (values,variables,etc...)
    operators (+,-,*,/,%)
    that can be evaluated to a value
    ex. y = x+2
*/

/**
 * Operator precedence
 * 1. parenthesis ()
 * 2. exponents
 * 3. multiplication & division
 * 4. addition & subtraction
 */

let values = 20 ; 
values = values + 20 ;
values = values -20;
values = values * 2;
values = values / 2;
values = values % 3;

console.log('Values',values);

values = 1 + 2 * (3+4);

console.log('Precendence Values',values);

/**
 * Type conversion = change the datatype of a value to another
 *                   (strings, Numbers, Booleans)
 */

let yourage = window.prompt('Enter Your Age');
console.log(typeof yourage);

yourage = Number(yourage);
console.log("Happy Birthday, now you are",yourage,"years old");

let x;
let y;
let z;
x = Number("3.14");
y = String(3.14);
z = Boolean("");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

/**
 * const = a variable that can't be changed
 */
const PI = 3.14;
let radius;
let circumference;

radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circumference = 2 * PI * radius;
console.log('The cirsumference is ',circumference);


/**
 * // Math =  an intrinsic object that provides basic mathematics functionality and constants
 */
x = 3.14;
y = 5;
z = 9;
let maximum, minimum;

x = Math.round(x);
x = Math.floor(x);
x = Math.ceil(x);
x = Math.pow(x,2);
x = Math.sqrt(x);
x = Math.abs(x); // far away from the zero
maximum = Math.max(x,y,z);
minimum = Math.min (x,y,z);
console.log(Math.PI);
