import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [image, setimage] = useState(null);

  const formData = new FormData();


  const submitHandler = async () => {
    formData.append("photo", image);
  // console.log("image->", image);

    console.log("formData ->", formData);
    try {
      const res = await axios.post("http://localhost:3000/create", formData,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      });
      if(res){

        console.log("response->", res);
      }

    } catch (error) {
      return res.send("error in api", error);
    }
  };

  return (
    <div>
      <div className="">
        <input
          onChange={(e) => setimage(e.target.files[0])}
          type="file"
          name="photo"
        />
        <button onClick={submitHandler}>submit</button>
      </div>
    </div>
  );
};

export default App;
