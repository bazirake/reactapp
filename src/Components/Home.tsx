
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import { useState } from "react";
export default function Home() {
  const [stat,setstat]=useState(0)
 const mens=[{name:"Become Software Developer",path:"developer",icons:"bi bi-person-rolodex"},{name:"Get Business Software",path:"business",icons:"bi bi-database-fill"}
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
        <div className="row">
          <div className="col-md-2 ">
          <div className="">
          <div className="card">
      <h4 className="card-title bg-success text-white text-center">Who we are?</h4>
      <div className="card-body text-center">
      <p className=""><b>The Exeptional Tech Company , is a Company which provides a high-quality software training</b> 
      <span className="text-center">
          <br/>
        <i>and</i>
      </span> <br/>
      Software development services to help individuals and businesses to Simplify Heavy daily Tasks performed.</p>
        </div>
        </div>

    <div className="card">
      <h4 className="card-title bg-success text-white text-center">Our Services</h4>
      <div className="card-body">
      <ul className="card-text">
        <li>Software Development Training</li>
        <li>Web & Mobile App Development</li>
        <li>Custom Software Solutions</li>
    </ul>
      </div>
        </div>
        </div>
       </div>

          <div className="col text-center back-image">

          <a href="#" className="btn btn-success joins">
             <i className="bi bi-arrow-right"></i>
            Join Us
           </a>
          </div>
        </div> 
</div>
<div  className="container-fluid">
   <div className="row ">
    <p className="text-center fw-bolder col-md-12 py-1">Do you want to become a professional software developer? Click on become button to meet  with our Software Engineers
    <i className=" ml-2 px-2 text-primary bi bi-hand-index"></i>
  
    </p>
   </div>
    <div className="row">
    <div className="col-md-3">
    <div className="card">
      <h4 className="card-title bg-success text-white text-center">Trainee</h4>
      <div className="card-body text-center">
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
      <h4 className="card-title bg-success text-white text-center">Junior Developer</h4>
      <div className="card-body text-center">
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
      <h4 className="card-title bg-success text-white text-center">Middle Developer</h4>
      <div className="card-body text-center">
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
      <h4 className="card-title bg-success text-white text-center">Senior Developer</h4>
      <div className="card-body text-center">
      <p className="card-text">
       Senior developers are the top-tier frontline developers in the field. Having worked in the field for several years, they are essentially
       mentors and overseers of lower-level developers. They are also the developers that can offer their expertise toward the marketing and
        business transactions of the company.
      </p>
      < a className="btn btn-outline-success w-75"><i className="bi bi-arrow-return-right"></i>Become</a>
        </div>
        </div>
    </div>
    </div>
</div>
  </>

}