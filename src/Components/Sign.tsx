import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Modal from './Modal';
import LoginModal from './LoginModal';
import "./sign.css";
import { useParams } from 'react-router';
import { decrypt } from './data/Encrypt';
import {RegisterData} from "./data/Registerobject";
import { Prev } from 'react-bootstrap/esm/PageItem';
import {RegisterError} from "./data/Registerobject";

function Sign() {
  let {cate}=useParams();
  let {id}=useParams();
  let decc=decodeURIComponent(decrypt(cate ?? ""));
  let deidco=decodeURIComponent(decrypt(id ?? ""));
  const[course,setCourse]=useState<RegisterData>({cateid:decc,contid:deidco,usertype:'',fname:'',email:'',tel:'',country:'',password:'',PConfirm:''});
  const [errom,setError]=useState<RegisterError>();
  const [messages,setMessages]=useState("");
  const [loadings,setLoading]=useState(false);
  
  const Validate=()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const rwPhoneRegex = /^07[2-9]\d{7}$/;
      let  errda:RegisterError={};
        if(course.fname==="")
        {
          errda.errFullname="Fullname should not be empty"
        }
        if(course.country===""){
          errda.errCountry="Country Should not be empty"
        }
        if(course.email===""){
          errda.errEmail="Email should not be empty"
        }
        if(!emailRegex.test(course.email)) {
         errda.errEmail = "Enter a valid email address";
       }
        if(course.tel===""){
          errda.errPhone="Phone Should not be empty"
        }
          if(!rwPhoneRegex.test(course.tel)){
           errda.errPhone="Enter avalid Phone number";
        }
        if(course.usertype===""){
          errda.erruserType="User type should not be empty"
        }
        if(course.password===""){
          errda.Password="Password should not be empty"
         }
        if(course.PConfirm===""){
          errda.errPConfirm="Confirm Password should not be empty"
        }
        if(course.password!==course.PConfirm){
          errda.errPConfirm="Password confirmation does not maatch"
        }
        setError(errda);
     return Object.keys(errda).length===0
  }

  return (
     <div className="container py-5 mt-5">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-sm">
          <div className="card-header text-center">
            <h5 className='py-1'>Register with Extech</h5>
          </div>
          <div className="card-body">
            <form onSubmit={async(e)=>{
              e.preventDefault();
               if(Validate()){

                setLoading(true)
                 try{
                  const resp=await fetch("https://exapi-gjsy.onrender.com/courseapp",{
                    method:"POST",
                    headers:{
                    "Content-Type":"application/json"
                   },
                  body:JSON.stringify(course)
                  });
                 const resss=await resp.json();
                  setMessages(resss.message);
                  setCourse({cateid:decc,contid:deidco,usertype:'',fname:'',email:'',tel:'',country:'',password:'',PConfirm:''});
                  setLoading(false)

                 }catch(error){
                   console.log("error fetching",error);
                 }
               }
              }}>

            <div className='row'>
              <div className='col-md-6'>
               <div className="mb-1">
                <label  className="form-label">UserType</label>
                <select className='form-control' onChange={(e)=>setCourse((prev)=>({...prev,usertype:e.target.value}))}>
                   <option value=''>Select usertype</option>
                   <option value='SoftwareBuyer'>Software Buyer</option>
                   <option value='Systemdesigner'>System designer</option>
                   <option value='Internee'>Internee</option>
                   <option value='JuniorSoftwaredev'>Junior Software dev</option>
                   <option value='Softwaredev'>Software dev</option>
                   <option value=' SeniorSoftwaredev'>Senior Software dev</option>
                </select>
                 {errom && <span style={{color:"red",fontSize:"15px"}}>{errom.erruserType}</span>}
              </div>
              </div>

            <div className='col-md-6'>
              <div className="mb-1">
                 <label  className="form-label">Full Name</label>
                  <input type="text" className="form-control" hidden={true} value={course.cateid} disabled />
                  <input type="text" className="form-control" hidden={true} value={course.contid} disabled />
                 <input type="text" value={course.fname} onChange={(e)=>setCourse((prev)=>({...prev,fname:e.target.value}))} className="form-control" id="firstName" placeholder="Eric bazirake"/>
                 {errom && <span style={{color:"red",fontSize:"15px"}}>{errom.errFullname}</span>}
              </div>
              <div className="mb-1">
              </div>
              </div>
              </div>
              <div className='row'>
               <div className='col-md-6'>
                 <div className="mb-1">
                <label className="form-label">Email address</label>
                <input type="text" value={course.email} onChange={(e)=>setCourse((prev)=>({...prev,email:e.target.value}))} className="form-control" id="email" placeholder="Enter email"/>
                 {errom && <span style={{color:"red",fontSize:"15px"}}>{errom.errEmail}</span>}
              </div>
               </div>
                <div className='col-md-6'>
                <div className="mb-1">
                <label  className="form-label">Phone</label>
                <input type="tel" value={course.tel} onChange={(e)=>setCourse((prev)=>({...prev,tel:e.target.value}))} className="form-control" id="phone" placeholder="Enter tel(0787124101)"/>
                 {errom && <span style={{color:"red",fontSize:"15px"}}>{errom.errPhone}</span>}
              </div>
               </div>
              </div>
      
               <div className="mb-1">
                <label  className="form-label">Country</label>
                   <select className='form-control' onChange={(e)=>setCourse((prev)=>({...prev,country:e.target.value}))}>
                    <option value=''>Select country</option>
                    <option value='Rwanda'>Rwanda</option>
                    <option value='Burundi'>Burundi</option>
                    <option value='Congo'>Congo</option>
                    <option value='Tanzania'>Tanzania</option>
                  </select>
                   {errom && <span style={{color:"red",fontSize:"15px"}}>{errom.errCountry}</span>}
              </div>
              <div className="mb-1">
                <label  className="form-label">Password</label>
                <input type="password" value={course.password} onChange={(e)=>setCourse((prev)=>({...prev,password:e.target.value}))} className="form-control" id="password" placeholder="Enter password"/>
                 {errom && <span style={{color:"red",fontSize:"15px"}}>{errom.Password}</span>}
              </div>
              <div className="mb-1">
                <label  className="form-label">Confirm Password</label>
                <input type="password" value={course.PConfirm} onChange={(e)=>setCourse((Prev)=>({...Prev,PConfirm:e.target.value}))} className="form-control" id="confirmPassword" placeholder="Re-enter password"/>
                 {errom && <span style={{color:"red",fontSize:"15px"}}>{errom.errPConfirm}</span>}
                 <span className='text-success text-center d-flex justify-content-center'>{messages}</span>
              </div>
               <div className="d-grid d-flex justify-content-center">
                   <button type="submit" className="btn btn-color-service w-75">

                  {loadings && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                    <span>
                      Register
                    </span></button>
               </div>
            </form>
          </div>
            <div className="card-footer text-center">
                <small> Already registered? <a href="#">Login here</a></small>
            </div>
        </div>
      </div>
    </div>
  </div>     
  )
}

export default Sign