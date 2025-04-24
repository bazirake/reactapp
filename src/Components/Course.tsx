import 'bootstrap/dist/css/bootstrap.min.css';
import "./course.css";
import Tabs from './Tabs';
import { useState } from 'react';

function Course() {

  const[allcourseStatw,setAllCoursew]=useState(false);

  const[allcourseStatd,setAllCoursed]=useState(false);
  const[allcourseStatmo,setAllCourseMo]=useState(false);
  const[allcourseStatDes,setAllCourseDes]=useState(false);
  function ShowAllWebCourse(){
   setAllCoursew((item)=>!item)
  }

    function ShowAllDbCourse(){
      setAllCoursed((item)=>!item)
    }

    function ShowAllMoCourse(){
      setAllCourseMo((item)=>!item)
    }

   function ShowAllMoCourseDes(){
      setAllCourseDes((item)=>!item)
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

          <div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder ">Introduction to vanilla Javascript</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
              </div>

      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder ">Intermediate vanilla Javascript </h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width:"18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Advanced vanilla Javascript</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Introduction to jQuery</h5>
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
                 <h5 className="card-title fw-bolder ">Introduction to Typescript</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Intermediate Typescript </h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Advanced Typescript</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Introduction to ReactTs</h5>
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
                 <h5 className="card-title fw-bolder ">Html+Javascript+css full course</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Intermediate ReactTs </h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Advanced ReactTs</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>

           <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
                <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
                 <div className="card-body">
                 <h5 className="card-title fw-bolder">Introduction to Php</h5>
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
                 <h5 className="card-title fw-bolder ">Intermediate Php</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Advanced Php </h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Html+css+Javascript+Php</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Introduction to Java</h5>
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
                 <h5 className="card-title fw-bolder ">Intermediate Java</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Advanced Java </h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Introduction to NextJS</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Intermediate NextJS</h5>
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
                 <h5 className="card-title fw-bolder ">Advanced NextJS</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> React+Api Integration </h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">NextJS+Api Integration</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
             <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
             <div className="card-body">
             <h5 className="card-title fw-bolder">Java+Api Integration</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
          </div>
      </div>
          )
          }
           <div>
            <button className='btn btn-outline-success my-4' onClick={ShowAllWebCourse}>Show all Database design courses</button>
          </div>

          
          </div>,
        },
        {
          label: 'Mobile App development',
          content:
           <div className='container'>
            
            <div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder ">Introduction to Native Android app in Java or  Kotlin</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Intermediate Native Android app in Java or  Kotlin </h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Advanced Native Android app in Java or  Kotlin</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
             <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
             <div className="card-body">
             <h5 className="card-title fw-bolder">Introduction to Native iOS app in Swift or Objective-C</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
          </div>

        
   {
    allcourseStatmo &&(
    <div className='container'>
    <div className='row'>
    <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
     <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
     <div className="card-body">
       <h5 className="card-title fw-bolder ">Introduction to Mobile app Cross-platform in React Native or Flutter</h5>
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" className="btn btn-primary">Join for Free</a>
     </div>
   </div>
    </div>
<div className='col-lg-3 col-md-4'>
<div className="card " style={{width: "18rem"}}>
<img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title fw-bolder "> Intermediate Mobile app Cross-platform in React Native or Flutter</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" className="btn btn-primary">Join for Free</a>
</div>
</div>
</div>

<div className='col-lg-3 col-md-4'>
<div className="card " style={{width: "18rem"}}>
<img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title fw-bolder">Advanced Mobile app Cross-platform in React Native or Flutter </h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" className="btn btn-primary">Join for Free</a>
</div>
</div>
</div>

<div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
   <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
   <div className="card-body">
   <h5 className="card-title fw-bolder"> Mobile app Hosting</h5>
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
     <h5 className="card-title fw-bolder ">Intermediate Native iOS app in Swift or Objective-C</h5>
     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="#" className="btn btn-primary">Join for Free</a>
   </div>
 </div>
  </div>
<div className='col-lg-3 col-md-4'>
<div className="card " style={{width: "18rem"}}>
<img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title fw-bolder "> Advanced Native iOS app in Swift or Objective-C </h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" className="btn btn-primary">Join for Free</a>
</div>
</div>
</div>

<div className='col-lg-3 col-md-4'>
<div className="card " style={{width: "18rem"}}>
<img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title fw-bolder">Intermediate Mobile Web app </h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" className="btn btn-primary">Join for Free</a>
</div>
</div>
</div>

<div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
 <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
 <div className="card-body">
 <h5 className="card-title fw-bolder">Advanced Mobile Web app</h5>
   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <a href="#" className="btn btn-primary">Join for Free</a>
   </div>
 </div>
</div>
</div>

    )
   }
          <div>
            <button className='btn btn-outline-success my-4' onClick={ShowAllMoCourse}>Show all Mobile App Development courses</button>
          </div>
           </div>,
        },
        {
          label:'System Design',
          content: <div className='container'>
              <div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder ">Introduction to mysql workbench</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Intermediate mysql workbench </h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Advanced mysql workbench</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Introduction to Figma Design tool</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
          </div>


            {
               allcourseStatDes  && (
               <div className='container'>
              <div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder ">Intermediate Figma Design tool</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Advanced Figma Design tool </h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Intermediate EdrawMax</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Advanced EdrawMax</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
             </div>
            </div>
              )
              
            }
                <div>
              <button className='btn btn-outline-success my-4' onClick={ShowAllMoCourseDes}>Show all System design courses</button>
            </div>
        
            </div>,
        },

        {
          label:'Database Administration ',
          content:<div className='container'>
          
          <div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder ">Introduction to SQL Database</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Intermediate SQL Database </h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Advanced SQL Database</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Introduction to Postgresql</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
          </div>

          {
            allcourseStatd&&(
              <div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder ">Intermediate Postgresql</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Advanced Postgresql</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Introduction+Intermediate Mysql</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Join for Free</a>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Advanced Mysql</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Join for Free</a>
               </div>
             </div>
          </div>

            )
          }
          <div>
            <button className='btn btn-outline-success my-4' onClick={ShowAllDbCourse}>Show all Database design courses</button>
          </div>
          
          </div>,
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