const input=process.argv.slice(2)

console.log(input)
const operation =input[0]
const operant1=+input[1]
const operant2=+input[2]

if(operation=="add"){
    console.log(operant1+operant2)
}
if(operation=="sub"){
    console.log(operant1-operant2)
}
if(operation=="multiply"){
    console.log(operant1*operant2)
}
if(operation=="devide"){
    console.log(operant1/operant2)
}
if(operation=="sin"){
    console.log(Math.sin((operant1)))
}
if(operation=="cos"){
    console.log(Math.cos((operant1)))
}
if(operation=="tan"){
    console.log(Math.tan((operant1)))
}
if(operation=="random"){
    let crypto=require("crypto")
    
   console.log(crypto.randomInt(2631))
}