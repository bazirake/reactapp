import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router';
import { decrypt } from './data/Encrypt';
import api from './data/axiosClient';
import { UserProfile } from './data/Registerobject';
function Profile() {
const[userinfo,setUser]=useState<UserProfile>({emails:'',country:'',tel:'',usertype:'',password:'',fname:''});
const Navigates=useNavigate();
const {emails}=useParams();
const emd=decodeURIComponent(decrypt(emails ?? ""));
      useEffect(()=>{
        const userss=async()=>{
        const res=await api.get(`getusercourse/eric.bazirake@abr.rw`,{
        withCredentials:true
     });
     setUser((prevdata)=>({prevdata,emails:res.data[0].emails,country:res.data[0].country,tel:res.data[0].tel,usertype:res.data[0].usertype,fname:res.data[0].fname,password:res.data[0].passwords}))
     console.log("dddddd",res.data)
   }

     userss();
    
  },[]);

  console.log("gggggg",userinfo);

  return(
     <div className="container py-5 mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card ">
          <div className="card-body">
            <h4 className="card-title mb-1 text-center">User Profile</h4>
            <p className="text-muted mb-3 text-center">Software Developer</p>
             <form>
                <div className='container'>
                    <div className='row'>
                        <div className='mb-1'>
                            <label className='form-label'>Role</label>
                            <input className="form-control" value={userinfo.usertype} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='mb-1'>
                            <label className='form-label'>Email</label>
                            <input className="form-control" value={userinfo.emails} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='mb-1'>
                            <label className='form-label'>Tel</label>
                            <input className="form-control"  value={userinfo.tel}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='mb-1'>
                            <label className='form-label'>Fullnames</label>
                            <input className="form-control"  value={userinfo.fname}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='mb-1'>
                            <label className='form-label'>Password</label>
                            <input className="form-control" value={userinfo.password} />
                        </div>
                     </div>
                       <div className='row'>
                        <div className='mb-1'>
                            <label className='form-label'>Country</label>
                            <input className="form-control"  value={userinfo.country}/>
                        </div>
                    </div>
                </div>
             </form>
            <div className="d-flex justify-content-around">
                <button>Edit Profile</button>
                <button>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile