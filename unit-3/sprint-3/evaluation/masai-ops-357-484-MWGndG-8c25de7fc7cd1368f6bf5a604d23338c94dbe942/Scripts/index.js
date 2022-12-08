// you can write your js code here
let userData= JSON.parse(localStorage.getItem("book-list"))||[]

let user = document.querySelector("form")
user.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name = document.getElementById("name").value
    let author = document.getElementById("author").value
    let description = document.getElementById("desc").value
    let date = document.getElementById("added").value
    let category = document.getElementById("category").value
    let price = document.getElementById("price").value
    let userfr={name,author,description,date,category,price}

    console.log(userfr)
    userData.push(userfr)
    localStorage.setItem("book-list",JSON.stringify(userData))
})