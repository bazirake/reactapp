import React from 'react'
import { useParams } from 'react-router'
import HapIconn from "../assets/Images/HappyIcon.webp"
import "../Components/courseDetail.css"

export default function CourseDetails() {
const {id}=useParams();
const {cate}=useParams();
let courseTi;
let courseCont;
if (id==='0' && cate==='0') {
    courseTi=<h3 className="h22 text-center">Introduction to Html</h3>
    courseCont= <div className="css-tvqrra"><div className="css-ngd472">
            <p className="css-6ecy9b"><span>HTML (HyperText Markup Language) is the foundation of the web, a markup language used to structure and organize content on web pages.</span>
            </p><p className="css-kimdhf">It defines how text, images, links, and other content are displayed in a web browser. Essentially, HTML provides the structure and content, while CSS handles the styling (appearance) and JavaScript handles the interactivity.</p>
           <p className="css-kimdhf"><span><b>Skills you’ll need</b>: a strong understanding of its syntax, semantics, and new features, as well as familiarity with related technologies like CSS3 and JavaScript.</span></p></div></div>

}

if(id==='1' && cate==='0') {
    courseTi=<h3 className="h22 text-center">Html for Intermediate learner</h3>
      courseCont= <div className="css-tvqrra"><div className="css-ngd472">
            <p className="css-6ecy9b"><span>Intermediate HTML involves a deeper understanding of the language beyond basic syntax and elements.</span>
            </p><p className="css-kimdhf">It includes concepts like linking external stylesheets and JavaScript, understanding the Document Object Model (DOM), and creating more complex structures like tables and forms. It also involves understanding how HTML is read by assistive technologies for accessibility. </p>
           <p className="css-kimdhf"><span><b>Skills you’ll need</b>: a strong understanding of its syntax, semantics, and new features, as well as familiarity with related technologies like CSS3 and JavaScript.</span></p></div></div>
}

if(id==='2' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Html for Advanced learner</h3>
    courseCont= <div className="css-tvqrra"><div className="css-ngd472">
            <p className="css-6ecy9b">
              <span>Advanced HTML refers to more complex features and techniques within the HTML language that go beyond the basics.</span>
            </p><p className="css-kimdhf"> It involves a deeper understanding of the language and its capabilities to create more interactive and dynamic web pages. This includes things like creating forms with advanced features, improving accessibility, and enhancing SEO </p>
           <p className="css-kimdhf"><span><b>Skills you’ll need</b>: a strong understanding of its syntax, semantics, and new features, as well as familiarity with related technologies like CSS3 and JavaScript.</span></p></div></div>
}

if(id==='3' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to vanilla css</h3>
    courseCont= <div className="css-tvqrra"><div className="css-ngd472">
            <p className="css-6ecy9b">
              <span>Vanilla CSS refers to writing custom CSS without the use of frameworks.</span>
            </p><p className="css-kimdhf">This traditional approach gives developers complete control over styling, allowing for highly customized designs. While it requires more effort to maintain consistency, it offers unparalleled flexibility.</p>
           <p className="css-kimdhf"><span><b>Skills you’ll need</b>: Basic computer knowledge, how to work with files, how to execute them. and HTML.</span></p></div></div>
}

if(id==='4' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate vanilla css</h3>
    courseCont= <div className="css-tvqrra"><div className="css-ngd472">
            <p className="css-6ecy9b">
              <span>This course teaches you how to add dynamism and visual effects to your web pages, helping you recreate the polish of professional websites.</span>
            </p><p className="css-kimdhf">You'll gain the skills to build flexible layouts, elegant transitions, and accessible designs that adapt to varying devices and user needs.</p>
           <p className="css-kimdhf"><span><b>Skills you’ll need</b>: Basic computer knowledge, how to work with files, how to execute them. and HTML.</span></p></div></div>
}
if(id==='5' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced vanilla css</h3>
    courseCont= <div className="css-tvqrra"><div className="css-ngd472">
            <p className="css-6ecy9b">
              <span>Advanced vanilla CSS is a set of tools and techniques that help you create the modern websites that employers and clients are looking for.</span>
            </p><p className="css-kimdhf">These skills help you make websites more responsive more easily so, whatever kind or size of device someone is using to view your site, it looks fantastic and works well.</p>
           <p className="css-kimdhf"><span><b>Skills you’ll need</b>: Basic computer knowledge, how to work with files, how to execute them. and HTML.</span></p></div></div>
}

if(id==='6' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to Bootstrap</h3>
      courseCont= <div className="css-tvqrra"><div className="css-ngd472">
            <p className="css-6ecy9b">
              <span>Bootstrap is a free, open-source CSS framework that simplifies and accelerates front-end web development by providing pre-designed HTML, CSS, and JavaScript components for building responsive, mobile-first websites and web applications.</span>
            </p><p className="css-kimdhf">It helps create consistent and visually appealing interfaces by offering a range of pre-styled elements like buttons, forms, navigation bars, modals, and more, while also incorporating a responsive grid system for adapting to different screen sizes.</p>
           <p className="css-kimdhf"><span><b>Skills you’ll need</b>: Basic computer knowledge, how to work with files, how to execute them. and HTML.</span></p></div></div>
}
if(id==='7' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate Bootstrap</h3>
     courseCont= <div className="css-tvqrra"><div className="css-ngd472">
            <p className="css-6ecy9b">
              <span>At an intermediate level, Bootstrap users understand the framework's core concepts and can utilize its pre-designed components and classes to create responsive and visually appealing web pages.</span>
            </p><p className="css-kimdhf">They are comfortable with the grid system, responsive behavior, and various components like navigation bars, buttons, forms, and modals. Intermediate users can also customize these components and extend their functionality using CSS and JavaScript.</p>
           <p className="css-kimdhf"><span><b>Skills you’ll need</b>: Basic computer knowledge, how to work with files, how to execute them. and HTML.</span></p></div></div>
}
if(id==='8' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced Bootstrap</h3>
     courseCont= <div className="css-tvqrra"><div className="css-ngd472">
            <p className="css-6ecy9b">
              <span>Advanced Bootstrap" refers to techniques and concepts that go beyond the basic usage of the framework.</span>
            </p><p className="css-kimdhf">It involves understanding and utilizing Bootstrap's features, components, and customization options more deeply to create complex, dynamic, and responsive web layouts.</p>
           <p className="css-kimdhf"><span><b>Skills you’ll need</b>: Basic computer knowledge, how to work with files, how to execute them. and HTML.</span></p></div></div>
}
if(id==='9' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to Tailwind CSS</h3>
      courseCont= <div className="css-tvqrra"><div className="css-ngd472">
          <p className="css-6ecy9b">
          <span>Tailwind CSS is a utility-first CSS framework that provides a large collection of pre-designed utility classes, allowing developers to build custom designs without writing custom CSS.</span>
          </p><p className="css-kimdhf">It focuses on low-level styling utilities for common design tasks, encouraging a more efficient and consistent approach to styling. </p>
          <p className="css-kimdhf"><span><b>Skills you’ll need</b>: Basic HTML (especially Classes and Ids)
Basic CSS,
Mobile and Desktop responsiveness,
NodeJS should be pre-installed and
Little knowledge about npm packages.</span></p></div></div>
}
if(id==='10' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate Tailwind CSS</h3>
  courseCont= <div className="css-tvqrra"><div className="css-ngd472">
          <p className="css-6ecy9b">
          <span> intermediate Tailwind CSS, focus on understanding its utility-first approach, responsive design techniques, and customizing the framework for your specific needs.</span>
          </p><p className="css-kimdhf">You'll also learn to build complex layouts, manage design systems, and create reusable components.</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need</b>: Basic HTML (especially Classes and Ids)
Basic CSS,
Mobile and Desktop responsiveness,
NodeJS should be pre-installed and
Little knowledge about npm packages.</span></p></div></div>

}
if(id==='11' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced Tailwind CSS</h3>
      courseCont= <div className="css-tvqrra"><div className="css-ngd472">
      <p className="css-6ecy9b">
      <span>Advanced Tailwind CSS involves going beyond basic utility classes to implement more sophisticated features and techniques for custom design and efficient development.</span>
      </p><p className="css-kimdhf">This includes using plugins for extending functionality, leveraging variants for conditional styling, and customizing the framework to meet specific project needs.</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need</b>: Basic HTML (especially Classes and Ids)
Basic CSS,
Mobile and Desktop responsiveness,
NodeJS should be pre-installed and
Little knowledge about npm packages.</span></p></div></div>
}
if(id==='12' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to vanilla Javascript</h3>
      courseCont=<div className="css-tvqrra"><div className="css-ngd472">
      <p className="css-6ecy9b">
      <span>Vanilla is a term used in web development to refer to plain or basic JavaScript code without any external libraries or frameworks.</span>
      </p><p className="css-kimdhf"> It means that the code is written solely with the use of JavaScript language features, without any external assistance such as jQuery or React.</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need</b>: To effectively learn vanilla JavaScript, you need to grasp fundamental concepts like variables, data types, control flow, functions, and object-oriented programming. Understanding the Document Object Model (DOM) and event handling is also crucial for manipulating web pages.</span></p></div></div>
}
if(id==='13' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate vanilla Javascript</h3>
       courseCont=<div className="css-tvqrra">
        <div className="css-ngd472">
      <p className="css-6ecy9b">
      <span>Intermediate vanilla JavaScript" typically refers to a skill level where you've moved past the basics (like variables, loops, and simple DOM manipulation) and are ready to tackle more advanced concepts—but without relying on libraries or frameworks like React, jQuery, or Vue.</span>
      </p><p className="css-kimdhf"> intermediate-level vanilla JavaScript usually includes: DOM Manipulation,Event Handling,
        JavaScript Objects & Arrays,Functions & Scope,Asynchronous JavaScript,ES6+ Syntax,Form Handling & Validation and Browser APIs

.</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need</b>: To effectively learn vanilla JavaScript, you need to grasp fundamental concepts like variables, data types, control flow, functions, and object-oriented programming. Understanding the Document Object Model (DOM) and event handling is also crucial for manipulating web pages.</span></p></div></div>
}
if(id==='14' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced vanilla Javascript</h3>
      courseCont=<div className="css-tvqrra">
      <div className="css-ngd472">
      <p className="css-6ecy9b">
      <span>Advanced vanilla JavaScript builds on the intermediate skills and dives deeper into how the language and the browser environment work.</span>
      </p><p className="css-kimdhf">  It emphasizes deeper knowledge of the JavaScript engine, advanced patterns, performance considerations, and modern APIs.
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need</b>: To effectively learn vanilla JavaScript, you need to grasp fundamental concepts like variables, data types, control flow, functions, and object-oriented programming. Understanding the Document Object Model (DOM) and event handling is also crucial for manipulating web pages.</span></p></div></div>
}
if(id==='15' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to jQuery</h3>
}
if(id==='16' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to Typescript</h3>
}
if(id==='17' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate Typescript</h3>
}
if(id==='18' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced Typescript</h3>
}
if(id==='19' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Html+Javascript+css full course</h3>
}
if(id==='20' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate ReactTs</h3>
}
if(id==='21' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced ReactTs</h3>
}
 if(id==='22' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to Php</h3>
 }
 if(id==='23' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate Php</h3>
 }
if(id==='24' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced Php</h3>
 }

 if(id==='25' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Html+css+Javascript+Php</h3>
 }
  if(id==='26' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to Java</h3>
 }
 if(id==='27' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate Java</h3>
 }
  if(id==='28' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced Java</h3>
 }
  if(id==='29' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to NextJS</h3>
 }
  if(id==='30' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate NextJS</h3>
  }
   if(id==='31' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced NextJS</h3>
  }
   if(id==='32' && cate==='0'){
    courseTi=<h3 className="h22 text-center">React+Api Integration</h3>
  }
   if(id==='33' && cate==='0'){
    courseTi=<h3 className="h22 text-center">NextJS+Api Integration</h3>
  }
   if(id==='34' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Java+Api Integration</h3>
  }
    if(id==='35' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Java+Web socket</h3>
  }
   if(id==='0' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Mobile App development</h3>
  }
    if(id==='1' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Intermediate Native Android app in Java or Kotlin</h3>
  }
    if(id==='2' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Advanced Native Android app in Java or Kotlin</h3>
  }
     if(id==='3' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Introduction to Native iOS app in Swift or Objective-C</h3>
  }
    if(id==='4' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Introduction to Mobile app Cross-platform in React Native or Flutter</h3>
  }
    if(id==='5' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Intermediate Mobile app Cross-platform in React Native or Flutter</h3>
  }
   if(id==='6' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Advanced Mobile app Cross-platform in React Native or Flutter</h3>
  }
    if(id==='7' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Mobile app Hosting</h3>
  }
    if(id==='8' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Intermediate Native iOS app in Swift or Objective-C</h3>
  }
     if(id==='9' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Advanced Native iOS app in Swift or Objective-C</h3>
  }
  if(id==='10' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Intermediate Mobile Web app</h3>
  }
  if(id==='11' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Advanced Mobile Web app</h3>
  }
   if(id==='0' && cate==='2'){
    courseTi=<h3 className="h22 text-center">Introduction to mysql workbench</h3>
  }
  if(id==='1' && cate==='2'){
    courseTi=<h3 className="h22 text-center">Intermediate mysql workbench</h3>
  }
    if(id==='2' && cate==='2'){
    courseTi=<h3 className="h22 text-center">Advanced mysql workbench</h3>
  }
  if(id==='3' && cate==='2'){
    courseTi=<h3 className="h22 text-center">Introduction to Figma Design tool</h3>
  }
   if(id==='4' && cate==='2'){
     courseTi=<h3 className="h22 text-center">Intermediate Figma Design tool</h3>
  }
   if(id==='5' && cate==='2'){
     courseTi=<h3 className="h22 text-center">Advanced Figma Design tool</h3>
  }
   if(id==='6' && cate==='2'){
     courseTi=<h3 className="h22 text-center">Intermediate EdrawMax</h3>
  }
    if(id==='7' && cate==='2'){
     courseTi=<h3 className="h22 text-center">Advanced EdrawMax</h3>
  }
    if(id==='0' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Introduction to SQL Database</h3>
  }
    if(id==='1' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Intermediate SQL Database</h3>
  }
     if(id==='2' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Advanced SQL Database</h3>
  }
   if(id==='3' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Introduction to mysql</h3>
  }
   if(id==='4' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Intermediate  mysql</h3>
  }
   if(id==='5' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Advanced  mysql</h3>
  }
   if(id==='6' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Introduction to Postgresql</h3>
  }
  if(id==='7' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Intermediate Postgresql</h3>
  }
    if(id==='8' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Advanced Postgresql</h3>
  }
   if(id==='0' && cate==='4'){
     courseTi=<h3 className="h22 text-center">Introduction to Api development in Php</h3>
  }
  if(id==='1' && cate==='4'){
     courseTi=<h3 className="h22 text-center">Advanced Api development in Php</h3>
  }
  if(id==='2' && cate==='4'){
     courseTi=<h3 className="h22 text-center">Introduction to Api development in C#</h3>
  }
   if(id==='3' && cate==='4'){
     courseTi=<h3 className="h22 text-center">Advanced Api development in C#</h3>
  }
   
  return (
   <div className="container-fluid course-margin">
    <nav aria-label="Breadcrumbs" className="css-1nd9583"><ol className="cds-breadcrumbs-list"><li className="cds-breadcrumbs-listItem"><a className="cds-175 cds-breadcrumbs-homeIcon cds-iconButton-small cds-iconButton-ghost cds-iconButton-small cds-iconButton-ghost css-1k6hhal"  aria-label="Home" href="/" data-testid="home-link"><svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-:R6j9kd9lak6da:" className="css-1u8qly9"><path d="M5.5 15.5h2v-4.25c0-.213.072-.39.216-.534a.726.726 0 01.534-.216h3.5c.213 0 .39.072.534.216a.726.726 0 01.216.534v4.25h2V8.25L10 4.875 5.5 8.25v7.25zM4 15.25v-7c0-.234.052-.456.156-.665.104-.21.254-.39.448-.543l4.5-3.375c.278-.195.577-.292.896-.292.32 0 .618.097.896.292l4.5 3.375c.194.152.344.334.448.543.104.21.156.431.156.665v7c0 .481-.171.893-.514 1.236A1.685 1.685 0 0114.25 17h-2.5a.726.726 0 01-.534-.216.726.726 0 01-.216-.534V12H9v4.25c0 .212-.072.39-.216.534A.726.726 0 018.25 17h-2.5c-.481 0-.893-.171-1.236-.514A1.685 1.685 0 014 15.25z" fill="currentColor"></path></svg></a></li><li className="cds-breadcrumbs-listItem"><svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-:Rfkd9lak6da:" className="css-1lzurvc"><path d="M10.875 10L7.458 6.583a.73.73 0 010-1.062.73.73 0 011.07.007l3.951 3.951a.756.756 0 01.208.525.69.69 0 01-.208.517l-3.951 3.951a.693.693 0 01-.528.226.759.759 0 01-.52-.24.73.73 0 010-1.062L10.874 10z" fill="currentColor"></path></svg><a className="cds-119 cds-113 cds-115 cds-breadcrumbs-link css-3uwyv7 cds-142"  aria-current="page">Careers</a></li></ol></nav>
    <div className='row'>
        <div className='col-md-6 d-flex flex-column'>
            <h1 className='fw-s text-wrap'>{courseTi}</h1>
                      {courseCont}
                      <button className="btn btn-color-service w-25 my-3">Join for Free</button>
             </div>
             

 <div className='col-md-6'>
    <div className="cds-9 css-1jmy2qb cds-11 cds-grid-item cds-56 cds-64"><div className="css-125uo4z"><img src={HapIconn}  style={{maxWidth:"100%",height:"auto"}} alt=""/></div></div>
 </div>
    </div>
   
      
       </div>
  )
}
