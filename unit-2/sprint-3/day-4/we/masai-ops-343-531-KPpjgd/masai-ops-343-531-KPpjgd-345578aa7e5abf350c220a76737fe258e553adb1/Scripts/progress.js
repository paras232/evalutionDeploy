// Write code for the Progress page here 

let doneL=JSON.parse(localStorage.getItem("doneL"))||[]
let priority = JSON.parse(localStorage.getItem("priority"))||[]

let tbody=document.querySelector("tbody")
function showuser(){
    tbody.innerHTML=""
    
    priority.forEach((userfr,index) => {
        let tr=document.createElement("tr")
        let td1= document.createElement("td")
        let td2= document.createElement("td")
        let td3= document.createElement("td")
        let td4= document.createElement("td")
        let td5= document.createElement("td")
        let td6= document.createElement("td")

        td1.innerText=userfr.name
        td2.innerText=userfr.description
        td3.innerText=userfr.Startdate
        td4.innerText=userfr.endDate
        td5.innerText=userfr.priority
        td6.innerText="Add"
        td6.addEventListener("click",()=>{
            doneL.push(userfr)
            localStorage.setItem("doneL",JSON.stringify(doneL))
            priority.splice(index,1)
            localStorage.setItem("priority",JSON.stringify(priority))
            showuser()
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        tbody.append(tr)
    });
}
showuser()