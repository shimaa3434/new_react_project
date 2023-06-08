import React from 'react'

const TeamItems = ({nameTeam, position, desc, email, image}) => {
  return (
//     <div className="card ">

//         <div className='img-box'>
//           <img src={image} className="" alt="..."/>
//         </div>
//     <div className="card-body">
//       <h5 className="card-title">{nameTeam}</h5>
//       <span className="card-text">{position}</span>
//       <p className="card-text">{desc}</p>
//       <p className="card-text">{email}</p>
//     </div>
// </div>
                <div class="card mx-4">
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title fw-bold text-uppercase mt-3">{nameTeam}</h5>
                  <p class="card-text card-subtitle mt-2">{position}</p>
                  <p class="card-text text-muted mt-2">{desc}</p>
                  <p class="card-text mt-2">{email}</p>
                </div>
                <div class="d-flex justify-content-evenly p-4 w-50 mx-auto">
                  <i class="fa-brands fa-facebook fa-xs"></i>
                  <i class="fa-brands fa-linkedin-in fa-xs"></i>
                  <i class="fa-solid fa-at fa-xs"></i>
                  <i class="fa-brands fa-whatsapp fa-xs"></i>
                </div>
              </div>
  )
}

export default TeamItems