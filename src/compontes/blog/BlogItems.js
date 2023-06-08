import React from 'react'

const BlogItems = ({img, desc, title}) => {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12 mt-4'>
        <div class="card my-3 text-start" >
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title fs-5">{title}</h5>
                <p class="card-text w-100 text-muted lh-base px-2 py-1">{desc}</p>
                <a href="#" class="btn btn-dark float-end">read</a>
            </div>
        </div>
        </div>
  )
}

export default BlogItems