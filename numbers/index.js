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