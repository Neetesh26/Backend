const express = require('express')
<<<<<<< HEAD
require('dotenv').config()
=======
>>>>>>> 1fd1844ec19a21888d265f81767b1c7263d2e838
const app = express()
const cors = require("cors");
const multer = require('multer')
const userModel = require('./models/users.Schema')
<<<<<<< HEAD
const dbConnection = require('./config/DB');
const { uploadToImageKit } = require('./services/storage.services');
=======
const dbConnection = require('./config/DB')
>>>>>>> 1fd1844ec19a21888d265f81767b1c7263d2e838
// const path = require("path");
dbConnection();

// not mandetory---->
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(cors('*'))
app.use(express.json())

// save image in local machine folder --------------->

<<<<<<< HEAD
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     const suffix = Date.now()
//     cb(null, suffix + "-" +file.originalname);
//   }
// });
=======
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const suffix = Date.now()
    cb(null, suffix + "-" +file.originalname);
  }
});
>>>>>>> 1fd1844ec19a21888d265f81767b1c7263d2e838



// save image in database in the form of buffers format-------->
<<<<<<< HEAD
const storage = multer.memoryStorage()
=======
// const storage = multer.memoryStorage()
>>>>>>> 1fd1844ec19a21888d265f81767b1c7263d2e838


const upload = multer({ storage });

<<<<<<< HEAD
app.post('/create', upload.array('photo', 3), async (req, res, file) => {
  const { name } = req.body
  const filename = req.files
  // console.log(req.body);

  // for single image upload to imagekit
  // await uploadToImageKit(filename.buffer,filename.originalname)

  const ikt = await Promise.all(
    filename.map(async (elem)=>{
      return await uploadToImageKit(elem.buffer,elem.originalname)
    })
  )

  // console.log("image showing url", ikt.find((elem)=>elem.url));
  // res.status(200).json({message:"images uploaded",ikt})

  // console.log("file is -->",file);
  // console.log(filename);

  // const filename = req.file ? req.file.path : null
  // const filename = req.file ? req.file.buffer : null
  // console.log(filename);

=======
app.post('/create', upload.single('photo'), async (req, res,file) => {
  const { name } = req.body
  const filename = req.file
// console.log(req.body);

  // console.log("file is -->",file);
  // console.log(filename);
  
  // const filename = req.file ? req.file.path : null
  // const filename = req.file ? req.file.buffer : null
  // console.log(filename);
  
>>>>>>> 1fd1844ec19a21888d265f81767b1c7263d2e838
  const newUser = await userModel.create({
    name,
    // photo:filename
  });
  await newUser.save()

<<<<<<< HEAD
  return res.status(201).json({
    message: 'User created successfully',
    file: ikt,
  });
});



app.get('/allusers', async (req, res) => {

  try {
    const allUsers = await userModel.find({})
    // console.log("res from  backend ",allUsers);

    return res.status(200).json({
      message: 'Fetched all users.', users: allUsers
    })

  } catch (error) {
    return res.status(400).json({ message: 'Internal Server error', error: error })
  }
})

app.patch('/updateuser/:id', async (req, res) => {
  const id = req.params.id;
  // console.log(req.params.id);

  const newData = req.body;
  // console.log(req.body);

  try {
    if (!id || !newData) {
      return res.status(400).json({
        message: 'Internal server error'
      })
    }
    const updatedUser = await userModel.findByIdAndUpdate(id, newData, { new: true });
    return res.status(200).json({
      message: 'user Updated successfully',
      newUser: updatedUser
    })
  } catch (error) {
    return res.status(400).json({ message: 'Internal Server error', error: error })
  }
=======
  return res.send('data saved ');
});

app.get('/allusers',async ( req,res)=>{

  try {
        const allUsers = await userModel.find({ })
        // console.log("res from  backend ",allUsers);
        
        return res.status(200).json({
            message: 'Fetched all users.', users: allUsers
        })

    } catch (error) {
        return res.status(400).json({ message: 'Internal Server error', error: error })
    }
})

app.patch('/updateuser/:id', async (req, res) => {
    const id = req.params.id;
    // console.log(req.params.id);
    
    const newData = req.body;
    // console.log(req.body);

    try {
        if (!id || !newData) {
            return res.status(400).json({
                message: 'Internal server error'
            })
        }
        const updatedUser = await userModel.findByIdAndUpdate(id, newData, { new: true });
        return res.status(200).json({
            message: 'user Updated successfully',
            newUser: updatedUser
        })
    } catch (error) {
        return res.status(400).json({ message: 'Internal Server error', error: error })
    }
>>>>>>> 1fd1844ec19a21888d265f81767b1c7263d2e838
})

app.listen(3000, () => {
  console.log("serveris running on port 3000");

})