import React from 'react'
import { useParams } from 'react-router'

export default function CourseDetails() {
const {id}=useParams();
const {cate}=useParams();

  return (
   <div className="container-fluid">
       <div className="container">
       <div className=" row d-flex d-flex justify-content-center align-items-center contacts-container">
        <h3 className="h22 text-center">Course details</h3>
        <div className="par-wid">
           
       
        </div>
    </div>
    <div className='row'>
        <h3>Course category-{cate}</h3>
    </div>
     <div className='row'>
        <h3>Course Name-{id}</h3>
    </div>
       </div>
       </div>
  )
}
