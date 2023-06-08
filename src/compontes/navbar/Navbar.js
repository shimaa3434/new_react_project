import React, { useEffect, useState } from 'react'
import './navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = ()=>{
      if(window.scrollY > 100){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? 'scrolled bg-dark-subtle' : ''}`}>
  <div className="container">
    <a className="navbar-brand" href="#home">logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#price">pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#team">team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#blog">blog</a>
        </li>
        <li className="nav-item">
          <a className="btn btn-outline-dark py-1 px-4 rounded-pill" href='#contact'>contact</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar