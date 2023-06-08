import React from 'react'
import './team.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TeamItems from './TeamItems'
import {teams} from '../../data'


const Team = () => {
  const settings = {
    infinite: true,
      autoplay: true,
      loop: true,
      fade: true,
      speed: 5000,
      // autoplaySpeed: 5000,
      cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='team bg-section ' id= "team">
      <div className='container'>
        <div className='row '>
          <div className='col-sm-8 offset-sm-2'>
          <Slider {...settings}>
              {teams.map((item, i) => 
                   <TeamItems key={i}
                    nameTeam={item.nameTeam}
                     position={item.position}
                      desc={item.desc}
                       email={item.email}
                       image={item.image}/>
                )}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team