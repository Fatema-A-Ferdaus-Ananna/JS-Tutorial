//array

var array = new Array(5);
array[0]= 5;
array[1]= 4;
array[2]= 8;
array[3]= 2;
array[4]= 9;

document.write("Array Elements: "+array+"<br>");

array.push(9);
document.write("Push a Array Elements: "+array+"<br>");

array.pop(array);
array.pop(array);
array.pop(array);
document.write("Pop 3 Array Elements: "+array+"<br>");

var array2 = ["ananna", "fatema"];

var array3 = array.concat(array2);
document.write("Array Elements: "+array3+"<br>");

array3.shift(array3); // oposite of pop -> remove elements from first
document.write("Array Elements: "+array3+"<br>");
array3.unshift("Ana"); // oposite of push -> add elements at first
document.write("Array Elements: "+array3+"<br>");

//splice(position[where to add or remove], how many elements want to remove, add new value of elemnts)
array3.splice(2,0,"mina","tina");
document.write("Array Elements: "+array3+"<br>");

array3.splice(1, 2,);
document.write("Array Elements: "+array3+"<br>");

var array4 = array3.slice(2,3); //dont update previous array but creat new array
document.write("Array Elements: "+array4+"<br>");
document.write("Array Elements: "+array3+"<br>");

//sort()
var sortName = array3.sort();
document.write("Array Elements: "+sortName+"<br>");

array3.reverse();
document.write("Array Elements: "+array3+"<br>");

array.push(1);
array.push(3);
array.push(10);
document.write("Array Elements: "+array+"<br>");
array.sort();
document.write("Array Elements: "+array+"<br>");

array.sort(function(a,b){
    return a-b;
})
document.write("Array Elements: "+array+"<br>");

array.sort(function(a,b){
    return b-a;
})
document.write("Array Elements: "+array+"<br>");