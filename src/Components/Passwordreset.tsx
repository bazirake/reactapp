import { useState } from "react";
import { emailobject, ResetpasswordError } from "./data/Registerobject";
import api from "./data/axiosClient";

export default function Passwordreset() {
const[resetem,resetpass]=useState<emailobject>({email:''});
const [passworder,setpassword]=useState<ResetpasswordError>();
const [respoMessages,setResponse]=useState('');

const Validate=()=>{
      const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let   errordata:ResetpasswordError={}
      if(resetem.email===""){
          errordata.errEmail="Email field should not be empty";
      }
      if(!emailRegex.test(resetem.email)){
         errordata.errEmail="Invalid email";
      }

      setpassword(errordata);
      return Object.keys(errordata).length===0
    }

  return(
  <div className="container-fluid container-custom my-4">
   
    <form className="mx-auto form-custom" onSubmit={async(e)=>{
        e.preventDefault()

        if(Validate()) {
          const res=await api.post("https://exapi-gjsy.onrender.com/forgot-password",resetem,
           {
            withCredentials:true
           });
         console.log("Responses",res.data);
         setResponse(res.data.message)
        }
       // alert(passwords?.errEmail)
    console.log(passworder);
      
    }}>
      <h5 className="text-center">Forget password</h5>
     <label>Email</label>

     <input type="text" value={resetem.email} onChange={(e)=>resetpass((prev)=>({...prev,email:e.target.value}))} className="form-control" placeholder="Enter your email to get reset link"></input>
     <button type="submit" className="btn btn-primarx mt-4">Getresetpassword</button>
     <span className='text-success text-center d-flex justify-content-center py-2'>{respoMessages}</span>
    </form>
  </div>
 )
 }