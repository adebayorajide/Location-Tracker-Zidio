import "./hero.css"
import fisrtMap from '../Images/first map.png'
import location from "../Images/Vector (6).png"
import privacy from "../Images/Privacy.png"
import history from "../Images/Group 1.png"
import secondMap from "../Images/second map.png"
import family from "../Images/family.png"
import pet from "../Images/dog.png"
import toy from "../Images/car.png"
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="leftHero">
          <h1>
            Stay Connected, Stay Secured with <br />{" "}
            <span id="name">Geotracker</span>
          </h1>
          <p>
            Empower yourself with real time location tracking for peace of mind.
          </p>
          <div className="try">
            <button>Try It Now</button>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="rightHero">
          <img src={fisrtMap} alt="map" />
          <div className="glob">
            <h3>+10,000</h3>
            <p>Users Globally</p>
          </div>
        </div>
      </div>

      <div className="features">
        <h1>Our Core Features</h1>
        <p>Dive deep into our cutting-edge tracking feature</p>
        <div className="feat">
          <div className="over real">
            <img src={history} alt="location icon" />
            <h3>Real-Time Tracking</h3>
            <p>
              Get instant notifications about location changes and set custom
              alerts for any movement or geofenced areas.
            </p>
          </div>
          <div className="over log">
            <img src={location} alt="History icon" />
            <h3>History Logs</h3>
            <p>
              Review location history with detailed reports to gain insights and
              optimize your tracking needs.
            </p>
          </div>
          <div className="over use">
            <img src={privacy} alt="privacy icon" />
            <h3>User Privacy</h3>
            <p>
              We prioritize your privacy with advanced encryption and secure
              data management for all our users.
            </p>
          </div>
        </div>
        <button className="moreBtn">More Info</button>
      </div>
      <section className="stats">
        <h1>By the Numbers</h1>
        <p>
          Statistics speak louder than words. Check out the <br /> impact
          GeoTracker has already made in the location <br /> tracking world.
        </p>
        <div className="evi">
          <img src={secondMap} alt="second map" />
          <div className="numbers">
            <div className="data world">
              <h4>10,000</h4>
              <p>Users Worldwide</p>
            </div>
            <div className="data up">
              <h4>99.98%</h4>
              <p>Uptime Guarantee</p>
            </div>
            <div className="data ind">
              <h4>10 Years</h4>
              <p>Industry Experience</p>
            </div>
          </div>
        </div>
      </section>
      <section className="fourth">
        <div className="advance">
          <h1>
            <p>Advanced</p>
            <p>Technology</p>
          </h1>
          <p className="para">
            Our cutting-edge Features ensure precise location <br />
            tracking and seamless user experience, leveraging <br /> the latest
            technological advancements.
          </p>
        </div>
        <div className="imgContainer">
          <div className="safety">
            <img src={family} alt="safety" />
            <p>Family safety</p>
          </div>
          <div className="safety pet">
            <img src={pet} alt="pet" />
            <p>Pet Tracking</p>
          </div>
          <div className="safety fleet">
            <img src={toy} alt="fleet" />
            <p>Fleet Management</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero