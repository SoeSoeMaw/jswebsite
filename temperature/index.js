document.getElementById('submitButton').onclick = function(){
    let temp = 0;
    if(document.getElementById('cButton').checked){
        temp = Number(document.getElementById('textBox').value);
        temp = toCelsius(temp);
        document.getElementById('tempLabel').innerHTML = temp +"°C";
    }
    else if(document.getElementById('fButton').checked){
        temp = Number(document.getElementById('textBox').value);
        temp = toFahrenheit(temp);
        document.getElementById('tempLabel').innerHTML = temp + "°F";
    }
    else{
        document.getElementById('tempLabel').innerHTML = "Select a label";
    }
}

function toCelsius(temp){
    return (temp -32 ) * (5/9);
}
function toFahrenheit(temp){
    return temp * 9/5 + 32;
}