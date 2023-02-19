const mongoose=require("mongoose")

const productSchema = mongoose.Schema({
    name:String,
    email:String,
    pass:String
})

const productModel = mongoose.model("user",productSchema)

module.exports={
    productModel
}