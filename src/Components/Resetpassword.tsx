import React from 'react'

function Resetpassword() {
  return (
    <div className="container">
  <h4 className='py-2 text-center'>Reset password</h4>
  <form onSubmit={(e)=>{
    e.preventDefault();

     alert('your reset password has been sent to you via the email, check the email');
     }}>
        <div className="mb-2">
      <label  className="form-label">Enter reset email</label>
      <input type="text" className='form-control' placeholder='example: eric.bazirake@gmail.com'/>
      </div>
       <div className="d-flex justify-content-center">
         <button type="submit" className="btn btn-color-service w-50 mb-2">
        
       {/* <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> */}
            
          Reset password</button>
    </div>
  </form>
  </div>
  )
}

export default Resetpassword