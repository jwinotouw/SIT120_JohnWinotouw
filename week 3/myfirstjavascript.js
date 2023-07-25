console.log("Hello Javascript!");

let variable1 = "String Value";
let variable2 = 10;
let variable3 = 13;
let variableBoolean = true;


console.log(variable1)

console.log(variable2 + variable3);


let myArray = [1, 2, 3];
let myStringArray = ['hello', 'world'];


console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

console.log(myArray.length)

function addFunction(value1, value2){
    let sum = value1 + value2;
    return sum;
}

console.log(addFunction(3,4));

function substract(value1, value2){
    let substract = value1 - value2;
    return substract;
}

function multiply(value1, value2){
    let multiply = value1 * value2;
    return multiply;
}

console.log(substract(10,2));
console.log("Multiplication:");
console.log(multiply(20,10));

let university = "Deakin University";

if(university === "Deakin University"){
    console.log("Thats Right!")
}
else {
    console.log("Thats Wrong!");
}

