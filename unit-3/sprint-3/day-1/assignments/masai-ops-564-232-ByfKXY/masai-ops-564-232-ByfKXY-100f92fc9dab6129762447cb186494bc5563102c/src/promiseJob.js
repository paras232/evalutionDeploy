function job(delay, value) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(value)
        },delay)
    })
}

let delay = [1000,3000,500,1500]
let value = [10,20,30,40]
var results;
let res = []
for(let i=0;i<delay.length;i++){
    res.push(job(delay[i],value[i]))
}
Promise.all(res).then((v)=>{
    results = v;
    console.log(results)
})

export { job, results };
