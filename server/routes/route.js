const express= require("express");
const router= express.Router();

const {addtask, gettask, deletetask}= require("../controller/filecontroller");

// const addtask= async(req, res)=>{
//     res.send("Hello world");
// }

router.post("/addtask",addtask);
router.get("/gettask", gettask);
router.delete("/deletetask/:id", deletetask);

module.exports= router;