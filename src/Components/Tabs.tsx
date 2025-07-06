import React, { ReactNode, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import courset from "../Components/mockdata/CourseTitleMockup"
import Categoryc from './mockdata/Category';
 type Tab={
  content:ReactNode;
 };
 type TabsProps={
  tabs:Tab[];
 };
 type Activate={
  indexe:number;
  cid?:bigint;
 }

 function Tabs({tabs}:TabsProps){
   const [activeIndex,setActiveIndex]=useState<Activate>({indexe:0,cid:BigInt(1)});
   console.log(activeIndex);
   const[categories,setCategory]=useState<Categoryc[]>([]);
  fetch("https://exapi-gjsy.onrender.com/category").then((res)=>res.json())
   .then((data)=>setCategory(data)).then((err)=>console.log("Error fetching courseCategory",err))
  return(
  <div>
    {/* Tab headers */}
     <ul className="nav nav-tabs">
      {
        categories.map((tab,index)=>(
        <li onClick={()=>setActiveIndex((prev)=>({...prev,indexe:index,cid:tab.id}))} key={index} className={`nav-item`}>
          <a className={`nav-link ${index===activeIndex.indexe ?'active':'nav-link'}`}>{tab.name}</a>
         </li>
      ))
     }
     </ul>
  {/* <div className="mt-4">{tabs[activeIndex].content}</div> */}
  </div>
  )
}

export default Tabs