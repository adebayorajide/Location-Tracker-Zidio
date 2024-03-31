import React from 'react'
import './settings.css'
import logout from './assets/logut 1 (1).png'
import notify from './assets/Frame 74.png'
import passport from './assets/Vector (1).png'


function Settings() {
  return (
    <div className='origin'>
      <div className="what">
        <input type="text" name="text" id="" placeholder='What are you looking for?'/>
      <img src={notify} alt="notification icon"/>
      <div className="prof">
        <img src={passport} className="passport" />
      <div className="ray">
        <h4 className='mad'>Madisson Ray</h4>
        <p>maddisonray@gmail.com</p>
        </div>
      </div>
      </div>
      <div className="home">
      <p>Home / Settings</p>
      <h1>Settings</h1>
      </div>
      <div className="details">
      <h3 className='det'>General details</h3>
      <p>Update your photo & Personal details here.</p>
      </div>
      <div className="wrapper">
      <div className="container">
     <div className="nam">
        <h4 className='nami'>Personal Information</h4>
        </div>
        <div className="name">
        <form action="" method="post">
          <label htmlFor="Full Name"> Full Name </label> <br />
            <input type="text" name="Name" id=""placeholder='Maddison' />
            <input type="text" name="Name" id=""placeholder='Ray' /><br />
         
          <label htmlFor="Email Address" >  Email Address  </label> <br />
            <input type="text" name="Name" className='mail' placeholder='maddisonray@gmail.com' />
            </form>
          <div className="uname">
          <form action="" method="post">
            <div className="user">
              <div className="on">
          <label htmlFor="Username">  Username </label> <br />
            <input type="text" name="Name" id=""placeholder='Username' />
            </div>
            <div className="to">
            <label htmlFor="Password"> Password  </label> <br />
            <input type="text" name="Name" id=""placeholder='Password' />
            </div>
            </div>
          </form>
          </div>
     
            <form action="" method="post"></form>
            <label htmlFor="Bio">Bio </label> <br />
            <input type="text" name="Name" className="bio"placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perferendis excepturi facere ratione accusamus' />
            
            <div className="location">
          
          <form action="" method="post">
            <div className="loc">
              <div className="nig">
          <label htmlFor="Location"> Location</label> <br />
            <input type="text" name="Name" id=""placeholder='Nigeria' />
            </div>
            <div className="lag">
            <label htmlFor="City">City </label> <br />
            <input type="text" name="Name" id=""placeholder='Lagos' />
            </div>
            </div>
          </form>
          </div>
        </div>
      </div>
      <div className="beside">
        <div className="nam">
        <h4 className='nami'>Personal Information</h4>
        </div>
        <div className="profile">
        <img src={passport} className="past" />
        <div className="edi">
          <h4>Edit your photo</h4>
         <div className="del">
          <p>Delete</p>
          <p>Update</p>
          </div>
          </div>
        </div>
        <div className="upload">
        <img src={logout} className="" />
          <p><span>Click to upload</span> or Drag and drop <br />
          SVG, PNG, JPG or GIF <br />
            (Max 800 x 400px) </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Settings
