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
import { useLocation, useNavigate } from "react-router";
import iptrackers from "../Components/mockdata/Iptracking";
 const Imagesx=[im1,im2,im3,im4];
function Service() {
  const navigate=useNavigate();
  const MeetEng=(path:string)=>{
        navigate(path);

         const pageV =useLocation();
   useEffect(()=>{
        fetch('https://api.ipify.org?format=json').then((res)=>res.json()).
        then((data)=>{
        const ipp=data.ip;
        // Now fetch location info using the IP
         fetch(`https://ipapi.co/${ipp}/json/`).then((res)=>res.json()).then((location)=>{
          const countryx=location.country_name ||"UNKNOWN";
          const datao:iptrackers={ip:ipp,page:pageV.pathname,country:countryx,timest:new Date(),
          network:location.network,
          city:location.city,
          region:location.region,
          country_capital:location.country_capital,
          latitude:location.latitude,
          longitude:location.longitude,
          timezone:location.timezone,
          currency_name:location.currency_name,
          languages:location.languages,
          org:location.org
          };
          fetch("https://exapi-gjsy.onrender.com/iptracker",{
          method:"POST",
          headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify(datao)
        }).then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log("error in ip track",err))
         }).then((err)=>console.log("Error in fetching Geoloaction Apis",err))
       }).catch((err)=>console.log('Failed to get IP',err));
    },[]);
   }
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
           < a className="btn  btn-color-service" onClick={()=>MeetEng('/courses')}>Meet Engineer</a>
           </figcaption>
         </figure>
          </div>

          <div className="col-md-3 col-lg-3">
          <figure className="figure">
          <img id='img1' src={im3} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
           <figcaption className="figure-caption text-center">
            <h3>Web & Mobile App Development</h3>
            <p>Get Commercial Software for low price than wherever</p>
            
            < a className="btn  btn-color-service" onClick={()=>MeetEng('/courses')}>Meet Engineer</a>
            </figcaption>
         </figure>
          </div>

          <div className="col-md-3 col-lg-3">
          <figure className="figure">
          <img id='img3' src={im6} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
           <figcaption className="figure-caption text-center"><h3>Software Customization</h3> 
           <p>Extech makes your existing Software System more desireble</p>
           < a className="btn  btn-color-service" onClick={()=>MeetEng('/courses')}>Meet Engineer</a>
           </figcaption>
         </figure>
          </div>

          <div className="col-md-3 col-lg-3">
          <figure className="figure">
          <img id='img4' src={im5} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
           <figcaption className="figure-caption text-center"><h3>System Design</h3>
           <p>Meet Extech Software engineers to help you get Skills in Designing Any software System </p>
           < a className="btn  btn-color-service" onClick={()=>MeetEng('/courses')}>Meet Engineer</a>
           </figcaption>
         </figure>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Service