import React from 'react'
import Score from './Score'


function FinalPage (props) {
  render(
    <div className="finalPage">
      <h1> Finnishd </h1>
    <Score score={props}/>
    </div>
  )
}

export default FinalPage
