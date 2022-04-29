const express=require('express');
const app=express();
const morgan=require("morgan");
// app.get('/',(req,res)=>{
//     res.send("Hey! Whatsup India")
// });


//bring in routes

const {getPosts}=require('./routes/post');

const myOwnMiddleware=(req,res,next)=>{
    console.log("Middleware applied.!!");
    next();
}
//middleware
app.use(morgan("dev"));
app.use(myOwnMiddleware);


app.get('/',getPosts);

const port=8000;
app.listen(port, ()=>{
    console.log(`A Node Js API is listening on port: ${port}`);
});