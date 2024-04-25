//error handling - try, catch, finally, throw
//try....catch handle runn time error (not syntax error)
//error object
//the finally statement -- execute code, after try and catch

// try{
//     //code test
//     alert("hi! welcome to the website");
//     //alert(x);
//     alert("how was your day");
// }
// catch(exception){
//     //error handle
//     alert("innside catch block");
//     document.write(exception);
//     document.write(exception.name);
//     document.write(exception.message);

// }
// finally{
//     //it will work always even there is error or not
//     alert("Bye bye! see you againn")
// }



//the throw statement -- create custom error

const chBtn = document.querySelector("#checkBtn");
chBtn.addEventListener('click',function(){

    var input = document.querySelector("#numTextField").value;
    //document.write(input);
    //input = parseInt(input);
    
    
   

    try{
        if(input < 5 || input == "a"){
            throw "Invalid Input or Input is less than 5"
        }
        else if(input > 20 || input == NaN){
            throw "Invalid Input. Input is larger than 20"
        }
        else{
            document.querySelector("#value").textContent = "Value of the Input Field : " + input + " " +typeof(input);
        }

    }
    catch(err){
        alert(err);
    }
})