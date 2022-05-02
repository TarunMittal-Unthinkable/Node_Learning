const fs=require('fs');
fs.writeFileSync("read.txt", "I am Tarun");
fs.appendFileSync("read.txt", " Very Good");
const bf_data=fs.readFileSync("read.txt");
data=bf_data.toString();
console.log(data);
fs.renameSync("read.txt","abc.txt"); //to change filename