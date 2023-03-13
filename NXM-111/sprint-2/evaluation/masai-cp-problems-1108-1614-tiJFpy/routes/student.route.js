// write the routes for /students end poient and add middlewares. 
const {Router, json}=require("express")
const fs=require("fs")

const {validator}=require("../middleware/validator.middleware")
const {logger}=require("../middleware/logger.middleware")

const studentRouter = Router()

studentRouter.use(logger)

studentRouter.get("/",(req,res)=>{
    const alldata = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    res.send(alldata.students)
})

// POSTING

studentRouter.post("/addstudent",(req,res)=>{
    const alldata = JSON.parse(fs.readFileSync("./db.json","utf-8"))

    let newStudent = req.body
    alldata.students.push({student_code:alldata.students.length + 1, ...newStudent})

    fs.writeFile("./db.json",JSON.stringify(alldata),(err,msg)=>{
        if(err){
            return res.send({message:"Something went wrong"})
        }else{
            return res.send({message:"Student has been added"})
        }
    })
})

studentRouter.get("/:id",(req,res)=>{
    const id =req.params.student_code
    const alldata = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    let singleStu = alldata.students.find((ele)=>ele.student_code==id)
    if(!singleStu){
        return res.send({message:"Student not found"})
    }else{
        return res.send({students:singleStu})
    }
})

studentRouter.use(logger)
studentRouter.put("/:id",validator,(req,res)=>{
    const id=req.params.student_code
    const alldata= JSON.parse(fs.readFileSync("./db.json","utf-8"))

    const updateData=alldata.students.map((ele)=>{
        if(ele.student_code==id)  return req.body
        else return ele
    })
    alldata.students = updateData

    fs.writeFile("./db.json",JSON.stringify(alldata),(err,msg)=>{
        if(err){
            return res.send({message:"Something went wrong"})
        }else{
            return res.send({message:"Student has been added"})
        }
    })
})

studentRouter.patch("/:id",validator,(req,res)=>{
    const id=req.params.student_code
    const alldata=JSON.parse(fs.readFileSync("./db.json","utf-8"))

    alldata.students.map((ele)=>{
        if(ele.student_code==id){
            ele.name = req.body.name
            ele.location = req.body.sub
            ele.batch = req.body.experience
        }
    })
    fs.writeFile("./db.json",JSON.stringify(alldata),(err,msg)=>{
        if(err){
            return res.send({message:"Something went wrong"})
        }else{
            return res.send({message:"Patched Student Details"})
        }
    })
})

studentRouter.delete("/:id",validator,(req,res)=>{
    const id=req.params.student_code
    const alldata=JSON.parse(fs.readFileSync("./db.json","utf-8"))

    const updateData=alldata.students.filter((ele)=> ele.student_code != id)
    alldata.students=updateData

    fs.writeFile("./db.json",JSON.stringify(alldata),(err,msg)=>{
        if(err){
            return res.send({message:"Something went wrong"})
        }else{
            return res.send({message:"Deleted Student Details"})
        }
    })
})

module.exports={studentRouter}