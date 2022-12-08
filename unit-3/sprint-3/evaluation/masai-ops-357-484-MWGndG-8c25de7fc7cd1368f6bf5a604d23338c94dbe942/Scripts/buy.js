let buys=JSON.parse(localStorage.getItem("buys"))||[]
let category = JSON.parse(localStorage.getItem("category"))||[]
let tbody=document.querySelector("tbody")
function showB(){
    tbody.innerHTML=""
    buys.forEach((userfr,index) => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        
        td1.innerText = userfr.name
        td2.innerText = userfr.author
        td3.innerText = userfr.description
        td4.innerText = userfr.date
        td5.innerText = userfr.category
        td6.innerText = userfr.price

        tr.append(td1,td2,td3,td4,td5,td6)
        tbody.append(tr)
    });
}
showB()