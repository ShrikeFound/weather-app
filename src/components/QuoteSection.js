import React, { useEffect, useState } from 'react'
import refreshIcon from '../assets/icon-refresh.svg'
const QuoteSection = ({ isExpanded }) => {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  
  const getRandomQuote = async () => {
    const apiURL = "https://api.quotable.io/random?tags=technology"
    const response = await fetch(apiURL)
    const result = await response.json();
    setQuote(result.content)
    setAuthor(result.author)
    // console.log(result)
  }

  
  useEffect(() => {
    getRandomQuote()
    return () => {
      //
    }
  }, [])

  return (
    <div className={`quote-section ${isExpanded ? "expanded" : ""}`}>
      <div className="quote-container container">
        <div className="quote-text">
          <img src={refreshIcon} alt="refresh icon" onClick={ getRandomQuote}/>
          <p>"{quote}"</p>
          <h5>{author}</h5>
        
        </div>
        
      </div>
    </div>
  )
}

export default QuoteSection
