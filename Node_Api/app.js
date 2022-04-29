const express=require('express');
const app=express();
// app.get('/',(req,res)=>{
//     res.send("Hey! Whatsup India")
// });


//bring in routes

const postRoutes=require('./routes/post');
app.get('/',postRoutes.getPosts);

const port=8000;
app.listen(port, ()=>{
    console.log(`A Node Js API is listening on port: ${port}`);
});