// write the routes for /instructors end poient and add middlewares. 
const {Router, json}=require("express")
const fs=require("fs")

const {validator}=require("../middleware/validator.middleware")
const {logger}=require("../middleware/logger.middleware")

const instructorRouter = Router()

instructorRouter.use(logger)

instructorRouter.get("/",async(req,res)=>{
    const alldata = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    res.send(alldata.instructors)
})

// POSTING

instructorRouter.post("/addinstructor",(req,res)=>{
    const alldata = JSON.parse(fs.readFileSync("./db.json","utf-8"))

    let newInstructor = req.body
    alldata.instructors.push({emp_id:alldata.instructors.length + 1, ...newInstructor})

    fs.writeFile("./db.json",JSON.stringify(alldata),(err,msg)=>{
        if(err){
            return res.send({message:"Something went wrong"})
        }else{
            return res.send({message:"Instructor has been added"})
        }
    })
})

instructorRouter.get("/:id",(req,res)=>{
    const {id}=req.params.emp_id
    const alldata = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    let singleInst = alldata.instructors.find((ele)=>ele.emp_id==id)
    if(!singleInst){
        return res.send({message:"Instructor not found"})
    }else{
        return res.send({instructors:singleInst})
    }
})

instructorRouter.put("/:id",validator,(req,res)=>{
    const {id}=req.params.emp_id
    const alldata= JSON.parse(fs.readFileSync("./db.json","utf-8"))

    const updateData=alldata.instructors.map((ele)=>{
        if(ele.emp_id==id)  return req.body
        else return ele
    })
    alldata.instructors = updateData

    fs.writeFile("./db.json",JSON.stringify(alldata),(err,msg)=>{
        if(err){
            return res.send({message:"Something went wrong"})
        }else{
            return res.send({message:"Instructor has been added"})
        }
    })
})

instructorRouter.patch("/:id",validator,(req,res)=>{
    const {id}=req.params.emp_id
    const alldata=JSON.parse(fs.readFileSync("./db.json","utf-8"))

    alldata.instructors.map((ele)=>{
        if(ele.emp_id==id){
            ele.name = req.body.name
            ele.sub = req.body.sub
            ele.experience = req.body.experience
        }
    })
    fs.writeFile("./db.json",JSON.stringify(alldata),(err,msg)=>{
        if(err){
            return res.send({message:"Something went wrong"})
        }else{
            return res.send({message:"Instructor has been added"})
        }
    })
})

instructorRouter.delete("/:id",validator,(req,res)=>{
    const {id}=req.params.emp_id
    const alldata=JSON.parse(fs.readFileSync("./db.json","utf-8"))

    const updateData=alldata.instructors.filter((ele)=> ele.emp_id != id)
    alldata.instructors=updateData

    fs.writeFile("./db.json",JSON.stringify(alldata),(err,msg)=>{
        if(err){
            return res.send({message:"Something went wrong"})
        }else{
            return res.send({message:"Deleted Instructor Details"})
        }
    })
})

module.exports={instructorRouter}