import React from 'react'
import {Route, Switch, HashRouter as Router} from 'react-router-dom'
import {render} from 'react-dom'
import questions from '../../public/data/questions'
import people from '../../public/data/people'

import FinalPage from './FinalPage'
import MainPage from './MainPage'
import Question from './Question'
// import StartPage from './StartPage'
// import TextQuestions from './TextQuestions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0, //pass to score
      questions: questions,
      people: people
    }
    this.incrementScore = this.incrementScore.bind(this)
  }
  incrementScore() {
    this.setState({
      score: this.state.score + 1
    })
  }

  render() {
    return (
      <Router>
      <div className='content'>
      <h1>Who-roeka Quiz 2017 Edition</h1>
      <Route exact path='/' component={MainPage}/>
      <Route path='/quiz/:qid' render={(routerProps) => {
        console.log(routerProps)
        const qid = Number(routerProps.match.params.qid)
        const question = this.state.questions.find((question) => question.id === qid)
        return <Question {...routerProps}
        people={this.state.people}
        question={question}
        incrementScore={this.incrementScore}
        numQuestions={this.state.questions.length}/>



      }}/>
      <Route path='/result'
      render = {() => {
        <FinalPage
          score = {this.state.score}
        />
      }}/>
      </div>

      </Router>
    )
  }
}

export default App
