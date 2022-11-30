let op = document.getElementById("output")
let num = document.getElementsByClassName("num")
let plus = document.getElementById("add")
let sub = document.getElementById("sub")
let mul = document.getElementById("mul")
let divi = document.getElementById("sl")
let eql = document.getElementById("equal")
let clear = document.getElementById("clear")

let operator="";
let outputText="";
let Mynum=[];

for(let i=0;i<num.length;i++){
    num[i].addEventListener("click",(e) =>{
        e.target.innerText;
        outputText+=e.target.innerText;
        console.log(outputText)
        output.innerText=outputText;
    });
}
    
    plus.addEventListener("click",()=>{
        Mynum.push(+outputText);
        console.log(Mynum)
        outputText="";
        output.innerText="";
        operator="plus"
    })
    sub.addEventListener("click",()=>{
        Mynum.push(+outputText);
        outputText="";
        output.innerText="";
        operator="sub"
    })
    mul.addEventListener("click",()=>{
        Mynum.push(+outputText);
        outputText="";
        output.innerText="";
        operator="mul"
    })
    divi.addEventListener("click",()=>{
        Mynum.push(+outputText);
        outputText="";
        output.innerText="";
        operator="divi"
    })
    eql.addEventListener("click",()=>{
        Mynum.push(+outputText);
        outputText="";
        if(operator==="plus"){
            output.innerText = Mynum[0]+Mynum[1];
        }else if (operator==="sub"){
            output.innerText= Mynum[0]-Mynum[1];
        }else if(operator==="mul"){
            output.innerText= Mynum[0]*Mynum[1];
        }else if(operator==="divi"){
            output.innerText= Mynum[0]/Mynum[1];
        }
        clear.addEventListener("click",()=>{
            outputText="";
            output.innerText="";
            Mynum=[];
        })
    });
