const express= require("express");
const mongoose= require("mongoose");
const dbconnect= require("./config/database");
const router= require("./routes/route");
const app= express();
require("dotenv").config();
const cors= require("cors");
const {MongoClient}= require("mongodb");

const uri= process.env;

app.use(express.json());
app.use(cors());
app.use('/api/v1', router);

app.listen(3001,()=>{
    console.log(`Server has started successfully at PORT 3001`);
})
dbconnect();


// app.get("/api",(req, res)=>{
//     res.send("Hello world");
// })

// const todoroutes= require("./routes/route");
