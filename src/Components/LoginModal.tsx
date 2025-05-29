import "../Components/Loginmodell.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Components/sign.css"
import React from 'react'
interface RegisterProps{
  handleRegister:()=>void;
  idc:any;
  idco:any;
}

function LoginModal({handleRegister,idc,idco}:RegisterProps) {
  return (
 <div id="popup" className="modal">
              <div className="card card-m ">
            <div className="card-header panel-color">
               <span className="float-end close" onClick={handleRegister}>X</span>
             <h4 className='text-center'>Sign in</h4> 
            
            </div>
            <div className="card-body">
                <form>
                  <div className='form-group'>
                    <input value={idc} type='text' className='form-control form-field' placeholder='Enter full names' disabled></input>
                    <input value={idco} type='text' className='form-control form-field' placeholder='Enter full names' disabled></input>
                    <label >Fullname</label>
                    <input type='text' className='form-control form-field' placeholder='Enter full names'></input>
                    </div>
                    <div className='form-group'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter email' className='form-control form-field'></input>
                    </div>
                    <div className='form-group'>
                    <label>Phone number</label>
                    <input type='text' placeholder='Enter phone number' className='form-control form-field'></input>
                    </div>
                    <div className='form-group'>
                    <label>Select country</label>
                    <select className='form-control form-field'>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Kenya">Kenya</option>
                    </select>
                    </div>
                    <div className="custom-control custom-checkbox my-2">
                    <input type="checkbox" className="custom-control-input" id="customCheckDisabled" />
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