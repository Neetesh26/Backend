import React, { useState } from "react";
import axios from "axios";
import { axiosInstance } from "./config/axiosInstance";
import { createUserWithfile, getusers, updateUser } from '../apis/usersApis'
const App = () => {
<<<<<<< HEAD
  const [image, setimage] = useState([]);
  const [naam, setnaam] = useState("");
  const [getAllusers, setgetAllusers] = useState([]);
  const [updatedname, setupdatedname] = useState('')

  const formData = new FormData();

  const submitHandler = async () => {
    formData.append("name", naam);

    // formData.append("photo", image);
    // for multiple files upload---------->
    image.forEach((elem)=>{
      formData.append("photo", elem);
    })
    // console.log("image->", image);

    console.log("formData ->", formData);
    console.log("image",image);
    
    // use tanstack Query later---------> 
      createUserWithfile(formData)
      
=======
  const [image, setimage] = useState(null);
  const [naam, setnaam] = useState(null);
  const [getAllusers, setgetAllusers] = useState([]);
  const [updatedname, setupdatedname] = useState('')
  const formData = new FormData();

  const submitHandler = async () => {
    formData.append("photo", image);
    formData.append("name", naam);
    // console.log("image->", image);

    console.log("formData ->", formData);

    // use tanstack Query later---------> 
      createUserWithfile(formData)
>>>>>>> 1fd1844ec19a21888d265f81767b1c7263d2e838
  };

  const getallUserHandler = async () => {
    // get all user api ------------>
    getusers(setgetAllusers)
  };


const updatenameHandler = async (user_id)=>{
  console.log(user_id);
  console.log("updatedname" , updatedname);
  
  // user update api------------>
  updateUser(user_id,updatedname,getallUserHandler)
}

  return (
    <div>
      <div className="">
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          onChange={(e) => setnaam(e.target.value)}
        />
        <input
<<<<<<< HEAD
          // onChange={(e) => setimage(e.target.files[0])} // single file
          multiple
          onChange={(e) => setimage(Array.from(e.target.files))} // multiple files
=======
          onChange={(e) => setimage(e.target.files[0])}
>>>>>>> 1fd1844ec19a21888d265f81767b1c7263d2e838
          type="file"
          name="photo"
        />
        <button onClick={submitHandler}>submit</button>
      </div>
      <button onClick={getallUserHandler}>get all users</button>
      {getAllusers.map((elem) => (
        <div key={elem._id}>
          <h1>
            user id : {elem._id} <br /> <span>username : {elem.name}</span>
          </h1>

          <div>
            update name :
            <input
              type="text"
              placeholder="enter your new name"
              name="name"
              onChange={(e) =>setupdatedname(e.target.value) }
            />
            <button onClick={()=>updatenameHandler(elem._id)}>updated</button>
          </div>
<<<<<<< HEAD



        </div>
      ))}

      
=======
        </div>
      ))}
>>>>>>> 1fd1844ec19a21888d265f81767b1c7263d2e838
    </div>
  );
};

export default App;
