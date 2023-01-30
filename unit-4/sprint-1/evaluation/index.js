const main = require("./main")
let arguments=process.argv

const command=arguments[2]
const website=arguments[3]
const filename=arguments[3]

if(command=="write"){
    main.writeFile(website)
}
else if(command=="read"){
    main.readFromFile(filename)
}
else if(command=="cow"){
    main.cowsay(filename)
}
else if(command=="delete"){
    main.deleteFile(filename)
}