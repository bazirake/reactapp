import { ReactNode } from "react";
 import React from 'react'
import "../Components/Modelcustom.css";
 interface ProfileProps{
   shows: boolean;
   onClose: () => void;
   title?: string;
   children:ReactNode;
 }


 export default function ProfileModal({ shows, onClose, title, children }:ProfileProps){

     if (!shows) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h4>{title}</h4>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
   
 }
 