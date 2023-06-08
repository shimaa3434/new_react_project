import React from 'react'
import './price.css'
import {prices} from '../../data'
import PriceCard from './PriceCard'
const Price = () => {
  return (
    <div className='price text-center my-4' id= 'price'>
        <div className='container'>
            <div className='row py-4'>
                <div className='col-lg-12'>
                    <h2 className=''>our price</h2>
                    <hr className='w-25 mx-auto bg-dark my-4'/>
                    <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa corporis provident natus sunt accusamus laudantium cupiditate, nobis veritatis itaque.
                    </p>
                </div>
            </div>
            <div className='row my-3'>
                {prices.map((item)=> <PriceCard  type={item.type} price={item.price} bar={item.bar} features={item.features}/>)}
                
            </div>
            
        </div>
    </div>
  )
}

export default Price