import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import HapIconn from "../assets/Images/HappyIcon.webp"
import "../Components/courseDetail.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import LoginModal from './LoginModal';
import {decrypt, encrypt} from "./data/Encrypt";
import CourseDetail from "./data/detailc";
import api from "./data/axiosClient";

export default function CourseDetails() {
const [loading,setLoading]=useState(true);

const [coursedeta,setCoursed]=useState<CourseDetail[]>([
  { 
    title:'',
    subtitle:'',
    content:'',
    subcontent:'',
    id:'',
    cid:''
  }
]
);

 let {cate}=useParams();
 let {id}=useParams();
 const Navigate=useNavigate();
 let decrx = decodeURIComponent(decrypt(cate ?? ""));
      let  codecx = decodeURIComponent(decrypt(id ?? ""));
      let ecat=encodeURIComponent(encrypt(decrx));
      let econt=encodeURIComponent(encrypt(codecx));
  function GotoRegisiterxx(catex:string,idx:string){
      Navigate(`/sign/${catex}/${idx}`);
  }
useEffect(() => {
  var cc= document.cookie
  console.log("sessions",cc);
  const getUser= async()=>{
    try{

         console.log("User info data");
        const resdata= await api.get("getinfo",{
           withCredentials:true
        });
        console.log("data hss",resdata.data.user);
       }catch (error:any){
         
          console.log("Error Response:", error.response?.data);
    }
  }
   


  const fff=async () =>{
    try{
      console.log("Encrypted cate:",cate);
      console.log("Encrypted id:",id);
      const decr = decodeURIComponent(decrypt(cate ?? ""));
      const codec = decodeURIComponent(decrypt(id ?? ""));
      console.log("Decrypted cate:",decr);
      console.log("Decrypted id:",codec);
      const apiUrl =`https://exapi-gjsy.onrender.com/detail/${codec}/${decr}`;
      console.log("Calling API:",apiUrl);
      const resdata = await fetch(apiUrl);
      const dddd =await resdata.json();
      console.log("Fetched data:", dddd[0].content);
      setCoursed(dddd);//or dddd.data if nested
    } catch(err){
      console.log("Error in fetching single course", err);
    }finally{
      setLoading(false);
    }
  };

  fff();
  getUser();
}, [cate, id]);
   return(
   <div className="container-fluid course-margin">
    <div className='row'>
    { loading ? (
      <div className="col-md-6 d-flex justify-content-center">
  <div className="spinner-border" role="status">
  
     </div>
     </div>
)
      :  
    (<div className='col-md-6 d-flex flex-column'>
       <h1 className='fw-s text-wrap'>{coursedeta[0].title}</h1>  
       <div className="css-tvqrra"><div className="css-ngd472">
        <p className="css-6ecy9b"><span>{coursedeta[0].subtitle}</span>
        </p>
        <p className="css-kimdhf">{coursedeta[0].content}</p>
        <p className="css-kimdhf"><span><b>Skills you’ll need</b>:{coursedeta[0].subcontent}</span></p></div></div>
        <button className="btn btn-color-service w-50 my-3" onClick={()=>{
          if(ecat!==undefined && econt!==undefined){
             GotoRegisiterxx(ecat,econt);
          }
          }}>Join for Free</button>
    </div>)
      }
   
 <div className='col-md-6'>
     <div className="cds-9 css-1jmy2qb cds-11 cds-grid-item cds-56 cds-64"><div className="css-125uo4z"><img src={HapIconn}  style={{maxWidth:"100%",height:"auto"}} alt=""/></div></div>
 </div>
    </div>
    </div>
   )
  }
