import React, { useEffect } from 'react'
import "./about.css"
import { useLocation } from 'react-router';
import iptrackers from "../Components/mockdata/Iptracking";

function About() {

  const pageV = useLocation();
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
  return (
    <div className='container container-mt'>
    <div className='row'>
     <h2 className='text-center'>Solutions For Businesses</h2>  
    <div className='ext-text'>Tech Gallery provides a one-stop shop for technology repairs and custom fit technology solutions for businesses and gamers, through our Kompyuta line of technology products.</div>
   </div>   
      <div className='d-flex'>
       <button className=' mx-auto btn btn-color-service'>View All Services</button>
      </div>
      <div className="row">
        <div className="col-md-6 mission-col">
        <h1>Our Mission</h1>
        <p>
            Winter Park’s premier source for in-stock computer and gaming hardware.
            Providing a one-stop shop for technology solutions for businesses and gamers through our Kompyuta line of technology products.
            Offering repair services and consulting for those working remotely and no longer have an IT department just down the hall. 
            Our highly skilled team offers the attention to detail and reliability not received from the ‘big-box’ stores.
        </p>
        </div>
        <div className="col-md-6 elementor-element-dd02713">
         
          <img  src='https://shoptechgallery.com/wp-content/uploads/2023/01/lane-technology-2022-4.jpg'/>
         
         
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mission-col">
        <h1>Our Vision</h1>
        <p>
        Assisting businesses and gamers in creating the technology they need, instead of contorting their needs to an off-the-shelf solution.  
        </p>
        </div>
        <div className="col-md-6 elementor-element-dd02713">
          <img  src='https://shoptechgallery.com/wp-content/uploads/2023/02/STG-Sales.jpg'/>
        </div>
      </div>
      <div className='py-3'>
      <h2 className='text-center'>Our Core Values</h2>
      </div>
      <div className="row gap-2 mb-4">
      <div className="card col-md-4 card-borders px-0" style={{maxWidth:"400px"}}>
   <img src="https://shoptechgallery.com/wp-content/uploads/2023/02/Gork-Hatchling-8-1024x1024.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Supporting Students and Artists</h5>
    <p className="card-text">A walk around the Tech Gallery brings you art created with recycled technology. 
      All artwork proceeds go to the Lane Technology Foundation, a 501(c)(3)
       scholarship program that supports underserved individuals seeking a career in business technology.</p>
  </div>
</div>

<div className="card col-md-4 card-borders px-0" style={{maxWidth:"400px"}}>
  <img src="https://shoptechgallery.com/wp-content/uploads/2023/02/Building-Community-Relationships.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Building Community Relationships</h5>
    <p className="card-text">We connect with our community through our trustee partnerships with the Winter Park Chamber of Commerce,
       the Florida Association of Veteran Owned Businesses (FAVOB) and the Orlando Tech College (OTC).</p>
  </div>
  </div> 

<div className="card card-borders  col-md-4 px-0" style={{maxWidth:"400px"}}>
  <img src="https://shoptechgallery.com/wp-content/uploads/2023/02/Valuing-Inclusivity.jpg"  className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Valuing Inclusivity</h5>
    <p className="card-text">We stand strong against systemic bias and discrimination and believe 
      in equal access to opportunities and resources for those who might be otherwise excluded or marginalized.</p>
  </div>
  </div>
  </div>
  </div>
  )
}

export default About