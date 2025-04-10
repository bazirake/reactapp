
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import imageb from "../assets/Images/bannerb.jpg";
import Icons from "../assets/Images/HappyIcon.webp";
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

        <section id="hero" className="hello-container">
         <div className="row g-0 my-2">
              <div className="col-md-4">
                <div className="whole-hello-content">
                <div>
                    <h2 className="hero__title">Become a <span className="soft">Software Engineer</span> </h2>
                   </div>
                   <div className="Messages">
                    <p>
                        <span> Comprehensive training Programs for career Growth.</span> 
                         <span>
                         Creating an ecosystem to foster talent development in deep tech areas within Africa
                        </span>
                    </p>
                    <div className="mx-2">
                      <button  className="btn btn-success mt-2 ">Start Now<i className="bi bi-chevron-compact-right"></i></button>
                    </div>
                   </div>

                </div>
                 
              </div>
              <div className="col-md-8 img-container">
                <img src={Icons} className="back-imageh img-fluid w-100 rounded-pill" />
             </div>
         </div>
        </section>
        {/* <div className="row g-0">
        
          <div className="col text-center back-image">
           <a href="#" className="btn btn-secondary joins">
              <i className="bi bi-arrow-right"></i>
                Join Us
            </a>
          </div>
        </div>  */}


        <div className="row">
          <div className="d-flex flex-row gap-3">
          <div className="card ">
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

      <div className="profile-area">
      <div className="container">
        <div className="row">
           <div className="col-md-4">
            <div className="card">
              <div className="img2">
                <img src="https://kingslanduniversity.com/wp-content/uploads/2020/02/Folder-2-copy.jpg" alt="" />
              </div>
              <div className="main-text">
                <h2>Future Proof Your Skills</h2>
                <p>
                Gain access to the most in-demand career fields.
                   </p>
              </div>
              
            </div>
           </div>

           <div className="col-md-4">
            <div className="card">
              <div className="img2">
                <img src="https://kingslanduniversity.com/wp-content/uploads/2020/02/Folder-2-4-1.png" alt="" />
              </div>
              <div className="main-text">
                <h2>No Financial Obstacles</h2>
                <p>
                We offer students personalized financing options, including financing Negociation.
                </p>
              </div>
              
            </div>
           </div>


           <div className="col-md-4">
            <div className="card">
              <div className="img2">
                <img src="https://kingslanduniversity.com/wp-content/uploads/2020/02/Folder-2-3-1.png" alt="" />
              </div>
              <div className="main-text">
                <h2>Career Services</h2>
                <p>
                Full support to ensure career success.
                   </p>
              </div>
             
            </div>
           </div>

        </div>
      </div>
      </div>
        <section className="my-section">
        <div className="profile-programining">
          <div className="wrap-section">
            <span className="text-center-salary">$salary = i++</span> 
          <h4 className="time-heading">It's time to make a change.</h4> 
          <div>
          <p >
            <span>An education that’s future-proof doesn’t have to cost a fortune or take years to complete.</span>
            <span className="mypara">You can have a seat at the table, upward mobility, and an exciting position in a fast-growing industry.</span>
         </p>
         </div>
          </div>
       </div>
        </section>

       <section className="web-back">
       <div className="container-fluid">
          <div className="row g-0">
          <div className="col-md-6 ">
            <div className="contents">

            <div className="cta-header">
            <h2 className="elementor-heading-title">
             Discover an exciting career path in the tech industry
            </h2>
          </div> 
          <div className="elementor-text-editor elementor-clearfix">
          <ul className="cta-list">
            <li className="list-data">
              <i className="bi bi-check"></i>
              The latest data showing why now is the perfect time to join this lucrative &amp; growing field</li>
              <li className="list-data"> <i className="bi bi-check"></i>Why job security is better in this industry than almost any other</li>
          <li> <i className="bi bi-check"></i>How to get started with no financial obstacles and be career-ready in less than a year</li>
          </ul>
          </div>
            </div>
          
         
          
          </div>
          <div className="col-md-6 my-imagew">
            <div className="image-sizes">
            <img src="https://kingslanduniversity.com/wp-content/uploads/2020/12/Home-WebinarCTA-v2-1024x646.jpg" width="1024" height="646" />
            </div>
           </div>
        </div>
      </div>
      </section>
      
      
</div>
  </>
}

