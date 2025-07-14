import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Modal from './Modal';
import LoginModal from './LoginModal';
import "./sign.css";

function Sign() {

  return (

     <div className="container py-5 mt-5">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-sm">
          <div className="card-header text-center">
            <h5 className='py-1'>Register with Extech</h5>
          </div>
          <div className="card-body">
            <form>
              <div className='row'>
              <div className='col-md-6'>
               <div className="mb-1">
                <label  className="form-label">UserType</label>
                <select className='form-control'>
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
                <input type="text" className="form-control" id="firstName" placeholder="Eric bazirake"/>
              </div>
              </div>

              </div>

              <div className='row'>
               <div className='col-md-6'>
                 <div className="mb-1">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="eric@example.com"/>
              </div>
               </div>


                <div className='col-md-6'>
                <div className="mb-1">
                <label  className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" placeholder="+250123456789"/>
              </div>
               </div>
              </div>
      
               <div className="mb-1">
                <label  className="form-label">Country</label>
                   <select className='form-control'>
                    <option value=''>Select country</option>
                    <option value='Rwanda'>Rwanda</option>
                    <option value='Burundi'>Burundi</option>
                    <option value='Congo'>Congo</option>
                    <option value='Tanzania'>Tanzania</option>
                  </select>
              </div>
              <div className="mb-1">
                <label  className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password"/>
              </div>
              <div className="mb-1">
                <label  className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Re-enter password"/>
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