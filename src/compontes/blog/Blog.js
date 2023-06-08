import React from 'react'
import './blog.css'
import BlogItems from './BlogItems'
import { blog } from '../../data'
const Blog = () => {
  return (
    <div className='blog text-center my-4' id="blog">
        <div className='container'>
        <div className='row py-4'>
                <div className='col-lg-12'>
                    <h2 className=''>our blog</h2>
                    <hr className='w-25 mx-auto bg-dark my-4'/>
                    <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa corporis provident natus sunt accusamus laudantium cupiditate, nobis veritatis itaque.
                    </p>
                </div>
          </div>
          <div className='row my-3'>
            {blog.map((i)=> <BlogItems img={i.img} title={i.title} desc={i.desc}/>)}
        </div>
        </div>
       
    </div>
  )
}

export default Blog