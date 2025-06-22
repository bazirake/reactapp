import "../Components/Loginmodell.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Components/sign.css"
import React, { useEffect, useState } from 'react'
import { wait } from "@testing-library/user-event/dist/utils";
interface RegisterProps{
  handleRegister:()=>void;
  idc:any;
  idco:any;
}

function LoginModal({handleRegister,idc,idco}:RegisterProps) {
              type  formdata={
                  fname:string;
                  email:string;
                  tel:string;
                  country:string,
                  terms:boolean;
                  cid:string;
                  conid:string;
                }
              type FormError={
                  fname?:string;
                  email?:string;
                  tel?:string;
                  country?:string;
                  terms?:string;
                }
      const [coursedata,setCourses]=useState<formdata>({cid:idco,conid:idc,fname:"",email:"",tel:"",country:"",terms:false})
      const [message,setMessage]=useState<string>('');
      const [cvisible,setVisible]=useState(false);
      const [errData,setFormError]=useState<FormError>({});
      const [isloading,setLoading]=useState(false);
      const validateForm=()=>{
      const errorr:FormError={};
      if(!coursedata.fname.trim()){
         errorr.fname="Full name field should not be empty";
       }
       if(!coursedata.email.trim()){
         errorr.email="Email field should not be empty";
        }
       const phoneRegex =/^07[2389]\d{7}$/; // Example: 10-digit phone number
       if(!coursedata.tel.trim()) {
        errorr.tel="Tel field should not be empty";
       }
        if(!phoneRegex.test(coursedata.tel)){
         errorr.tel ="Phone number is invalid";
       }
       if(!coursedata.country){
         errorr.country="Country field should not be empty";
       }
       else if(!/\S+@\S+\.\S+/.test(coursedata.email)){
         errorr.email="Please enter a valid email";                 
       }
       if(!coursedata.terms){
         errorr.terms="Please Accept terms";
       }
        setFormError(errorr);
         return Object.keys(errorr).length===0;
      };
      return(
       <div id="popup" className="modal">
              <div className="card card-m ">
              <div className="card-header panel-color">
               <span className="float-end close" onClick={handleRegister}>X</span>
               <h4 className='text-center'>Sign in</h4> 
              </div>
            <div className="card-body">
                <form onSubmit={
                     async (e)=>{
                     e.preventDefault();
                     if(validateForm()){
                     setLoading(true);
                       try{
              
                       const res=await fetch("https://exapi-gjsy.onrender.com/student",
                        {
                         method:"POST",
                         headers:{
                          "Content-Type":"application/json"
                         },
                         body:JSON.stringify(coursedata)
                        }
                       );
                      const result =await res.json();
                        setVisible(true)
                        setMessage(result.message);
                        //alert(coursedata.terms)
                        console.log(result);
                        setCourses((prevdata)=>({...prevdata,fname:"",email:"",tel:"",country:"",terms:false}));
                        setLoading(false);
                     }
                     catch (error){
                        console.log(error);
                     }
                      }
                    
                      }
                }>
                  <div className='form-group'>
                    <input value={coursedata.conid} type='text' className='form-control form-field' placeholder='Enter full names' hidden></input>
                    <input value={coursedata.cid}  type='text' className='form-control form-field' placeholder='Enter full names' hidden></input>
                    <label >Fullname</label>
                    <input type='text' onChange={(e)=>setCourses((prevadata)=>({...prevadata,fname:e.target.value}))}  value={coursedata.fname} className='form-control form-field' placeholder='Enter full names'/>
                    {errData.fname && <span style={{ color: "red",fontSize:"15px" }}>{errData.fname}</span>}
                    </div>
                    <div className='form-group'>
                    <label>Email</label>
                    <input type='text' value={coursedata.email} onChange={(e)=>setCourses((prevdata)=>({...prevdata,email:e.target.value}))} placeholder='Enter email' className='form-control form-field'/>
                     {errData.email && <span style={{ color: "red",fontSize:"15px" }}>{errData.email}</span>}
                    </div>
                    <div className='form-group'>
                    <label>Phone number</label>
                    <input type="text" onChange={(e)=>setCourses((prevdata)=>({...prevdata,tel : e.target.value}))} value={coursedata.tel} placeholder='Enter phone number' className='form-control form-field'/>
                    {errData.tel && <span style={{ color: "red",fontSize:"15px" }}>{errData.tel}</span>}
                    </div>
                    <div className='form-group'>
                    <label>Select country</label>
                    <select className='form-control form-field'value={coursedata.country} onChange={(e)=>setCourses((prevdata)=>({...prevdata,country:e.target.value}))}>
                       <option value=""> Country</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Kenya">Kenya</option>
                    </select>
                    {errData.country && <span style={{ color: "red",fontSize:"15px" }}>{errData.country}</span>}
                    </div>
                    <div className="custom-control custom-checkbox my-2">
                    <input type="checkbox" checked={coursedata.terms} onChange={(e)=>setCourses((prevdata)=>({...prevdata,terms:e.target.checked}))} className="custom-control-input" id="customCheckDisabled" />
                   <label className="custom-control-label">Accept terms and conditions</label>
                   {errData.terms && <span style={{color:"red"}}>&nbsp;{errData.terms}</span>}
                 </div>
                 <div className='d-flex align-items-center justify-content-center'><button type='submit' className='btn btn-color-service my-2 mx-auto w-50'>RegisterNow</button></div>
                   {
                     cvisible && <div className="alert alert-success text-center" role="alert">{message}
                     <button type="button"  data-dismiss="alert"  aria-label="Close"/>
                     <span aria-hidden="true" className="float-end close" onClick={()=>setVisible(false)}>X</span></div>
                   }
                 {
                 isloading &&  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                   <span className="visually-hidden">Loading...</span>
                 </div>
              </div>
                 }

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