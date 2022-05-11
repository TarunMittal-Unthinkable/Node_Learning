require("dotenv").config();
const nodeMailer=require('nodemailer');
let transport=nodeMailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.user,
        pass:process.env.pass
    }
});

let mailOption={
    from:'abc@gmail.com',
    to:'bbc@gmail.com',
    subject:'Tarun',
    text:'Hello sir',
}
transport.sendMail(mailOption,function(error,info){
    if(error){
        console.warn(error);
    }
    else{
        console.log("Email has been sent",info.response);

    }
});