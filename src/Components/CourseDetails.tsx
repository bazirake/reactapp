import React from 'react'
import { useParams } from 'react-router'
import HapIconn from "../assets/Images/HappyIcon.webp"
import "../Components/courseDetail.css"

export default function CourseDetails() {
const {id}=useParams();
const {cate}=useParams();
let courseTi;
if (id==='0' && cate==='0') {
    courseTi=<h3 className="h22 text-center">Introduction to Html</h3>
}

if(id==='1' && cate==='0') {
    courseTi=<h3 className="h22 text-center">Html for Intermediate learner</h3>
}

if(id==='2' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Html for Advanced learner</h3>
}

if(id==='3' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to vanilla css</h3>
}

if(id==='4' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate vanilla css</h3>
}
if(id==='5' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced vanilla css</h3>
}

if(id==='6' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to Bootstrap</h3>
}
if(id==='7' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate Bootstrap</h3>
}
if(id==='8' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced Bootstrap</h3>
}
if(id==='9' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to Tailwind CSS</h3>
}
if(id==='10' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate Tailwind CSS</h3>
}
if(id==='11' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced Tailwind CSS</h3>
}
if(id==='12' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Introduction to vanilla Javascript</h3>
}
if(id==='13' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Intermediate vanilla Javascript</h3>
}
if(id==='14' && cate==='0'){
    courseTi=<h3 className="h22 text-center">Advanced vanilla Javascript</h3>
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
            <h1>{courseTi}</h1>
            <div className="css-tvqrra"><div className="css-ngd472">
                <p className="css-6ecy9b"><span>If you like analyzing data to find insights, creating reports and visualizations, 
                    and working with spreadsheets and databases
                 this role is for you.</span></p><p className="css-kimdhf">A Data Analyst collects,
                     cleans, and interprets data to provide actionable insights. They use tools like Excel,
                      SQL, and Tableau to analyze trends and help businesses make data-driven decisions.</p>
                      <p className="css-kimdhf"><span><b>Skills you’ll need</b>: Business Intelligence, Power BI, Data Management, Research, Dashboard, Microsoft Excel, Data Quality, Data Analysis</span></p></div></div>

             </div>
 <div className='col-md-6'>
    <div className="cds-9 css-1jmy2qb cds-11 cds-grid-item cds-56 cds-64"><div className="css-125uo4z"><img src={HapIconn}  style={{maxWidth:"100%",height:"auto"}} alt=""/></div></div>
 </div>
    </div>
   
      
       </div>
  )
}
