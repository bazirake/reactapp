import 'bootstrap/dist/css/bootstrap.min.css';
import "./sign.css"

function Sign() {
  return (
    <div className="container-fluid">
           <div className="container">
           <div className=" row col-md-6 offset-md-3 d-flex d-flex justify-content-center align-items-center" style={{marginTop:"140px",marginBottom:"40px"}}>
          <div className="card card-m ">
            <div className="card-header panel-color">
             <h4 className='text-center'>Registration form</h4> 
            </div>
            <div className="card-body">
                <form>
                  <div className='form-group'>
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
                  <button type='submit'  className='btn btn-color-service my-2'>RegisterNow</button>
                </form>
            </div>
            <div className="card-footer text-end">
                   <small>Register with Extech</small>
            </div>
          </div>
        </div>
           </div>
           </div>
  )
}


export default Sign