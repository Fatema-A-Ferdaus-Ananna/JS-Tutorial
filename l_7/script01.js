//bom - browser object model
//window object
//location object - we can find the current page address using location obj
                //aslo can redirect the browser to a new page

console.clear();
console.log(window.location); // console.log(location)
document.write("<br><br><br>" +"Page location: "+location+"<br>");

//href
document.write("Page location URL: "+location.href+"<br>");
console.log(location.href);

//protocal
document.write("Page Protocol: "+location.protocol+"<br>");
console.log(location.protocol);



// //host
document.write("Page Host : "+location.host+"<br>");
document.write("Page Host Name: "+location.hostname+"<br>");
console.log(location.hostname);

var divLocation = document.querySelector(".div1");

var p1Hostname = divLocation.children[0];
p1Hostname.textContent = "Page Host Name: "+location.hostname;

// //port
document.write("Page Port: "+location.port+"<br>");
console.log(location.port);

var p2Hostname = divLocation.children[1];
p2Hostname.textContent = "Page Port: "+location.port;


//path name
document.write("Path Name: "+location.pathname+"<br>");
console.log(location.pathname);

var p3Hostname = divLocation.children[2];
p3Hostname.textContent = "Page Path Name: "+location.pathname;



const visitBtn = document.getElementById("visitBtn");
visitBtn.addEventListener("click", function(){
    location.assign("https://sites.google.com/view/fatema-a-ferdaus/home");
});

