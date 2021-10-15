const  fs = require("fs");

fs.readFile('./test.json', (error, data)=> {
    if(error){
        return console.log(error)
    }
    let obj =JSON.parse(data);
    console.log(obj);
})