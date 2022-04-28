const fs=require('fs');
const fileName="target.txt";

// fs.watch(fileName,()=>
//     console.log(`File changed!`));

// //Sync Program demo
// const data=fs.readFileSync(fileName);
// console.log("Sync Output ",data.toString());



//Functional Approach
const errHandler=err=>console.log(err);
const dataHandler=data=>console.log("Functional Approach: ",data.toString());
fs.readFile(fileName,(err,data)=>{
    if(err) errHandler(err);
    dataHandler(data);
    });


//Async Program demo
fs.readFile(fileName,(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log("Async Output ",data.toString());
    
});

console.log('Node js async-sync Programming');