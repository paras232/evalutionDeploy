// Write code related to Done page here
let doneL=JSON.parse(localStorage.getItem("doneL"))||[]
let tbody=document.querySelector("tbody")

function showuser(){
    tbody.innerHTML=""
    
    doneL.forEach((userfr,index) => {
        let tr=document.createElement("tr")
        let td1= document.createElement("td")
        let td2= document.createElement("td")
        let td3= document.createElement("td")
        let td4= document.createElement("td")
        let td5= document.createElement("td")

        td1.innerText=userfr.name
        td2.innerText=userfr.description
        td3.innerText=userfr.Startdate
        td4.innerText=userfr.endDate
        td5.innerText=userfr.priority

        tr.append(td1,td2,td3,td4,td5)
        tbody.append(tr)
    });
}
showuser()