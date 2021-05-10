import React from 'react'

const ExpandedSection = ({ isExpanded,isMorning }) => {
  return (
    <div className={`expanded-section ${isExpanded ? "expanded" : ""} ${isMorning ? "":"night"}`}>
      <div className="container expanded-container">
        <div className="expanded-value">
          <h6>Current Timezone</h6>
          <h2>California</h2>
        </div>

        <div className="expanded-value">
          <h6>Day of the Year</h6>
          <h2>123</h2>
        </div>

        <div className="expanded-value">
          <h6>Day of the Week</h6>
          <h2>123</h2>
        </div>

        <div className="expanded-value">
          <h6>Week Number</h6>
          <h2>42</h2>
        </div>


      </div>
    </div>
  )
}

export default ExpandedSection
