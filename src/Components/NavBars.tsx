
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { NavLink } from 'react-router';
import "../Components/Navbars.css";
import cicon from "../assets/Images/EXP1.png";

// interface NavbarProps{
//    imageSrc:string
// }
function NavBars(){
   const [cola,setCol]=useState(false)
    
        const menues=[{path:"/",names:"Home"},

        {path:"/course",names:"Courses"},

        {path:"/service",names:"Services"},
        {path:"/contact",names:"Contact"},
        {path:"/sign",names:"Sign-in"},
        {path:"/login",names:"Login"}
    ]

    return(
          <>
          <div className='container-fluid fixed-top'>
          
          <div className="d-flex bd-highlight top-wrapper fixed">
      <div className="flex-fill p-2 bd-highlight">
      <span className="px-2"><i className="bi bi-telephone"></i>250787124101</span>
      <span><i className="bi bi-envelope"></i>info@exceptionaltech.rw</span>
      </div>
    
   
   <span className="downloadIncon"><i className="bi bi-download px-2"></i>Download</span>
  </div>
       
          <nav className="navbar navbar-expand-lg nav-bar-bg-color ">
       <div className="container-fluid">
         <NavLink className="navbar-brand" to={`/`}>
          <img src={cicon} className='image-size'/>  
         </NavLink> 
         <button onClick={()=>setCol(!cola)} className="navbar-toggler btn btn-outline-success" type="button" data-bs-toggle="collapse"  aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon "></span>
         </button>
         <div className={`navbar-collapse ${cola ?"collapse":""}`}>
           <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
             {
               menues.map((item)=>
               <li className="nav-item">
                   <NavLink className={({isActive})=>  `nav-link text-dec ${isActive? "myActive":"nav-link"}`} aria-current="page" to={item.path}>{item.names}</NavLink>
                </li>   
               )
             }
           
           </ul>
           <form className="d-flex" role="search">
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
             <button className="btn btn-success" type="submit">Search</button>
           </form>
         </div>
       </div>
     </nav>


          </div>
        
      </>

    )
}


export default NavBars