import "./footer.css"
import linkedIn from "../Images/linkedin.png"
import facebook from "../Images/facebook.png"
import gmail from "../Images/gmail.png"
function footer() {
  return (
    <footer className="footer">
      <ul className="socials">
       <li><img src={linkedIn} alt="linkedin" /></li> 
       <li><img src={facebook} alt="facebook" /></li> 
       <li><img src={gmail} alt="gmail" /></li> 
      </ul>
      <p className="prod">
        A product of Geotracker
      </p>
      <p className="copyright">
        &copy; 2024 Geotracker. All rights reserved
      </p>
      
      </footer>
  )
}
export default footer