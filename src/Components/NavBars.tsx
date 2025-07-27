
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import "../Components/Navbars.css";
import cicon from "../assets/Images/EXP1.png";
import { LoginResp } from './data/Registerobject';
import api from './data/axiosClient';


function NavBars(){
   const [cola,setCol]=useState(false)
   const Navigate=useNavigate()
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
     const Logout= async()=>{
        try {
          const loout=await api.get("logout",{
            withCredentials:true
          });

          setLoginP({id:'',cateid:'',contentid:'',fname:'',emails:'',usertype:'',country:''});
         // console.log(loout.data.message);
         Navigate("/");

        } catch(error){
          
        }
     }
    
    useEffect(()=>{
      const getUser= async()=>{
       try{
           console.log("User info data");
           const resdata= await api.get("getinfo",{
           withCredentials:true
        });
          console.log("data hss",resdata.data);
          setLoginP((prevdata)=>({...prevdata,id:resdata.data.id,cateid:resdata.data.cateid,contentid:resdata.data.contid,fname:resdata.data.fname,
            emails:resdata.data.emails,usertype:resdata.data.usertype,country:resdata.data.country}));
        }catch (error:any){
         console.log("Error Response:", error.response?.data);
      }
    }
    const intervals=setInterval(()=>{
        getUser();

    },4000);
    getUser();
    return () => clearInterval(intervals);
     },[])
    
    console.log("welcome page",loginpar);

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

             {loginpar.emails.length> 1 && <li><button className="btn btn-sm btn-danger" title="Logout" onClick={Logout}>
                    Signout <i className="bi bi-box-arrow-right"></i>
                                        </button> <span className='border px-1'>{loginpar.usertype}</span> <span className='border px-1'>{loginpar.fname}</span> </li>}
             
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