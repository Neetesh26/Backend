const fs = require('fs')

// create file 
 fs.writeFileSync('example.txt', " hello world\n" , 'utf-8');
console.log('File written successfully');
 

// read file ------->
const data = fs.readFileSync('example.txt', 'utf-8');
console.log('File content:', data);