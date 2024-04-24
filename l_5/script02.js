//dom tree
//  1) downwards    2) upwards  3) sideways

//downwards--> querySelector(), querySelectorAll(), Children


const div2 = document.querySelector(".div2");
const itm1 = div2.querySelector(".item1");
itm1.innerHTML = "Cherry";

const itm2 = div2.querySelector(".item2").innerHTML = "Carrot";

//children
const itm3 = div2.children[2].innerHTML = "Apple is Apple!"


//upwards --> parentElements
const flower3 = document.querySelectorAll("li")[3];
flower3.style.color = "green";
const flowerList = flower3.parentElement;
flowerList.style.backgroundColor = "orange";


//sideways
const div4 = document.querySelector(".div4");
const drink2 = div4.children[1];

const drink3 = drink2.nextElementSibling;
drink3.style.color = "green";
const drink1 = drink2.previousElementSibling;
drink1.style.color = "purple";