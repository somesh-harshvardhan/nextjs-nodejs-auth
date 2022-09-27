const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

//custom databse
const userDb = require('./custom-database/index');

const cors = require('cors');
const bodyParser = require('body-parser');

// routes import 
const userRoutes = require("./routes/user");


app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000

let database = new userDb();

//global data
app.set('db',database);

// routes
app.use("/user",userRoutes)




app.listen(PORT,()=>{
  console.log("server started at" + PORT)
})



