//dom 
//find/get
//change
//add. or
//deleten html elements

//dom methods = getElementById()
//dom properties = innerHtml


//create element
var heading3 = document.createElement("h1");
var text = document.createTextNode("This is heading 3");
heading3.appendChild(text);

var div1 = document.getElementById("div1");
//var div1 = document.getElementsByClassName("div1");
div1.appendChild(heading3);

var heading2 = document.getElementsByTagName("h1")[1];
div1.removeChild(heading2); //remove element


var heading4 = document.createElement("h1");
var text1 = document.createTextNode("This is heading 4");
heading4.appendChild(text1); //add element


var heading1 = document.getElementsByTagName("h1")[0];
div1.appendChild(heading4);
div1.insertBefore(heading4, heading1); //1st- which one u want to add, 2nd kar age add hobe


