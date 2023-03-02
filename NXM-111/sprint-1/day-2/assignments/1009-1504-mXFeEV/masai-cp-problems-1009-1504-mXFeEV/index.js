// index.js

//  import the crypto module
// const crypto=require("crypto")



//  get a commands using process.argv
const input = process.argv.slice(2)

// complete the  function
// console.log(input)
const operation =input[0]
const operant1=+input[1]
const operant2=+input[2]

if(operation=="add"){
    console.log(operant1+operant2)
}
if(operation=="sub"){
    console.log(operant1-operant2)
}
if(operation=="mult"){
    console.log(operant1*operant2)
}
if(operation=="divide"){
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

    crypto.randomBytes(15, (err, buf) => {
      if (err) {
        // Prints error
        console.log("Provide length for random number generation.");
        return;
      }
      
      // Prints random bytes of generated data
      console.log(buf.toString('hex'));
    });
}



// switch (operation) {
  
//   default:
//     console.log("Invalid operation");
// }
