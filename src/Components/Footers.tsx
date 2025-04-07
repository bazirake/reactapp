
import "../Components/Navbars.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import { NavLink } from 'react-router';
function Footers() {
  return (
    <footer className="footer-color text-dark py-4">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h5>About Us</h5>
        <p className="text-dec">ETC is Exeptional Techcompany aiming at delivering tech Services than wherever you can find</p>
      </div>
      <div className="col-md-4">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><NavLink to={`/`} className="text-dark text-dec">Home</NavLink></li>
          <li><NavLink to={`/service`} className="text-dark text-dec">Services</NavLink></li>
          <li><NavLink to={`/contact`} className="text-dark text-dec">Contact</NavLink></li>
          <li><NavLink to={`/product`} className="text-dark text-dec">Product</NavLink></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5>Follow Us</h5>
        <NavLink to="#" className="me-3 text-dec"><i className="bi bi-facebook "></i></NavLink>
        <NavLink to="#" className="me-3 text-dec"><i className="bi bi-twitter-x"></i></NavLink>
        <NavLink to="#" className="me-3 text-dec"><i className="bi bi-instagram"></i></NavLink>
        <NavLink to="#" className="me-3 text-dec"><i className="bi bi-linkedin"></i></NavLink>
        <NavLink to="#" className="me-3 text-dec"><i className="bi bi-instagram"></i></NavLink>
        <NavLink to="#" className="me-3 text-dec"><i className="bi bi-youtube"></i></NavLink>
        
        <br></br>
        <p className="text-dec">&copy; 2025 E.Tech Company. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
  )
}


export default Footers