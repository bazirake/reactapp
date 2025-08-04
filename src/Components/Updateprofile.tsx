import React, { useEffect, useState } from 'react'
import { updateUser, UserProfile, userupdateErr } from './data/Registerobject';
import { useNavigate, useLocation, useParams } from 'react-router';
import api from './data/axiosClient';
import { decrypt } from './data/Encrypt';

function Updateprofile() {
 const [userup,setUseru]=useState<updateUser>({emails:'',tel:'',country:'',usertype:'',fname:''});
 const[userinfo,setUser]=useState<UserProfile>({emails:'',country:'',tel:'',usertype:'',password:'',fname:'',statuscode:''});
 const [usererr,setUsererr]=useState<userupdateErr>()
 const [userfeed,setuserfeed]=useState();
 const [isloading,setLoading]=useState(false);
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
       setUseru((preccc)=>({...preccc,emails:res.data[0].emails,fname:res.data[0].fname,country:res.data[0].country,usertype:res.data[0].usertype,tel:res.data[0].tel}));
     console.log("dddddd",res.data)
   }

     userss();
    
  },[]);

    const validateForm=()=>
      {
        const phones= /^(\+250|0)?7[2-8]\d{7}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const errdata:userupdateErr={}
        if(userup.fname===''){
            errdata.fnameerr="fullname should not be empty";
        }
        if(userup.emails===''){
            errdata.emailerr="email should not be empty";
        }
        if(userup.country===''){
            errdata.addresserr="address should not be empty";
        }
         if(userup.usertype===''){
            errdata.roleerr="role should not be empty";
        }
        if(userup.tel===''){
            errdata.telerr="phone should not be empty";
        }
        if(!phones.test(userup.tel)){
            errdata.telerr="invalid phone number";
        }
        if(!emailRegex.test(userup.emails)){
            errdata.emailerr="invalid Email";
        }
        setUsererr(errdata);
       return Object.keys(errdata).length===0
     }

  return (
 <div className="container">
  <h4 className='py-2 text-center'>Updateprofile</h4>
  <form onSubmit={async (e)=>{
    e.preventDefault();

    if (validateForm()){
       setLoading(true)
      const res=await api.post("https://exapi-gjsy.onrender.com/updateuser",userup,{
        withCredentials:true
      });
       setuserfeed(res.data.message);
       setLoading(false);
      //console.log("updated",res.data.message)
      //alert(userup.res)
    }
  }}>
    <div className="mb-2">
      <label  className="form-label">Full Name</label>
      <input type="text" onChange={(e)=>setUseru((prevv)=>({...prevv,fname:e.target.value}))} className="form-control" id="fullname" value={userup.fname}/>
      {usererr && <span style={{color:"red",fontSize:"15px"}}>{usererr.fnameerr}</span>}
    </div>

    <div className="mb-2">
      <label  className="form-label">Email address</label>
      <input type="text" disabled={true} onChange={(e)=>setUseru((prevv)=>({...prevv,emails:e.target.value}))}  className="form-control" id="email" value={userup.emails}/>
      {usererr && <span style={{color:"red",fontSize:"15px"}}>{usererr.emailerr}</span>}
    </div>

    <div className="mb-2">
      <label className="form-label">Usertype</label>
      <input type="text" onChange={(e)=>setUseru((prevv)=>({...prevv,usertype:e.target.value}))} className="form-control" id="password" value={userup.usertype}/>
      {usererr && <span style={{color:"red",fontSize:"15px"}}>{usererr.roleerr}</span>}
    </div>
    <div className="mb-2">
      <label className="form-label">Address</label>
      <input type="text" onChange={(e)=>setUseru((prevv)=>({...prevv,country:e.target.value}))} className="form-control" id="password" value={userup.country}/>
      {usererr && <span style={{color:"red",fontSize:"15px"}}>{usererr.addresserr}</span>}
    </div>
      <div className="mb-2">
      <label className="form-label">Phone</label>
      <input type="text" onChange={(e)=>setUseru((prevv)=>({...prevv,tel:e.target.value}))} className="form-control" id="password" value={userup.tel}/>
      {usererr && <span style={{color:"red",fontSize:"15px"}}>{usererr.telerr}</span>}
    </div>
    <div className="d-flex justify-content-center">
         <button type="submit" className="btn btn-color-service w-50 mb-2">
        
        {  isloading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
            
          Submit</button>
    </div>
    { userfeed &&  <span className="d-flex alert justify-content-center alert-success" role="alert">
                 {userfeed}
        </span>
    }
  </form>
</div>
  )
}

export default Updateprofile