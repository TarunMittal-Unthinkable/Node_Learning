const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Hey! Whatsup")
});
app.listen(3000);