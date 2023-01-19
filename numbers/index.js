let countNumber = 0;

document.getElementById('btnDecrease').onclick = function(){
    countNumber -=1;
    document.getElementById('countLabel').innerHTML = countNumber;
}

document.getElementById('btnReset').onclick = function(){
    countNumber = 0;
    document.getElementById('countLabel').innerHTML = countNumber;
}

document.getElementById('btnIncrease').onclick = function(){
    countNumber+=1;
    document.getElementById('countLabel').innerHTML = countNumber;
}


/**
 * Random Number
 * Math.random() // generate random numbers from 0 to 1
 * Math.random() * 6; // generate random numbers fromm 0 to 5 with decimal value because the computer starts from 0
 * Math.floor(Math.random() * 6); // generate random numbers fromm 0 to 5 because the computer starts from 0
 * Math.floor(Math.random() * 6) + 1; // generate random numbers from 1 to 6;
 */

let x = Math.random();
console.log('Random from 0 to 1',x);
x = Math.random() * 6;
console.log('Random from 0 to 5 decimal result',x);
x = Math.floor(Math.random()*6);
console.log('Random from 0 to 5',x);
x = Math.floor(Math.random()*6)+1;
console.log('Random from 1 to 6',x);

let y,z;
document.getElementById('btnRoll').onclick = function(){
    x = Math.floor(Math.random()*20)+1;
    document.getElementById('xLabel').innerHTML = 'X : '+ x;
    y = Math.floor(Math.random()*20)+1;
    document.getElementById('yLabel').innerHTML = 'Y : ' + y;
    z = Math.floor(Math.random()*20)+1;
    document.getElementById('zLabel').innerHTML = 'Z : '+ z;

}


/**
 * array = think of it as a variable that can
 * store multiple values
 */
let fruits = ['apple','orange','banana'];
console.log(fruits);
fruits.push('mango'); // add an element to last
fruits.pop(); //remove last element
fruits.unshift('kiwi'); //add an element from beginning
fruits.shift(); // remove element from beginning

console.log(fruits);

let len = fruits.length;
let index = fruits.indexOf('apple');


fruits = fruits.sort();// ascending order
fruits = fruits.sort().reverse();//descending order
for(let fruit of fruits){
    console.log(fruit);
}


fruits = ['apple','orange','mango'];
let meats = ['chicken','pork','beef'];
let vegetables = ['onion','garlic','tomato'];

let allArray = [fruits,meats,vegetables];
for(let list of allArray){
    for(let value of list){
        console.log(value);
    }
}

/**
 * spread operator = allows an iterable such as an array or string to 
 *  ...                 be expanded in places where zeros or more arguments are 
 *                   expected (unpacks the element)
 */

let userName = 'Bro Code';
console.log(...userName);
let numbers = [1,2,3,4,5,6,7,8,9,10];
let max = Math.max(2,3,4,5,6);//it will return max value
max = Math.max(numbers);//it will return errors but by unpacking
max = Math.max(...numbers);//return 10

fruits.push(vegetables); // it will result ['apple','orange','mango',array('onion'...)]
console.log(fruits);
// by unpacking array unpack
meats.push(...vegetables);// will resuing single array


/**
 * rest parameters = represents an infinite number of parameters
 *                   (packs arguments into an array)
 */
let a=1,b=2,c=3,d=4,e=5;

console.log(sum(a,b,c,d,e));
console.log(sum(a,b,c,d));
console.log(sum(a,b,c));
console.log(sum(a,b));

function sum(x,...numbers){
    let total = 0;
    total +=x;
    for(let num of numbers){
        total+=num;
    }
    return total;
}


// callback = a function passed as an argument
//                    to another function.
 
//    Ensures that a function is not going
//    to run before a task is completed.
//    Helps us develop asynchronous code.
//    (When one function has to wait for another function)
//    that helps us avoid errors and potential problems
//    Ex. Wait for a file to load

sum(2, 3, displayConsole);

function sum(x, y, callBack){
  let result = x + y;
  callBack(result);
}

function displayConsole(output){
  console.log(output);
}

function displayDOM(output){
  document.getElementById("myLabel").innerHTML = output;
}

