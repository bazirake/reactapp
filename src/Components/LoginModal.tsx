import "../Components/Loginmodell.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

function LoginModal() {
  return (
 <div id="popup" className="modal">
    <div className="modal-content">
      <a href="#" className="close">&times;</a>
      <h2>Sign up</h2>
      <p>Learn on your own time from Tech companies.</p>
    </div>
  </div>
  )
}

export default LoginModal