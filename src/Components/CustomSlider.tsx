import { url } from 'inspector'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
 import './custom.css';
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react';

interface CustomSliderProps{
imageUrls:string[]

}

function CustomSlider({imageUrls}:CustomSliderProps){

  const[imageIndex,setImageIndex]=useState(0);

  function showPrevImage(){
  setImageIndex(index=>{
    if(index==0) return imageUrls.length -1

    return index-1

  })
  }

  function showNextImage() {
    setImageIndex(index=>{
      if(index==imageUrls.length -1) return 0
  
      return index+1
  
    }
  )
  }

  return (

    <div style={{width:"100%",height:"100%",position:"relative"}}>
     <div style={{width:"100%" , height:"height:50%" , display:"flex", overflow:"hidden"}}>
{
  imageUrls.map(url=>(
<img key={url} src={imageUrls[imageIndex]} className='img-slider-img' style={{translate:`${-100 * imageIndex}%`}}/>
  ))
}
     </div>

      
      <button className='img-slider-btn' style={{left:0}} onClick={showPrevImage}>
        <ArrowBigLeft/>
      </button>
      <button className='img-slider-btn' style={{right:0}} onClick={showNextImage}>
        <ArrowBigRight/>
      </button>
      <div style={{position:"absolute" ,bottom:".5rem" , left:"50%" ,translate:"-50%" , display:"flex", gap:".25rem"}}>
         {
            imageUrls.map((_,index)=>(
            <button  className='img-slider-dot-btn' key={index} onClick={()=>setImageIndex(index)}>{index==imageIndex ? <CircleDot/> :<Circle/>}</button>
           ))
         }
      </div>
    </div>
  )
}


export default CustomSlider