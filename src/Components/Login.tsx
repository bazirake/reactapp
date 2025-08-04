import "./login.css"
import {Loginobject} from "./data/Registerobject";
import {LoginError} from "./data/Registerobject";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {LoginResp} from "./data/Registerobject";
import { encrypt } from "./data/Encrypt";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import api from "./data/axiosClient";
function Login() {
  const [logindata,setLogin]=useState<Loginobject>({emails:'',passwords:''});
  const [loginerror,setError]=useState<LoginError>();
  const [respoMessages,setResponse]=useState("");
  const [loginpar,setLoginP]=useState<LoginResp>({id:'',cateid:'',contentid:'',fname:'',emails:'',usertype:'',country:''});

  const naviGate=useNavigate();
  useEffect(()=>{
 if(respoMessages==='Logged in successfully') 
   {
       let cate=encodeURIComponent(encrypt(loginpar.cateid));
       let id=encodeURIComponent(encrypt(loginpar.contentid));
       console.log("logsssssss",loginpar)
       const timer=setTimeout(()=>{       
       naviGate(`/courses/${cate}/${id}`);
       },2000) //4seconds                   
    return ()=>clearTimeout(timer);                         
   }
  },[respoMessages])



   const Validate=()=>{
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let   errordata:LoginError={}
      if(logindata.emails===""){
          errordata.emailError="Email field should not be empty";
      }
      if(!emailRegex.test(logindata.emails)){
       errordata.emailError="Invalid email";
      }
     if(logindata.passwords===""){
        errordata.passwordError="Password field should not be empty";
     }
     setError(errordata);
     return Object.keys(errordata).length===0
   }
  
  return (
    <div className="container-fluid container-custom my-4">
  <form className="mx-auto form-custom" onSubmit={async(e)=>{
        e.preventDefault()
         if(Validate()){
            try 
            {
                const res= await  api.post("loginAuthe",logindata,{
                withCredentials:true
            });
              
            setLoginP((prevdata)=>({...prevdata,id:res.data.user.id,cateid:res.data.user.cateid,contentid:res.data.user.contid,fname:res.data.user.fname,
            emails:res.data.user.emails,usertype:res.data.user.usertype,country:res.data.user.country}));
            setResponse(res.data.message)
              console.log(res);
            }
            catch(error){
               console.log(error)
            } 

        }
     }}>
    <h4 className="text-center h44">Login</h4>
       <div className="form-group">
          <label>Email</label>
          <input type="text" value={logindata.emails} onChange={(e)=>setLogin((datas)=>({...datas,emails:e.target.value}))} className="form-control form-control-login" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          {loginerror && <span style={{color:"red",fontSize:"15px"}}>{loginerror.emailError}</span>}
      </div>
     <div className="form-group">
     <label>Password</label>
        <input type="password" value={logindata.passwords} onChange={(e)=>setLogin((datas)=>({...datas,passwords:e.target.value}))} className="form-control form-control-login" id="exampleInputPassword1" placeholder="Password"/>
         {loginerror && <span style={{color:"red",fontSize:"15px"}}>{loginerror.passwordError}</span>}
        <div id="emailHelp" className="form-text mt-3">Forgetpassword?</div>
     </div>
         <button type="submit" className="btn btn-primarx mt-4">Login</button>
         <span className='text-success text-center d-flex justify-content-center py-2'>{respoMessages}</span>
   </form>   
  </div>
  )     
}

export default Login