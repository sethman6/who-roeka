import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {

  return (
    <div>
      <Link to={`/quiz/1`}> <button className="start-button">Start Quiz</button></Link>
    </div >
  )
}
export default MainPage
