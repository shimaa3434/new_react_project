import React from 'react'
import './contact.css'
import {accordionData} from '../../data'
import AccordionItems from './AccordionItems'
const Contact = () => {
  const [sendData, setSendData] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setSendData('Sending...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className='contact bg-section' id= 'contact'>
      <div className='container'>
      <div className='row py-5 d-flex  align-items-center'>
                <div className='col-md-6 col-sm-12 text-start mb-sm-3'>
                  <div class="accordion" >
                    {accordionData.map((item)=> <AccordionItems title={item.title} content={item.content}/>)}
                  </div>
                </div>
                <div className='col-md-6 col-sm-12 px-md-4'>
                  <h2 className="mb-3">Contact with Us</h2>
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="name">
                        Name
                      </label>
                      <input className="form-control rounded-pill" type="text" id="name" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input className="form-control rounded-pill" type="email" id="email" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="message">
                        Message
                      </label>
                      <textarea className="form-control rounded rounded-2" id="message" required />
                    </div>
                    <button className="btn btn-dark" type="submit">
                      {sendData}
                    </button>
                  </form>
                </div>
            </div>
      </div>

    </div>
  )
}

export default Contact