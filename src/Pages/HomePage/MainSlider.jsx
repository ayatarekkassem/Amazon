import React from "react";
import "./HomePage.css";
import Slider from "react-slick";
// import { Container } from '@mui/material';
function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true
  };
  return (
    <div className="mainslider">
      
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://m.media-amazon.com/images/I/61Vk5g9BXZL._SX3000_.jpg" alt="slide1" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/617QiShl8bL._SX3000_.jpg" alt="slide 2" />
        </div>
        <div>
          <img src="	https://m.media-amazon.com/images/I/71ZfMoE20PL._SX3000_.jpg" alt="slide 3" />
        </div>
        <div>
          <img src="	https://m.media-amazon.com/images/I/81SRjCcO3lL._SX3000_.jpg" alt="slide 4" />
        </div>
        <div>
          <img src="ttps://m.media-amazon.com/images/I/61StmQqAXQL._SX3000_.jpg" alt="slide5" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/61NM-IA1oXL._SX3000_.jpg" alt="slide 6" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/71gYuONHhzL._SX3000_.jpg" alt="slide7" />
        </div>
      </Slider>
    </div>
   
    </div>
  );
}

export default MainSlider;
