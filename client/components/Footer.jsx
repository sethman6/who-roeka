import React from 'react'
import { render } from 'react-dom'



class Footer extends React.Component {
    constructor(props) {
        super(props)
        const state = this.props.score
        console.log(state, this.state)
    }

    render() {
        return (
            <div id='footer'>
                <div id='footer-text'>
                Your Current Score: {this.props.score}
                </div>                   
            </div>
        )
    }
}

export default Footer