import "../Components/Loginmodell.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Components/sign.css"
import React, { useState } from 'react'
interface RegisterProps{
  handleRegister:()=>void;
  idc:any;
  idco:any;
}

function LoginModal({handleRegister,idc,idco}:RegisterProps) {
              type  formdata={
                    id1:string;
                    id2:string;
                    fname:string;
                    emails:string;
                    phone:string;
                    country:string,
                    terms:boolean;
                }
  const [coursedata,setCourses]=useState<formdata>({id1:idc,id2:idco,fname:"",emails:"",phone:"",country:"",terms:false})
  return (
 <div id="popup" className="modal">
              <div className="card card-m ">
              <div className="card-header panel-color">
               <span className="float-end close" onClick={handleRegister}>X</span>
               <h4 className='text-center'>Sign in</h4> 
              </div>
            <div className="card-body">
                <form onSubmit={
                  (e)=>{
                    e.preventDefault();
                    alert(coursedata.terms)
                   //console.log(coursedata);
                 }
                }>
                  <div className='form-group'>
                    <input value={coursedata.id1}  type='text'  className='form-control form-field' placeholder='Enter full names' disabled></input>
                    <input value={coursedata.id2} type='text'  className='form-control form-field' placeholder='Enter full names' disabled></input>
                    <label >Fullname</label>
                    <input type='text' onChange={(e)=>setCourses((prevadata)=>({...prevadata,fname:e.target.value}))}  value={coursedata.fname} className='form-control form-field' placeholder='Enter full names'></input>
                    </div>
                    <div className='form-group'>
                    <label>Email</label>
                    <input type='email' onChange={(e)=>setCourses((prevdata)=>({...prevdata,emails:e.target.value}))} placeholder='Enter email' className='form-control form-field'></input>
                    </div>
                    <div className='form-group'>
                    <label>Phone number</label>
                    <input type="text" onChange={(e)=>setCourses((prevdata)=>({...prevdata,phone : e.target.value}))} value={coursedata.phone} placeholder='Enter phone number' className='form-control form-field'></input>
                    </div>
                    <div className='form-group'>
                    <label>Select country</label>
                    <select className='form-control form-field' onChange={(e)=>setCourses((prevdata)=>({...prevdata,country:e.target.value}))}>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Kenya">Kenya</option>
                    </select>
                    </div>
                    <div className="custom-control custom-checkbox my-2">
                    <input type="checkbox" checked={coursedata.terms} onChange={(e)=>setCourses((prevdata)=>({...prevdata,terms:e.target.checked}))} className="custom-control-input" id="customCheckDisabled" />
                   <label className="custom-control-label">Accept terms and conditions</label>
                 </div>
                 <div className='d-flex align-items-center justify-content-center'><button type='submit'   className='btn btn-color-service my-2 mx-auto w-50'>RegisterNow</button></div>
                  
                </form>
            </div>
            <div className="card-footer text-end">
                   <small>Register with Extech</small>
            </div>
          </div>
  </div>
  )
}

export default LoginModal