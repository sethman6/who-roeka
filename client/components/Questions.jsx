import React from 'react'
import { render } from 'react-dom'

function Questions () {
    const question= this.state.question
    
    render (
        <div className='question-page'>
            <div classname='question'>
                <h1>Question: {question}</h1>
            </div>
            <div className='picture-container'>
            {this.state.questionId.persons.map((personImg) => <div className='person-img'><Link><img src ={`/images/${personImg}`}/></Link></div>)}
            </div>
        </div>
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

//state.person.id = true