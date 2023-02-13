const mongoose=require("mongoose")
const todoSchema = mongoose.Schema({
    task:{type:String,required:true},
    status:{type:String,default:"pending"},
},{
    versionKey:false
})

const todoModel=mongoose.model("todo",todoSchema)

module.exports={todoModel}