import React from 'react'

const ExpandedSection = ({ isExpanded,isMorning,timeData,visitorIP }) => {
  return (
    <div className={`expanded-section ${isExpanded ? "expanded" : ""} ${isMorning ? "":"night"}`}>
      <div className="container expanded-container">
        <div className="expanded-value">
          <h6>Current Timezone</h6>
          <h2>{visitorIP.time_zone.replace("_"," ")}</h2>
        </div>

        <div className="expanded-value">
          <h6>Day of the Year</h6>
          <h2>{timeData.yearday}</h2>
        </div>

        <div className="expanded-value">
          <h6>Day of the Week</h6>
          <h2>{timeData.weekday}</h2>
        </div>

        <div className="expanded-value">
          <h6>Week Number</h6>
          <h2>{timeData.yearweek}</h2>
        </div>


      </div>
    </div>
  )
}

export default ExpandedSection
