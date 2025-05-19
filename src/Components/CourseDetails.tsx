import React from 'react'
import { useParams } from 'react-router'

export default function CourseDetails() {
const {id}=useParams();
const {cate}=useParams();
let courseTi;
if (id==='0' && cate==='0') {
    courseTi=<h3 className="h22 text-center">Introduction to Html</h3>
}

if(id==='1' && cate==='0') {
    courseTi=<h3 className="h22 text-center">Html for Intermediate learner</h3>
}

if(id==='2' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Html for Advanced learner</h3>
}

if(id==='3' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to vanilla css</h3>
}

if(id==='4' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate vanilla css</h3>
}
if(id==='5' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced vanilla css</h3>
}

if(id==='6' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to Bootstrap</h3>
}
if(id==='7' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate Bootstrap</h3>
}
if(id==='8' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced Bootstrap</h3>
}
if(id==='9' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to Tailwind CSS</h3>
}
if(id==='10' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate Tailwind CSS</h3>
}
if(id==='11' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced Tailwind CSS</h3>
}
if(id==='12' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to vanilla Javascript</h3>
}
if(id==='13' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate vanilla Javascript</h3>
}
if(id==='14' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced vanilla Javascript</h3>
}
if(id==='15' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to jQuery</h3>
}
if(id==='16' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to Typescript</h3>
}
if(id==='17' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate Typescript</h3>
}
if(id==='18' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced Typescript</h3>
}
if(id==='19' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Html+Javascript+css full course</h3>
}
if(id==='20' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate ReactTs</h3>
}
if(id==='21' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced ReactTs</h3>
}
if(id==='22' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to Php</h3>
}
  return (
   <div className="container-fluid">
       <div className="container">
       <div className=" row d-flex d-flex justify-content-center align-items-center contacts-container">
        {courseTi}
        <div className="par-wid">
            {id}
        </div>
    </div>
   
       </div>
       </div>
  )
}
