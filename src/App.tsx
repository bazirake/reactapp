import { Outlet } from "react-router";
import NavBars from "./Components/NavBars";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footers from "./Components/Footers";
import TopBar from "./Components/TopBar";
import Subfooter from "./Components/Subfooter";

export default function App() {
  return(
    <>
    <TopBar/>
    <NavBars />
   <div className="container-fluid">
   <Outlet />

   </div>
    

    <Footers/>
    <Subfooter/>
    </>
  )
}
