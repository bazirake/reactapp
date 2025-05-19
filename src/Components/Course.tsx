import 'bootstrap/dist/css/bootstrap.min.css';
import "./course.css";
import Tabs from './Tabs';
import { useState } from 'react';
import courses from "../Components/mockdata/mockCourseNew";
import { useLocation, useNavigate } from 'react-router-dom';

function Course() {

  const[allcourseStatw,setAllCoursew]=useState(false);

  const[allcourseStatd,setAllCoursed]=useState(false);
  const[allcourseStatmo,setAllCourseMo]=useState(false);
  const[allcourseStatDes,setAllCourseDes]=useState(false);
   const location = useLocation();
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