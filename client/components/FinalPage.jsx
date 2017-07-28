import React from 'react'
import Score from './Score'


function FinalPage (props) {
  return (
    <div className="finalPage">
      <h1> Finished </h1>
      <Score score={props.score}/>
    </div>
  )
}

    //

export default FinalPage
