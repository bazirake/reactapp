import React, { ReactNode, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
type Tab ={
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};


function Tabs({tabs}:TabsProps) {

  const [activeIndex, setActiveIndex]=useState(0);
  return (

    <div >
    {/* Tab headers */}

    <ul className="nav nav-tabs">
     {
      tabs.map((tab,index)=>(
      
        <li onClick={() => setActiveIndex(index)}  key={index} className={`nav-item`}>
      <a className={`nav-link  ${index === activeIndex ?'active':'nav-link'}`}>{tab.label}</a>
    </li>
      ))
     }

  </ul>
    {/* <div className="flex border-b">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 font-medium border-b-2 ${
            index === activeIndex
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-blue-500'
          }`}
          onClick={() => setActiveIndex(index)}
        >
          {tab.label}
        </button>
      ))}
    </div> */}
    {/* Tab content */}

    <div className="mt-4">{tabs[activeIndex].content}</div>
  </div>
  )
}
export default Tabs