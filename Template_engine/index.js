const express=require('express');
const app=express();
app.set('view engine','ejs');
app.get('/profile/:name',(req,res)=>{
   
    data={email:'abc@gmail.com',address:'gurgoan',skills:['nodejs','angular','react']}
    res.render('./profile',{name:req.params.name,data:data});
});
app.listen(4500);