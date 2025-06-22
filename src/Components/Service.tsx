import im1 from "../assets/Images/GoodOne.jpg";
import im2 from "../assets/Images/Developer.jpg";
import im3 from "../assets/Images/HappyIcon.webp";
import im4 from "../assets/Images/Engineer.png";
import im5 from "../assets/Images/GettyImageIcon.jpg";
import im6 from "../assets/Images/AfricanIcon.jpg";
import im7 from "../assets/Images/more-tech-institutes.jpeg";
import "./service.css"
import { useEffect } from "react";
import { error } from "console";

 const Imagesx=[im1,im2,im3,im4];


function Service() {
  return (
   

       <div className="container">
       <div className=" row d-flex d-flex justify-content-center align-items-center" style={{marginTop:"120px"}}>
           <h2 className="text-center">Our Services</h2>
           <div className="par-wid">

           <p className="pp2">Extech provides incredible services to its customers than wherever you can find.</p>
           </div>
    </div>

    <div className="row">
    <div className="row">
          <div className="col-md-3 col-lg-3">
          <figure className="figure">
          <img  id='img2' src={im7} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
           <figcaption className="figure-caption text-center"><h3>Software Development Training</h3>
           <p>Get hands on Skills in mobile and web development</p>
           < a className="btn  btn-color-service">Meet Engineer</a>
           </figcaption>
         </figure>
          </div>

          <div className="col-md-3 col-lg-3">
          <figure className="figure">
          <img id='img1' src={im3} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
           <figcaption className="figure-caption text-center">
            <h3>Web & Mobile App Development</h3>
            <p>Get Commercial Software for low price than wherever</p>
            
            < a className="btn  btn-color-service">Meet Engineer</a>
            </figcaption>
         </figure>
          </div>

          <div className="col-md-3 col-lg-3">
          <figure className="figure">
          <img id='img3' src={im6} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
           <figcaption className="figure-caption text-center"><h3>Software Customization</h3> 
           <p>Extech makes your existing Software System more desireble</p>
           < a className="btn  btn-color-service">Meet Engineer</a>
           </figcaption>
         </figure>
          </div>

          <div className="col-md-3 col-lg-3">
          <figure className="figure">
          <img id='img4' src={im5} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
           <figcaption className="figure-caption text-center"><h3>System Design</h3>
           <p>Meet Extech Software engineers to help you get Skills in Designing Any software System </p>
           < a className="btn  btn-color-service">Meet Engineer</a>
           </figcaption>
         </figure>
          </div>

        </div>

      
    </div>

       </div>
      
   
  )
}


export default Service