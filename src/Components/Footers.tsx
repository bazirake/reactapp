
import "../Components/Navbars.css";
import "../Components/Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import {NavLink} from 'react-router';
import { useState } from "react";

     type Subobject={
       email:string
     } 

     type EmailError={
      emError?:string
     }                                                
                                                      
function Footers() {

 const[emails,setEmail]=useState<Subobject>({email:''});
 const[errem,setErroremail]=useState<EmailError>({});
 const ValidateSub=()=>{
 const errdata:EmailError={};
  if(!emails.email){
    errdata.emError="Email field shoud not be empty";
  }
  if(!/\S+@\S+\.\S+/.test(emails.email)){
    errdata.emError="Please enter a valid email";                 
    }
   setErroremail(errdata);
   return Object.keys(errdata).length===0
}
  return(
    <footer className="footer-color text-dark py-4">
  <div className="container">
    <div className="row">
      <div className="col-lg-3  col-md-4">
        <h5>About Us</h5>
        <p className="text-dec">ExTech is Exeptional Techcompany aiming at delivering tech Services than wherever you can find.</p>
      </div>
      <div className="col-lg-3  col-md-4">
        <h5>Useful Links</h5>
        <ul className="list-unstyled">
          <li><NavLink to={`/`} className="text-dark text-dec">Home</NavLink></li>
          <li><NavLink to={`/service`} className="text-dark text-dec">Services</NavLink></li>
          <li><NavLink to={`/contact`} className="text-dark text-dec">Contact</NavLink></li>
          <li><NavLink to={`/courses`} className="text-dark text-dec">Course</NavLink></li>
          <li><NavLink to={`/about`} className="text-dark text-dec">About us</NavLink></li>
        </ul>
      </div>
      <div className=" col-lg-3 col-md-4">
        <h5>Follow Us</h5>
        <a href="#" className="me-3 text-dec"><i className="bi bi-facebook "></i></a>
        <a href="#" className="me-3 text-dec"><i className="bi bi-twitter-x"></i></a>
        <a href=""  className="me-3 text-dec"><i className="bi bi-instagram"></i></a>
        <a href=""  className="me-3 text-dec"><i className="bi bi-linkedin"></i></a>
        <a href=""  className="me-3 text-dec"><i className="bi bi-instagram"></i></a>
        <a href=""  className="me-3 text-dec"><i className="bi bi-youtube"></i></a>      
        <p className="text-dec">&copy;2025 ExTech Company.All rights reserved.</p>
      </div>
      <div className="col-lg-3 col-md-4">
      <h5>ExTech Ltd</h5>
      <p className="text-dec">Subscribe to ExTech Ltd and receive the latest Updates about our products and services!</p>
      <form  onSubmit={(e)=>{
          e.preventDefault();
          if (ValidateSub()) {
             alert(emails.email);
          }
          else{
            alert(errem.emError);
          }
          
      }} method="post" className="php-email-form">
       <div className="newsletter-form">
        <input type="text" value={emails.email} onChange={(e)=>setEmail((prevemail)=>({...prevemail,email:e.target.value}))} className="form-control" name="email"/>
         <button type="submit">Subscribe</button></div>
            <div className="loading">Loading</div>
             <div className="error-message"></div>
             <div className="sent-message">Your subscription request has been sent.Thank you!</div>
          </form>
      </div>
    </div>
  </div>
  <div> 
  </div> 
</footer>
  )
}


export default Footers