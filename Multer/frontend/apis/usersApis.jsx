import { axiosInstance } from "../src/config/axiosInstance";


// create user with file api--->
export const createUserWithfile =async (formData)=>{
    try {
          const res = await axiosInstance.post("/create", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          if (res) {
            console.log("response->", res);
          }
        } catch (error) {
          return console.log("api error",error);
          ;
        }
}

export const getusers = async (setgetAllusers)=>{
     try {
          const res = await axiosInstance.get("/allusers", {
            // headers:{
            //   "Content-Type":'application/json'
            // }
          });
          if (res) {
            const user = res.data.users;
            // console.log("data from frontend in getallsuers", res);
            setgetAllusers(user);
          }
        } catch (error) {
          return console.log("error in getallusers api", error);
          
        }
}

export const updateUser = async(user_id,updatedname,getallUserHandler)=>{
    try {
        const res = await axiosInstance.patch(`/updateuser/${user_id}`,{name:updatedname})
          console.log("update response:", res);
          getallUserHandler(); // refresh list
    
      } catch (error) {
        console.error("Update error:", error);
      }
}