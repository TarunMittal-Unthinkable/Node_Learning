const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const methodOverride = require('method-override');
const fs = require('fs');

const pool = require("./db");
app.use(express.urlencoded({extended:false}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.get('/upload', (req,res)=> {
    res.render('upload');
});

app.get('/', async(req, res)=>{
    try {
            const img = await pool.query("SELECT * FROM image");
            res.render('index',{img :img.rows});
            
            
          } catch (err) {
            console.log(err.message);
          }
});

//Set Image Storage
let storage = multer.diskStorage({
    destination: './public/uploads/images/',
    filename: (req, file, cb) => {
            cb(null, file.originalname)
    }
});

let upload = multer({
    storage : storage,
    fileFilter : (req, file, cb) => {
        checkFileType(file, cb);
    }
});

function checkFileType(file, cb) {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());

    if(extname) {
        return cb(null, true);
    } else {
        cb('Error: Please images only.');
    }
}


app.post('/uploadsingle', upload.single('singleImage'), async(req, res ,next)=>{
    const file = req.file;
    if(!file) {
        return console.log('Please select an Image.');
    }

    let url = file.path.replace('public', '');
        try {
          
            const { imgUrl } = url;
            const postimg=`CALL img($1)`;
            
            const newemp = await pool.query(postimg, [imgUrl]);
           
            console.log('Image saved to DB.');
                    res.redirect('/');
          } catch (err) {
            console.log(err.message);
          }
        });

app.post('/uploadmultiple', upload.array('multipleImages'),async(req, res, next)=> {
    const files = req.files;
    if(!files) {
        return console.log('Please select images.');
    }

    files.forEach(file => {
        let url = file.path.replace('public', '');

        try {
          
            const { imgUrl } = url;
            const postimg=`CALL img($1)`;
            
            const newemp = await pool.query(postimg, [imgUrl]);
           
            console.log('Image saved to DB.');
                    res.redirect('/');
          } catch (err) {
            console.log(err.message);
          }
        });

    res.redirect('/');

});

app.listen(3000, ()=> {
    console.log('Server is started.');
});