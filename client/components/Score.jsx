import React from 'react'
/*
this needs to be passed down props which contain the Score
*/
function Score(props) {
  let  score = props.score
  console.log(score.score)
  const textArray = ["You know knothing", "Pay more attention plz!", "observant kween", "Get out more wierdo!"]
  let text = ""
  if (score < 4) {
    text = textArray[0]
  } else if (score < 6) {
    text = textArray[1]
  } else if (score < 8) {
    text = textArray[2]
  } else if (score < 10) {
    text = textArray[3]
  } else {
    console.log("Error in the score component!")
  }

  return (
    <div className="scoreBox">
      <h3>
        {`Your score is ${score}/10`}</h3>

      <h4>
        {text}</h4>
    </div>
  )

}

export default Score
