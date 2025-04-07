
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import imageb from "../assets/Images/bannerb.jpg";
import { GoogleAds } from "./GoogleAds";
import { useState } from "react";
export default function Home() {
  const [stat,setstat]=useState(0)
 const mens=[{name:"Become Software Eng",path:"developer",icons:"bi bi-person-rolodex"},{name:"Get Business Software",path:"business",icons:"bi bi-database-fill"}
  ,{name:"Meet Software Engineers",path:"level",icons:"bi bi-people-fill"}]
  return <>
       <div className="container-fluid ">
        <div className="row mb-1">
   
        <ul className="list-group clearfix d-flex career justify-content-center list-group-horizontal round-career ">
          {
             mens.map((item,index)=>
              <li key={index} onClick={()=>setstat(index)} className= {`list-group-item rounded-c ${stat==index ? "active-b":"list-group-item"}`} >
                 <i className={item.icons}></i>{item.name}
              </li>
            )
          }

        </ul>
        </div>
        <div className="row g-0">
          <div className="col-md-2 ">
          <div className="">
          <div className="card">
      <span className="card-title card-title-color  text-white text-center">Who we are?</span>
      <div className="card-body text-center">
      <p className="font-weight-card">The Exeptional Tech Company , is a Company which provides a high-quality software training
      <span className="text-center">
          <br/>
        <i>and</i>
      </span> <br/>
      Software development services to help individuals and businesses to Simplify Heavy daily Tasks performed.</p>
        </div>
        </div>

    <div className="card">
      <span className="card-title text-white text-center card-title-color">Our Services</span>
      <div className="card-body my-card-body">
      <ul className="card-text font-weight-card">
        <li className="bi bi-check">Software Development Training</li>
        <li className="bi bi-check">Web & Mobile App Development</li>
        <li className="bi bi-check">Custom Software Solutions</li>
    </ul>
      </div>
        </div>

        <div className="card">
      
         <GoogleAds/>
   
        </div>
        </div>
       </div>
          <div className="col text-center back-image">
           <a href="#" className="btn btn-secondary joins">
              <i className="bi bi-arrow-right"></i>
                Join Us
            </a>
          </div>
        </div> 
</div>
<div  className="container-fluid">
   <div className="row text-center background-row">
   <span className="font-wei rounded"> Do you want to become a professional software developer? Click on become button to meet  with our Software Engineers</span>
 
   </div>
    <div className="row">
    <div className="col-md-3">
    <div className="card">
      <span className="card-title text-white text-center card-title-color">Trainee</span>
      <div className="card-body text-center font-weight-card">
      <p className="">
        This level in the software developer’s ladder of progression is the first of the two missing entries in the list.
        As the name implies, trainees are neophytes in software development and are still learning to ply their trade.
        Trainees are, often, students of some level with a focus on computer science and software engineering. 
      </p>
      < a className="btn btn-outline-success w-75"> <i className="bi bi-arrow-return-right"></i> Become</a>
        </div>
        </div>
    </div>

    <div className="col-md-3">
    <div className="card">
      <span className="card-title card-title-color text-white text-center">Junior Developer</span>
      <div className="card-body font-weight-card text-center">
      <p className="card-text">
      Junior-level developers are often interchangeable with trainee-level developers due to their more basic knowledge
       of the subject matter. The main difference between the two is that junior-level developers have a modicum of
        work experience under their belts and have learned from their trainee phase. 
      </p>
       <a className="btn btn-outline-success w-75"><i className="bi bi-arrow-return-right"></i> Become</a>
        </div>
      </div>
    </div>

    <div className="col-md-3">
    <div className="card">
      <span className="card-title card-title-color text-white text-center">Middle Developer</span>
      <div className="card-body font-weight-card text-center">
      <p className="card-text">
       Colloquially referred to as the “workhorses of the programming world,” mid-level developers are traditionally 
       junior-level developers that have worked in a professional capacity for at least two to three years. 
       Mid-level developers generally have enough experience to complete projects independently.
      </p>
      < a className="btn btn-outline-success w-75"><i className="bi bi-arrow-return-right"></i>Become</a>
        </div>
        </div>
    </div>
    <div className="col-md-3">
    <div className="card">
      <span className="card-title card-title-color text-white text-center">Senior Developer</span>
      <div className="card-body font-weight-card text-center">
       <p className="card-text">
       Senior developers are the top-tier frontline developers in the field. Having worked in the field for several years, 
       they are essentially
       mentors and overseers of lower-level developers. They are also the developers that can offer their
       expertise toward the marketing and
        business transactions of the company.
       </p>
        < a className="btn btn-outline-success w-75"><i className="bi bi-arrow-return-right"></i>Become</a>
        </div>
        </div>
    </div>
    </div>
   
    <div className="row stats">
          <ul className="d-flex  justify-content-center">
            <li>
              <span><i className="bi bi-laptop px-1"></i>2</span> Softwares delivered</li>
              <li> <span><i className="bi bi-person"></i>10</span>Learners</li>
              <li>
              <span><i className="bi bi-map px-1"></i>2</span>Countries </li>
              </ul>
     
      </div>
      <div className="row explorediv">
      <h2  className="font-sizee text-center">Explore <span className="fix-comma">4</span>+ Free <span className="hide-on-mobile">Online</span>Training</h2>
        <ul className="d-flex flex-row justify-content-center">
          <li >
            <i className="bi bi-database"></i>
           <a > <h4>Database</h4> <span className="second-tex">
            Training</span>
            <br/>
            <span className="gets">Get<i className="bi bi-arrow-right"></i></span>
            </a> 
          </li>
          <li>
            <i className="bi bi-recycle"></i>
          <a> <h4>Api</h4> 
          <span>Development</span></a> 
          <br/>
          <span className="gets">Get<i className="bi bi-arrow-right"></i></span>
          </li>
          <li>
            <i className="bi bi-tags"></i>
           <a><h4>Front-end</h4>
           <span>Development</span>
           <br/>
           <span className="gets">Get<i className="bi bi-arrow-right"></i></span>
           </a> 
           
          </li>
          <li>
          <a>
          <i className="bi bi-box-arrow-right"></i>
            <h4>Api</h4> 
          <span>Integration</span>
          <br/>
          <span className="gets">Get<i className="bi bi-arrow-right"></i></span>
          </a>  
          </li>


          <li>
          <a>
          <i className="bi bi-arrow-left-right"></i>
            <h4>Fullstack</h4> 
          <span>Development</span>
          <br/>
          <span className="gets">Get<i className="bi bi-arrow-right"></i></span>
          </a>  
          </li>
        </ul>
      </div>

      <div className="d-flex flex-row justify-content-center">
      
      <div  className="justify-content-center">
        <figure >
          <img decoding="async" width="144" height="119" src="https://kingslanduniversity.com/wp-content/uploads/2020/02/Folder-2-copy.jpg" className="attachment-full size-full" alt=""/>
        </figure>
        <div className="elementor-image-box-content">
          <h3 className="elementor-image-box-title">Future Proof Your Skills</h3>
          <p className="elementor-image-box-description">Gain access to the most in-demand career fields.</p>
      </div>
      </div>


         <div>
         <figure >
          <img loading="lazy" decoding="async" width="168" height="111" src="https://kingslanduniversity.com/wp-content/uploads/2020/02/Folder-2-4-1.png" className="attachment-full size-full" alt="Online Full Stack Developer School"/>
        </figure>
        <div className="elementor-image-box-content">
          <h3 className="elementor-image-box-title">No Financial Obstacles</h3>
          <p className="elementor-image-box-description">We offer  students personalized financing options, including 100% financing. </p>
          </div>
          </div>


          <div>
            <figure>
              <img loading="lazy" decoding="async" width="121" height="121" src="https://kingslanduniversity.com/wp-content/uploads/2020/02/Folder-2-3-1.png" className="attachment-full size-full" alt=""  sizes="auto, (max-width: 121px) 100vw, 121px"/>
              </figure>
             <div className="elementor-image-box-content">
              <h3 className="elementor-image-box-title">Career Services</h3>
              <p className="elementor-image-box-description">Full support to ensure  career success.</p>
           </div>
           </div>
      </div>

</div>
  </>
}

