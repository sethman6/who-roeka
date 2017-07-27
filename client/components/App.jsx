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
      questions: [
        { id: 1, question: 'stuff', person: 'josh', pic1: '#', pic2: '#', pic3: '#', pic4: '#' },
        { id: 2, question: 'stuff', person: 'josh' },
        { id: 3, question: 'stuff', person: 'james' },
        { id: 4, question: 'stuff', person: 'james' },
        { id: 5, question: 'stuff', person: 'seth' },
        { id: 6, question: 'stuff', person: 'seth' },
        { id: 7, question: 'stuff', person: 'emma' },
        { id: 8, question: 'stuff', person: 'emma' },
        { id: 9, question: 'stuff', person: 'max' },
        { id: 10, question: 'stuff', person: 'max' },
        { id: 11, question: 'stuff', person: 'ali' },
        { id: 12, question: 'stuff', person: 'ali' },
        { id: 13, question: 'stuff', person: 'nathan' },
        { id: 14, question: 'stuff', person: 'nathan' }
    ],
      persons: [],
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
