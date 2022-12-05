// you can write your js code here

let userData=JSON.parse(localStorage.getItem("book-list"))||[]
let category = JSON.parse(localStorage.getItem("category"))||[]
let buys=JSON.parse(localStorage.getItem("buys"))||[]
let bookmark=JSON.parse(localStorage.getItem("bookmark"))||[]
let book =document.getElementById("book-count")
let tbody =document.querySelector("tbody")
let dofilter = document.getElementById("filter")
dofilter.addEventListener("change",filterby)
function filterby(){
    let value= dofilter.value
    userData = JSON.parse(localStorage.getItem("book-list"))
    if(value=="Fiction"){
        userData=userData.filter((user)=>user.category=="Fiction")
        showB()
    }else if(value=="Finance"){
        userData=userData.filter((user)=>user.category=="Finance")
        showB()

    }else if(value=="Self Help"){
        userData=userData.filter((user)=>user.category=="Self Help")
        showB()

    }else{
        userData = JSON.parse(localStorage.getItem("book-list"))
        showB()
    }
}




function showB(){
    book.innerText=userData.length
    tbody.innerHTML=""
    userData.map(function (userfr,index){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        let td7 = document.createElement("td")
        let td8 = document.createElement("td")
        
        td1.innerText = userfr.name
        td2.innerText = userfr.author
        td3.innerText = userfr.description
        td4.innerText = userfr.date
        td5.innerText = userfr.category
        td6.innerText = "Buy"
        td7.innerText = "Add"
        td8.innerText = userfr.price

        td6.addEventListener("click",()=>{
            buys.push(userfr)
            localStorage.setItem("buys",JSON.stringify(buys))

            category.push(userfr)
            localStorage.setItem("category",JSON.stringify(category))

            userData.splice(index,1)
            localStorage.setItem("book-list",JSON.stringify(userData))
            showB()
        })

            td7.addEventListener("click",()=>{
                bookmark.push(userfr)
                localStorage.setItem("bookmark",JSON.stringify(bookmark))

                category.push(userfr)
                localStorage.setItem("category",JSON.stringify(category))
    
                userData.splice(index,1)
                localStorage.setItem("book-list",JSON.stringify(userData))
                showB()
        })
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
        tbody.append(tr)
    })
}
showB()