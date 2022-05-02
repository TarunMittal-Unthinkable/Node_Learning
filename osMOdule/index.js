const os=require('os');
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.type());
const freeM=os.freemem();
console.log(`${freeM/1024/1024/1024}`);
const TotalM=os.totalmem();
console.log(`${TotalM/1024/1024/1024}`);