import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <div className='banner' id= 'banner'>
    <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='content'>
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h2>
                    <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa corporis provident natus sunt accusamus laudantium cupiditate, nobis veritatis itaque.
                    </p>

                    <button type='submit' className='btn btn-dark rounded-pill fs-6'>subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner