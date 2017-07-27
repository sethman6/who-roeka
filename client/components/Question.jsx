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
        if (correctAnswer === selectedAnswer){
            this.props.incrementScore()
        }
        const nextqid = Number(this.props.match.params.qid) +1
        this.props.history.push('/quiz/'+nextqid)
    }

    render() {
        return (
            <div className='question-page'>
                <div className='question'>
                    <h1>Question: {this.props.question.question}</h1>
                </div>
                <div className='picture-container'>
                    {this.props.people.map((personObj) => <div className='person-img' key={personObj.id}>
                        <button onClick={this.assessAnswer} name={personObj.id}>
                            <img src={`/images/${personObj.img}`}name={personObj.id} />
                        </button></div>)}
                </div>
            </div>
        )
    }
}

export default Questions

// import React from 'react'
// import ReactDOM from 'react-dom'

// function OtherBlogs(props) {
//     console.log(props)
//     const blogs = props.blogs
//     return (
//         <div className='oBlogs'>
//             <h2> Other blogs </h2>
//             <div className='otherBlog-item'>
//             {blogs.map((blog, i)=> <div key={i}> <a href={`${blog.link}`}> {blog.blogTitle} </a> </div>)}
//             </div>
//         </div>
//     )
// }

// export default OtherBlogs

//state.person.id = true