const mongoose=require('mongoose')

const todoSchema=mongoose.Schema({
    ID: (Number,true),
  Name: (String,true),
  Rating: (Number,true),
  Description: (String,true),
  Genre: (String,true),
  Cast: ([String],true),
},{
    versionKey:false

})
const TodoModel=mongoose.model("todoapp",todoSchema)

module.exports={TodoModel}