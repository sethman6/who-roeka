import React from 'react'
/*
this needs to be passed down props which contain the Score
*/
function Score (props) {
  let score = props.score
  return (
    <div>
      <h3> Your score is ${score}/10`</h3>
    </div>
  )

}

export defaults score
