import React from 'react'
import "./about.css"

function About() {
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
         
          <img  src='https://shoptechgallery.com/wp-content/uploads/2023/01/lane-technology-2022-4.jpg'/>
         
         
        </div>
      </div>



    </div>
  )
}

export default About