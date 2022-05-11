console.log("Hello Node");
// Object Destructring

// const {mul,modulus}=require("./app1.js");
// const res1=mul(4,6);
// const res2=modulus(20,4);


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

//Arrow Function import

const res2=help.modulus(20,4);
console.log("The arrow function: ",res2);


//Arrow Function way-2 import
const res3=help.modulus1(20,3);
console.log("The arrow function way-2: ",res3);

//Export way-2

// const res4=help.min(20,4);
// console.log("The export way-2: ",res4);


//nodemon test
const http=require('http');
const server=http.createServer((req,res)=>{
    res.end("Hello from Tarun Mittal and Unthinkable Solution");
});
// server.listen(3000);

//Express Test

const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Hey! Whatsup")
});
app.listen(3000);