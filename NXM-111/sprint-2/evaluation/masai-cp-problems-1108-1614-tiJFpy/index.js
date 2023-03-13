// create the express app and export it.
const express=require("express");
const { validator } = require("./middleware/validator.middleware");
const {instructorRouter}=require("./routes/instructor.route")
const {studentRouter}=require("./routes/student.route")


const app = express()




app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.use(express.json())


app.use("/instructors",instructorRouter)
app.use("/students",studentRouter)


// app.listen(8000,()=>{
//     console.log("Server is runing on http://localhost:8000")
// })

module.exports=app.listen(8000)

// export the app
// module.exports=app;