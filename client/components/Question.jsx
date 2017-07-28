import React from 'react'
import { render } from 'react-dom'



class Questions extends React.Component {
    constructor(props) {
        super(props)
        this.assessAnswer = this.assessAnswer.bind(this)
    }
    assessAnswer(evt) {
        const selectedAnswer = evt.target.name
        const correctAnswer = this.props.question.personId || 1
        if (correctAnswer === Number(selectedAnswer)) {
            this.props.incrementScore()
        }
        console.log(this.props.numQuestions)
        console.log(this.props.qid)
        const nextqid = Number(this.props.match.params.qid) + 1
        if (nextqid < this.props.numQuestions) {
            this.props.history.push('/quiz/' + nextqid)
        } else {
            this.props.history.push('/result')
        }

    }

    render() {
        return (
            <div className='question-page'>
                <div className='question'>
                    <h1>Question: {this.props.question.question}</h1>
                </div>
                <div className='picture-container'>
                    {this.props.people.map((personObj) => {
                        const personImg = personObj.img

                        return (
                            <div className='person-img' key={personObj.id}>

                                <button onClick={this.assessAnswer} name={personObj.id}>
                                    <img src={`/images/${personImg}.png`} name={personObj.id} />
                                </button></div>)
                    })}
                </div>
            </div>
        )
    }
}

export default Questions