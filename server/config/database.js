const mongoose= require("mongoose");

require("dotenv").config();

const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Connection has been made successfully");
    })
    .catch((err)=>{
        console.log("Some error has occurred");
        console.log(err);
        process.exit(1);
    })
}

module.exports= dbconnect;