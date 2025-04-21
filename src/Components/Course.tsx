import 'bootstrap/dist/css/bootstrap.min.css';
import "./course.css";
import Tabs from './Tabs';
import { useState } from 'react';

function Course() {

  const[allcourseStatw,setAllCoursew]=useState(false);


  function ShowAllWebCourse(){
   setAllCoursew((item)=>!item)
  }

    const tabData = [
        {
          label: 'Web Development',
          content:
          <div className='container'>
          <div className='row'>
         <div className='col-lg-3 col-md-4'>

         <div className="card " style={{width: "18rem"}}>
          <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fw-bolder ">Introduction to Html</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Join for Free</a>
          </div>
        </div>
         </div>
          
         <div className='col-lg-3 col-md-4'>

<div className="card " style={{width: "18rem"}}>
 <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title fw-bolder ">Intermediate Html</h5>
   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <a href="#" className="btn btn-primary">Join for Free</a>
 </div>
</div>
</div>

<div className='col-lg-3 col-md-4'>

<div className="card " style={{width: "18rem"}}>
 <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title fw-bolder">Advanced Html</h5>
   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <a href="#" className="btn btn-primary">Join for Free</a>
 </div>
</div>
</div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
          <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fw-bolder">Introduction to vanilla css</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Join for Free</a>
          </div>
        </div>
          </div>

          {
            allcourseStatw &&
              (

    
    <div className='container'>

<div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder ">Intermediate vanilla css</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder ">Advanced vanilla css</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Introduction to Bootstrap</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Intermediate Bootstrap</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
          </div>


          <div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder ">Advanced Bootstrap</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder ">Introduction to Tailwind CSS </h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Intermediate Tailwind CSS</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Advanced Tailwind CSS</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
          </div>

      </div>
          )
          }

          <div>
            <button className='btn btn-outline-success my-4' onClick={ShowAllWebCourse}>Show all Web Development courses</button>
          </div>
          </div>,
        },
        {
          label: 'Mobile App development',
          content: <div>Mobile development</div>,
        },
        {
          label:'System Design',
          content: <div>System Design</div>,
        },

        {
          label:'Database Administration ',
          content: <div>Database Administration</div>,
        }
      ];

   


 return (
  <div className='container container-mt'>
  <div>
   <h2 className='ext-header'>All the skills you need in one place with ExTech</h2>  
  <div className='ext-text'>From theoretical skills to hands on skills, ExTech supports your professional development.</div>
 <Tabs tabs={tabData}/> 
 </div>   
  </div>
  
   )
   }

export default Course