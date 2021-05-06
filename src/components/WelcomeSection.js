import React from 'react'
import sunIcon from '../assets/icon-sun.svg'
const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <div className="container welcome-container">
        <div className="col">
        <div className="header">
          <img src={sunIcon} className="icon" alt="refresh icon" />
          <h4>Good MORNING, It's currently</h4>
        </div>
        <h1>11:37<span className="light">PST</span></h1>
        <h3>In San Diego, CA</h3>
      </div>
      <div className="col button-col">
        <button className="button">more
        <b className="arrow">
          <span class="bar left-bar"></span>
          <span class="bar right-bar"></span>
        </b>
      </button>
      </div>
      
      </div>
      
    </div>
  )
}

export default WelcomeSection
