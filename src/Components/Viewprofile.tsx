import React, { useEffect, useState } from 'react'
import { UserProfile } from './data/Registerobject';
import { useLocation, useNavigate, useParams } from 'react-router';
import api from './data/axiosClient';
import { decrypt } from './data/Encrypt';

function Viewprofile() {
  
 const[userinfo,setUser]=useState<UserProfile>({emails:'',country:'',tel:'',usertype:'',password:'',fname:'',statuscode:''});
 const Navigates=useNavigate();
 const routepath=useLocation();
 const {emails}=useParams();
 const emd=decodeURIComponent(decrypt(emails ?? ""));
      useEffect(()=>{
        const userss=async()=>{
        const res=await api.get(`getusercourse/eric.bazirake@abr.rw`,{
        withCredentials:true
     });
     setUser((prevdata)=>({prevdata,emails:res.data[0].emails,country:res.data[0].country,tel:res.data[0].tel,usertype:res.data[0].usertype,fname:res.data[0].fname,password:res.data[0].passwords,statuscode:res.statusText}))
     console.log("dddddd",res.data)
   }

     userss();
    
  },[]);
  return (
   <div className="card-body">
    <h4 className='py-2 text-center'>View profile</h4>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Fullname</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userinfo.fname}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userinfo.emails}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userinfo.tel}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userinfo.tel}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Role</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userinfo.usertype}</p>
              </div>
            </div>
            <hr/>
             <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userinfo.country}</p>
              </div>
            </div>
          </div>
  )
}
export default Viewprofile