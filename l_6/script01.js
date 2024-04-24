//DOM event
//1. Event Object
/* event type : change, submit, load, upload, open, play
canplay, pause, playing, progress, ended, resize, scroll, toggle

properties : type, taarget, preventDefault()*/

//2. MouseEvent - obj
//3.KeyboardEvent - obj
//4. FocusEvent - obj
//5. ClipboardEvent - obj
//6. DragEvent - obj

//Change

const input = document.querySelector("input[name=name");
//console.log(input);

input.addEventListener('change', changeHandler);


function changeHandler(e){
    console.log('changed');
    console.log(e.target.value);
}

const programs = document.querySelectorAll("input[name=program]");
console.log(programs);

Array.from(programs).map((program) => {
    program.addEventListener("change", programHandler)
});

function programHandler(e){
    if(e.target.checked){
        console.log("checked");
        console.log(e.target.value);
    }
    
}


const department = document.querySelector("select[name=department]");
console.log(department);

department.addEventListener("change", departmentHandler);

function departmentHandler(e){
    console.log("selected");
    console.log(e.target.value);
}