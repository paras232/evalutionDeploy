const express=require("express")
const {foodModel}=require("../foodmodels/food.model")

const foodRouter = express.Router()

foodRouter.get("/",async(req,res)=>{
    
    const min=req.query.min
    const max=req.query.max
    const cuisineF=req.query.cuisine
    const priceG=req.query.price

    if(min && max){
        try{
            let foods=await foodModel.find({$and:[{min:{$gt:min}},{max:{$lt:min}}]})
            res.send(foods)
        }
        catch(err){
            console.log(err)
            res.send({"msg":`Can not get the foods that range between ${min} and ${max}`,"error":err.message})
        }
    }
    else if(cuisineF){
        try{
            let foods=await foodModel.find({cuisine:cuisineF})
            res.send(foods)
        }
        catch(err){
            console.log(err)
            res.send({"msg":`Can not get the foods with cusines of ${cuisineF}`,"error":err.message})
        }
    }
    else if(priceG){
        try{
            let foods=await foodModel.find({price:{$lt:priceG}})
            res.send(foods)
        }
        catch(err){
            console.log(err)
            res.send({"msg":"Can not get the foods below this price","error":err.message})
        }
    }
    else{
        try{
            let foods=await foodModel.find()
            res.send(foods)
        }
        catch(err){
            console.log(err)
            res.send({"msg":"Can not get the foods","error":err.message})
        }
    }
})

foodRouter.post("/create",async(req,res)=>{
    try{
        const food=new foodModel(req.body)
        await food.save()
        res.send("Food has been added to menulist")
    }catch(err){
        
        res.send({"msg":"Connot add FOOD to menulist","error":err.message})
    }
})

foodRouter.patch("/update/:id",async(req,res)=>{
    const ID=req.params.id
    const payload=req.body
    try{
        await foodModel.findByIdAndUpdate({_id:ID},payload)
        res.send("Food has been updated to menulist")
    }catch(err){
       
        res.send({"msg":"Connot able to update FOOD requests","error":err.message})
    }
})

foodRouter.delete("/delete/:id",async(req,res)=>{
    const ID=req.params.id
    try{
        await foodModel.findByIdAndDelete({_id:ID})
        res.send("Food has been deleted from menulist")
    }catch(err){
       
        res.send({"msg":"Connot able to delete FOOD requests","error":err.message})
    }
})

module.exports={foodRouter}