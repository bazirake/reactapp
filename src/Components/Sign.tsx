import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Modal from './Modal';
import LoginModal from './LoginModal';
import "./sign.css";
import { useParams } from 'react-router';
import { decrypt } from './data/Encrypt';
import {RegisterData} from "./data/Registerobject";

function Sign() {
  let {cate}=useParams();
  let {id}=useParams();
  let decc=decodeURIComponent(decrypt(cate ?? ""));
  let deidco=decodeURIComponent(decrypt(id ?? ""));
  const[course,setCourse]=useState<RegisterData>({userType:'',Fullname:'',Email:'',Phone:'',Country:'',Password:'',PConfirm:'',cateoryid:decc,contentid:deidco});
 

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
              alert('Submitted')
              
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
              </div>
              </div>

            <div className='col-md-6'>
              <div className="mb-1">
                 <label  className="form-label">Full Name</label>
                  
                  <input type="text" className="form-control" hidden={true} value={course.cateoryid} disabled />
                  <input type="text" className="form-control" hidden={true} value={course.contentid} disabled />
                 <input type="text" value={course.Fullname} onChange={(e)=>setCourse((prev)=>({...prev,Fullname:e.target.value}))} className="form-control" id="firstName" placeholder="Eric bazirake"/>
              </div>
              <div className="mb-1">
             
              </div>
              </div>
              </div>
              <div className='row'>
               <div className='col-md-6'>
                 <div className="mb-1">
                <label  className="form-label">Email address</label>
                <input type="email" value={course.Email} onChange={(e)=>setCourse((prev)=>({...prev,Email:e.target.value}))} className="form-control" id="email" placeholder="eric@example.com"/>
              </div>
               </div>
                <div className='col-md-6'>
                <div className="mb-1">
                <label  className="form-label">Phone</label>
                <input type="tel" value={course.Phone} onChange={(e)=>setCourse((prev)=>({...prev,Phone:e.target.value}))} className="form-control" id="phone" placeholder="+250123456789"/>
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
              </div>
              <div className="mb-1">
                <label  className="form-label">Password</label>
                <input type="password" value={course.Password} className="form-control" id="password" placeholder="Enter password"/>
              </div>
              <div className="mb-1">
                <label  className="form-label">Confirm Password</label>
                <input type="password" value={course.PConfirm} className="form-control" id="confirmPassword" placeholder="Re-enter password"/>
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