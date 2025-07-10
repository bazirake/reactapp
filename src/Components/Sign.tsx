import 'bootstrap/dist/css/bootstrap.min.css';
import "./sign.css"

import { useState } from 'react';
import Modal from './Modal';
import LoginModal from './LoginModal';


function Sign() {

  return (

     <div className="container py-5 mt-5">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-sm">
          <div className="card-header text-center bg-primary text-white">
            <h4>Register with Extech</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label  className="form-label">Full Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="John"/>
              </div>
             
              <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="john@example.com"/>
              </div>
              <div className="mb-3">
                <label  className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" placeholder="+250 123 456 789"/>
              </div>
              <div className="mb-3">
                <label  className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password"/>
              </div>
              <div className="mb-3">
                <label  className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Re-enter password"/>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary w-100">Register</button>
              </div>
            </form>
          </div>
          <div className="card-footer text-center">
            <small> Already have an account? <a href="#">Login here</a></small>
          </div>
        </div>
      </div>
    </div>
  </div>
          
  )
}


export default Sign