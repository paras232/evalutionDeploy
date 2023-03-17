const mongoose=require('mongoose')

const todoSchema=mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    task:String,
    completed:Boolean
},{
    versionKey:false
})

const TodoModel=mongoose.model("todo",todoSchema)

module.exports={
    TodoModel
}