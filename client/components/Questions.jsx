import React from 'react'
import { render } from 'react-dom'

import questions from './data/questions.js'


function Questions () {
    const question= this.state.question
    
    render (
        return (
            <div className='question'>
                <h1>Question: {question}</h1>
                <Route exact path='/' component={MainPage} />
            </div>
        
    ),
    )
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