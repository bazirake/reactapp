
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Product from "./Product";
import Contact from "./Contact";
import Login from "./Login";
import Sign from "./Sign";
import Service from "./Service";
import Course from "./Course";
import About from "./About";
import CourseDetails from "./CourseDetails";
import NotFound from "./NotFound";
import Profile from "./Profile";
import Viewprofile from "./Viewprofile";
import Updateprofile from "./Updateprofile";
import Resetpassword from "./Resetpassword";
import Passwordreset from "./Passwordreset";

export const router=createBrowserRouter([
  {
      path:"/",
      element:<App/>,
      children:[
       {
         path:"/",
         element:<Home/>
       },
       {
         path:"/course",
         element:<Product/>
       },
       {
          path:"/contact",
          element:<Contact/>
       },
       {
          path:"/login",
          element:<Login/>
       },
        {
          path:"/service",
          element:<Service/>
        },
        {
         path:"/courses",
         element:<Course/>
        },
        {
          path:"/courses/:cate/:id",
          element:<CourseDetails/>
        },
         {
          path:"/Sign/:cate/:id",
          element:<Sign/>
        },
        {
         path:"/about",
        element:<About/>
        },
        {
         path:"/passwordreset",
         element:<Passwordreset/>
        },
        {
         path:"/reset-password/:token",
         element:<Resetpassword/>
        },
        {
         path:"/profile/:emails",
          element:<Profile/>,
          children:[{
            path:"viewp",
            element:<Viewprofile/>
          },
          {
             path:"/profile/:emails",
             element:<Viewprofile/>
          },
          {
            path:"udatep",
            element:<Updateprofile/>
          },
           {
            path:"resetp",
            element:<Resetpassword/>
          },
        ]
        },
         {
         path:"/",
        element:<Profile/>
        },
        {
         path:"*" ,
         element:<NotFound/>
        } 
        ]
    }
])