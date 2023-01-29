const fs=require("fs")
const input=require("process").argv.slice(2)
// console.log(input)
const operation=input[0]
const operant1=input[1]
const operant2=input[2]
const operant3=input[3]

//create a file
if(operation =="create"){
    fs.writeFile(`${operant1}`,`${operant2}\n`,(err)=>{
        if(err){
            console.log("can not create a file right now")
        }else {
            console.log("new file is created in explorer")
        }
    })
}

//rename a file
if(operation=="rename"){
    fs.rename(`${operant1}`,`${operant2}`,(err)=>{
        if(err){
            console.log("rename failed")
        }else {
            console.log("file is renamed")
        }
    })
}

//append a file
if(operation=="append"){
    fs.appendFile(`${operant1}`,`${operant2}\n`,"utf-8",(err)=>{
        if(err){
            console.log("append failed")
        }else {
            console.log("new code appended")
        }
    })
}

//read a file
if(operation=="read"){
    fs.readFile(`${operant1}`,"utf8",(err,data)=>{
        if (err) throw err;
        console.log(data)
    })
}

//list a file
if(operation=="list"){
    fs.readdir(`./${operant1}`,(err,file)=>{
        if(err){
            console.log("failed")
        }else {
            console.log(file)
        }
    })
}



//delete a file
if(operation=="delete"){
    fs.unlink(`${operant1}`,(err)=>{
        if(err){
            console.log("deletion failed");
        }else{
            console.log("file deleted successfully");
        }
    })
}