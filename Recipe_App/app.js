const express= require('express');
const path=require('path');
const cons=require('consolidate');
//const dust=require('dustjs-helpers');

const app=express();

//DB connection
const pool = require("./db");


app.set('view engine','ejs');

app.set('views',__dirname+'/views');

app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//for get data
app.get('/',  async (req, res) => {
    try {
      const recipe = await pool.query("SELECT * FROM recipes");
      
      res.render('layout',{recipes:recipe.rows});
     
    } catch (err) {
      console.log(err.message);
    }
  });


//for post data

app.post('/add',  async (req, res) => {
    try {
      const recipe = await pool.query("INSERT INTO recipes(name,ingredients,directions) VALUES($1,$2,$3)",[req.body.name,req.body.ingredients,req.body.directions]);
      
      res.redirect('/');
     
    } catch (err) {
      console.log(err.message);
    }
  });



  //for update data

app.post('/edit',  async (req, res) => {
    try {
      const recipe = await pool.query("UPDATE recipes SET name=$1,ingredients=$2,directions=$3",[req.body.name,req.body.ingredients,req.body.directions]);
      
      res.redirect('/');
     
    } catch (err) {
      console.log(err.message);
    }
  });


  //for delete data

  app.post('/delete/id',  async (req, res) => {
    try {
      const recipe = await pool.query("DELETE FROM recipes  WHERE SET id=$1",[req.params.id]);
      
      res.redirect('/');
     
    } catch (err) {
      console.log(err.message);
    }
  });

app.listen(3000,()=>{
    console.log('Server started on port 3000');
});