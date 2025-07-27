
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import "../Components/Navbars.css";
import cicon from "../assets/Images/EXP1.png";
import { LoginResp } from './data/Registerobject';
import api from './data/axiosClient';


function NavBars(){
   const [cola,setCol]=useState(false)
     const [loginpar,setLoginP]=useState<LoginResp>({id:'',cateid:'',contentid:'',fname:'',emails:'',usertype:'',country:''});
        const menues=[
        {path:"/",names:"Home"},
        {path:"/courses",names:"Course"},
        {path:"/service",names:"Service"},
        {path:"/contact",names:"Contact"},
        {path:"/about",names:"About us"},
        {path:"/login",names:"Login"}
    ]
 
   

   
     const logsession=localStorage.getItem("userin");
     const Logout=()=>{
        localStorage.removeItem("userin");
     }

    return(
          <>
      <div className='container-fluid fixed-top' style={{zIndex:"88"}}>
        <div className="top-wrapper fixed">
      <div>
        <ul className='topadd'>
          <li><i className="bi bi-telephone"></i>250787124101</li>
          <li><i className="bi bi-envelope"></i>info@exceptionaltech.rw</li>
          <li>23M7+249,KN123 St,Kigali,Rwanda</li>
        </ul>
    
      </div>
   
  </div>
          <nav className="navbar navbar-expand-lg nav-bar-bg-color ">
       <div className="container-fluid">
         <div className="navbar-brand" >
           ExTech
         </div> 
         <button onClick={()=>setCol(!cola)} className="navbar-toggler btn btn-outline-success" type="button" data-bs-toggle="collapse"  aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon "></span>
         </button>
         <div className={`navbar-collapse ${cola ? "collapse":"" }`}>
           <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
            {
              menues.map((item)=>
              <li className="nav-item">
                  <NavLink className={({isActive})=>`nav-link text-dec ${isActive ?"myActive":"nav-link"}`} aria-current="page" to={item.path}>{item.names}</NavLink>
              </li>   
               )
            }
              {logsession ? <li><button className='btn btn-color-service' onClick={Logout}>Logout</button></li>:null}
           </ul>
           <form className="d-flex" role="search">
             <input className="form-control me-2 searchf" type="search" placeholder="Search" aria-label="Search"/>
           </form>
         </div>
       </div>
     </nav>
          </div>
      </>
    )
}


export default NavBars