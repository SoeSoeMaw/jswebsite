/**
 * object = a group of properties and methods
 * properites = what an object has
 * methods = what an object can do
 * use '.' to access properties/methods
 */

const car = {
    model: "Mustang",
    color : "red",
    year : 2023,

    drive : function(){
        console.log('You drive the car.');
    },
    undrive : function(){
        console.log('You stop the car.');
    }
}
console.log(car.model);
console.log(car.color);
car.drive();


/**
 * class = a blueprint for creating objects
 * define what properties and methods they have
 * use a constructor for unique properties
 */

class Player {
    score = 0;
    pause(){
        console.log('You passed the game');
    }
    exit(){
        console.log('You exit the game');
    }
}
const player1 = new Player();
player1.pause();
player1.exit();
const player2 = new Player();
player2.pause();
player2.exit();


/**
 * error = object with a description of something went wrong
 * eg. Can't open a file
 *      Lose connection
 *      User types incorrect input
 *      TypeError
 * 
 * throw = executes a user-defined error
 */
try{
    let x = window.prompt('Enter a #');
    x = Number(x);
    if(isNaN(x)) throw "This wasn't a number!";
    if(x == "") throw "This was empty";
    console.log(`${x} is a number`);
}catch(error){
    console.log(error);
}finally{
    console.log('It always execute.');
}


/**
 * setTimer = invokes a function after a number of milliseconds
 *              asynchronous function (doesn't pause execution)
 */
let item = 'cryptocurrency';
let price= 500;
let timer1 = setTimeout(firstMessage,3000,item,price);//setTimeout return the id of the timer
let timer2 = setTimeout(secondMessage,6000);
let timer3 = setTimeout(thirdMessage,9000);

function firstMessage(item,price){
    alert(`Buy this ${item} for $${price}.`);
}
function secondMessage(){
    alert('This is not a scam!');
}
function thirdMessage(){
    alert('DO IT!');
}
document.getElementById('myButton').onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
}

/**
 * setInterval() = invokes a function repeatedly after a number of milliseconds
 *                  asynchronous function (does not pause execution)
 */

let count = 0 ;
let max = window.prompt('Enter # of count.');
max = Number(max);
let myTimer = setInterval(countUp,1000,max);
function countUp(max){
    count+=1;
    console.log(count);
    if(count>=max){
        clearInterval(myTimer);
    }
}

//Date object is used to work with date & time
let date = new Date();
date = new Date(0);// getting the starting date
date = new Date(100000000);//gettting the dat added 1....to starting date
date = new Date(2023,0,1,12,22,22,2);

let year = date.getFullYear();
let dayofMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minute = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();

date.setFullYear(2024);
date.setMonth(1);
date.setDate(31);
date.setHours(23);

date = date.toLocaleString();
document.getElementById("myLabel").innerHTML = date;

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`
}
function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}