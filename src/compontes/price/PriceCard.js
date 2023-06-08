import React from 'react'

const PriceCard = ({type, price, bar, features}) => {
  return (
    <div className='col-lg-4 col-md-12  mt-4'>
    <div class="card text-center p-3" >
        <div class="card-body p-4">
            <h3 className='h4 fw-bold'>{type}</h3>
            <div className='price-box'>
                <span>{price}</span>
                <p className='text-muted'>{bar}</p>
            </div>
            <hr className='w-50 mx-auto'/>
            <ul>
                {features.map((item)=> <li className='text-muted'>{item} </li>)}
            </ul>
            <button type='submit' className='btn btn-dark rounded-pill fs-6'>subscribe</button>

        </div>
    </div>
</div>
  )
}

export default PriceCard