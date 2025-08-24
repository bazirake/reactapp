import React, { useState } from 'react'
import { useParams } from 'react-router';
import { PasswordErrors, PasswordReset } from './data/Registerobject';
import api from './data/axiosClient';

function Resetpassword() {
  const {token}=useParams();
  const [passwordss,Resetpassword]=useState<PasswordReset>({password:''});
  const [passerror,resetErr]=useState<PasswordErrors>();

  const validate=()=>{
       const errr:PasswordErrors={};
       if(passwordss.password===""){
          errr.errpassword="Fill in reset password";
        }
        resetErr(errr);

        return Object.keys(errr).length===0
      }
  
  return (
    <div className="container-fluid container-custom my-4 ">
  
  <form onSubmit={async(e)=>{
    e.preventDefault();

    if(validate()){
   console.log(passwordss);
       try{
          const res=await api.post(`reset-password/${token}`,passwordss,
           {
            withCredentials:true
           });
         console.log("Responses reset pass",res.data);
         Resetpassword(res.data.message)
        }catch (error:any){
          if(error.response) {
       //Server responded with status outside 2xx
      // setErrorm(error.response.data.message || "Something went wrong")
        console.log("reset errors", error.response.status, error.response.data);
      }else if (error.request) {
    // Request was made but no response
    console.log("No response received:", error.request);
     }else {
    // Something else happened
       console.log("Error setting up request:", error.message);
     }
    }
    }
     }}
      className='mx-auto form-custom'>
      <h4 className='py-2 text-center'>Reset password</h4>
        <div className="mb-2">
      <label  className="form-label">Enter reset email</label>
      <input type="password" value={passwordss.password} onChange={(e)=>Resetpassword((prev)=>({...prev,password:e.target.value}))} className='form-control' placeholder='Enter new password'/>
      </div>
       <div className="d-flex justify-content-center">
         <button type="submit" className="btn btn-color-service w-75 mb-2">
        {/* <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>*/}   
        Reset password</button>
    </div>
  </form>
  </div>
  )
}

export default Resetpassword