import React from 'react'
import { useParams } from 'react-router';

function Resetpassword() {
  const {resetToken}=useParams();
  
  return (
    <div className="container-fluid container-custom my-4 ">
  
  <form onSubmit={(e)=>{
    e.preventDefault();

     alert('your reset password has been sent to you via the email, check the email');
     }} className='mx-auto form-custom'>
      <h4 className='py-2 text-center'>Reset password</h4>
        <div className="mb-2">
      <label  className="form-label">Enter reset email-{resetToken}</label>
      <input type="password" className='form-control' placeholder='Enter new password'/>
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