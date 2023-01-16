/**
 * function = define code once, and use its many times.
 *             To perform some codes, call the function name.
 */
/**
 * ternary operator = shortcut for an if/else statement
 * Take 3 operands
 * 1. a condition with ?
 * 2. expression if True:
 * 3. expression if False
 * condition ? exprIfTrue : exprIfFalse
 */
checkWinner(true);
function checkWinner(win){
    win ? console.log('You Win') : console.log('You Lose');
}


/**
 * variables scope = where a variable is accessible
 * 
 *  let = variables are limited to block scope {}
 *  var = variables are limited to a function() {}
 *  
 *  global variable = is declared outside any function
 * (if global, var will CHANGE browser's window properties)
 */

// let name="Bro";//test inspect window properties
var name="Soe";


// //with let
// for(let i=0;i<3;i++){

// }
// console.log(i);//catch error
// for(var j=0;j<2;j++){
    
// }
// console.log(j);//it is okay

// function doSomething(){
//     for(var k=0;k<2;k++){

//     }
// }
// console.log(k);//catch error, var is limited to function



/**
 * Template literals = delimited with (`)
 * instead of double or single quotes
 * allows embedded variables and expressions
 */
let userName = "Boo";
let items = 3;
let total = 75;

console.log(`Hello ${userName}`)
console.log(`You have ${items} items in you cart.`);
console.log(`The total is $${total}`);

let text = `
Hello ${userName}.<br>
You have ${items} items in your cart.<br>
The total is ${total}.
`;
document.getElementById('cart').innerHTML=text;


/**
 * toLocaleString() = returns a string with a language sensitive representation
 * of this number
 * number.toLocaleString(locale,{option});
 * 
 * locale = specify that language (undefined = default set in browser)
 * options = object with formatting options
 */

// let myNum = 123456.789;

// myNum = myNum.toLocaleString('en-US');//US English
// console.log(myNum);
// myNum = myNum.toLocaleString('hi-IN');//Hindi
// console.log(myNum);
// myNum = myNum.toLocaleString('de-DE');//standard German
// console.log(myNum);
// myNum = myNum.toLocaleString('en-US',{style:"currency",currency:"USD"});//Dollar
// console.log(myNum);
// myNum = myNum.toLocaleString('hi-IN',{style:"currency",currency:"INR"});//Ruby
// console.log(myNum);
// myNum = myNum.toLocaleString('de-DE',{style:'currency',currency:'EUR'});//Pound
// console.log(myNum);

//For the percent 
// let myNum = 0.1;
// myNum = myNum.toLocaleString(undefined,{style:'percent'});
// console.log(myNum);

//For the unit number
let myNum = 100;
myNum = myNum.toLocaleString(undefined,{style:'unit',unit:'celsius'});
console.log(myNum);
