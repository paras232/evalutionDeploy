const {Schema,model}=require('mongoose')

const movieSchema= new Schema({
    movie_name:{type: String,required: true},
    genre:{type: String,required: true},
    director:{type: String,required: true},
    rating:{type: Number,required: true,default:1,enum:[1,2,3,4,5,6,7,8,9,10]},
    year_of_release:{type: Number,required: true}
})

const MovieModel= model("movie",movieSchema)

module.exports={MovieModel}