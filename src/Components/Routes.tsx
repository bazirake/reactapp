<<<<<<< HEAD
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Product from "./Product";
import Contact from "./Contact";
import Login from "./Login";
import Sign from "./Sign";
import Service from "./Service";

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
          path:"/sign",
          element:<Sign/>
       },
        {
         path:"/service",
         element:<Service/>
        }
        ]
    }
=======
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Product from "./Product";
import Contact from "./Contact";
import Login from "./Login";
import Sign from "./Sign";
import Service from "./Service";

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
          path:"/sign",
          element:<Sign/>
       },
        {
         path:"/service",
         element:<Service/>
        }
        ]
    }
>>>>>>> 7367ed59 (first commit)
])