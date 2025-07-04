import './custom.css';
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import imageb from "../assets/Images/bannerb.jpg";
import Icons from "../assets/Images/HappyIcon.webp";
import { GoogleAds } from "./GoogleAds";
import { useEffect, useState } from "react";
import CustomSlider from "./CustomSlider";
import im1 from "../assets/Images/GoodOne.jpg";
import im2 from "../assets/Images/Developer.jpg";
import im3 from "../assets/Images/HappyIcon.webp";
import im4 from "../assets/Images/Engineer.png";
import im5 from "../assets/Images/GettyImageIcon.jpg";
import im6 from "../assets/Images/AfricanIcon.jpg";
import im7 from "../assets/Images/more-tech-institutes.jpeg";
import imaged from "../Components/mockdata/Imagedata";
import { wait } from '@testing-library/user-event/dist/utils';
import { json } from 'stream/consumers';
import { stringify } from 'querystring';
import { useLocation, useNavigate } from 'react-router';
import iptrackers from "../Components/mockdata/Iptracking";

 const Imagesx=[im1,im2,im3,im4];
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
  export default function Home() {
    const [showf,setFre]=useState(false);
    const [showfx,setFrex]=useState(false);
    const [showf2,setFre2]=useState(false);
    const [messageSt,sendMessage]=useState(false);
    const[readv,setRead]=useState(false);
    const[contact,setContact]=useState<MessageTye>({name:"",email:"",subjects:"",message:""});
    const[errmess,setErrorMessage]=useState<MessageError>({});

    const[isloading,setLoading]=useState(false);
    const[apimessage,setApires]=useState("");
    const navigate=useNavigate();

    const pageV = useLocation();
   useEffect(()=>{
        fetch('https://api.ipify.org?format=json').then((res)=>res.json()).
        then((data)=>{
        const ipp=data.ip;
        // Now fetch location info using the IP
         fetch(`https://ipapi.co/${ipp}/json/`).then((res)=>res.json()).then((location)=>{
          const countryx=location.country_name ||"UNKNOWN";
          const datao:iptrackers={ip:ipp,page:pageV.pathname,country:countryx,timest:new Date(),
          network:location.network,
          city:location.city,
          region:location.region,
          country_capital:location.country_capital,
          latitude:location.latitude,
          longitude:location.longitude,
          timezone:location.timezone,
          currency_name:location.currency_name,
          languages:location.languages,
          org:location.org
          };
          fetch("https://exapi-gjsy.onrender.com/iptracker",{
          method:"POST",
          headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify(datao)
        }).then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log("error in ip track",err))
         }).then((err)=>console.log("Error in fetching Geoloaction Apis",err))
       }).catch((err)=>console.log('Failed to get IP',err));
    },[]);

    function CloseMessage() {
       sendMessage(false)
     }
    function SendMessage() {
       sendMessage(true)
     }
  function FrequentAsked(){
      setFre((item=>!item))
    }
   function FrequentAskedx(){
     setFrex((itemx=>!itemx))
   }
 function FrequentAsked2(){
    setFre2((item=>!item))
}

function ReadMore() {

  setRead(item=>!item);
}


 function BecomeFun(urlroute:string){
     navigate(urlroute);
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
  const [stat,setstat]=useState(0);
   const mens=[{name:"Become Software Eng",path:"developer",icons:"bi bi-person-rolodex"},{name:"Get Business Software",path:"business",icons:"bi bi-database-fill"}
  ,{name:"Meet Software Engineers",path:"level",icons:"bi bi-people-fill"}]
  return <>
  <section>
   <div className="container-fluid">
        <section id="hero" className="hello-container" style={{marginTop:"60px"}}>
         <div className="row g-0 pt-3 ">
              <div className="col-md-4">
                <div className="whole-hello-content">
                <div>
                    <h2 className="hero__title">Become a <span className="soft">Software Engineer</span> </h2>
                   </div>
                   <div className="Messages">
                    <p>
                        <span> Comprehensive training Programs for career Growth.</span> 
                         <span>
                         Creating an ecosystem to foster talent development in deep tech areas within Africa
                        </span>
                    </p>
                    <div className="mx-2">
                      <button onClick={()=>BecomeFun('/courses')} className="btn btn-color-service mt-2 ">Start Now<i className="bi bi-chevron-compact-right"></i></button>
                    </div>
                   </div>
                </div>
                 
              </div>
              <div className="col-md-8 img-container">
                <img src={Icons} className="back-imageh img-fluid w-100 rounded-pill" />
             </div>
         </div>
        </section>
      
        <div className="row">
          <div  className="wo-container">
          <h2 className="text-center">Who we are</h2>
      <p className="text-starta">The Exeptional Tech Company , is a Company which provides a high-quality software training
        and
      Software development services to help individuals and businesses to Simplify Heavy daily Tasks performed.</p>
      {
        readv && (
          <p className="text-starta">
           We are pleased to announce a software training session designed to help you become more proficient with C#,...
            This session will cover key features, best practices, and practical tips to enhance your productivity and confidence using the platform..
          </p>
        )
      }

      <button className="btn btn-color-service" onClick={ReadMore}> {readv ? "Read Less":"Read More"}</button>
       </div>
        </div>
        <div className="row d-flex">
          <h2 className="text-center">Our Services</h2>
        </div>
        <div className="row">
          <div className="col-md-3 col-lg-3">
          <figure className="figure">
          <img  id='img2' src={im7} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
           <figcaption className="figure-caption text-center"><h3>Software Development Training</h3>
           <p>Customized hardware to fit your business needs and gaming necessities</p>
           </figcaption>
         </figure>
          </div>

          <div className="col-md-3 col-lg-3">
          <figure className="figure">
          <img id='img1' src={im3} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
           <figcaption className="figure-caption text-center">
            <h3>Web & Mobile App Development</h3>
            <p>Customized hardware to fit your business needs and gaming necessities</p>
            </figcaption>
         </figure>
          </div>

          <div className="col-md-3 col-lg-3">
          <figure className="figure">
          <img id='img3' src={im6} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
           <figcaption className="figure-caption text-center"><h3>Software Customization</h3> 
           <p>Customized hardware to fit your business needs and gaming necessities</p>
           </figcaption>
         </figure>
          </div>
          <div className="col-md-3 col-lg-3">
          <figure className="figure">
          <img id='img4' src={im5} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
           <figcaption className="figure-caption text-center"><h3>System Design</h3>
           <p>Unique, Sustainable, Technology-themed art for purchase</p>
           </figcaption>
         </figure>
          </div>
        </div>
</div>
</section>
    
<div  className="container-fluid">
   <div className="row text-center background-row">
   <span className="font-wei rounded"> Do you want to become a professional software developer? Click on become button to meet  with our Software Engineers</span>
   </div>
    <div className="row my-2">
    <div className="col-md-3 col-space">
    <div className="card">
      <span className="card-title text-white text-center card-title-color">Trainee</span>
      <div className="card-body text-center font-weight-card">
      <p className="">
        This level in the software developer’s ladder of progression is the first of the two missing entries in the list.
        As the name implies, trainees are neophytes in software development and are still learning to ply their trade.
        Trainees are, often, students of some level with a focus on computer science and software engineering. 
      </p>
      < a className="btn btn-color-service w-75" onClick={()=>BecomeFun('/courses')}> <i className="bi bi-arrow-return-right"></i> Become</a>
        </div>
        </div>
    </div>

    <div className="col-md-3 col-space">
    <div className="card">
      <span className="card-title card-title-color text-white text-center">Junior Developer</span>
      <div className="card-body font-weight-card text-center">
      <p className="card-text">
      Junior-level developers are often interchangeable with trainee-level developers due to their more basic knowledge
       of the subject matter. The main difference between the two is that junior-level developers have a modicum of
        work experience under their belts and have learned from their trainee phase. 
      </p>
       <a className="btn btn-color-service w-75" onClick={()=>BecomeFun('/courses')}><i className="bi bi-arrow-return-right"></i> Become</a>
        </div>
      </div>
    </div>

    <div className="col-md-3 col-space">
    <div className="card">
      <span className="card-title card-title-color text-white text-center">Middle Developer</span>
      <div className="card-body font-weight-card text-center">
      <p className="card-text">
       Colloquially referred to as the “workhorses of the programming world,” mid-level developers are traditionally 
       junior-level developers that have worked in a professional capacity for at least two to three years. 
       Mid-level developers generally have enough experience to complete projects independently.
      </p>
      < a className="btn btn-color-service w-75" onClick={()=>BecomeFun('/courses')}><i className="bi bi-arrow-return-right"></i>Become</a>
        </div>
        </div>
    </div>
    <div className="col-md-3 col-space">
    <div className="card">
      <span className="card-title card-title-color text-white text-center">Senior Developer</span>
      <div className="card-body font-weight-card text-center">
       <p className="card-text">
       Senior developers are the top-tier frontline developers in the field. Having worked in the field for several years, 
       they are essentially
       mentors and overseers of lower-level developers. They are also the developers that can offer their
       expertise toward the marketing and
        business transactions of the company.
       </p>
        < a className="btn btn-color-service w-75" onClick={()=>BecomeFun('/courses')}><i className="bi bi-arrow-return-right"></i>Become</a>
        </div>
        </div>
    </div>
    </div>
   
    <div className="row stats">
          <ul className="d-flex  flex-wrap justify-content-center">
            <li>
              <span><i className="bi bi-laptop px-1"></i>2</span> Softwares delivered</li>
              <li><span><i className="bi bi-person"></i>10</span>Learners</li>
              <li>
              <span><i className="bi bi-map px-1"></i>2</span>Countries </li>
           </ul>
      </div>
      <div className="row explorediv">
      <h2  className="font-sizee text-center">Explore <span className="fix-comma">4</span>+ Free <span className="hide-on-mobile">Online</span>Training</h2>
        <ul className="d-flex  justify-content-center">
          <li onClick={()=>BecomeFun('/courses')}>
            <i className="bi bi-database"></i>
           <a > <h4>Database</h4> <span className="second-tex">
            Training</span>
            <br/>
            <span className="gets">Get<i className="bi bi-arrow-right"></i></span>
            </a> 
          </li>
          <li onClick={()=>BecomeFun('/courses')}>
            <i className="bi bi-recycle"></i>
          <a> <h4>Api</h4> 
          <span>Development</span></a> 
          <br/>
          <span className="gets">Get<i className="bi bi-arrow-right"></i></span>
          </li>
          <li onClick={()=>BecomeFun('/courses')}>
            <i className="bi bi-tags"></i>
           <a><h4>Front-end</h4>
           <span>Development</span>
           <br/>
           <span className="gets">Get<i className="bi bi-arrow-right"></i></span>
           </a> 
           
          </li>
          <li onClick={()=>BecomeFun('/courses')}>
          <a>
          <i className="bi bi-box-arrow-right"></i>
            <h4>Api</h4> 
          <span>Integration</span>
          <br/>
          <span className="gets">Get<i className="bi bi-arrow-right"></i></span>
          </a>  
          </li>

          <li onClick={()=>BecomeFun('/courses')}>
          <a>
          <i className="bi bi-arrow-left-right"></i>
            <h4>Fullstack</h4> 
          <span>Development</span>
          <br/>
          <span className="gets">Get<i className="bi bi-arrow-right"></i></span>
          </a>  
          </li>
        </ul>
      </div>


      <div className="profile-area">
      <div className="container">
        <div className="row">
           <div className="col-md-4">
            <div className="card">
              <div className="img2">
                <img src="https://kingslanduniversity.com/wp-content/uploads/2020/02/Folder-2-copy.jpg" alt="" />
              </div>
              <div className="main-text">
                <h2>Future Proof Your Skills</h2>
                <p>
                    Gain access to the most in-demand career fields.
                </p>
              </div>
              
            </div>
           </div>
           <div className="col-md-4">
            <div className="card">
              <div className="img2">
                <img src="https://kingslanduniversity.com/wp-content/uploads/2020/02/Folder-2-4-1.png" alt="" />
              </div>
              <div className="main-text">
                <h2>No Financial Obstacles</h2>
                <p>
                We offer students personalized financing options, including financing Negociation.
                </p>
              </div>
              
            </div>
           </div>

           <div className="col-md-4">
            <div className="card">
              <div className="img2">
                <img src="https://kingslanduniversity.com/wp-content/uploads/2020/02/Folder-2-3-1.png" alt="" />
              </div>
              <div className="main-text">
                <h2>Career Services</h2>
                <p>
                    Full support to ensure career success.
                </p>
              </div>
             
            </div>
           </div>

        </div>
      </div>
      </div>
        <section className="my-section">
        <div className="profile-programining">
          <div className='container'>
          <div className="wrap-section">
            <span className="text-center-salary">$salary = i++</span> 
          <h4 className="time-heading">It's time to make a change.</h4> 
          <div>
          <p>
            <span>An education that’s future-proof doesn’t have to cost a fortune or take years to complete.</span>
            <span className="mypara">You can have a seat at the table, upward mobility, and an exciting position in a fast-growing industry.</span>
         </p>
         </div>
         </div>
          </div>
       </div>
        </section>

        <section id="gallery" className="gallery m-section">
         {/* start of section title  */}
        <div className="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Gallery</h2>
        <div><span>Check ExTech</span> <span className="description-title">Gallery</span></div>
      </div>
       {/* End Section Title */}

       <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

        <div className="row g-0">
         {
          imaged.map((item)=>{
          return  (
              <div className="col-lg-3 col-md-4">
               <div className="gallery-item">
              <a href={item.urils} className="glightbox" data-gallery="images-gallery">
                <img src={item.urils} alt="" className="img-fluid"/>
              </a>
            </div>
          </div> 
            )
          })
        }
        </div>
      </div>
        </section>       
       <section className="">
       <div className="container-fluid">
        <div className='container web-back'>
          <div className="row g-0">
          <div className="col-md-6 ">
            <div className="contents">
            <div className="cta-header">
            <h2 className="elementor-heading-title">
             Discover an exciting career path in the tech industry
            </h2>
          </div> 
          <div className="elementor-text-editor elementor-clearfix">
          <ul className="cta-list">
            <li className="list-data">
              <i className="bi bi-check"></i>
              The latest data showing why now is the perfect time to join this lucrative &amp; growing field</li>
              <li className="list-data"> <i className="bi bi-check"></i>Why job security is better in this industry than almost any other</li>
          <li> <i className="bi bi-check"></i>How to get started with no financial obstacles and be career-ready in less than a year</li>
          </ul>
          </div>
            </div>
          </div>
          <div className="col-md-6 my-imagew">
            <div className="image-sizes">
            <img src="https://etech-kappa.vercel.app/static/media/more-tech-institutes.1063e75824d92ea07474.jpeg" width="1024" height="800" />
            </div>
           </div>
        </div>
        </div>
      </div>
      </section>



      <section id="team" className="team section">
      <div className="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Team</h2>
        <div><span>Check EXTECH</span> <span className="description-title">Team</span></div>
      </div>

      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-3 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
              <div className="pic"><img src="https://bootstrapmade.com/content/demo/Bootslander/assets/img/team/team-1.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Eric Bazirake </h4>
                <span>Chief Executive Officer & Soft Eng</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="member">
              <div className="pic">
                <img src="https://bootstrapmade.com/content/demo/Bootslander/assets/img/team/team-2.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Yumvagusenga Elipa</h4>
                <span>Product & Marketing Manager</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div className="member">
              <div className="pic"><img src="https://bootstrapmade.com/content/demo/Bootslander/assets/img/team/team-3.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Peter Joy</h4>
                <span>Project Advisor & System Analyst</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div className="member">
              <div className="pic"><img src="https://bootstrapmade.com/content/demo/Bootslander/assets/img/team/team-3.jpg" className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Aime de Dieu</h4>
                <span>Training Provider & Software Engineer</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" className="faq section light-background">

<div className="container-fluid">
  <div className="row gy-5">
    <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">
      <div className="content px-xl-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
        <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
        <p>
        Frequently asked questions about technology cover
         a wide range of topics, from Beginner software developer  to advanced  and ethical considerations.
        </p>
      </div>

      <div className="faq-container px-xl-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
        <div className="faq-item">
          <i className="faq-icon bi bi-question-circle"></i>
          <h3 onClick={FrequentAsked}>What does  Extech Stand for ?</h3>
           {
            showf && (
             <div className="faq-content">
              <p>Extech is an Exceptional technology Limited company that provides Software development Services.</p>
              </div>
             )
              }
          <i className={`faq-toggle bi bi-chevron-right ${showf ? "downicon":"righticon" }`} onClick={FrequentAsked}></i>
        </div>

        <div className="faq-item">
          <i className="faq-icon bi bi-question-circle"></i>
          <h3 onClick={FrequentAskedx}>What are the Requirements to become a member of Extech Company?</h3>

           {
             showfx && (
              <div className="faq-content">
              <p>to become a member of Extech,you should first be interested in technology industry then start registration proccess on this platform.</p>
               </div>
              )
           }

          <i className={`faq-toggle bi bi-chevron-right ${showfx ? "downicon":"righticon"}`} onClick={FrequentAskedx}></i>
        </div>
        <div className="faq-item">
          <i className="faq-icon bi bi-question-circle"></i>
          <h3 onClick={FrequentAsked2}>How long does it take to become a software developer in Extech?</h3>

            {
             showf2 && (
                <div className="faq-content">
                <p>To become a software developer in Extech , it does not take long time only within three months.</p>
                </div>
               )
           }

          <i className={`faq-toggle bi bi-chevron-right ${showf2 ? "downicon":"righticon" }`} onClick={FrequentAsked2}></i>
        </div>
      </div>
    </div>
     <div className="col-lg-5 order-1 order-lg-2">
       <img src="https://bootstrapmade.com/content/demo/Bootslander/assets/img/faq.jpg" className="img-fluid aos-init aos-animate" alt="" data-aos="zoom-in" data-aos-delay="100"/>
     </div>
  </div>
</div>
</section>

<div className='container-fluid'>
<div className='container'>
  <h1 className='text-center py-2'>Client Testimonials</h1>
  <div className='row pb-3 gap-3'>
    <div className="col-md-4">
    "RLF has been working with Lane Technology Solutions for nearly two decades.
     Their experience and expertise are second to none. When they recommend an IT solution, 
    I can always put my trust and faith in the decisions made... All support requests are answered quickly and followed through..."
    <div className="elementor-testimonial-details">
			  	<div className="elementor-testimonial-name">Joseph Habimana</div>
					<div className="elementor-testimonial-job">Loan Supervisor </div>
				</div>
    </div>
    <div className="col">
    "Recently we converted to office 365. The thing that most impressed us was
     the quality of service. The support staff is amazing. Guess what?! You get a return
     call when you leave a message. From my 30 years in Information Technology,
      it’s all about service. Thank you, Lane Technology!"
      <div className="elementor-testimonial-details">
				  	<div className="elementor-testimonial-name">Angelique Uwera</div>
						<div className="elementor-testimonial-job">IT Manager </div>
					</div>
    </div>
    <div className="col">
    "I spent about an hour on the phone with Noel from LTS. He was
     patient, knowledgeable, efficient and reassuring!! It was a very satisfying
     conclusion to a worrisome project I needed to get done very quickly. Thank you for making your talented staff available!"
     <div className="elementor-testimonial-details">
					  <div className="elementor-testimonial-name">John E. Spangler</div>
						<div className="elementor-testimonial-job">Business Owner</div>
					</div>
    </div>
  </div>
</div>
</div>

<section id="contact" className="contact section">
      <div className="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Contact</h2>
        <div><span>Check EXTECH</span> <span className="description-title">Contact</span></div>
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
                <p>extech.rw</p>
              </div>
            </div>
            

          </div>

          <div className="col-lg-8">
            <form  onSubmit={async(e)=>{
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
              }
             
              
                  //alert("hello")
            }}  className="php-email-form aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
              <div className="col-md-6">
                   <input type="text" value={contact.name} name="name" onChange={(e)=>setContact((prevdata)=>({...prevdata,name:e.target.value}))} className="form-control" placeholder="Your Name"/>
                    {errmess.name && <span style={{ color: "red",fontSize:"15px" }}>{errmess.name}</span>}
              </div>

              <div className="col-md-6 ">
                  <input type="text" value={contact.email} onChange={(e)=>setContact((prevData)=>({...prevData,email:e.target.value}))} className="form-control" name="email" placeholder="Your Email"/>
                   {errmess.email && <span style={{ color: "red",fontSize:"15px" }}>{errmess.email}</span>}
              </div>

              <div className="col-md-12">
                  <input type="text" value={contact.subjects} onChange={(e)=>setContact((prevData)=>({...prevData,subjects:e.target.value}))} className="form-control" name="subject" placeholder="Subject"/>
                  {errmess.subjects && <span style={{ color: "red",fontSize:"15px" }}>{errmess.subjects}</span>}
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

</div>
  </>
}

