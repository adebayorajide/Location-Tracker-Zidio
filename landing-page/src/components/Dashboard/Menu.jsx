import './menu.css'
import home from './assets/home 1.png'
import history from './assets/history 1.png'
import dashboard from './assets/dashboard 1.png'
import favority from './assets/favority 1.png'
import logut from './assets/logut 1.png'
import logit from './assets/logut 2.png'
import saved from './assets/saved 1.png'


function Menu() {
  return (
    <aside className='menu'>
      <div className="log">
      <h1>GeoTracker</h1>
      <p>Location Tracker</p>
      </div>
      <div className="listing">
{/* <div className="men"> */}
      <h3 className='men'>Menu</h3>
      {/* </div> */}
    <div className="one">  
    <img src={home} alt="" />
    <p>Home</p>
    </div> 
    <div className="one">  
    <img src={dashboard} alt="" />
    <p>Dashboard</p>
    </div> 
      <div className="one">
      <img src={favority} alt="" />
        <p>Favourite</p>
      </div>
      <div className="one">
      <img src={history} alt="" />
      <p>History</p>
      </div>
      <div className="one">
      <img src={saved} alt="" />
      <p>Saved</p>
      </div>
      </div>
      <div className="set">
        <div className="one">
      <img src={logit} alt="myt" />
        <p>Settings</p>
        </div>
        <div className="one">
        <img src={logut} alt="" />
        <p>Log Out</p>

        </div>
      </div>
    </aside>
  )
}

export default Menu
