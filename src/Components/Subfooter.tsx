
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Components/subfooter.css";
import React, { useEffect, useState } from 'react'
import { Baseline } from 'lucide-react';

export default function Subfooter() {
  const [scrolledDown,setScrolledDownx] = useState(false);
    useEffect(() => {
      const handleScrollx = () => {
        const scrollY = window.scrollY;
        if (scrollY >100){
          setScrolledDownx(true);
        } else {
          setScrolledDownx(false);
        }
      };
      window.addEventListener('scroll', handleScrollx);
      return () => window.removeEventListener('scroll', handleScrollx);
    }, []);
  
  return (
    <div className='container-fluid d-flex  sub-margin' style={{backgroundColor:"#eaf3fa"}}> 
     <p className="font-14 fonts-w text-sm p-2 flex-grow-1 text-center">Website by ExTechnology Solutions</p>
            <a href="#" id="scroll-top" className={`d-flex align-items-center justify-content-center ${scrolledDown ? "scroll-top":"active"}`}><i className="bi bi-arrow-up-short"></i></a>
    </div>
  )
}

