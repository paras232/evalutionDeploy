// Write code related to Home page here
let todoData = JSON.parse(localStorage.getItem("todos"))||[]
let neWFrm = document.getElementById("userform")
neWFrm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let desc = document.getElementById("desc").value;
    let addData = document.getElementById("addDate").value;
    let deadline = document.getElementById("deadline").value;
    let priority = document.getElementById("priority").value;
    
    let todoList = {name,desc,addData,deadline,priority}
    todoData.push(todoList)
    console.log(todoData)
    localStorage.setItem("todos",JSON.stringify(todoData))
})