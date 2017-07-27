import React from 'react'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import { render } from 'react-dom'

// import FinalPage from './FinalPage'
import MainPage from './MainPage'
// import Questions from './Questions'
// import StartPage from './StartPage'
// import TextQuestions from './TextQuestions'

const App = () => {
    return (
        <Router>
            {/* <div className='page'> */}
            <div className='content'>
                <h1>Who-roeka Quiz 2017 Edition</h1>
                <Route exact path='/' component={MainPage} />
            </div>
            {/* </div> */}
        </Router>
    )
}

export default App
