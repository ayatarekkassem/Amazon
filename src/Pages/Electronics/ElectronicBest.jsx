
import './Electronics.css';
 import ElectronicsBestData from "../../amazoneDataa/ElectronicsBestData";
import React from "react";
import Slider from "react-slick";

// function ElectronicBest() {
    const ElectronicBest =() =>{
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="electronicBest ">
        <h4>Featured deals</h4>
    <div className="slider-container">
      <Slider {...settings}>
        {/* <div> */}
         
          {ElectronicsBestData.map((electro) =>(
            <div key={electro.id}>
                <div className="electronic-item">
                            <img src={electro.image} alt="" />
                            <div className="electronic-time">
                            <span>{electro.off}</span>            
                            <h6>{electro.title}</h6>
                    </div>
                </div>

            </div>
            ))}
            
        {/* </div> */}
     
      </Slider>
    </div>
    </div>
  );
}

export default ElectronicBest;
