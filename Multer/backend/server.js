const express = require('express')
const app = express()
const cors = require("cors");
const multer = require('multer')
const userModel = require('./models/users.Schema')
const dbConnection = require('./config/DB')
// const path = require("path");
dbConnection();

// not mandetory---->
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(cors('*'))


// save image in local machine folder --------------->

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const suffix = Date.now()
    cb(null, suffix + "-" +file.originalname);
  }
});



// save image in database in the form of buffers format-------->
// const storage = multer.memoryStorage()


const upload = multer({ storage });

app.post('/create', upload.single('photo'), async (req, res,file) => {
  const { name } = req.body
  const filename = req.file

  // console.log("file is -->",file);
  console.log(filename);
  
  // const filename = req.file ? req.file.path : null
  // const filename = req.file ? req.file.buffer : null
  console.log(filename);
  
  const newUser = await userModel.create({
    name,
    // photo:filename
  });
  await newUser.save()

  return res.send('data saved ');
});

app.listen(3000, () => {
  console.log("serveris running on port 3000");

})