const http=require('http');
const server=http.createServer((req,res)=>{
    res.end("Hello from Unthinkable Solution");
});
server.listen(3000);