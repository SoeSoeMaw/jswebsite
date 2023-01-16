//useful string properties and methods
let userName = ' Bro Code ';
let phoneNumber = '123-5698-263';
userName = userName.trim();
console.log(userName.charAt(0));
console.log(userName.length);
console.log(userName.indexOf('o'));
console.log(userName.lastIndexOf('o'))
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(phoneNumber.replaceAll('-','/'));


/**
 * slice() extracts a section of a string and
 * returns it as a new string without modifying
 * the original string
 */
let fulName = 'Soe Maw';
let firstName,lastName;

firstName = fulName.slice(0,fulName.indexOf(' '));
lastName = fulName.slice(fulName.indexOf(' ')+1);
console.log('First Name - ',firstName);
console.log('last name ',lastName);

/**
 * method chaining = calling one method after another 
 *                   in one continuous line of code
 */
//Without using method chaining

let myName = 'bro';
let letter = myName.charAt(0);
letter = letter.toUpperCase();
console.log(letter);

// With method chaining
letter = myName.charAt(0).toUpperCase();
console.log(letter);


document.getElementById('submit').onclick = function(){
    const checkedVal = document.getElementById('myCheckBtn');
    const btnVisa = document.getElementById('btnVisa');
    const btnMaster = document.getElementById('btnMaster');
    const btnPaypal = document.getElementById('btnPaypal');
    if(checkedVal.checked){
        console.log('You are subscribed');
    }
    else{
        console.log('You are not subscribed');
    }
    if(btnVisa.checked){
        console.log('You pay with Visa');
    }
    else  if(btnMaster.checked){
        console.log('You pay with Master card');
    }
    else if(btnPaypal.checked){
        console.log('You pay with Paypal');
    }
    else{
        console.log('Check one method to pay.');
    }
}
/**
 * switch = statement that examines a value for a match against many case clauses.
 *          More effiencient that many 'else if' statements.
 */
let grade = 95;
switch(true){
    case grade >= 90 :
        console.log('You did great!');
        break;
    case grade >= 80:
        console.log('You did good');
        break;
    case grade > 60 :
        console.log('You passed....barely');
        break;
    default:
        console.log(grade,'is not a letter grade!');
}

// userName='';
// while(userName == '' || userName == null){
//     userName = window.prompt('Enter Your Name');
// }
// console.log(userName);
/**
 * break = breaks out of a loop entirely
 * continue = skip an iteration of a loop
 */
for(let i=0;i<=20;i++){
    if(i==13){
        break;
    }
    console.log(i);
}
for(let i=0;i<=20;i++){
    if(i==13){
        continue;
    }
    console.log(i);
}

