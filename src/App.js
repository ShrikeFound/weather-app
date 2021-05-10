
import { useEffect, useState } from 'react';
import ExpandedSection from './components/ExpandedSection';
import QuoteSection from './components/QuoteSection';
import WelcomeSection from './components/WelcomeSection';
import './Sass/App.scss'
function App() {
  const [loading,setLoading] = useState(true)
  const [visitorIP, setvisitorIP] = useState({})
  const [timeData, setTimeData] = useState({ zone: "PST", datetime: "", weekday: 1, yearday: 10, yearweek: 1, isMorning: true })
  const [isExpanded, setIsExpanded] = useState(false);
  if (timeData.isMorning === false) {
    document.body.classList.add('bg-evening')
    document.body.classList.remove('bg-morning')
  } else {
    document.body.classList.add('bg-morning')
    document.body.classList.remove('bg-evening')
  }


  const expandSection = () => {
    // console.log("expanding section!");
    setIsExpanded(!isExpanded)

  }



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
      fetchIP()    
  },[])

  const formatDate = (datei) => {
  const date = new Date(datei)
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? false : true;
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes
  return [strTime,ampm]
}



  const fetchTime = async () => {
    // console.log("fetching")
    try {
      const response = await fetch(`http://worldtimeapi.org/api/ip/${visitorIP.ip}`, {mode: 'cors'});
    // console.log(response)
    const result = await response.json();
    const newTimeData = {
      ...timeData,
      zone: result.abbreviation,
      datetime: formatDate(Date.parse(result.datetime))[0],
      yearday: result.day_of_year,
      weekday: result.day_of_week,
      yearweek: result.week_number,
      isMorning: true
      // isMorning: formatDate(Date.parse(result.datetime))[1]
      }
      setTimeData(newTimeData)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
    
  }







  useEffect(() =>{
    if (visitorIP.ip) {
      // console.log("ip: ",visitorIP.ip)
      fetchTime();
    }
  },[visitorIP])


  if (loading) {
    return (
      <div className="App"><p>Hello! Please wait...</p></div>
    )
  }
  
  return (
    <div className="App">
      <QuoteSection isExpanded={isExpanded} />
      <WelcomeSection timeData={timeData} visitorIP={visitorIP} expandSection={expandSection} isExpanded={isExpanded}/>
      <ExpandedSection isExpanded={isExpanded} isMorning={timeData.isMorning} timeData={timeData}  visitorIP={visitorIP}  />
    </div>
  );
}

export default App;
