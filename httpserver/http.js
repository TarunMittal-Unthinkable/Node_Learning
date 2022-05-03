const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hello from Unthinkable Solution");
    }else if(req.url=="/about")
{
    res.end("Hello from aboutus page");
}   else{
    res.writeHead(404,{"Content-type":"text/html"});
    res.end("<h1> 404, Page Does not Exit</h1>");
}
    
});
server.listen(3000,()=>{
    console.log("Server run on 3000");
});