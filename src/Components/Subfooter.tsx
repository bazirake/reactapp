import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Components/subfooter.css";
import React from 'react'

export default function Subfooter() {
  return (
    <div className='container-fluid d-flex bg-success py-3'>

     <p className="font-14 text-white p-2 flex-grow-1">Copyright©
          2025  </p>
          &nbsp;

            <ul className="d-flex list-unstyled gap-3 ">
                <li>
                    <a href="/payment_info" className='rem-under'>Terms&conditions</a>
                </li>
               
                <li>
                    <a href="/payment_info">Safety</a>
                </li>
                <li>
                    <a href="/payment_info">ETech rights</a>
                </li>
                <li>
                    <a href="/payment_info"><img src="/public/photos/content/paypal.png" alt=""/></a>
                </li>
            </ul>
      
    </div>
  )
}
