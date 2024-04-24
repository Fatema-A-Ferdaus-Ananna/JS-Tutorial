function showMessage1(){
    alert("Button 1");
}

function showMessage2(){
    alert("Button 2");
}

function showMessage3(){
    alert("Header 1");
}

function showMessage4(){
    //document.getElementById("heading1").innerHTML="You Have Clicked The button!.....";
    document.querySelector("#heading1").innerHTML="You Have Clicked The button!.....";
}



function showLuffy(){
    var imageLuffy = document.querySelector("#luffy");
    imageLuffy.src="image/luffy.png";
    imageLuffy.style.display="inline"
}

function showKiller(){
    var imageKiller = document.querySelector("#killer");
    imageKiller.src="image/killer.png";
    imageKiller.style.display="inline"
}

//photo slide previous, next

var photoList = ["image/img02.png","image/killer.png", "image/luffy.png" ];
var image = document.querySelector("#photoList");

var count = 0;

function previous(){
    count--;

    if(count < 0){
      count = photoList.length-1;
      image.src = photoList[count];
    }
  
    else{
      image.src = photoList[count];    
    }
 
}

function next(){
    count++;

    if(count >= photoList.length){
      count = 0;
      image.src = photoList[count];
    }
  
    else{
      image.src = photoList[count];    
    }
}


//style add & remove

function removeStyle(){
    var div2 = document.querySelector("#d");
    div2.classList.remove("div2");
}

function addStyle(){
    var div2 = document.querySelector("#d");
    div2.classList.add("div2");
}

document.querySelector("#event1").addEventListener("click", changeColor);
var div3 = document.querySelector("#d1");

function changeColor(){
    div3.classList.add("div3-event");
}

document.querySelector("#event2").addEventListener("click", function(){ //anonymous function
    div3.classList.remove("div3-event");
});

var event3 = document.querySelector("#event3");
event3.addEventListener("mouseover",function(){ //anonymous function
    event3.classList.add("div3-event-button");
});

event3.addEventListener("mouseout",function(){ //anonymous function
    event3.classList.remove("div3-event-button");
});