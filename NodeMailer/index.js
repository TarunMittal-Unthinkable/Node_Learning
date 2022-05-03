var nodeMailer=require('nodemailer');
var transport=nodeMailer.createTransport({
    host:'abc@gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'abc@gmail.com',
        pass:'abc'
    }
});

var mailOption={
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