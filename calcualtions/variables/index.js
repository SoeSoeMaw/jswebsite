/**
 * Hypotenuse calculator
 * c = sqrt(pow(a*2)+pow(b*2));
 */
/*
let a,b,c;
a = Number(window.prompt('Enter side a'));
b = Number(window.prompt('Enter side b'));
c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
console.log('Value of c :',c);*/

document.getElementById('submit').onclick = function(){
    a = Number(document.getElementById('a').value);
    b = Number(document.getElementById('b').value);
    c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    console.log('c',c);
    document.getElementById('c').value = c;
}