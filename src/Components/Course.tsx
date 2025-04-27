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
            <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling lost in coding courses? This course fills the gaps beginners face—tools,
               concepts, and how programming works.</p>
            <button className="btn btn-primary">Join for Free</button>
          </div>
        </div>
         </div>
          
         <div className='col-lg-3 col-md-4'>

<div className="card " style={{width: "18rem"}}>
 <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title fw-bolder "> Html for learner Intermediate</h5>
   <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps intermediate learners face—tools,
               concepts, and how html works.</p>
               <button className="btn btn-primary">Join for Free</button>
 </div>
</div>
</div>

<div className='col-lg-3 col-md-4'>

<div className="card " style={{width: "18rem"}}>
 <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title fw-bolder">Html for Advanced learner</h5>
   <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Advanced learners face—tools,
              concepts,and how html works.</p>
              <button className="btn btn-primary">Join for Free</button>
 </div>
</div>
</div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
          <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title fw-bolder">Introduction to vanilla css</h5>
            <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps beginners face—tools,
              concepts,and how css works.</p>
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
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
                  Feeling in coding courses? This course fills the gaps intermediate learners face—tools,
                  concepts,and how vanilla css works.</p>
                  <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder ">Advanced vanilla css</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Advanced learners face—tools,
              concepts,and how vanilla css works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Introduction to Bootstrap</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps beginners face—tools,
              concepts,and how bootstrap works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Intermediate Bootstrap</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
                  Feeling in coding courses? This course fills the gaps intermediate learners face—tools,
                  concepts,and how bootstrap works.</p>
                  <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
          </div>


          <div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder ">Advanced Bootstrap</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Advanced learners face—tools,
              concepts,and how bootstrap works.</p>
              <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder ">Introduction to Tailwind CSS </h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps beginners face—tools,
              concepts,and how Tailwind css works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Intermediate Tailwind CSS</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps intermediate learners face—tools,
              concepts,and how Tailwind css works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Advanced Tailwind CSS</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Advanced learners face—tools,
              concepts,and how Tailwind css works.</p>
              <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
          </div>

          <div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder ">Introduction to vanilla Javascript</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps beginners face—tools,
              concepts,and how vanilla Javascript works.</p>
              <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
              </div>

      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder ">Intermediate vanilla Javascript </h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Intermediate learners face—tools,
              concepts,and how vanilla Javascript works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width:"18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Advanced vanilla Javascript</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Advanced learners face—tools,
              concepts,and how vanilla Javascript works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Introduction to jQuery</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps beginners face—tools,
              concepts,and how jQuery works.</p>
              <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
          </div>

          <div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder ">Introduction to Typescript</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps beginners learners face—tools,
              concepts,and how Typescript works.</p>
              <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Intermediate Typescript </h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps intermediate learners face—tools,
              concepts,and how Typescript works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Advanced Typescript</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Advanced learners face—tools,
              concepts,and how Typescript works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Introduction to ReactTs</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps beginners face—tools,
              concepts,and how ReactTs works.</p>
              <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
          </div>


          <div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder ">Html+Javascript+css full course</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM">
                   Feeling in coding courses? This course will help the learners to get hands on skills in project development.</p>
                   <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder ">Intermediate ReactTs </h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Intermediate learners face—tools,
              concepts,and how ReactTs works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Advanced ReactTs</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Advanced learners face—tools,
              concepts,and how ReactTs works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
                <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
                 <div className="card-body">
                 <h5 className="card-title fw-bolder">Introduction to Php</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM">
                  Feeling in coding courses? This course fills the gaps beginners face—tools,
                  concepts,and how Php works.</p>
                  <button className="btn btn-primary">Join for Free</button>
               </div>
        </div>
        </div>

          <div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder ">Intermediate Php</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Intermediate learners face—tools,
              concepts,and how Php works.</p>
              <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Advanced Php </h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Advanced learners face—tools,
              concepts,and how Php works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Html+css+Javascript+Php</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course will help the Learners to get hands
               on practice in developing interactive System.</p>
               <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Introduction to Java</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Beginners face—tools,
              concepts,and how Java programming works.</p>
              <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
          </div>


          <div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder ">Intermediate Java</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Intermediate learners face—tools,
              concepts,and how Java programming works.</p>
              <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Advanced Java </h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Advanced learners face—tools,
              concepts,and how Java programming works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Introduction to NextJS</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps beginners face—tools,
              concepts,and how NextJs works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Intermediate NextJS</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Intermediate learners face—tools,
              concepts,and how NextJs works.</p>
              <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
          </div>


          <div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder ">Advanced NextJS</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Advanced learners face—tools,
              concepts,and how NextJs works.</p>
              <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> React+Api Integration </h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course will help the Learners to know to integrate api to front-end(ReactTs).</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">NextJS+Api Integration</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
        Feeling in coding courses? This course will help the Learners to know to integrate api to front-end(NextJS).</p>
        <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>

         <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
             <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title fw-bolder">Java+Api Integration</h5>
             <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
               Feeling in coding courses? This course will help the Learners to know to integrate api to front-end(Java).</p>
               <button className="btn btn-primary">Join for Free</button>
           </div>
         </div>
          </div>
         </div>
          )
          }
           <div>
            <button className='btn btn-outline-success my-4' onClick={ShowAllWebCourse}> {allcourseStatw ? "Show less Web development courses":"Show all Web development courses"}</button>
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
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Beginners face—tools,
              concepts,and how Mobile app development is done.</p>
              <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Intermediate Native Android app in Java or  Kotlin </h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Intermediate Learners face—tools,
              concepts,and how Mobile app development is done.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Advanced Native Android app in Java or  Kotlin</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Advanced Learners face—tools,
              concepts,and how Mobile app development is done.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
             <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
             <div className="card-body">
             <h5 className="card-title fw-bolder">Introduction to Native iOS app in Swift or Objective-C</h5>
             <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Beginners face—tools,
              concepts,and how Mobile app development is done.</p>
              <button className="btn btn-primary">Join for Free</button>
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
       <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Beginners face—tools,
              concepts,and how Mobile app development is done.</p>
              <button className="btn btn-primary">Join for Free</button>
     </div>
   </div>
    </div>
<div className='col-lg-3 col-md-4'>
<div className="card " style={{width: "18rem"}}>
<img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title fw-bolder "> Intermediate Mobile app Cross-platform in React Native or Flutter</h5>
<p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Intermediate face—tools,
              concepts,and how Mobile app development is done.</p>
              <button className="btn btn-primary">Join for Free</button>
</div>
</div>
</div>

<div className='col-lg-3 col-md-4'>
<div className="card " style={{width: "18rem"}}>
<img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title fw-bolder">Advanced Mobile app Cross-platform in React Native or Flutter </h5>
<p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Advanced Learners face—tools,
              concepts,and how Mobile app development is done.</p>
              <button className="btn btn-primary">Join for Free</button>
</div>
</div>
</div>

<div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
   <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
   <div className="card-body">
   <h5 className="card-title fw-bolder"> Mobile app Hosting</h5>
   <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in Hosting courses? This course fills the gaps developers face when trying to host the project,
              </p>
              <button className="btn btn-primary">Join for Free</button>
     </div>
  </div>
</div>
  <div className='row'>
  <div className='col-lg-3 col-md-4'>
   <div className="card " style={{width: "18rem"}}>
   <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
   <div className="card-body">
     <h5 className="card-title fw-bolder ">Intermediate Native iOS app in Swift or Objective-C</h5>
     <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Intermediate Learners face—tools,
              concepts,and how Mobile app development is done.</p>
              <button className="btn btn-primary">Join for Free</button>
   </div>
 </div>
  </div>
<div className='col-lg-3 col-md-4'>
<div className="card " style={{width: "18rem"}}>
<img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title fw-bolder "> Advanced Native iOS app in Swift or Objective-C </h5>
<p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Advanced Learners face—tools,
              concepts,and how Mobile app development is done.</p>
              <button className="btn btn-primary">Join for Free</button>
</div>
</div>
</div>

<div className='col-lg-3 col-md-4'>
<div className="card " style={{width: "18rem"}}>
<img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title fw-bolder">Intermediate Mobile Web app </h5>
<p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Intermediate Learners face—tools,
              concepts,and how Mobile app development is done.</p>
              <button className="btn btn-primary">Join for Free</button>
</div>
</div>
</div>

<div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
 <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
 <div className="card-body">
 <h5 className="card-title fw-bolder">Advanced Mobile Web app</h5>
 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in coding courses? This course fills the gaps Advanced Learners face—tools,
              concepts,and how Mobile app development is done.</p>
              <button className="btn btn-primary">Join for Free</button>
   </div>
 </div>
</div>
</div>

    )
   }
    <div>
   <button className='btn btn-outline-success my-4' onClick={ShowAllMoCourse}>{allcourseStatmo ? "Show less Mobile App Development courses" :"Show all Mobile App Development courses"}</button>
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
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in mysql workbench courses? This course fills the gaps Beginners face—tools,
              concepts,and how mysql workbench works.</p>
              <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Intermediate mysql workbench </h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in mysql workbench courses? This course fills the gaps Intermediate face—tools,
              concepts,and how mysql workbench works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Advanced mysql workbench</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in mysql workbench courses? This course fills the Advanced Learners face—tools,
              concepts,and how mysql workbench works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Introduction to Figma Design tool</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in Figma Design tool courses? This course fills the gaps Beginners face—tools,
              concepts,and how Figma Design tool works.</p>
              <button className="btn btn-primary">Join for Free</button>
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
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in Figma Design tool courses? This course fills the gaps Intermediate Learners face—tools,
              concepts,and how Figma Design tool works.</p>
              <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Advanced Figma Design tool </h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in Figma Design tool courses? This course fills the gaps Advanced Learners face—tools,
              concepts,and how Figma Design tool works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Intermediate EdrawMax</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in EdrawMax Design tool courses? This course fills the gaps beginners face—tools,
              concepts,and how EdrawMax Design tool works.</p>
              <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Advanced EdrawMax</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
              Feeling in EdrawMax Design tool courses? This course fills the gaps Advanced face—tools,
              concepts,and how EdrawMax Design tool works.</p>
              <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
             </div>
            </div>
              )
            }
              <div className=' mx-auto justify-content-center'>
              <button className='btn btn-outline-success my-4' onClick={ShowAllMoCourseDes}>{allcourseStatDes ? "Show less System design courses" :"Show more System design courses"}</button>
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
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
                 Feeling in Sql database courses? This course fills the gaps beginners face—tools,
                 concepts,and how Sql database works.</p>
                 <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Intermediate SQL Database </h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
                 Feeling in Sql database courses? This course fills the gaps Intermediate face—tools,
                 concepts,and how Sql database works.</p>
                 <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Advanced SQL Database</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
                 Feeling in Sql database courses? This course fills the gaps Advanced face—tools,
                 concepts,and how Sql database works.</p>
                 <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Introduction to Postgresql</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
                 Feeling in Postgresql courses? This course fills the gaps beginners face—tools,
                 concepts,and how Postgresql works.</p>
                 <button className="btn btn-primary">Join for Free</button>
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
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
                 Feeling in Postgresql courses? This course fills the gaps Intermediate face—tools,
                 concepts,and how Postgresql works.</p>
                 <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder "> Advanced Postgresql</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
                 Feeling in Postgresql courses? This course fills the gaps Advanced face—tools,
                 concepts,and how Postgresql works.</p>
                 <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Introduction+Intermediate Mysql</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
                 Feeling in Mysql courses? This course fills the gaps Learners face—tools,
                 concepts,and how Mysql works.</p>
                 <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title fw-bolder">Advanced Mysql</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
                 Feeling in Mysql courses? This course fills the gaps Advanced Learners face—tools,
                 concepts,and how Mysql works.</p>
                 <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
          </div>

            )
          }
          <div>
            <button className='btn btn-outline-success my-4' onClick={ShowAllDbCourse}>{allcourseStatd ? "Show less Database Administration courses":"Show all Database Administration courses"}</button>
          </div>
          
          </div>,
        },
        {
          label:'Api development',
          content:<div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-4'>
               <div className="card " style={{width: "18rem"}}>
                <img src="https://img-c.udemycdn.com/course/750x422/1209872_d9d4.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                 <h5 className="card-title fw-bolder ">Introduction to  Api development in Php</h5>
                 <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
                 Feeling in Api development courses? This course fills the gaps Beginners face—tools,
                 concepts,and how Api development  works.</p>
                 <button className="btn btn-primary">Join for Free</button>
               </div>
             </div>
              </div>
      <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/750x422/1209872_d9d4.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder ">Advanced Api development in Php</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
                 Feeling in Api development courses? This course fills the gaps Advanced Learners face—tools,
                 concepts,and how Api development  works. </p>
                 <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>
     
     <div className='col-lg-3 col-md-4'>
     <div className="card " style={{width: "18rem"}}>
      <img src="https://img-c.udemycdn.com/course/750x422/1209872_d9d4.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">Introduction to Api development in C#</h5>
        <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
                 Feeling in Api development courses? This course fills the gaps beginners face—tools,
                 concepts,and how Api development  works. </p>
                 <button className="btn btn-primary">Join for Free</button>
      </div>
     </div>
     </div>

        <div className="card col-lg-3 col-md-4" style={{width: "18rem"}}>
               <img src="https://img-c.udemycdn.com/course/750x422/1209872_d9d4.jpg" className="card-img-top" alt="..."/>
             <div className="card-body single-course-unit_main-content____XkX">
                <h5 className="card-title fw-bolder">Advanced Api development in C#</h5>
                <p className="ext-text-sm single-course-unit_course-headline__sKuVM" >
                 Feeling in Api development courses? This course fills the gaps Advanced Learners face—tools,
                 concepts,and how Api development  works. </p>
                 
                 <button className="btn btn-primary">Join for Free</button>
             </div>
        </div>
        </div>
        </div>
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