import React from 'react'
import "./home.css"
const Home = () => {
  return (
    <div className='home' id= 'home'>
    <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='content'>
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h2>
                    <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa corporis provident natus sunt accusamus laudantium cupiditate, nobis veritatis itaque.
                    </p>
                    <form className='rounded-pill'>
                        <input type= 'email' placeholder="you'r Email"/>
                        <button type='submit' className='btn btn-outline-dark rounded-pill fs-6'>subscribe</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
  )
}

export default Home