// Write code related to Home page here 

let userData = JSON.parse(localStorage.getItem("task-list"))||[]

let user=document.querySelector("form")
user.addEventListener("submit",(e)=>{
        e.preventDefault();
        let name =document.getElementById("name").value
        let description=document.getElementById("desc").value
        let Startdate=document.getElementById("start").value
        let endDate = document.getElementById("end").value
        let priority = document.getElementById("priority").value

        let userfr = {name,description,Startdate,endDate,priority}
        //console.log(userfr)
        userData.push(userfr)
        localStorage.setItem("task-list",JSON.stringify(userData))
    
})