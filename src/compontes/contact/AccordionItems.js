import React, {useState} from 'react'

const AccordionItems = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);
    const handelActive =()=>{
      setIsActive(!isActive)
    }
  return (
    <div class="accordion-item bg-dark text-light">
        <h2 class="accordion-header d-flex justify-content-between align-items-center px-3 py-2" onClick={handelActive}>
            <span className='fs-6'>{title}</span>
            <button className='btn btn-dark'>{isActive ? '-' : '+'}</button>
        </h2>
        {isActive && <div className="accordion-body">{content}</div>}
        </div>
  )
}

export default AccordionItems