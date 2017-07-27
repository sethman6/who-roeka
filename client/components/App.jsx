import React from 'react'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import { render } from 'react-dom'

// import FinalPage from './FinalPage'
import MainPage from './MainPage'
// import Questions from './Questions'
// import StartPage from './StartPage'
// import TextQuestions from './TextQuestions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0, //pass to score
      
    }
  }

  render() {
    return (
      <Router>
        <div className='content'>
          <h1>Who-roeka Quiz 2017 Edition</h1>
          <Route exact path='/' component={MainPage} />
        </div>
     
      </Router>
    )
  }
}

export default App
