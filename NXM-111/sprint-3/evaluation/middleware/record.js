const fs=require('fs')
const record = (req, res, next)=>{
    const {id}=req.params
    next()
    if(req.method==="PATCH" || req.method==="PUT"){
        fs.appendFileSync(
            "records.txt",
            `Movie with id: ${id} has been updated | ${new Date()} \n`
        )
    }else if(req.method==="DELETE"){
        fs.appendFileSync(
            "records.txt",
            `Movie with id: ${id} has been deleted | ${new Date()} \n`
            )
    }
}

module.exports={record}