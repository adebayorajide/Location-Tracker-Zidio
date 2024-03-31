import { Link } from 'react-router-dom';
import logo from '../Images/Logo 1.png';
import { useState } from 'react';
import "./navbar.css"

function Navbar() {
const [open, setOpen] = useState(false);

function handleClick() {
  setOpen(!open);
}

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul
        id="navLink"
        className={open ? "#navLink active" : "#navLink"}
      >
        <li>
          <Link to="/features" className="link">
            Features
          </Link>
        </li>
        <li>
          <Link to="/signup" className="link">
            Signup
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact Us
          </Link>
        </li>
        <li>
          <button>Try It Now</button>
        </li>
      </ul>
      <div className="mobile">
        <i
          onClick={handleClick}
          className={open ? "fa-solid fa-times" : "fa-solid fa-bars"}
        ></i>
      </div>
    </nav>
  );
}
export default Navbar