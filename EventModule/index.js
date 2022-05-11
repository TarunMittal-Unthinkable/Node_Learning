const EventEmitter=require('events');
const event=new EventEmitter();
// event.on('sayMyName',()=>{
//     console.log('Tarun');
// });
// event.on('sayMyName',()=>{
//     console.log('Mittal');
// });
// event.on('sayMyName',()=>{
//     console.log(' Software Engineer');
// });

event.on('checkPage',(sc,msg)=>{
    console.log(`Status code is ${sc} and pagr is fined ${msg}`);
});
event.emit('checkPage',200,"ok");