// popup box - alert, confirm, prompt

function wecomeMessage(){

    var h1 = document.createElement('h1');
    let text;

    var name = prompt("Enter Your Name:");

    if(name == null || name == ''){
        text = "No Name Found";
    }
    else{
        text = "Welcome " + name;
    }

    var testNode = document.createTextNode(text);
    h1.appendChild(testNode);
    document.body.appendChild(h1);
}
wecomeMessage();