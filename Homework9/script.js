function plus(){
    var num1, num2, result;
    
    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);

    result = num1 + num2;

    document.getElementById('resultat').innerHTML = result;
}
function minus(){ 
    var num1, num2, result;

    num1= document.getElementById('number1').value;
    num1= parseInt(num1);

    num2= document.getElementById('number2').value;
    num2= parseInt(num2);
    
     result = num1 - num2;
    
    document.getElementById('resultat').innerHTML = result;

}
function segment(){ 
    var num1, num2, result;

    num1= document.getElementById('number1').value;
    num1= parseInt(num1);

    num2= document.getElementById('number2').value;
    num2= parseInt(num2);
    
     result = num1 / num2;
    
    document.getElementById('resultat').innerHTML = result;

}
function multip(){
    var num1, num2, result;
    
    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);

    result = num1 * num2;

    document.getElementById('resultat').innerHTML = result;
}
function ascension(){
    var num1, num2, result;
    
    num1 = document.getElementById('number1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('number2').value;
    num2 = parseInt(num2);

    result = Math.pow(num1 , num2);

    document.getElementById('resultat').innerHTML = result;
}