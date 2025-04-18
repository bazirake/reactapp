import './custom.css';
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import imageb from "../assets/Images/bannerb.jpg";
import Icons from "../assets/Images/HappyIcon.webp";
import { GoogleAds } from "./GoogleAds";
import { useState } from "react";
import CustomSlider from "./CustomSlider";
import im1 from "../assets/Images/GoodOne.jpg";
import im2 from "../assets/Images/Developer.jpg";
import im3 from "../assets/Images/HappyIcon.webp";
import im4 from "../assets/Images/Engineer.png";
import im5 from "../assets/Images/GettyImageIcon.jpg";
import im6 from "../assets/Images/AfricanIcon.jpg";
import im7 from "../assets/Images/more-tech-institutes.jpeg";

 const Imagesx=[im1,im2,im3,im4];

  export default function Home() {
    const [showf,setFre]=useState(false);
    const [showf1,setFre1]=useState(false);
    const [showf2,setFre2]=useState(false);
  function FrequentAsked(){

      setFre((item=>!item))

   }

   function FrequentAsked1(){

    setFre1((item=>!item))

 }
 function FrequentAsked2(){

  setFre2((item=>!item))

}



  const [stat,setstat]=useState(0);
   const mens=[{name:"Become Software Eng",path:"developer",icons:"bi bi-person-rolodex"},{name:"Get Business Software",path:"business",icons:"bi bi-database-fill"}
  ,{name:"Meet Software Engineers",path:"level",icons:"bi bi-people-fill"}]
  return <>
  <section>
   <div className="container-fluid">
          {/* <div className="row">
          <ul className="list-group clearfix d-flex career justify-content-center list-group-horizontal ">
            {
             mens.map((item,index)=>
              <li key={index} onClick={()=>setstat(index)} className= {`list-group-item rounded-c ${stat==index ? "active-b":"list-group-item"}`} >
                 <i className={item.icons}></i>{item.name}
              </li>
            )
           }
        </ul>
          </div> */}
      
        <section id="hero" className="hello-container">
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
                      <button  className="btn btn-success mt-2 btn-color">Start Now<i className="bi bi-chevron-compact-right"></i></button>
                    </div>
                   </div>
                </div>
                 
              </div>
              <div className="col-md-8 img-container">
                <img src={Icons} className="back-imageh img-fluid w-100 rounded-pill" />
             </div>
         </div>
        </section>
        {/* <div className="row g-0">
        
          <div className="col text-center back-image">
           <a href="#" className="btn btn-secondary joins">
              <i className="bi bi-arrow-right"></i>
                Join Us
            </a>
          </div>
        </div>  */}


        <div className="row">
          <div  className="wo-container">
          <h2 className="text-center">Who we are</h2>
      <p className="text-starta">The Exeptional Tech Company , is a Company which provides a high-quality software training
    
          
        and
      
      Software development services to help individuals and businesses to Simplify Heavy daily Tasks performed.</p>
      <button className="btn btn-success">Read More</button>
          </div>
     
        
       

    {/* <div className="card col-md-6">
      <span className="card-title text-white text-center card-title-color"></span>
      <div className="card-body my-card-body">
      <ul className="card-text font-weight-card">
        <li className="bi bi-check">Software Development Training</li>
        <li className="bi bi-check">Web & Mobile App Development</li>
        <li className="bi bi-check">Custom Software Solutions</li>
    </ul>
      </div> */}
        {/* </div> */}

       
        
       
        </div>
        <div className="row d-flex">
          <h2 className="text-center">Our Services</h2>
        </div>
        {/* <div className="row mysec">

        <div className="col-lg-3 col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="features-item">
              <i className="bi bi bi-mortarboard  icon-color" ></i>
              <h3><a href="" className="stretched-link">Software Development Training</a></h3>
            </div>
          </div>


          <div className="col-lg-3 col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="features-item">
              <i className="bi bi-shuffle  icon-color" ></i>
              <h3><a href="" className="stretched-link">Web & Mobile App Development</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="features-item">
                <i className="bi bi-command  icon-color" ></i>
                <h3><a href="" className="stretched-link">Software Customization</a></h3>
             </div>
          </div>

          <div className="col-lg-3 col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="features-item">
              <i className="bi bi-infinity  icon-color"></i>
              <h3><a href="" className="stretched-link">System Design</a></h3>
            </div>
          </div>
          
        </div> */}

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
    <div className="col-md-3">
    <div className="card">
      <span className="card-title text-white text-center card-title-color">Trainee</span>
      <div className="card-body text-center font-weight-card">
      <p className="">
        This level in the software developer’s ladder of progression is the first of the two missing entries in the list.
        As the name implies, trainees are neophytes in software development and are still learning to ply their trade.
        Trainees are, often, students of some level with a focus on computer science and software engineering. 
      </p>
      < a className="btn btn-outline-success w-75"> <i className="bi bi-arrow-return-right"></i> Become</a>
        </div>
        </div>
    </div>

    <div className="col-md-3">
    <div className="card">
      <span className="card-title card-title-color text-white text-center">Junior Developer</span>
      <div className="card-body font-weight-card text-center">
      <p className="card-text">
      Junior-level developers are often interchangeable with trainee-level developers due to their more basic knowledge
       of the subject matter. The main difference between the two is that junior-level developers have a modicum of
        work experience under their belts and have learned from their trainee phase. 
      </p>
       <a className="btn btn-outline-success w-75"><i className="bi bi-arrow-return-right"></i> Become</a>
        </div>
      </div>
    </div>

    <div className="col-md-3">
    <div className="card">
      <span className="card-title card-title-color text-white text-center">Middle Developer</span>
      <div className="card-body font-weight-card text-center">
      <p className="card-text">
       Colloquially referred to as the “workhorses of the programming world,” mid-level developers are traditionally 
       junior-level developers that have worked in a professional capacity for at least two to three years. 
       Mid-level developers generally have enough experience to complete projects independently.
      </p>
      < a className="btn btn-outline-success w-75"><i className="bi bi-arrow-return-right"></i>Become</a>
        </div>
        </div>
    </div>
    <div className="col-md-3">
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
        < a className="btn btn-outline-success w-75"><i className="bi bi-arrow-return-right"></i>Become</a>
        </div>
        </div>
    </div>
    </div>
   
    <div className="row stats">
          <ul className="d-flex  justify-content-center">
            <li>
              <span><i className="bi bi-laptop px-1"></i>2</span> Softwares delivered</li>
              <li> <span><i className="bi bi-person"></i>10</span>Learners</li>
              <li>
              <span><i className="bi bi-map px-1"></i>2</span>Countries </li>
              </ul>
     
      </div>
      <div className="row explorediv">
      <h2  className="font-sizee text-center">Explore <span className="fix-comma">4</span>+ Free <span className="hide-on-mobile">Online</span>Training</h2>
        <ul className="d-flex flex-row justify-content-center">
          <li >
            <i className="bi bi-database"></i>
           <a > <h4>Database</h4> <span className="second-tex">
            Training</span>
            <br/>
            <span className="gets">Get<i className="bi bi-arrow-right"></i></span>
            </a> 
          </li>
          <li>
            <i className="bi bi-recycle"></i>
          <a> <h4>Api</h4> 
          <span>Development</span></a> 
          <br/>
          <span className="gets">Get<i className="bi bi-arrow-right"></i></span>
          </li>
          <li>
            <i className="bi bi-tags"></i>
           <a><h4>Front-end</h4>
           <span>Development</span>
           <br/>
           <span className="gets">Get<i className="bi bi-arrow-right"></i></span>
           </a> 
           
          </li>
          <li>
          <a>
          <i className="bi bi-box-arrow-right"></i>
            <h4>Api</h4> 
          <span>Integration</span>
          <br/>
          <span className="gets">Get<i className="bi bi-arrow-right"></i></span>
          </a>  
          </li>

          <li>
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

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-1.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>
          {/* End Gallery Item */}

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-2.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

           {/* End Gallery Item */}

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-3.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>
          {/* End Gallery Item */}

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-4.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>
          
          {/* End Gallery Item  */}

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-4.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>
           {/* End Gallery Item */}

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-5.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>
          
          {/* End Gallery Item */}

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="	https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-6.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>
          {/* End Gallery Item  */}

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-7.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="https://bootstrapmade.com/content/demo/Bootslander/assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>
           {/* End Gallery Item */}
          
        </div>

      </div>
        </section>

       
       <section className="web-back">
       <div className="container-fluid">
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
            <img src="https://kingslanduniversity.com/wp-content/uploads/2020/12/Home-WebinarCTA-v2-1024x646.jpg" width="1024" height="646" />
            </div>
           </div>
        </div>
      </div>
      </section>


      {/* <section id="gallery" className="gallery m-section"> */}
         {/* start of section title  */}
        {/* <div className="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Team</h2>
        <div><span>Check Our Team</span></div>
      </div> */}
      {/* </section> */}


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

  <div className="row gy-4">

    <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">

      <div className="content px-xl-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
        <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
        </p>
      </div>

      <div className="faq-container px-xl-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">

        <div className="faq-item">
          <i className="faq-icon bi bi-question-circle"></i>
          <h3 onClick={FrequentAsked}>Non consectetur a erat nam at lectus urna duis?</h3>
          {
            showf && (
             <div className="faq-content">
             <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
              </div>
             )
              }
          <i className="faq-toggle bi bi-chevron-right" onClick={FrequentAsked}></i>
        </div>
        
        <div className="faq-item">
          <i className="faq-icon bi bi-question-circle"></i>
          <h3>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h3>
          {

           showf1 && (
            <div className="faq-content">
             <p onClick={FrequentAsked1}>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
             </div>
             )
          }

          <i className="faq-toggle bi bi-chevron-right" onClick={FrequentAsked1}></i>
        </div>


        <div className="faq-item">
          <i className="faq-icon bi bi-question-circle"></i>
          <h3 onClick={FrequentAsked2}>Dolor sit amet consectetur adipiscing elit pellentesque?</h3>
          {
            showf2 && (
              <div className="faq-content">
               <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.</p>
               </div>
              )
          }
       
          <i className="faq-toggle bi bi-chevron-right" onClick={FrequentAsked2}></i>
        </div>

      </div>

    </div>

     <div className="col-lg-5 order-1 order-lg-2">
        <img src="https://bootstrapmade.com/content/demo/Bootslander/assets/img/faq.jpg" className="img-fluid aos-init aos-animate" alt="" data-aos="zoom-in" data-aos-delay="100"/>
     </div>
  </div>

</div>

</section>




</div>
  </>
}

