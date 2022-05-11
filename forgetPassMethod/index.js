require("dotenv").config();
const express=require('express');
const jwt=require('jsonwebtoken');
const app=express();
app.use(express.json());

let user={
    id:"ghghjgj",
    email:process.env.email,
    pass:process.env.pass
};

const jwtkey=process.env.JWT_KEY;


app.get('/reset-pass/:id/:token',(re,res)=>{
    const{id,token}=req.params;

    if(id!==user.id){
        res.send("Invalid id");
        return;
    }

const secret=jwtkey+user.pass;
try{
const payload=jwt.verify(token,secret);
res.send('reset-pass', {email:user});}
catch(error){
 console.log(error.message);
 res.send(error.message);
}


});



app.post('/forget-pass',(req,res)=>{
    const {email}=req.body;

    if(email!==user.email){
        res.send("User not found");
        return;
    }

const secret=jwtkey+user.pass;
const payload={
    email:user.email,
    id:user.id
}

const token=jwt.sign(payload,secret,{expiresIn:'1m'});
const link=`http://localhost:3000/${user.id}/${token}`;
console.log(link);
res.send("Password link send");
});


app.post('/reset-pass/:id/:token',(req,res)=>{
    const{id,token}=req.params;
    if(id!==user.id){
        res.send("Invalid id");
        return;
    }
    const secret=jwtkey+user.pass;
    try{
    const payload=jwt.verify(token,secret);
    user.pass=pass;
    res.send(user);
    }
    catch(error){
     console.log(error.message);
     res.send(error.message);
    }
});


app.listen(5000,()=>console.log("Server listening"));