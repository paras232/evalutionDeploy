const fs = require("fs")
var cowsay = require("cowsay")
const dns= require("dns")

exports.writeFile=(website)=>{
    dns.lookup(website,(err,address,family)=>{
        if(err){
            console.log(`Error :${err}`)
        }
        let data=`${website} | ${address} | ${family}\n`
        fs.appendFileSync("data.txt",data,{encoding:"utf-8"})
        console.log(`writing all the required details is done`)
    })
}

exports.readFromFile=(filename)=>{
    fs.readFile(filename,{encoding:"utf-8"},(err,data)=>{
        if(err){
            console.log(`Error:${err}`)
        }
        console.log(data)
    })
}

exports.cowsay=(filename)=>{
    fs.readFile(filename,{encoding:"utf-8"},(err,data)=>{
        if(err){
            console.log(`Error:${err}`)
        }
        console.log(cowsay.say({
            text:data,
            e:"oO",
            T:"U"
        }));
    })
}

exports.deleteFile=(filename=>{
    fs.unlink(filename,(err)=>{
        if(err){
            console.log(`Error:${err}`)
        }
        console.log("file ${filename} deleted" )
    })
})