import { useState } from "react";
import { emailobject, resetError, ResetpasswordError } from "./data/Registerobject";
import api from "./data/axiosClient";

export default function Passwordreset() {
const[resetem,resetpass]=useState<emailobject>({email:''});
const [passworder,setpassword]=useState<ResetpasswordError>();
const [respoMessages,setResponse]=useState('');
const [messagerr,setErrorm]=useState<string>('')

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
         
          try {
          const res=await api.post("https://exapi-gjsy.onrender.com/forgot-password",resetem,
           {
            withCredentials:true
           });
         console.log("Responses reset pass",res.data);
         setResponse(res.data.messa)
        } catch (error:any) {
             if (error.response) {
       //Server responded with status outside 2xx
       setErrorm(error.response.data.message || "Something went wrong")
        console.log("reset errors", error.response.status, error.response.data.message);
      }else if (error.request) {
    // Request was made but no response
    console.log("No response received:", error.request);
     }else {
    // Something else happened
       console.log("Error setting up request:", error.message);
     }
        }
          
        }
       // alert(passwords?.errEmail)
    console.log(passworder);
      
    }}>
      <h5 className="text-center">Forget password</h5>
     <label>Email</label>

     <input type="text" value={resetem.email} onChange={(e)=>resetpass((prev)=>({...prev,email:e.target.value}))} className="form-control" placeholder="Enter your email to get reset link"></input>
     <button type="submit" className="btn btn-primarx mt-4">Getresetpassword</button>
    {respoMessages.length > 0 ?<span className='text-success text-center d-flex justify-content-center py-2'>{respoMessages}</span>:<span className='text-success text-center d-flex justify-content-center py-2'>{messagerr}</span>}
    </form>
  </div>
 )
 }