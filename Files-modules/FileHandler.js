const fs = require('fs')

// create file 
 fs.writeFileSync('example.txt', " hello world\n" , 'utf-8');
console.log('File written successfully');
 

// read file ------->
const data = fs.readFileSync('example.txt', 'utf-8');
console.log('File content:', data);

// append file ------>
fs.appendFileSync("example.txt", ` this is appended text with this time : ${new Date().toDateString()}\n`, 'utf-8');
console.log('File appended successfully');

// read file again to see appended content
const ReadData = fs.readFileSync('example.txt', 'utf-8');
console.log('Updated File content:', ReadData);



// read file Asynchronously ------>
fs.readFile('example.txt', 'utf-8',(err ,result)=>{
    if(err){
        console.error('Error reading file:', err);
        return;
    }
    else{
        console.log('Asynchronous File content:', result);
    }
})



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








const stats= fs.statSync('example.txt',);
console.log(stats);
