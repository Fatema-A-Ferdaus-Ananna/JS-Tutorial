//guessing game

var numOfWin = 0;
var numOfLost = 0;

for(var i=0; i<5; i++){

    //var guessingNumber = parseInt(prompt("Enter a number 1 to 5: ")) ;
    var randomNumber2 = Math.floor((Math.random()*5)+1);
    var randomNumber = Math.floor((Math.random()*5)+1);


    if(randomNumber2 === randomNumber){  //guessingNumber
        document.write("Yahoo! You Guess the right Number: " + randomNumber2 +"<br>");
        numOfWin++;
    }
    
    else{
        document.write("Sad! You Lost. Random number was: "+ randomNumber + "<br>");
        numOfLost++;
    }
}

document.write("<br>You win: " + numOfWin +" Times<br>");
document.write("You Lost: " + numOfLost +" Times<br>");


