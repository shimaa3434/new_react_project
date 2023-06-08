import React from 'react'
import "./services.css"
import CardService from './CardService'
import {service} from '../../data.js' 
import serviceVideo from '../../asstes/video/srevice.mp4'

const Services = () => {
  return (
    <div className='services text-center my-4' id= 'services'>
        <div className='container'>
            <div className='row py-4'>
                <div className='col-lg-12'>
                    <h2 className=''>our services</h2>
                    <hr className='w-25 mx-auto bg-dark my-4'/>
                    <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa corporis provident natus sunt accusamus laudantium cupiditate, nobis veritatis itaque.
                    </p>
                </div>
            </div>
            <div className='row my-3'>
                {service.map((item)=> <CardService icon={item.icon} titel={item.titel} text={item.text}/>)}
            </div>
            <div className='row py-5 mt-5 '>
                <div className='col-md-6 col-sm-12 text-start mb-sm-3'>
                    <h3 className='h2 display-6 fw-bold fst-italic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
                    <p className='w-75 lh-base text-start text-muted'>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa corporis provident natus sunt accusamus laudantium cupiditate, nobis veritatis itaque.
                    </p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                    </ul>
                    <button type='submit' className='btn btn-outline-dark rounded-pill fs-6'>subscribe</button>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <video autoPlay muted loop className='img-fluid'>
                        <source src={serviceVideo} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services