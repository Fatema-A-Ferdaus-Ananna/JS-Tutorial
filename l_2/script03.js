//arithmetic operator -> +, -, /, %, **[exponent], ++[increment], --[decrement]
//assignment operator -> =, +=, -=, /=, *=, ++=, --=

var x = 5;
x += 5; // x = x+5
document.write(x+"<br>");


for(var i=0; i<x; i++){
    document.write((i+1)+" Jobless, Unemployeed fresh graduate<br>");
}
document.write("<br></br>");

for(x; 0<x; x--){
    document.write(x+" Jobless, Unemployeed fresh graduate<br>")
}
document.write("<br><br>");

//ternary operator

var b = 6, c = -6, d=0;

if(b > 0){
    document.write("positive<br>");
}

else{
    document.write("negative<br>");
}

if(c > 0){
    document.write("positive<br>");
}

else{
    document.write("negative<br><br>");
}


var result = b > 0 ? "positive" : "negative";
document.write(result+"<br>");

c > 0 ? 
document.write("positive<br>") : 
document.write("negative<br><br>");


d > 0 ?
document.write("positive<br>") :
d < 0 ?
document.write("negative<br>") : document.write("zero<br><br>");


//creating function

function addition(num1, num2){
    return num1+num2;
}

//calling the function
document.write("Addition: " + addition(6, 10) +"<br><br>");

//IIFEs -> immediately invokable function expression
(function multiplication(num1, num2){
    document.write("Multiplication: " +num1*num2 + "<br><br>");
})(5,6);

//function expression
var sub = function subtraction(num1, num2){
    res = num1 - num2; 
    document.write("Subtraction: " + res + "<br><br>");
};
sub(6, 30);