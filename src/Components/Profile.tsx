import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router';
import { decrypt } from './data/Encrypt';
import api from './data/axiosClient';
import { UserProfile } from './data/Registerobject';
function Profile() {
const[userinfo,setUser]=useState<UserProfile>({emails:'',country:'',tel:'',usertype:'',password:'',fname:'',statuscode:''});
 const Navigates=useNavigate();
 const routepath=useLocation();
const {emails}=useParams();
const emd=decodeURIComponent(decrypt(emails ?? ""));
      useEffect(()=>{
        const userss=async()=>{
        const res=await api.get(`getusercourse/${emd}`,{
        withCredentials:true
     });
     setUser((prevdata)=>({prevdata,emails:res.data[0].emails,country:res.data[0].country,tel:res.data[0].tel,usertype:res.data[0].usertype,fname:res.data[0].fname,password:res.data[0].passwords,statuscode:res.statusText}))
     console.log("dddddd",res.data)
   }

     userss();
    
  },[]);

 const pathvvv=`viewp`;
 const pathupda=`udatep`;
  const pathreset=`resetp`;
 
  const viewpp=()=>{
      Navigates(`${routepath.pathname}/viewp`)
  }

  return(
     <div className="container  mt-5">
  <section style={{backgroundColor: "#eee"}}>
  <div className="container py-5">
    <div className="row">
      <div className="col">
        <nav  className="bg-body-tertiary rounded-3 p-3 mb-4">
          <ol className="breadcrumb mb-0">  
            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
          </ol>
        </nav>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              className="rounded-circle img-fluid" style={{width: "150px"}}/>
            <h5 className="my-3">{userinfo.fname}</h5>
            <p className="text-muted mb-1">{userinfo.usertype}</p>
            <p className="text-muted mb-4">{userinfo.emails}</p>
            <p className="text-muted mb-4">{userinfo.tel}</p>
            <div className="d-flex justify-content-center flex-column mb-2">
                 <ol className='navbar-nav'>
                  <li className="nav-item border mb-1 ">
                    <NavLink  to={pathvvv}>Viewprofile</NavLink>
                  </li>
                  <li className="nav-item border mb-1">
                    <NavLink to={pathupda}>Updateprofile</NavLink>
                  </li>
                   <li className="nav-item border">
                    <NavLink to={pathreset}>Resetpassword</NavLink>
                  </li>
                 </ol>
            </div>
          </div>
        </div>
    
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
           <Outlet/>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                </p>
                <p className="mb-1" style={{fontSize: ".77rem"}}>Web Design</p>
                <div className="progress rounded" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "80%"}} 
                    ></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Website Markup</p>
                <div className="progress rounded" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "72%"}} 
                    ></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>One Page</p>
                <div className="progress rounded" style={{height:"5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "89%"}} 
                    ></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Mobile Template</p>
                <div className="progress rounded" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "55%"}} 
                   ></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Backend API</p>
                <div className="progress rounded mb-2" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "66%"}} 
                   ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                </p>
                <p className="mb-1" style={{fontSize: ".77rem"}}>Web Design</p>
                <div className="progress rounded" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "80%"}} 
                    ></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Website Markup</p>
                <div className="progress rounded" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "72%"}} 
                  ></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>One Page</p>
                <div className="progress rounded" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "89% "}} ></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Mobile Template</p>
                <div className="progress rounded" style={{height:" 5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "55%"}} 
                   ></div>
                </div>
                <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>Backend API</p>
                <div className="progress rounded mb-2" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "66%"}} 
                    ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
  )
}

export default Profile