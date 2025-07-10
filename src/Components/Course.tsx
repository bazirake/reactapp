import 'bootstrap/dist/css/bootstrap.min.css';
import "./course.css";
import Tabs from './Tabs';
import { useEffect, useRef, useState } from 'react';
import courses from "../Components/mockdata/mockCourseNew";
import { useLocation, useNavigate } from 'react-router-dom';
import iptrackers from "../Components/mockdata/Iptracking";
import Categoryc from "../Components/mockdata/Category";
import {encrypt} from "./data/Encrypt";
type Activate={
  indexe:number;
  cid?:bigint;
 }
 type Contents={
  title:string;
  subtitle:string;
  content:string
  id:string;
  cid:string; 
  image:string;
 }
function Course() {
   const[allcourseStatw,setAllCoursew]=useState(false);
   const[allcourseStatd,setAllCoursed]=useState(false);
   const[allcourseStatmo,setAllCourseMo]=useState(false);
   const[allcourseStatDes,setAllCourseDes]=useState(false);
   const[categories,setCategory]=useState<Categoryc[]>([]);
   const[coursec,setCoursec]=useState<Contents[]>([]);


   const location = useLocation();
   const pageV = useLocation();
   console.log(categories);
     const [activeIndex,setActiveIndex]=useState<Activate>({indexe:0,cid:BigInt(1)});
   console.log(activeIndex);
   console.log(categories);

      useEffect(()=>{
      fetch("https://exapi-gjsy.onrender.com/category").then((res)=>res.json())
      .then((data)=>setCategory(data)).then((err)=>console.log("Error fetching courseCategory",err))
      fetch(`https://exapi-gjsy.onrender.com/content/${activeIndex.cid}`).then((res)=>res.json())
      .then((data)=>{setCoursec(data); console.log("hello content")}).catch((err)=>console.log("Error fetching courseCategory",err))
        fetch('https://api.ipify.org?format=json').then((res)=>res.json()).
        then((data)=>{
        const ipp=data.ip;
        // Now fetch location info using the IP
         fetch(`https://ipapi.co/${ipp}/json/`).then((res)=>res.json()).then((location)=>{
          const countryx=location.country_name ||"UNKNOWN";
          const datao:iptrackers={
          ip:ipp,page:pageV.pathname,country:countryx,timest:new Date(),
           network:location.network,
           city:location.city,
           region:location.region,
           country_capital:location.country_capital,
           latitude:location.latitude,
           longitude:location.longitude,
           timezone:location.timezone,
           currency_name:location.currency_name,
           languages:location.languages,
           org:location.org
          };
          fetch("https://exapi-gjsy.onrender.com/iptracker",{
          method:"POST",
          headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify(datao)
        }).then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log("error in ip track",err))
         }).then((err)=>console.log("Error in fetching Geoloaction Apis",err))
       }).catch((err)=>console.log('Failed to get IP',err));
    },[]);
  function ShowAllWebCourse(){
       setAllCoursew((item)=>!item)
     }
    function ShowAllDbCourse(){
      setAllCoursed((item)=>!item)
    }
    function ShowAllMoCourse(){
      setAllCourseMo((item)=>!item)
    }
   function ShowAllMoCourseDes(){
      setAllCourseDes((item)=>!item)
   }
  const navigate = useNavigate();
  const goTocourse = (cate:string,id:string) => {
   let encca=encodeURIComponent(encrypt(cate));
   let encc=encodeURIComponent(encrypt(id));
    navigate(`${location.pathname}/${encca}/${encc}`);
  };
  

 return(
  <div className='container container-mt'>
  <div>
       <h2 className='ext-header'>All the skills you need in one place with ExTech</h2>  
       <div className='ext-text'>From theoretical skills to hands on skills, ExTech supports your professional development.</div>

       <div>
    {/* Tab headers */}
     <ul className="nav nav-tabs">
      {
        categories.map((tab,index)=>(
        <li onClick={()=>{
        setActiveIndex((prev)=>({...prev,indexe:index,cid:tab.id}))
        //alert(activeIndex.cid);
        fetch(`https://exapi-gjsy.onrender.com/content/${tab.id}`).then((res)=>res.json()).then((data)=>{setCoursec(data);console.log("data are",data)}).catch((err)=>console.error("error content",err));
           
        }}key={index} className={`nav-item`}>
          <a className={`nav-link ${index===activeIndex.indexe ?'active':'nav-link'}`}>{tab.name}</a>
         </li>
      ))
     }
     </ul>
  {/* <div className="mt-4">{tabs[activeIndex].content}</div> */}
  </div>
 </div>   
     <div className="row">
       {
        coursec.map((course, index)=>(
          <div key={index}  className="col-lg-3 col-md-4 mb-4">
            <div className="card" style={{width:"18rem"}}>
              <img
              src={course.image}
                className="card-img-top"
                alt={course.title}
              />
              <div className="card-body">
                <h5 className="card-title fw-bolder">{course.title}</h5>
                  <p className="ext-text-sm single-course-unit_course-headline__sKuVM">
                     {course.content}
                  </p>
                <button className="btn btn-color-service" onClick={()=>goTocourse(course.cid,course.id)}>Join for Free</button>
              </div>
            </div>
          </div>
        ))}
      </div>
  </div>
   )
   }
export default Course