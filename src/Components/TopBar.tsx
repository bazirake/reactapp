
import "./Topbar.css"
import "bootstrap-icons/font/bootstrap-icons.css"

function TopBar() {
  return (
    <div className="d-flex bd-highlight top-wrapper">
      <div className="flex-fill p-2 bd-highlight">
      <span className="px-2"><i className="bi bi-telephone"></i>250787124101</span>
      <span><i className="bi bi-envelope"></i>info@exceptionaltech.rw</span>
      </div>
    
   <span className="p-2 flex-fill bd-highlight "> <i className="bi bi-bell-fill px-1"></i> Exceptional Tech Company calls up you all to follow its products</span>
  </div>
  )
}


export default TopBar