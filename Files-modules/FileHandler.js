const fs = require('fs')

// create file 
 fs.writeFileSync('example.txt', " hello world\n" , 'utf-8');
console.log('File written successfully');
 

// read file ------->
const data = fs.readFileSync('example.txt', 'utf-8');
console.log('File content:', data);

// append file ------>
fs.appendFileSync("example.txt", " this is appended text\n", 'utf-8');
console.log('File appended successfully');

// read file again to see appended content
const updatedData = fs.readFileSync('example.txt', 'utf-8');
console.log('Updated File content:', updatedData);

// copy file ------>
fs.copyFileSync('example.txt' , 'example_copy1.txt');
console.log('File copied successfully');

fs.copyFileSync('example.txt' , 'example_copy2.txt');
console.log('File copied successfully');

// delete file ------>
fs.unlinkSync('example_copy2.txt');
console.log('File deleted successfully');

// copy file again ------>
// fs.copyFileSync('example.txt' , 'example_copy2.txt');
// console.log('File copied successfully');

// rename file ------>
// fs.renameSync('example_copy1.txt', 'renamed_example_copy2.txt');
// console.log('File renamed successfully');