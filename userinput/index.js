// How to accept user input

// EASY WAY with a window prompt

// let username = window.prompt('What is your name?');
// console.log('Hello',username);

// DIFFCULT WAY to accept user input
let username ;
document.getElementById('myButton').onclick = function(){
    username = document.getElementById('myText').value;
    document.getElementById('myLabel').innerHTML = 'Hello '+username;
}