import 'bootstrap/dist/css/bootstrap.min.css';
import "./course.css";
import Tabs from './Tabs';
import { useEffect, useState } from 'react';
import courses from "../Components/mockdata/mockCourseNew";
import { useLocation, useNavigate } from 'react-router-dom';
import iptrackers from "../Components/mockdata/Iptracking";
function Course() {

  const[allcourseStatw,setAllCoursew]=useState(false);

  const[allcourseStatd,setAllCoursed]=useState(false);
  const[allcourseStatmo,setAllCourseMo]=useState(false);
  const[allcourseStatDes,setAllCourseDes]=useState(false);
   const location = useLocation();
const pageV = useLocation();
   useEffect(()=>{
        fetch('https://api.ipify.org?format=json').then((res)=>res.json()).
        then((data)=>{
        const ipp=data.ip;
        // Now fetch location info using the IP
         fetch(`https://ipapi.co/${ipp}/json/`).then((res)=>res.json()).then((location)=>{
          const countryx=location.country_name ||"UNKNOWN";
          const datao:iptrackers={ip:ipp,page:pageV.pathname,country:countryx,timest:new Date(),
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

  const goTocourse = (cate:number,id:number) => {
   
    navigate(`${location.pathname}/${cate}/${id}`);
  };


   const tabData = courses.map((category,item) =>({
  content:(
    <div className="container">
      <div className="row">
        {
        category.courses.map((course, index) =>(
          <div key={index} onClick={()=>goTocourse(item,index)} className="col-lg-3 col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={course.image}
                className="card-img-top"
                alt={course.title}
              />
              <div className="card-body">
                <h5 className="card-title fw-bolder">{course.title}</h5>
                  <p className="ext-text-sm single-course-unit_course-headline__sKuVM">
                     {course.description}
                  </p>
                <button className="btn btn-color-service" onClick={()=>goTocourse(item,index)}>Join for Free</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}));

 return(
  <div className='container container-mt'>
  <div>
       <h2 className='ext-header'>All the skills you need in one place with ExTech</h2>  
       <div className='ext-text'>From theoretical skills to hands on skills, ExTech supports your professional development.</div>
       <Tabs tabs={tabData}/> 
 </div>   
  </div>
   )
   }

export default Course