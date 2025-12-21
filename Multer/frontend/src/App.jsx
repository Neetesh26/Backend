import React, { useState } from "react";
import axios from "axios";
import { axiosInstance } from "./config/axiosInstance";
import { createUserWithfile, getusers, updateUser } from '../apis/usersApis'
const App = () => {
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
          onChange={(e) => setimage(e.target.files[0])}
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
        </div>
      ))}
    </div>
  );
};

export default App;
