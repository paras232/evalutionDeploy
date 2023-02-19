const mongoose=require("mongoose")

const curdSchema = mongoose.Schema({
    title:String,
    body:String,
    catagory:String,
    user:String
})

const curdModel = mongoose.model("note",curdSchema)

module.exports={
    curdModel
}