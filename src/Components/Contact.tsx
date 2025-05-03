import { useState } from "react";
import "../Components/contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import image_bac from "../assets/Images/Career.png";
import { GoogleMaps } from "./GoogleMaps";
function Contact() {

   const [messageSt,sendMessage]=useState(false);
  
      function CloseMessage() {
        sendMessage(false)
      }
      function SendMessage() {
        sendMessage(true)
      }

  return (
  

    <div className="container-fluid">
       <div className="container">
       <div className=" row d-flex d-flex justify-content-center align-items-center contacts-container">
           <h3 className="h22 text-center">ExTech Contacts</h3>
           <div className="par-wid">

           <p className="pp2">Got any questions about ExTech Product,Services or Scaling on our platform?
           We are here to help. Chat to Our friendly team  24/7 and get onboard in less than 5 minutes.</p>
           </div>
    
      
    
    </div>

       </div>
      
      
    
    <section id="contact" className="contact section">
   
<div className="container section-title aos-init aos-animate" data-aos="fade-up">
  {/* <h2>Contact</h2> */}
  {/* <div><span>Check EXTECH</span> <span className="description-title">Contact</span></div> */}
</div>

<div className="container aos-init aos-animate" data-aos="fade" data-aos-delay="100">

  <div className="row gy-4">

    <div className="col-lg-4">
      <div className="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
        <i className="bi bi-geo-alt flex-shrink-0"></i>
        <div>
          <h3>Address</h3>
          <p>
          23M7+249, KN 123 St, Kigali, Rwanda</p>
        </div>
      </div>

      <div className="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
        <i className="bi bi-telephone flex-shrink-0"></i>
        <div>
          <h3>Call Us</h3>
          <p>+250787124101</p>
        </div>
      </div>


      <div className="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
        <i className="bi bi-envelope flex-shrink-0"></i>
        <div>
          <h3>Mail Us</h3>
          <p>extech@info.rw</p>
        </div>
      </div>
      

    </div>

    <div className="col-lg-8">
      <form action="forms/contact.php" method="post" className="php-email-form aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
        <div className="row gy-4">

          <div className="col-md-6">
            <input type="text" name="name" className="form-control" placeholder="Your Name" />
          </div>

          <div className="col-md-6 ">
            <input type="email" className="form-control" name="email" placeholder="Your Email" />
          </div>

          <div className="col-md-12">
            <input type="text" className="form-control" name="subject" placeholder="Subject" />
          </div>

          <div className="col-md-12">
            <textarea className="form-control"  name="message"  placeholder="Leave a Message" ></textarea>
          </div>

          <div className="col-md-12 text-center">
            {/* <div className="loading">Loading</div> */}
           {
            messageSt && (

             <div className="alert  message-color alert-dismissible fade show" role="alert">
              <i className="bi bi-envelope px-1"></i><strong>Your message has been sent!</strong> Thank you!.
             <button type="button" className="btn-close" onClick={CloseMessage} data-bs-dismiss="alert" aria-label="Close"></button>
             </div>
            )
           }


            <button type="button" className='submit' onClick={SendMessage}>Send Message</button>
          </div>

        </div>
      </form>
    </div>
    
  </div>

</div>

</section>


<div className="container">

  <GoogleMaps/>
</div>
       
    </div>
   
  
            )
      

}

export default Contact