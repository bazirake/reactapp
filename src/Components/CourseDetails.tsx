import React, { useState } from 'react'
import { useParams } from 'react-router'
import HapIconn from "../assets/Images/HappyIcon.webp"
import "../Components/courseDetail.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import LoginModal from './LoginModal';
export default function CourseDetails() {
const [morest,setMore]=useState(false);
const [loginm,showLoginm]=useState(false);
const showLoginModels=()=>{
  showLoginm(true);
}
const changes=()=>{
  setMore(item=>!item)
} 
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
      <span> Advanced vanilla JavaScript builds on the intermediate skills and dives deeper into how the language and the browser environment work.</span>
      </p><p className="css-kimdhf"> It emphasizes deeper knowledge of the JavaScript engine, advanced patterns, performance considerations, and modern APIs.
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need</b>: To effectively learn vanilla JavaScript, you need to grasp fundamental concepts like variables, data types, control flow, functions, and object-oriented programming. Understanding the Document Object Model (DOM) and event handling is also crucial for manipulating web pages.</span></p></div></div>
}
if(id==='15' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to jQuery</h3>
    courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span> JQuery is a lightweight JavaScript library designed to simplify HTML DOM manipulation, event handling, animation, and AJAX interactions.</span>
    </p><p className="css-kimdhf">It allows developers to write less code while achieving more functionality, making web development faster and more efficient. JQuery achieves this by wrapping complex JavaScript tasks into concise, single-line methods.
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need</b>:To effectively learn and use jQuery, a foundational understanding of HTML, CSS, and JavaScript is necessary.</span></p></div></div>
}
if(id==='16' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to Typescript</h3>
       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>TypeScript is a strongly typed programming language that builds on JavaScript, offering features like static typing, classes, and interfaces. It enhances code maintainability and scalability, especially in large projects, by catching errors early during development.</span>
    </p><p className="css-kimdhf">TypeScript code compiles to JavaScript, making it compatible with any environment where JavaScript runs, including browsers and Node.js. It introduces optional type annotations, allowing developers to define the types of variables, function parameters, and return values, thus improving code clarity and reducing runtime errors
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need</b>:An intermediate understanding of JavaScript, especially the nature of JavaScript data types and the difference between pass-by-value vs. pass-by-reference, is required.</span></p></div></div>
}
if(id==='17' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate Typescript</h3>
           courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Intermediate TypeScript signifies a deeper understanding of the language beyond basic syntax and types. It involves using more advanced features and techniques to write more maintainable, reusable, and robust code.</span>
    </p><p className="css-kimdhf">This includes things like generics, decorators, modules, advanced types, and working with TypeScript's configuration options. Typescript is a strongly typed superset of JavaScript which compiles to plain JavaScript.
       It is a pure object-oriented programming language and it works well for large scale Javascript applications.
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need</b>:An intermediate understanding of JavaScript, especially the nature of JavaScript data types and the difference between pass-by-value vs. pass-by-reference, is required.</span></p></div></div>

}
if(id==='18' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced Typescript</h3>
               courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Advanced TypeScript encompasses features that go beyond basic types and syntax, enabling more robust, flexible, and maintainable code.</span>
    </p><p className="css-kimdhf">These advanced concepts allow developers to handle complex type manipulations, create reusable components, and ensure type safety in sophisticated scenarios.
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need</b>:An intermediate understanding of JavaScript, especially the nature of JavaScript data types and the difference between pass-by-value vs. pass-by-reference, is required.</span></p></div></div>
}

if(id==='19' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Html+Javascript+css full course</h3>
                   courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>HTML, CSS, and Javascript for Web Developers</span>
    </p><p className="css-kimdhf"> to start Learning this course click on Join for free button to meet our Software Engineers.
</p>
<p className="css-kimdhf">
  <span><b>At end of this course</b>:you will be able to create your own interactive websites.</span></p></div></div>
}
if(id==='20' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate ReactTs</h3>
                   courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Intermediate ReactJS involves building upon foundational knowledge of React, HTML, CSS, and JavaScript, to create more complex and scalable applications.</span>
    </p><p className="css-kimdhf"> This includes mastering concepts like state management (using techniques like reducers, context, or Zustand), routing, performance optimization, and fetching/updating data using tools like React Query, among other advanced techniques.
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need</b>To effectively learn ReactJS, a foundation in HTML, CSS, and JavaScript is essential, especially ES6 features. Additionally, familiarity with Node.js and npm, JSX, and version control with Git is beneficial.</span></p></div></div>


}
if(id==='21' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced ReactTs</h3>
                       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Advanced React development involves delving into more complex aspects of the framework, going beyond basic component creation and state management.</span>
    </p><p className="css-kimdhf"> It encompasses techniques like advanced component patterns, state management libraries, server-side rendering, performance optimization, and more, enabling developers to build highly performant, scalable, and maintainable applications. 
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need</b>To effectively learn ReactJS, a foundation in HTML, CSS, and JavaScript is essential, especially ES6 features. Additionally, familiarity with Node.js and npm, JSX, and version control with Git is beneficial.</span></p></div></div>

}
 if(id==='22' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to Php</h3>
      courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used, open-source, server-side scripting language primarily designed for web development.</span>
    </p><p className="css-kimdhf">It allows developers to create dynamic web pages by embedding PHP code within HTML, enabling tasks like form processing, database interaction, and session management. 
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need</b>To effectively learn PHP,a basic understanding of computer programming concepts, a grasp of HTML and CSS, and knowledge of the internet and databases (especially MySQL) are helpful prerequisites.</span></p></div></div>
 }
 if(id==='23' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate Php</h3>
          courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Intermediate PHP Programming
Intermediate PHP is designed for:</span>
    </p>
    <p className="css-kimdhf"> 
      <ul>
        <li>* learners who have completed An Introduction to Basic PHP Programming</li>
         <li>*individuals who have background in basic PHP programming</li>
           <li>*experienced programmers who want to take a refresher</li>
        
      </ul>
   
<span className='py-2'>In this course, you will be combining multiple concepts. Topics include manipulating arrays, combining loops and conditionals, and nested if-else statements.</span>

</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need</b>To effectively learn PHP,a basic understanding of computer programming concepts, a grasp of HTML and CSS, and knowledge of the internet and databases (especially MySQL) are helpful prerequisites.</span></p></div></div>

 }
if(id==='24' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced Php</h3>
          courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Advanced PHP encompasses more than basic syntax; it delves into complex areas like object-oriented programming (OOP), design patterns, security, framework integration, and database management.</span>
    </p><p className="css-kimdhf">It involves using advanced PHP techniques to build scalable, maintainable, and robust web applications. 
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need</b>To effectively learn PHP,a basic understanding of computer programming concepts, a grasp of HTML and CSS, and knowledge of the internet and databases (especially MySQL) are helpful prerequisites.</span></p></div></div>
 }

 if(id==='25' && cate==='0'){
      courseTi=<h3 className="h22 text-center">Html+css+Javascript+Php</h3>
      courseCont=<div className="css-tvqrra">
      <div className="css-ngd472">
      <p className="css-6ecy9b">
      <span>each has a different purpose and function and they work together to deliver beautiful websites with updated content to your web browser.</span>
      </p><p className="css-kimdhf">HTML stands for Hyper Text Markup Language, CSS for Cascading Style Sheets, and PHP for PHP Hypertext Preprocessor. 
</p>
<p className="css-kimdhf">
  <span><b>CourseOutcomes:</b>At the end of this course , you will be to build an interactive website capable to comunicate with Database.</span></p></div></div>

 }
  if(id==='26' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to Java</h3>
    courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Java programming is a powerful and versatile technology used to build a wide range of applications, from mobile apps and websites to enterprise software and data-driven systems.</span>
    </p><p className="css-kimdhf">It's an object-oriented, high-level programming language known for its portability and robustness. 
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need:</b>To effectively learn Java, it's helpful to have a foundational understanding of programming concepts and a basic grasp of computer science principles. Familiarity with object-oriented programming (OOP) and basic data structures can also streamline the learning process. A computer with a Java Development Kit (JDK) installed is essential for coding and running Java programs.</span></p></div></div>
 }
 if(id==='27' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate Java</h3>
       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Intermediate Java represents a step beyond beginner Java programming, where you delve into more complex concepts and gain proficiency in using Java for real-world applications.</span>
    </p><p className="css-kimdhf">It involves mastering core Java concepts, such as object-oriented programming (OOP), collections, threading, and working with APIs. 
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need:</b>To effectively learn Java, it's helpful to have a foundational understanding of programming concepts and a basic grasp of computer science principles. Familiarity with object-oriented programming (OOP) and basic data structures can also streamline the learning process. A computer with a Java Development Kit (JDK) installed is essential for coding and running Java programs.</span></p></div></div>
 }
  if(id==='28' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced Java</h3>
          courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Intermediate Java represents a step beyond beginner Java programming, where you delve into more complex concepts and gain proficiency in using Java for real-world applications.</span>
    </p><p className="css-kimdhf">It involves mastering core Java concepts, such as object-oriented programming (OOP), collections, threading, and working with APIs. 
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need:</b>To effectively learn Java, it's helpful to have a foundational understanding of programming concepts and a basic grasp of computer science principles. Familiarity with object-oriented programming (OOP) and basic data structures can also streamline the learning process. A computer with a Java Development Kit (JDK) installed is essential for coding and running Java programs.</span></p></div></div>
 }
  if(id==='29' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to NextJS</h3>
             courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Next.js is a powerful React framework that simplifies web development by offering various features and optimizations.</span>
    </p><p className="css-kimdhf">It's built on top of React and provides tools for server-side rendering, static site generation, and full-stack development. Next.js streamlines the development process, making it easier to create fast and SEO-friendly web applications. . 
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need:</b>To effectively learn Next.js, a solid foundation in JavaScript and React is crucial, alongside understanding basic web development concepts like HTML, CSS, and JavaScript.</span></p></div></div>

 }
  if(id==='30' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate NextJS</h3>
                 courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>At an intermediate level, Next.js usage involves deeper understanding of its features and how to apply them effectively for building complex web applications. </span>
    </p><p className="css-kimdhf">This includes mastering concepts like server-side rendering, static generation, data fetching, and routing, along with understanding how to optimize performance and build user-friendly interfaces.
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need:</b>To effectively learn Next.js, a solid foundation in JavaScript and React is crucial, alongside understanding basic web development concepts like HTML, CSS, and JavaScript.</span></p></div></div>

  }
   if(id==='31' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced NextJS</h3>
                     courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Advanced Next.js goes beyond the basics, delving into more complex architectural patterns, routing strategies, data fetching methods, and performance optimization techniques. </span>
    </p><p className="css-kimdhf"> It's about mastering features like server actions, parallel routes, route slots, and utilizing more sophisticated data fetching strategies. 
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need:</b>To effectively learn Next.js, a solid foundation in JavaScript and React is crucial, alongside understanding basic web development concepts like HTML, CSS, and JavaScript.</span></p></div></div>

  }
   if(id==='32' && cate==='0'){
    courseTi=<h3 className="h22 text-center">React+Api Integration</h3>
                        courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>React + API integration refers to the process of connecting a React application with an Application Programming Interface (API) to enable data exchange and interaction </span>
    </p><p className="css-kimdhf"> APIs act as intermediaries, allowing different software systems to communicate and share data. In the context of React development, integrating with APIs is crucial for fetching data from external sources, updating information, and creating dynamic user interfaces.
      The integration typically involves making HTTP requests from the React application to API endpoints. 
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need:</b>To effectively learn Next.js, a solid foundation in JavaScript and React is crucial, alongside understanding basic web development concepts like HTML, CSS, and JavaScript.</span></p></div></div>

  }
   if(id==='33' && cate==='0'){
    courseTi=<h3 className="h22 text-center">NextJS+Api Integration</h3>
                         courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Next.js API integration refers to the process of connecting a Next.js application to external APIs (Application Programming Interfaces) or internal backend services.</span>
    </p><p className="css-kimdhf"> This integration allows the Next.js
       application to interact with data and functionality provided by 
       these APIs, enabling dynamic content rendering, data fetching, and server-side logic execution. 
       <button className='btn btn-color-service' onClick={changes}>readMore</button>
       { 
        morest &&(<span className='p-2'>
        Next.js offers built-in features that simplify API integration, primarily through API routes. API routes are serverless functions defined within the pages/api directory of a Next.js project. These functions handle HTTP requests and responses, allowing developers to create custom API endpoints without setting up a separate backend server.
        Next.js applications can consume data from external APIs using various methods, such as the Fetch API or third-party libraries like Axios. These tools enable the application to send requests to API endpoints and retrieve data, which can then be used to render dynamic content or perform other actions.
       API integration in Next.js can be used for a wide range of purposes, including:
       Fetching data from databases or external services.
       Implementing user authentication and authorization.
       Handling form submissions and data processing.
       Creating custom backend logic for specific application features.
       Next.js API routes are serverless functions, meaning they are executed on demand in response to incoming requests. This approach eliminates the need for a dedicated server and allows for efficient scaling and deployment.
       </span>
       )
   }
</p>
<p className="css-kimdhf">
  <span><b>Skills you’ll need:</b>To effectively learn Next.js, a solid foundation in JavaScript and React is crucial, alongside understanding basic web development concepts like HTML, CSS, and JavaScript.</span></p></div></div>
  }
   if(id==='34' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Java+Api Integration</h3>
                         courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Java+API Integration refers to the process of connecting different software applications or systems using Java and APIs (Application Programming Interfaces). </span>
    </p><p className="css-kimdhf">It involves using APIs to enable communication and data exchange between a Java application and external services or other applications. 
      APIs provide a standardized way for different software components to interact, allowing them to exchange data and perform actions
</p>
<p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b> To effectively learn Java, it's helpful to have a foundational understanding of programming concepts and a basic grasp of computer science principles. Familiarity with object-oriented programming (OOP) and basic data structures can also streamline the learning process. A computer with a Java Development Kit (JDK) installed is essential for coding and running Java programs..</span></p></div></div>

  }
    if(id==='35' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Java+Web socket</h3>
    courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>A Websocket allows creating a communication channel between a client and a server.</span>
    </p><p className="css-kimdhf"> In particular, a communication channel that uses the WebSocket protocol as a communication protocol.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To effectively learn Java, it's helpful to have a foundational understanding of programming concepts and a basic grasp of computer science principles. Familiarity with object-oriented programming (OOP) and basic data structures can also streamline the learning process. A computer with a Java Development Kit (JDK) installed is essential for coding and running Java programs.</span></p></div></div>

  }
   if(id==='0' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Introduction to Native Android app in Java or Kotlin</h3>
      courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Native mobile apps are applications developed to target either Android or iOS.</span>
    </p><p className="css-kimdhf"> Developers usually code applications in a specific programming language depending on the operating system they are developing for. You write native Android applications using the Java or Kotlin programming languages.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To develop native Android apps in Java or Kotlin, you'll need a solid foundation in programming,
   including object-oriented programming (OOP) principles. Specifically, you should be proficient in Java or Kotlin, 
   have a good understanding of the Android development environment, and be familiar with various application components and version 
   control. Additionally, 
  having a computer with sufficient resources and familiarity with the Android development tools like Android Studio is essential. </span></p></div></div>

  }
    if(id==='1' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Intermediate Native Android app in Java or Kotlin</h3>
      courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Native mobile apps are applications developed to target either Android or iOS.</span>
    </p><p className="css-kimdhf"> Developers usually code applications in a specific programming language depending on the operating system they are developing for. You write native Android applications using the Java or Kotlin programming languages.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To develop native Android apps in Java or Kotlin, you'll need a solid foundation in programming,
   including object-oriented programming (OOP) principles. Specifically, you should be proficient in Java or Kotlin, 
   have a good understanding of the Android development environment, and be familiar with various application components and version 
   control. Additionally, 
  having a computer with sufficient resources and familiarity with the Android development tools like Android Studio is essential. </span></p></div></div>

  }
    if(id==='2' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Advanced Native Android app in Java or Kotlin</h3>
     courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Native mobile apps are applications developed to target either Android or iOS.</span>
    </p><p className="css-kimdhf"> Developers usually code applications in a specific programming language depending on the operating system they are developing for. You write native Android applications using the Java or Kotlin programming languages.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To develop native Android apps in Java or Kotlin, you'll need a solid foundation in programming,
   including object-oriented programming (OOP) principles. Specifically, you should be proficient in Java or Kotlin, 
   have a good understanding of the Android development environment, and be familiar with various application components and version 
   control. Additionally, 
  having a computer with sufficient resources and familiarity with the Android development tools like Android Studio is essential. </span></p></div></div>

  }
     if(id==='3' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Introduction to Native iOS app in Swift or Objective-C</h3>
      courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Native iOS applications are built specifically for Apple's iOS operating system, using platform-specific languages like Swift or Objective-C.</span>
    </p><p className="css-kimdhf"> A native app is developed within Xcode and follows Apple's Human Interface Guidelines to ensure a smooth and consistent user.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To develop native iOS apps using Swift or Objective-C, you'll need a few prerequisites: a compatible Mac computer, Xcode IDE, and a strong understanding of the respective programming language and the iOS platform frameworks.</span></p></div></div>

  }
    if(id==='4' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Introduction to Mobile app Cross-platform in React Native or Flutter</h3>
       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Flutter provides the following advantages to developers over developing native applications individually</span>
    </p><p className="css-kimdhf">Cross-platform compatibility: Like React Native, Flutter allows you to use a single codebase for multiple platforms, such as Android, iOS, and desktop, to save time, resources, and effort.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>You will need Node, Watchman, the React Native command line interface, a JDK, and Android Studio. While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.</span></p></div></div>

  }
    if(id==='5' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Intermediate Mobile app Cross-platform in React Native or Flutter</h3>
       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Flutter provides the following advantages to developers over developing native applications individually</span>
    </p><p className="css-kimdhf">Cross-platform compatibility: Like React Native, Flutter allows you to use a single codebase for multiple platforms, such as Android, iOS, and desktop, to save time, resources, and effort.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>You will need Node, Watchman, the React Native command line interface, a JDK, and Android Studio. While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.</span></p></div></div>

  }
   if(id==='6' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Advanced Mobile app Cross-platform in React Native or Flutter</h3>
       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Flutter provides the following advantages to developers over developing native applications individually</span>
    </p><p className="css-kimdhf">Cross-platform compatibility: Like React Native, Flutter allows you to use a single codebase for multiple platforms, such as Android, iOS, and desktop, to save time, resources, and effort.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>You will need Node, Watchman, the React Native command line interface, a JDK, and Android Studio. While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.</span></p></div></div>

  }
    if(id==='7' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Mobile app Hosting</h3>
      courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>The simplest way to understand how hosting for mobile apps works is to imagine a computer (called a server) containing an application's files.</span>
    </p><p className="css-kimdhf"> which is always on and makes the app or any information in it accessible to developers and users 24/7. 
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To successfully host a mobile app, you'll need a few key prerequisites. These include setting up a backend server, choosing the right hosting platform, and ensuring the app can connect with the server and users. You'll also need a database to store data and handle user interactions, and secure your app with SSL.</span></p></div></div>

  }
    if(id==='8' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Intermediate Native iOS app in Swift or Objective-C</h3>
       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Native iOS applications are built specifically for Apple's iOS operating system, using platform-specific languages like Swift or Objective-C.</span>
    </p><p className="css-kimdhf"> A native app is developed within Xcode and follows Apple's Human Interface Guidelines to ensure a smooth and consistent user.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To develop native iOS apps using Swift or Objective-C, you'll need a few prerequisites: a compatible Mac computer, Xcode IDE, and a strong understanding of the respective programming language and the iOS platform frameworks.</span></p></div></div>

  }
     if(id==='9' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Advanced Native iOS app in Swift or Objective-C</h3>
      courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Native iOS applications are built specifically for Apple's iOS operating system, using platform-specific languages like Swift or Objective-C.</span>
    </p><p className="css-kimdhf"> A native app is developed within Xcode and follows Apple's Human Interface Guidelines to ensure a smooth and consistent user.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To develop native iOS apps using Swift or Objective-C, you'll need a few prerequisites: a compatible Mac computer, Xcode IDE, and a strong understanding of the respective programming language and the iOS platform frameworks.</span></p></div></div>

  }
  if(id==='10' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Intermediate Mobile Web app</h3>
       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Native iOS applications are built specifically for Apple's iOS operating system, using platform-specific languages like Swift or Objective-C.</span>
    </p><p className="css-kimdhf"> A native app is developed within Xcode and follows Apple's Human Interface Guidelines to ensure a smooth and consistent user.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To develop native iOS apps using Swift or Objective-C, you'll need a few prerequisites: a compatible Mac computer, Xcode IDE, and a strong understanding of the respective programming language and the iOS platform frameworks.</span></p></div></div>

  }
  if(id==='11' && cate==='1'){
    courseTi=<h3 className="h22 text-center">Advanced Mobile Web app</h3>
       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Native iOS applications are built specifically for Apple's iOS operating system, using platform-specific languages like Swift or Objective-C.</span>
    </p><p className="css-kimdhf"> A native app is developed within Xcode and follows Apple's Human Interface Guidelines to ensure a smooth and consistent user.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To develop native iOS apps using Swift or Objective-C, you'll need a few prerequisites: a compatible Mac computer, Xcode IDE, and a strong understanding of the respective programming language and the iOS platform frameworks.</span></p></div></div>

  }
   if(id==='0' && cate==='2'){
    courseTi=<h3 className="h22 text-center">Introduction to mysql workbench</h3>
      courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>MySQL Workbench is a unified visual tool that simplifies database design, development, and administration tasks for MySQL.</span>
    </p><p className="css-kimdhf"> It provides a graphical interface for interacting with MySQL databases, offering features like visual database schema design, 
      SQL development, and comprehensive administration tools.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To effectively use MySQL Workbench, a solid foundation in SQL and a basic understanding of databases is highly recommended. Familiarity with programming concepts and command-line skills can also be helpful.</span></p></div></div>

  }
  if(id==='1' && cate==='2'){
    courseTi=<h3 className="h22 text-center">Intermediate mysql workbench</h3>
     courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>MySQL Workbench is a unified visual tool that simplifies database design, development, and administration tasks for MySQL.</span>
    </p><p className="css-kimdhf"> It provides a graphical interface for interacting with MySQL databases, offering features like visual database schema design, 
      SQL development, and comprehensive administration tools.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To effectively use MySQL Workbench, a solid foundation in SQL and a basic understanding of databases is highly recommended. Familiarity with programming concepts and command-line skills can also be helpful.</span></p></div></div>

  }
    if(id==='2' && cate==='2'){
    courseTi=<h3 className="h22 text-center">Advanced mysql workbench</h3>
      courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>MySQL Workbench is a unified visual tool that simplifies database design, development, and administration tasks for MySQL.</span>
    </p><p className="css-kimdhf"> It provides a graphical interface for interacting with MySQL databases, offering features like visual database schema design, 
      SQL development, and comprehensive administration tools.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To effectively use MySQL Workbench, a solid foundation in SQL and a basic understanding of databases is highly recommended. Familiarity with programming concepts and command-line skills can also be helpful.</span></p></div></div>

  }
  if(id==='3' && cate==='2'){
    courseTi=<h3 className="h22 text-center">Introduction to Figma Design tool</h3>
     courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Figma is a cloud-based design tool primarily used for creating and testing websites and applications.</span>
    </p><p className="css-kimdhf"> It's a popular choice among UX and UI designers for designing user interfaces, creating prototypes, and managing design systems.
      Figma allows for real-time collaboration, sharing designs, and generating code for export. 
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To effectively use Figma, a popular interface design tool, it's beneficial to have a foundational understanding of vector graphics, experience with other design tools, and knowledge of UI/UX design principles.
  Familiarity with basic coding concepts (HTML, CSS, JavaScript) can also be helpful for smoother communication with developers and a deeper understanding of design constraints. </span></p></div></div>

  }
   if(id==='4' && cate==='2'){
     courseTi=<h3 className="h22 text-center">Intermediate Figma Design tool</h3>
     courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Figma is a cloud-based design tool primarily used for creating and testing websites and applications.</span>
    </p><p className="css-kimdhf"> It's a popular choice among UX and UI designers for designing user interfaces, creating prototypes, and managing design systems.
      Figma allows for real-time collaboration, sharing designs, and generating code for export. 
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To effectively use Figma, a popular interface design tool, it's beneficial to have a foundational understanding of vector graphics, experience with other design tools, and knowledge of UI/UX design principles.
  Familiarity with basic coding concepts (HTML, CSS, JavaScript) can also be helpful for smoother communication with developers and a deeper understanding of design constraints. </span></p></div></div>

  }
   if(id==='5' && cate==='2'){
     courseTi=<h3 className="h22 text-center">Advanced Figma Design tool</h3>
     courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>Figma is a cloud-based design tool primarily used for creating and testing websites and applications.</span>
    </p><p className="css-kimdhf"> It's a popular choice among UX and UI designers for designing user interfaces, creating prototypes, and managing design systems.
      Figma allows for real-time collaboration, sharing designs, and generating code for export. 
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To effectively use Figma, a popular interface design tool, it's beneficial to have a foundational understanding of vector graphics, experience with other design tools, and knowledge of UI/UX design principles.
  Familiarity with basic coding concepts (HTML, CSS, JavaScript) can also be helpful for smoother communication with developers and a deeper understanding of design constraints. </span></p></div></div>

  }
   if(id==='6' && cate==='2'){
     courseTi=<h3 className="h22 text-center">Intermediate EdrawMax</h3>
    courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>EdrawMax is an all-in-one diagramming software that allows users to create a wide variety of diagrams, including flowcharts, mind maps, organizational charts, network diagrams, and more.</span>
    </p><p className="css-kimdhf"> It's available for both desktop (Windows, Mac, and Linux) and online use, offering a comprehensive solution for various diagramming needs. 
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To run EdrawMax, you'll need a computer with specific system requirements, including a compatible operating system, a minimum amount of RAM, and enough free hard disk space. You'll also need an internet connection for product activation and updates.</span></p></div></div>

  }
    if(id==='7' && cate==='2'){
     courseTi=<h3 className="h22 text-center">Advanced EdrawMax</h3>
     courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>EdrawMax is an all-in-one diagramming software that allows users to create a wide variety of diagrams, including flowcharts, mind maps, organizational charts, network diagrams, and more.</span>
    </p><p className="css-kimdhf"> It's available for both desktop (Windows, Mac, and Linux) and online use, offering a comprehensive solution for various diagramming needs. 
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To run EdrawMax, you'll need a computer with specific system requirements, including a compatible operating system, a minimum amount of RAM, and enough free hard disk space. You'll also need an internet connection for product activation and updates.</span></p></div></div>

  }
    if(id==='0' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Introduction to SQL Database</h3>
       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>SQL database or relational database is a collection of highly structured tables, wherein each row reflects a data entity, and every column defines a specific information field.</span>
    </p><p className="css-kimdhf"> Relational databases are built using the structured query language (SQL) to create, store, update, and retrieve data.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To effectively learn SQL, a foundational understanding of databases, how data is organized, and some basic computer concepts can be helpful, but aren't strictly necessary.
  Familiarity with spreadsheets or working with structured data can also provide a beneficial starting point. </span></p></div></div>

  }
    if(id==='1' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Intermediate SQL Database</h3>
       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>SQL database or relational database is a collection of highly structured tables, wherein each row reflects a data entity, and every column defines a specific information field.</span>
    </p><p className="css-kimdhf"> Relational databases are built using the structured query language (SQL) to create, store, update, and retrieve data.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To effectively learn SQL, a foundational understanding of databases, how data is organized, and some basic computer concepts can be helpful, but aren't strictly necessary.
  Familiarity with spreadsheets or working with structured data can also provide a beneficial starting point. </span></p></div></div>

  }
     if(id==='2' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Advanced SQL Database</h3>
        courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>SQL database or relational database is a collection of highly structured tables, wherein each row reflects a data entity, and every column defines a specific information field.</span>
    </p><p className="css-kimdhf"> Relational databases are built using the structured query language (SQL) to create, store, update, and retrieve data.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To effectively learn SQL, a foundational understanding of databases, how data is organized, and some basic computer concepts can be helpful, but aren't strictly necessary.
  Familiarity with spreadsheets or working with structured data can also provide a beneficial starting point. </span></p></div></div>

  }
   if(id==='3' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Introduction to mysql</h3>
       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>MySQL is a widely used, open-source Relational Database Management System (RDBMS). It's designed to store and manage data in a structured format, using tables, rows, and columns organized into schemas.</span>
    </p><p className="css-kimdhf"> MySQL uses Structured Query Language (SQL) to interact with the database, allowing users to create, read, update, and delete data.
      
  </p>
  <p className="css-kimdhf">
  <span><b>Skills you’ll need:</b>In MySQL, a prerequisite database refers to the foundational database that is needed before you can interact with or use another database or application.</span></p></div></div>

  }
   if(id==='4' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Intermediate  mysql</h3>
     courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>MySQL is a widely used, open-source Relational Database Management System (RDBMS). It's designed to store and manage data in a structured format, using tables, rows, and columns organized into schemas.</span>
    </p><p className="css-kimdhf"> MySQL uses Structured Query Language (SQL) to interact with the database, allowing users to create, read, update, and delete data.
      
  </p>
  <p className="css-kimdhf">
  <span><b>Skills you’ll need:</b>In MySQL, a prerequisite database refers to the foundational database that is needed before you can interact with or use another database or application.</span></p></div></div>

  }
   if(id==='5' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Advanced  mysql</h3>
      courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>MySQL is a widely used, open-source Relational Database Management System (RDBMS). It's designed to store and manage data in a structured format, using tables, rows, and columns organized into schemas.</span>
    </p><p className="css-kimdhf"> MySQL uses Structured Query Language (SQL) to interact with the database, allowing users to create, read, update, and delete data.
      
  </p>
  <p className="css-kimdhf">
  <span><b>Skills you’ll need:</b>In MySQL, a prerequisite database refers to the foundational database that is needed before you can interact with or use another database or application.</span></p></div></div>

  }
  if(id==='6' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Introduction to Postgresql</h3>
      courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>PostgreSQL is a powerful, open-source, relational database management system (RDBMS). It's known for its reliability, flexibility, and adherence to open technical standards. </span>
    </p><p className="css-kimdhf"> PostgreSQL supports both SQL (relational) and JSON (non-relational) querying, making it suitable for a wide range of applications, including web, mobile, and analytical applications.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>The prerequisites for using a PostgreSQL database include understanding basic SQL concepts,
   having sufficient disk space, and ensuring the operating system user has necessary file permissions. Additionally, on Linux systems, the locale should use UTF-8 encoding, and the GLIBC library should be version 2.14 or later. </span></p></div></div>

  }
  if(id==='7' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Intermediate Postgresql</h3>
     courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>PostgreSQL is a powerful, open-source, relational database management system (RDBMS). It's known for its reliability, flexibility, and adherence to open technical standards. </span>
    </p><p className="css-kimdhf"> PostgreSQL supports both SQL (relational) and JSON (non-relational) querying, making it suitable for a wide range of applications, including web, mobile, and analytical applications.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>The prerequisites for using a PostgreSQL database include understanding basic SQL concepts,
   having sufficient disk space, and ensuring the operating system user has necessary file permissions. Additionally, on Linux systems, the locale should use UTF-8 encoding, and the GLIBC library should be version 2.14 or later. </span></p></div></div>

  }
    if(id==='8' && cate==='3'){
     courseTi=<h3 className="h22 text-center">Advanced Postgresql</h3>
     courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>PostgreSQL is a powerful, open-source, relational database management system (RDBMS). It's known for its reliability, flexibility, and adherence to open technical standards. </span>
    </p><p className="css-kimdhf"> PostgreSQL supports both SQL (relational) and JSON (non-relational) querying, making it suitable for a wide range of applications, including web, mobile, and analytical applications.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>The prerequisites for using a PostgreSQL database include understanding basic SQL concepts,
   having sufficient disk space, and ensuring the operating system user has necessary file permissions. Additionally, on Linux systems, the locale should use UTF-8 encoding, and the GLIBC library should be version 2.14 or later. </span></p></div></div>

  }
   if(id==='0' && cate==='4'){
     courseTi=<h3 className="h22 text-center">Introduction to Api development in Php</h3>
       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>An Application Programming Interface, or API, defines the classes, methods, functions and variables that your application will need to call in order to carry out its desired task.</span>
    </p><p className="css-kimdhf"> In the case of PHP applications that need to communicate with databases the necessary APIs are usually exposed via PHP extensions.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To create a PHP API, ensure you have: PHP 8.0 or higher, with essential extensions like ext-json and ext-pdo. Composer to manage dependencies. A web server (Apache or nginx) with proper routing configuration.</span></p></div></div>

  }
  if(id==='1' && cate==='4'){
     courseTi=<h3 className="h22 text-center">Advanced Api development in Php</h3>
       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>An Application Programming Interface, or API, defines the classes, methods, functions and variables that your application will need to call in order to carry out its desired task.</span>
    </p><p className="css-kimdhf"> In the case of PHP applications that need to communicate with databases the necessary APIs are usually exposed via PHP extensions.
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To create a PHP API, ensure you have: PHP 8.0 or higher, with essential extensions like ext-json and ext-pdo. Composer to manage dependencies. A web server (Apache or nginx) with proper routing configuration.</span></p></div></div>

  }
  if(id==='2' && cate==='4'){
     courseTi=<h3 className="h22 text-center">Introduction to Api development in C#</h3>
       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>In C#, API development involves creating web services, commonly referred to as Web APIs, using frameworks like ASP.NET Core.</span>
    </p><p className="css-kimdhf"> These APIs allow different applications (like web browsers, mobile apps, or other services) to interact with each other by exchanging data via HTTP requests and responses. 
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To develop C# APIs, you'll need basic C# programming knowledge, a suitable IDE (like Visual Studio or Visual Studio Code with the C# Dev Kit), the .NET SDK, and familiarity with HTTP requests/responses and REST principles.</span></p></div></div>

  }
   if(id==='3' && cate==='4'){
     courseTi=<h3 className="h22 text-center">Advanced Api development in C#</h3>
       courseCont=<div className="css-tvqrra">
    <div className="css-ngd472">
    <p className="css-6ecy9b">
    <span>In C#, API development involves creating web services, commonly referred to as Web APIs, using frameworks like ASP.NET Core.</span>
    </p><p className="css-kimdhf"> These APIs allow different applications (like web browsers, mobile apps, or other services) to interact with each other by exchanging data via HTTP requests and responses. 
  </p>
  <p className="css-kimdhf">
  <span> <b>Skills you’ll need:</b>To develop C# APIs, you'll need basic C# programming knowledge, a suitable IDE (like Visual Studio or Visual Studio Code with the C# Dev Kit), the .NET SDK, and familiarity with HTTP requests/responses and REST principles.</span></p></div></div>

  }
   
  return (
   <div className="container-fluid course-margin">
    <nav aria-label="Breadcrumbs" className="css-1nd9583"><ol className="cds-breadcrumbs-list"><li className="cds-breadcrumbs-listItem"><a className="cds-175 cds-breadcrumbs-homeIcon cds-iconButton-small cds-iconButton-ghost cds-iconButton-small cds-iconButton-ghost css-1k6hhal"  aria-label="Home" href="/" data-testid="home-link"><svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-:R6j9kd9lak6da:" className="css-1u8qly9"><path d="M5.5 15.5h2v-4.25c0-.213.072-.39.216-.534a.726.726 0 01.534-.216h3.5c.213 0 .39.072.534.216a.726.726 0 01.216.534v4.25h2V8.25L10 4.875 5.5 8.25v7.25zM4 15.25v-7c0-.234.052-.456.156-.665.104-.21.254-.39.448-.543l4.5-3.375c.278-.195.577-.292.896-.292.32 0 .618.097.896.292l4.5 3.375c.194.152.344.334.448.543.104.21.156.431.156.665v7c0 .481-.171.893-.514 1.236A1.685 1.685 0 0114.25 17h-2.5a.726.726 0 01-.534-.216.726.726 0 01-.216-.534V12H9v4.25c0 .212-.072.39-.216.534A.726.726 0 018.25 17h-2.5c-.481 0-.893-.171-1.236-.514A1.685 1.685 0 014 15.25z" fill="currentColor"></path></svg></a></li><li className="cds-breadcrumbs-listItem"><svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-:Rfkd9lak6da:" className="css-1lzurvc"><path d="M10.875 10L7.458 6.583a.73.73 0 010-1.062.73.73 0 011.07.007l3.951 3.951a.756.756 0 01.208.525.69.69 0 01-.208.517l-3.951 3.951a.693.693 0 01-.528.226.759.759 0 01-.52-.24.73.73 0 010-1.062L10.874 10z" fill="currentColor"></path></svg><a className="cds-119 cds-113 cds-115 cds-breadcrumbs-link css-3uwyv7 cds-142"  aria-current="page">Careers</a></li></ol></nav>
    <div className='row'>
        <div className='col-md-6 d-flex flex-column'>
            <h1 className='fw-s text-wrap'>{courseTi}</h1>
                      {courseCont}
                      <button className="btn btn-color-service w-25 my-3" onClick={showLoginModels}>Join for Free</button>
             </div>
           
            

 <div className='col-md-6'>
    <div className="cds-9 css-1jmy2qb cds-11 cds-grid-item cds-56 cds-64"><div className="css-125uo4z"><img src={HapIconn}  style={{maxWidth:"100%",height:"auto"}} alt=""/></div></div>
 </div>
 
    </div>
 {
 
 loginm &&
 (<LoginModal/>)
 
 }  
       </div>
       
  )
}
