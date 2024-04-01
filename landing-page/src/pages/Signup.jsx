import "./signup.css";
import geotracker from "../Images copy/Logo 1.png";
import { useState } from "react";
import { Link } from "react-router-dom";
//import {useHistory} from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  //const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const form = {name, email, password}

    
     fetch("https://geolocation-tracker-be.onrender.com/api/v1/auth/signup", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(form),
     })
       .then((res) => res.json())
       .then((res) => console.log(res))
       .catch((error) => console.log(error));
      

         if(name === "" || name === null || email === "" || email === null || password === "" || password === null) {
          setError("Field cannot be empty")
        return false;
    }

    // history.push('/dashboard')
  }
  return (
    <div className="wrapper">
      <div className="container">
        <div className="account">
          <div className="logo">
            <img src={geotracker} alt="Geotracker logo" />
          </div>
          <p id="well">Welcome To</p>
          <h1>GeoTracker</h1>
          <p>Let&apos; get to know you.</p>
          <p className="error" id="error">
            {error}
          </p>
          <form id="form" onSubmit={handleSubmit}>
            <input
              name="fullName"
              type="text"
              id="name"
              placeholder=" Your Name"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              name="email"
              type="text"
              id="email"
              placeholder="Your Email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="acc">
              <p>Let&apos; protect your account.</p>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="password_error">
                Password must be between 8 and 15 characters
              </span>
              {/* <input type="password" id="confirm_password" placeholder="Confirm Password" class="input">
    <div class="terms">
    <input type="checkbox" id="agree" >
<p>I agree to the <a href="#">Terms and conditions</a> </p>
 </div>  */}
              <Link to="/dashboard">
                <button type="submit">Sign Up Now</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;
