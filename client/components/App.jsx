var React = require('react')
var ReactDOM = require('react-dom')

import FinalPage from './FinalPage.jsx'
import MainPage from './MainPage.jsx'
import Questions from './Questions.jsx'
import StartPage from './StartPage.jsx'
import TextQuestions from './TextQuestions.jsx'

function App () {
  return (
      <Router>
          <div className='page'>
              <h1>Navigating The Taxonomic Rank</h1>
              <div className='content'>
                  <Route exact path='/' component={MainPage} />
                  <Route exact path='/' component={} />
                  <Route exact path='/list/:rank' component={Rank} />
                  <Route exact path='/list/:rank/:name' component={Name} />
              </div>
          </div>
      </Router>
  )
}

var data = { name: 'mix' }
var view = helloTemplate(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)

