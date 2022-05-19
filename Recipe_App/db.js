const Pool=require("pg").Pool;

const pool=new Pool({
    user:process.env.user,
    password:process.env.password,
    database:"recipe_app",
    host:"localhost",
    port:5432
});

module.exports=pool;