import "./login.css"
function Login() {

  return (
    <div className="container-fluid container-custom" style={{marginTop:"120px"}}>
  <form className="mx-auto form-custom">
    <h4 className="text-center">Login</h4>
       <div className="form-group">
        <label >Username</label>
        <input type="email" className="form-control form-control-login" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
     <div className="form-group">
    <label>Password</label>
      <input type="password" className="form-control form-control-login" id="exampleInputPassword1" placeholder="Password"/>
      <div id="emailHelp" className="form-text mt-3">Forgetpassword?</div>
     </div>
   <button type="submit" className="btn btn-primary mt-4">Login</button>
   </form>   
  </div>
  )     
}

export default Login