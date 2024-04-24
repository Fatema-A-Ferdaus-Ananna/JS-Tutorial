//alert("Hello! Wecome to the site!!");


//prodict details
document.write("<h4> Product 1: </h4><br/>");
document.write("Product Name: Sunsilk Shampoo <br/>");
document.write("Product Id: ss001 <br/>");
document.write("Product Quantity: 700ml <br/>");
document.write("Product Price: 950TK <br><br>");


document.write(typeof("Ananna")+"<br>");
document.write(typeof(10000.000)+"<br>");
document.write(typeof(true)+"<br><br>");

var number = 20;
document.write(typeof(number)+"<br>");

number = toString(number);
document.write(typeof(number)+"<br><br>");

var string = "100";
document.write(typeof(string)+"<br>");

string = parseInt(string);
document.write(typeof(string)+"<br><br>");

var string = "100";
document.write(typeof(string)+string+"<br>");
document.write("String Length "+string.length+"<br>");

string = Number(string);
document.write(typeof(string)+string+"<br><br>");

var firstName = "Fatema";
var lastName = "-A-Ferdaus"
document.write("First Name: "+ firstName + "<br>");
document.write("Last Name: "+ firstName + "<br>");
document.write(firstName.charAt(2)+"<br>");
document.write("Name Uppercase: "+firstName.toUpperCase()+"<br>");
document.write("Name Lowercase: "+firstName.toLowerCase()+"<br>");
document.write("Full Name: "+ firstName.concat(lastName)+ "<br>");


var midName = lastName.slice(0,3);
document.write("Middle Name: "+ midName + "<br>");

var midName = firstName.concat(lastName).slice(6, 9); //FAtema-A-ferdaus
document.write("Middle Name: "+ midName + "<br>");

var input = prompt("Enter Your Name: ");
document.write("My Nama" + input);
document.write("Your Name Length :"+input.length+"<br>");