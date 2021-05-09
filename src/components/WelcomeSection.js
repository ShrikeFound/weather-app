import React, { useRef } from 'react'
import sunIcon from '../assets/icon-sun.svg'
const WelcomeSection = ({ timeData,visitorIP }) => {
  console.log(timeData)
  console.log(visitorIP)
  const arrow = useRef()

  const toggleArrowDirection = ()=> {
    // console.log(arrow.current)
    arrow.current.classList.toggle("arrow-down")
    }




  return (
    <div className="welcome-section">
      <div className="container welcome-container">
        <div className="col">
        <div className="header">
          <img src={sunIcon} className="icon" alt="refresh icon" />
          <h4>Good MORNING, It's currently</h4>
        </div>
          <h1>{timeData.datetime}<span className="light">{ timeData.zone}</span></h1>
          <h3>In {visitorIP.city}, {visitorIP.region_code}</h3>
      </div>
      <div className="col button-col">
          <button className="button">more
             <span className="arrow-circle arrow-top" ref={arrow} onClick={toggleArrowDirection}></span>
      </button>
      </div>
      
      </div>
      
    </div>
  )
}

export default WelcomeSection
