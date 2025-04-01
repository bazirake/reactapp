

import "../Components/Navbars.css";

function Login() {

  function Hello(){
    let x=45;
    let y=454;
    var sums=x+y;
    alert("sum="+sums);

  }

  return (
    <div className="row d-flex justify-content-center align-items-center">
     <div className="card col-md-6">
     <h1 className="card card-header bg bg-primary text-white">Login form</h1>  

     <form className="card card-body">
  <input type="text" className="form-control my-3"  placeholder="Username"/>
  <input type="password"  className="form-control" placeholder="Password"/>
  <button type="button" className="btn-p my-3" onClick={Hello}>Sum</button>
</form>
      </div> 

    <div>


    </div>
      
      
      </div>
  )
}


export default Login