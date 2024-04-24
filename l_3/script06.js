//DOM -- document object model
//getElementById

document.getElementById("heading1").innerHTML = "Wow! The text changed"; //innerhtml-> change text

var para = document.getElementById("para");
para.innerHTML = "Ananna";


//get elements by tag name
document.getElementsByTagName("h2").innerHTML = "Hi! Hi! Hi!.....Hi";
//there will be no changes because there can be more than 1 same tag, therefore we need to use index number

document.getElementsByTagName("h2")[1].innerHTML = "Hi! Hi! Hi!.....Hi";
document.getElementsByTagName("h2")[0].innerHTML = "Hi! Hi! Hi!.....Hi";

//get element by class name
document.getElementsByClassName("myself").innerHTML = "I am jobless (-_-)";
//there will be no changes because there can be more than 1 element in same class,
// therefore we need to use index number

document.getElementsByClassName("myself")[1].innerHTML = "I am jobless (-_-)";