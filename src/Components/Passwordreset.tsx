import { useState } from "react";
import { emailobject } from "./data/Registerobject";
import api from "./data/axiosClient";

export default function Passwordreset() {
const[resetem,resetpass]=useState<emailobject>({to:'',subject:'Extech password reset link',text:'password reset link'});

  return(
  <div className="container-fluid container-custom my-4">
   <p>Reset password</p>
    <form className="mx-auto form-custom" onSubmit={async(e)=>{
        e.preventDefault()
        //console.log(resetem);
        const res=await api.post("https://exapi-gjsy.onrender.com/send-email",resetem,
        {
        withCredentials:true
     });
    console.log("Responses",res.data);
    }}>
     <label>Email</label>

     <input type="text" value={resetem.to} onChange={(e)=>resetpass((prev)=>({...prev,to:e.target.value}))} className="form-control" placeholder="Enter email"></input>
     <button type="submit" className="btn btn-primarx mt-4">Getresetpassword</button>
    </form>
  </div>
 )
 }