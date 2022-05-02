const fs=require('fs');
fs.writeFile("async.txt", "I am Tarun",(err)=>{
    console.log("File is created");
    console.log(err);
});

fs.appendFile("async.txt", " Very Good",(err)=>{
    console.log("Data added");
    console.log(err);
});
const data=fs.readFile("read.txt",'UTF-8',(err,data)=>{
    console.log("File is read");
    console.log(data);
});
