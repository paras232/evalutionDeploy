function validator(req,res,next){
    if(req.method==="PATCH" || req.method==="DELETE" || req.method==="PUT"){
        let {role,password}=req.query
        if(!role || !password){
            return res.send({
                message:"You are not authorised to do this operation"
            })
        }
        if(role !== "admin" || "instructor"){
            return res.send({
                message:"You are not authorised to do this operation"
            }) 
        }
        if(!password){
            return res.send({
                message:"You are not authorised to do this operation"
            })
        }
        if(Number(password)===7877){
            next()
        }else{
            return res.send({
                message:"You are not authorised to do this operation"
            })
        }
    }
}

module.exports={validator}
// write the logic for validation middleware.