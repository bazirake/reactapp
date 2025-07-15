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
  const[course,setCourse]=useState<RegisterData>({userType:'',Fullname:'',Email:'',Phone:'',Country:'',Password:'',PConfirm:'',cateoryid:decc,contentid:deidco});
  const [errom,setError]=useState<RegisterError>();
  
  const Validate=()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const rwPhoneRegex = /^07[2-9]\d{7}$/;
      let  errda:RegisterError={};
        if(course.Fullname==="")
        {
          errda.errFullname="Fullname should not be empty"
        }
        if(course.Country===""){
          errda.errCountry="Country Should not be empty"
        }
        if(course.Email===""){
          errda.errEmail="Email should not be empty"
        }
        if(!emailRegex.test(course.Email)) {
         errda.errEmail = "Enter a valid email address";
       }
        if(course.Phone===""){
          errda.errPhone="Phone Should not be empty"
        }

          if(!rwPhoneRegex.test(course.Phone)){
           errda.errPhone="Enter avalid Phone number";
        }

        if(course.userType===""){
          errda.erruserType="User type should not be empty"
        }
        if(course.Password===""){
          errda.Password="Password should not be empty"
         }
        if(course.PConfirm===""){
          errda.errPConfirm="Confirm Password should not be empty"
        }
        if(course.Password!==course.PConfirm){
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
            <h5 className='py-1'>categor:{decc}-{deidco}Register with Extech</h5>
          </div>
          <div className="card-body">
            <form onSubmit={(e)=>{
              e.preventDefault();
               if (Validate()) {
                alert('Submitted Form');
               }
              
              }}>
              <div className='row'>
              <div className='col-md-6'>
               <div className="mb-1">
                <label  className="form-label">UserType</label>
                <select className='form-control' onChange={(e)=>setCourse((prev)=>({...prev,userType:e.target.value}))}>
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
                  <input type="text" className="form-control" hidden={true} value={course.cateoryid} disabled />
                  <input type="text" className="form-control" hidden={true} value={course.contentid} disabled />
                 <input type="text" value={course.Fullname} onChange={(e)=>setCourse((prev)=>({...prev,Fullname:e.target.value}))} className="form-control" id="firstName" placeholder="Eric bazirake"/>
                 {errom && <span style={{color:"red",fontSize:"15px"}}>{errom.errFullname}</span>}
              </div>
              <div className="mb-1">
              </div>
              </div>
              </div>
              <div className='row'>
               <div className='col-md-6'>
                 <div className="mb-1">
                <label  className="form-label">Email address</label>
                <input type="text" value={course.Email} onChange={(e)=>setCourse((prev)=>({...prev,Email:e.target.value}))} className="form-control" id="email" placeholder="eric@example.com"/>
                 {errom && <span style={{color:"red",fontSize:"15px"}}>{errom.errEmail}</span>}
              </div>
               </div>
                <div className='col-md-6'>
                <div className="mb-1">
                <label  className="form-label">Phone</label>
                <input type="tel" value={course.Phone} onChange={(e)=>setCourse((prev)=>({...prev,Phone:e.target.value}))} className="form-control" id="phone" placeholder="+250123456789"/>
                 {errom && <span style={{color:"red",fontSize:"15px"}}>{errom.errPhone}</span>}
              </div>
               </div>
              </div>
      
               <div className="mb-1">
                <label  className="form-label">Country</label>
                   <select className='form-control' onChange={(e)=>setCourse((prev)=>({...prev,Country:e.target.value}))}>
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
                <input type="password" value={course.Password} onChange={(e)=>setCourse((prev)=>({...prev,Password:e.target.value}))} className="form-control" id="password" placeholder="Enter password"/>
                 {errom && <span style={{color:"red",fontSize:"15px"}}>{errom.Password}</span>}
              </div>
              <div className="mb-1">
                <label  className="form-label">Confirm Password</label>
                <input type="password" value={course.PConfirm} onChange={(e)=>setCourse((Prev)=>({...Prev,PConfirm:e.target.value}))} className="form-control" id="confirmPassword" placeholder="Re-enter password"/>
                 {errom && <span style={{color:"red",fontSize:"15px"}}>{errom.errPConfirm}</span>}
              </div>
              <div className="d-grid d-flex justify-content-center">
                <button type="submit" className="btn btn-color-service w-75">Register</button>
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