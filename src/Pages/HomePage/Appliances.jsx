import React from "react";
import Slider from "react-slick";
import { Container } from '@mui/material';

const Appliances =() =>{
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    return(
        <div className='Appliances'>
          <Container maxWidth="lg">
            <h2>Large Appliances</h2>
            <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://m.media-amazon.com/images/I/51TVTSa62CL._AC_SY200_.jpg" alt="" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/41OzfmPCR1L._AC_SY200_.jpg" alt="" />
        </div>
        <div>
          <img src="	https://m.media-amazon.com/images/I/51dS8rFpCHL._AC_SY200_.jpg" alt="" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/51VksmJ5bWL._AC_SY200_.jpg" alt="" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/51s1nqLUTkL._AC_SY200_.jpg" alt=" " />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/51XLoTUFlAL._AC_SY200_.jpg" alt="" />
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/I/51XLoTUFlAL._AC_SY200_.jpg" alt="" />
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/I/5120AZem0QL._AC_SY200_.jpg" alt="" />
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/I/419924ufSML._AC_SY200_.jpg" alt="" />
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/I/61vrzbNcHYL._AC_SY200_.jpg" alt="" />
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/I/41QgYzgVXiL._AC_SY200_.jpg" alt="" />
        </div>
      </Slider>
    </div>
    </Container>
        </div>
        
    )
}
export default  Appliances