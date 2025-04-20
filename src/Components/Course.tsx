import 'bootstrap/dist/css/bootstrap.min.css';
import "./course.css";
import Tabs from './Tabs';

function Course() {

    const tabData = [
        {
          label: 'Web Development',
          content: <div>Web development!</div>,
        },
        {
          label: 'Mobile App development',
          content: <div>Mobile development</div>,
        },
        {
          label:'System Design',
          content: <div>System Design</div>,
        },

        {
          label:'Database Administration ',
          content: <div>Database Administration</div>,
        }
      ];

 return (

  <div className='container container-mt'>
  <div>
   <h2 className='ext-header'>All the skills you need in one place with ExTech</h2>  
  <div className='ext-text'>From theoretical skills to hands on skills, ExTech supports your professional development.</div>

 <Tabs tabs={tabData}/> 
 </div>   
  </div>

   )
   }

export default Course