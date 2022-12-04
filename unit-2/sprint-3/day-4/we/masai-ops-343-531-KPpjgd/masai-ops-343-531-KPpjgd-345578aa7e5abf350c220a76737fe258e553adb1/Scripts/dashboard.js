// Write code related to dashboard page here

let userData=JSON.parse(localStorage.getItem("task-list"))||[]
let priority =JSON.parse(localStorage.getItem("priority"))||[]
let task = document.getElementById("task-count")
let tbody=document.querySelector("tbody")
let dofilter = document.getElementById("filter")
dofilter.addEventListener("change",filterby)
function filterby(){
    let value=dofilter.value
      userData=JSON.parse(localStorage.getItem("task-list"))
    if(value=="Low"){
        userData=userData.filter((user) => user.priority=="Low")
        showuser()
    }else if(value=="High"){
        userData=userData.filter((user) => user.priority=="High")
        showuser()
    }else if(value=="Medium"){
        userData=userData.filter((user) => user.priority=="Medium")
        showuser()
    }else{
        userData=JSON.parse(localStorage.getItem("task-list"))
        showuser()
    }
}


function showuser(){
    task.innerText=userData.length
    tbody.innerHTML=""
    
    userData.map(function (userfr,index){
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
            priority.push(userfr)
            localStorage.setItem("priority",JSON.stringify(priority))
            userData.splice(index,1)
            localStorage.setItem("task-list",JSON.stringify(userData))
            showuser()
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        tbody.append(tr)
    })
}
showuser()