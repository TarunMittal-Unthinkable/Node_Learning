// console.log(process);

//Function  export
function mul(a,b){
    return a*b;
}


// console.log("PROCESS",process);

//Arrow Function
const modulus=(a,b)=>{
    return a%b;
};

//Arrow Function way-2
const modulus1=(a,b)=>a%b;


//Export way-1
module.exports={
    mul,
    modulus,
    modulus1
};

//Export function way-2

// exports.min=(a,b)=> a-b;


