const { error } = require('console')
const fs = require('fs');









fs.readFile('file.txt','utf-8',(error, data)=>{
    console.log(error, data);
})


// const a = fs.readFileSync('file.txt')
// console.log(a.toString());

// fs.writeFile('file1.txt','This is file 2', ()=>{
//     console.log("writen to the file");
// })

console.log("finished reading.");