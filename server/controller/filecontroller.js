const File = require("../models/file");


exports.addtask = async (req, res) => {
    try {
        const t= new Date();
        console.log(t);
        
        var { id, task, setreminder, date } = req.body;

        console.log(date);
        // console.log(typeof(date));
        // const newdate= new Date(date);
        // const t= newdate.toLocaleString();
        // console.log(t);
        // date= t.toString();
        const response = await File.create({ id, task, setreminder, date });

        res.status(200).json({
            success: true,
            data: response,
            message: "Entered Successfully",
        })
    }
    catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            data: "Server error",
            message: "Some error occurred",
        })
    }
};

exports.gettask = async (req, res) => {
    try {
        const { id } = req.body;

        // await File.find({}, (err, val) => {
        //     if (err) {
        //         console.log(err);
        //     }
        //     else {
        //         console.log(val);
        //         res.status(200).json(val);
        //     }
        // })
        File.find()
            .then(response => {
                // console.log(response);
                res.status(200).json({
                    success: true,
                    data: response,
                    message: "Sent Successfully"
                })
            })
            .catch((err) => {
                console.log(err);
            })

        // res.status(200).json({
        //     success:true,
        //     data: response,
        //     message:"Sent Successfully"
        // })
    }
    catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            data: "Server error",
            message: "Some error occurred",
        })
    }
}

exports.deletetask=async(req, res)=>{
    const id= 1;
    // console.log(req.body);

    File.findByIdAndDelete(req.params.id).then(response=>{
        // console.log(response);
        res.status(200).json({
            success:true,
            message:"Successfullly deleted",
        })
    })
    .catch((err)=>{
        res.status(505).json({
            success: false,
            message:"Unsuccessfull",
        })
    })
}