import React, { ReactNode, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import courset from "../Components/mockdata/CourseTitleMockup"
 type Tab={
 
  content:ReactNode;
 };

 type TabsProps={
  tabs:Tab[];
 };

function Tabs({tabs}:TabsProps){
  const [activeIndex, setActiveIndex]=useState(0);
  return(
  <div>
    {/* Tab headers */}
     <ul className="nav nav-tabs">
     {
      courset.map((tab,index)=>(
       <li onClick={() => setActiveIndex(index)}  key={index} className={`nav-item`}>
         <a className={`nav-link ${index ===activeIndex ? 'active':'nav-link' }`}>{tab.corse_name}</a>
       </li>
      ))
     }
     </ul>
  <div className="mt-4">{tabs[activeIndex].content}</div>
  </div>
  )
}

export default Tabs