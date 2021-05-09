
import { useEffect, useState } from 'react';
import ExpandedSection from './components/ExpandedSection';
import QuoteSection from './components/QuoteSection';
import WelcomeSection from './components/WelcomeSection';
import './Sass/App.scss'

function App() {
  const [loading,setLoading] = useState(false)
  const [visitorIP, setvisitorIP] = useState({})
  const [timeData, setTimeData] = useState({ zone: "PST", datetime: "", weekday: 1, yearday: 10, yearweek: 1 })
  const isMorning = useState(false);

  const fetchIP = async () => {
    // const apiKey = "at_ZHtok4pIJ0ABzce5FVeMnpG79cbYY"
    try {
      const response = await fetch(`https://freegeoip.app/json/`, {mode:'cors'})
      const result = await response.json();
      setvisitorIP(result)      
    }catch(err) {
      console.log(err)
    }


  }

  useEffect(() => {
    console.log("fetching ip:",visitorIP.ip)
      fetchIP()    
  },)

  const formatDate = (datei) => {
  const date = new Date(datei)
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes
  return strTime
}



  const fetchTime = async () => {
    console.log("fetching")
    try {
      const response = await fetch(`http://worldtimeapi.org/api/ip/${visitorIP.ip}`, {mode: 'cors'});
    console.log(response)
    const result = await response.json();
    const newTimeData = {
      ...timeData,
      zone: result.abbreviation,
      datetime: formatDate(Date.parse(result.datetime)),
      yearday: result.day_of_year,
      weekday: result.day_of_week,
      yearweek: result.week_number
    }
    setTimeData(newTimeData)
    } catch (err) {
      console.log(err)
    }
    
  }







  useEffect(() =>{
    if (visitorIP.ip) {
      console.log("ip: ",visitorIP.ip)
      fetchTime();
    }
  },)


  if (loading) {
    return (
      <div className="App"><p>Loading...</p></div>
    )
  }
  
  return (
    <div className="App">
      <QuoteSection />
      <WelcomeSection timeData={timeData} visitorIP={visitorIP}/>
      <ExpandedSection/>
    </div>
  );
}

export default App;
