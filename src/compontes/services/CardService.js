import React from 'react'

const CardService = ({icon, titel, text}) => {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12 mt-4'>
        <div className="card text-center p-3 rounded" >
            <div className="card-body">
                <div className='icon-service rounded-circle my-3'>
                <i className={icon}></i>
                </div>
                <h5 className="card-title">{titel}</h5>
                <p className="card-text"> {text}</p>
            </div>
        </div>
    </div>
  )
}

export default CardService