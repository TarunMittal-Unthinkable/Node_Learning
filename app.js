console.log("Hello Node");

//Function in NodeJs
function add(a,b){
    return a+b;
}

//Function import
const help=require("./app1.js");
const res1=help.mul(4,6);
console.log("The import result: ",res1);

let res=add(2,3); //Calling a function
console.log("The result: ",res);