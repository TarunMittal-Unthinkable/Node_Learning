const fs=require('fs');
const bioData={
    name:"Tarun",
    age:21,
    channel:"Unthinkable"
};
const jsonData=JSON.stringify(bioData);
// fs.writeFile("json1.json",jsonData,(err)=>{
//     console.log("Completed");
// });
fs.readFile("json1.json","utf-8",(err,data)=>{
   
    const oriData=JSON.parse(data);
    console.log(data);
    console.log(oriData);
});
