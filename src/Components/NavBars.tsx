<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { NavLink } from 'react-router';
import "../Components/Navbars.css";

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

        <nav className="navbar navbar-expand-lg nav-bar-bg-color">
        <div className="container-fluid">
          <NavLink className="navbar-brand px-2" to={`/`}>
           <span className='icon-text-color'>E.Tech</span> <span className='icon-com-color'>Company</span> 
          </NavLink>
          <button onClick={()=>setCol(!cola)} className="navbar-toggler btn btn-outline-success" type="button" data-bs-toggle="collapse"  aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className={`navbar-collapse ${cola ?"collapse":""}`}>
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              {
                menues.map((item)=>
                <li className="nav-item">
                    <NavLink className={({isActive})=>  `nav-link nav-color-link ${isActive? "myActive":"nav-link"}`} aria-current="page" to={item.path}>{item.names}</NavLink>
                 </li>   
                )
              }
            
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    )
}

=======
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { NavLink } from 'react-router';
import "../Components/Navbars.css";

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

        <nav className="navbar navbar-expand-lg nav-bar-bg-color">
        <div className="container-fluid">
          <NavLink className="navbar-brand px-2" to={`/`}>
           <span className='icon-text-color'>E.Tech</span> <span className='icon-com-color'>Company</span> 
          </NavLink>
          <button onClick={()=>setCol(!cola)} className="navbar-toggler btn btn-outline-success" type="button" data-bs-toggle="collapse"  aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className={`navbar-collapse ${cola ?"collapse":""}`}>
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              {
                menues.map((item)=>
                <li className="nav-item">
                    <NavLink className={({isActive})=>  `nav-link nav-color-link ${isActive? "myActive":"nav-link"}`} aria-current="page" to={item.path}>{item.names}</NavLink>
                 </li>   
                )
              }
            
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    )
}

>>>>>>> 7367ed59 (first commit)
export default NavBars