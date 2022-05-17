require('dotenv').config();
const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    port : 5432,
    user: process.env.user,
    password: process.env.pass,
    database: process.env.db
})

client.connect();

let query = `Select * from "emp"`;

client.query(query, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else{
        console.log(err.message)
    }
    client.end;
})