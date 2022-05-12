const express = require("express");
const app = express();
const pool = require("./db");
const swaggerJSDoc=require('swagger-jsdoc');
const swaggerUi=require('swagger-ui-express');
app.use(express.json()); //req.body
app.set('view engine','ejs');

app.set('views',__dirname+'/views');

app.use(express.urlencoded({extended:false}));

const options ={
  definition: {
      openapi : '3.0.0',
      info : {
          title: 'Node JS API Project for postgres',
          version: '1.0.0'
      },
      servers:[
          {
              url: 'http://localhost:5000/'
          }
      ]
  },
  apis: ['./index.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


//Routes

/**
 * @swagger
 * /:
 *  get:
 *      summary: This api is used to check if get method is working or not
 *      description: This api is used to check if get method is working or not
 *      tags:
 *        - Employee
 *      responses:
 *          200:
 *              description: To test Get method
 */


//get all todos
app.get("/", async (req, res) => {
  try {
    const allemp = await pool.query("SELECT * FROM emp");
    res.send(allemp.rows);
    
    
  } catch (err) {
    console.log(err.message);
  }
});

/**
 * @swagger
 *  components:
 *      schemas:
 *          Employee:
 *              type: object
 *              properties:
 *                  
 *                  name:
 *                      type: string
 *                  address:
 *                      type: string
 *                  mob_no:
 *                      type: integer
 *                  emp_id:
 *                      type: integer
 */

/**
 * @swagger
 * /api/employee:
 *  get:
 *      summary: To get all employee from postgres
 *      description: this api is used to fetch data from postgres
 *      tags:
 *        - Employee
 *      responses:
 *          200:
 *              description: this api is used to fetch data from postgres
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/Employee'
 */

//get all todos
app.get("/api/employee", async (req, res) => {
  try {
    const allemp1 = await pool.query("SELECT * FROM emp");
    res.send(allemp1.rows);
    
    
  } catch (err) {
    console.log(err.message);
  }
});


/**
 * @swagger
 * /api/employee/{id}:
 *  get:
 *      summary: To get specific employee from postgres
 *      description: this api is used to fetch data from postgres
 *      tags:
 *        - Employee
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Numeric ID required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: this api is used to fetch data from postgres
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/Employee'
 */




//get all todo
app.get("/api/employee/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const emp = await pool.query("SELECT * FROM emp WHERE emp_id=$1", [id]);
    res.json(emp.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//create all

/**
 * @swagger
 * /api/employee:
 *  post:
 *      summary: used to insert data to postgres
 *      description: this api is used to insert data in postgres
 *      tags:
 *        - Employee
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/Employee'
 *      responses:
 *          200:
 *              description: Added Successfully In postgres
 */


app.post("/api/employee", async (req, res) => {
  try {
    const { emp_id } = req.body;
    const { name } = req.body;
    const { address } = req.body;
    const { mob_no } = req.body;
    const postemp1=`CALL postemp($1,$2,$3,$4)`;
    
    const newemp = await pool.query(postemp1, [emp_id, name, address,mob_no]);
   
    res.json(newemp.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});


/**
 * @swagger
 * /api/employee/{id}:
 *  put:
 *      summary: used to update data to postgres
 *      description: this api is used to fetch data from postgres
 *      tags:
 *        - Employee
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Numeric ID required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/Employee'
 *      responses:
 *          200:
 *              description: Updated Successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/Employee'
*/

//update all todo
app.put("/api/employee/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const { address } = req.body;
    const { mob_no } = req.body;
    const update=`call upemp($1,$2,$3,$4)`;
    const updateemp = await pool.query(
      update,
      [id,name,address,mob_no]
    );
    res.json("emp was updated");
  } catch (err) {
    console.log(err.message);
  }
});



/**
 * @swagger
 * /api/employee/{id}:
 *  delete:
 *      summary: this api is use to delete record from postgres database
 *      description: this api is used to fetch data from postgres
 *      tags:
 *        - Employee
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Numeric ID required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: data is deleted
 */

//delete all
app.delete("/api/employee/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const del=`call delemp($1)`
    const deleteemp = await pool.query(del, [
      id,
    ]);
    res.json("emp was deleted");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server is listening");
});
