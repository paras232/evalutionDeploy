function getData(data) {
    return new Promise((resolve,reject)=>{
        if(isNaN(data) == true){
            reject("error")
        }

    
            if(data%2==1){
                setTimeout(()=>{
                    resolve("odd")
                },2000)
            }
        

        setTimeout(()=>{
            if(data%2==0){
                resolve("even")
            }
        },4000)

    })
    
}
let ans = getData(2)
ans
.then((d)=>{
    console.log(d)
})
.catch((r)=>{
    console.log(r)
})
let ans2 = getData(3)
ans2
.then((d)=>{
    console.log(d)
})
.catch((r)=>{
    console.log(r)
})
let ans3 =getData("p")
ans3
.then((d)=>{
    console.log(d)
})
.catch((r)=>{
    console.log(r)
})

export default getData
