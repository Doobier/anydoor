const fs = require('fs');
global.a = 1;

fs.readFile('./index.js', (err, data)=>{
    if(err) throw err;
    console.log(data);
})

