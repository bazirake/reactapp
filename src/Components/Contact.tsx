import { useState } from "react";
import "../Components/contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import image_bac from "../assets/Images/Career.png";
import { GoogleMaps } from "./GoogleMaps";
 type MessageTye={
    name:string;
    email:string;
    subjects:string;
    message:string;
   }
   type MessageError={
     name?:string;
     email?:string;
     subjects?:string;
     message?:string
    }

function Contact() {
    const[contact,setContact]=useState<MessageTye>({name:"",email:"",subjects:"",message:""});
    const[errmess,setErrorMessage]=useState<MessageError>({});
    const[isloading,setLoading]=useState(false);
    const[apimessage,setApires]=useState("");
    const [messageSt,sendMessage]=useState(false);

      function CloseMessage() {
        sendMessage(false)
      }
      function SendMessage() {
        sendMessage(true)
      }

        const validateForm=()=>{
    const errorm:MessageError={}
       if(!contact.name){
         errorm.name="Name field could not be emply";
       }
       if(!contact.email){
         errorm.email="Email field could not be emply";
       }
        else if(!/\S+@\S+\.\S+/.test(contact.email)){
         errorm.email="Please enter a valid email";                 
       }
       if(!contact.subjects){
         errorm.subjects="Subject field could not be emply";
       }
       if(!contact.message){
         errorm.message="message field could not be emply";
       }
       setErrorMessage(errorm);

       return Object.keys(errorm).length===0
   }

  return (
  

    <div className="container-fluid">
       <div className="container">
       <div className=" row d-flex d-flex justify-content-center align-items-center contacts-container">
           <h3 className="h22 text-center">ExTech Contacts</h3>
           <div className="par-wid">

           <p className="pp2">Got any questions about ExTech Product,Services or Scaling on our platform?
           We are here to help. Chat to Our friendly team  24/7 and get onboard in less than 5 minutes.</p>
           </div>
    </div>
       </div>
    <section id="contact" className="contact section">
<div className="container section-title aos-init aos-animate" data-aos="fade-up">
  {/* <h2>Contact</h2> */}
  {/* <div><span>Check EXTECH</span> <span className="description-title">Contact</span></div> */}
</div>
<div className="container aos-init aos-animate" data-aos="fade" data-aos-delay="100">
  <div className="row gy-4">
    <div className="col-lg-4">
      <div className="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
        <i className="bi bi-geo-alt flex-shrink-0"></i>
        <div>
          <h3>Address</h3>
          <p>
          23M7+249, KN 123 St, Kigali, Rwanda</p>
        </div>
      </div>

      <div className="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
        <i className="bi bi-telephone flex-shrink-0"></i>
        <div>
          <h3>Call Us</h3>
          <p>+250787124101</p>
        </div>
      </div>


      <div className="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
        <i className="bi bi-envelope flex-shrink-0"></i>
        <div>
          <h3>Mail Us</h3>
          <p>extech@info.rw</p>
        </div>
      </div>
      

    </div>

    <div className="col-lg-8">
      <form   method="post" className="php-email-form aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"
      
       onSubmit={async(e)=>{
              e.preventDefault();
              if(validateForm()){
                setLoading(true)
                 try{
                const ress=await fetch("https://exapi-gjsy.onrender.com/contact",{
                method:"POST",
                headers:{
                "Content-Type":"application/json"
                },
               body:JSON.stringify(contact)                                                                 
              });
              const datajs=await ress.json();
              setApires(datajs.message);
             // console.log(datajs);
              } catch (error){
                console.log("Error",error)
              }
                setLoading(false);
                sendMessage(true);
                setContact({name:"",email:"",subjects:"",message:""});
              }
              //alert("hello")
            }}
      >
        <div className="row gy-4">

          <div className="col-md-6">
            <input type="text"value={contact.name} name="name" onChange={(e)=>setContact((prevdata)=>({...prevdata,name:e.target.value}))} className="form-control" placeholder="Your Name" />
             {errmess.name && <span style={{ color: "red",fontSize:"15px" }}>{errmess.name}</span>}
          </div>

          <div className="col-md-6 ">
            <input type="email" className="form-control" value={contact.email} onChange={(e)=>setContact((prevData)=>({...prevData,email:e.target.value}))} placeholder="Your Email" />
            {errmess.email && <span style={{ color: "red",fontSize:"15px" }}>{errmess.email}</span>}
          </div>

          <div className="col-md-12">
            <input type="text" value={contact.subjects} onChange={(e)=>setContact((prevData)=>({...prevData,subjects:e.target.value}))} className="form-control" name="subject" placeholder="Subject" />
            {errmess.subjects && <span style={{ color: "red",fontSize:"15px" }}>{errmess.subjects}</span>}
          </div>

          <div className="col-md-12">
            <textarea className="form-control" value={contact.message} onChange={(e)=>setContact((prevData)=>({...prevData,message:e.target.value}))} name="message"  placeholder="Leave a Message" ></textarea>
             {errmess.message && <span style={{color:"red",fontSize:"15px"}}>{errmess.message}</span>}
          </div>
           <div className="col-md-12">
                <textarea className="form-control" value={contact.message} onChange={(e)=>setContact((prevData)=>({...prevData,message:e.target.value}))} name="message" placeholder="Leave a Message"></textarea>
                 {errmess.message && <span style={{color:"red",fontSize:"15px"}}>{errmess.message}</span>}
              </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                   {
                  messageSt &&(
                   <div className="alert  message-color alert-dismissible fade show" role="alert">
                      <i className="bi bi-envelope px-1"></i><strong>{apimessage}</strong>&nbsp;Thank you!.
                      <button type="button" className="btn-close" onClick={CloseMessage} data-bs-dismiss="alert" aria-label="Close"></button>
                   </div>
                    )
                  }
                {
              isloading && <div className="d-flex justify-content-center">
                   <div className="spinner-border" role="status">
                   <span className="visually-hidden">Loading...</span>
                  </div>
                 </div>
              }  
              <button type='submit' className='submit'>Send Message</button>
              </div>

        </div>
      </form>
    </div>
  </div>
</div>
</section>
<div className="container">
  <GoogleMaps/>
</div>
       
    </div>
   
  
            )
      

}

export default Contact