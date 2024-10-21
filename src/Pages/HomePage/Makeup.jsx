import React from "react";
import Slider from "react-slick";
import { Container } from '@mui/material';

const Makeup = () =>{
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
       
        <div className='makeup'>
          <Container maxWidth="lg">

        <h2> Makeup essentials</h2>
        <div className="slider-container">
  <Slider {...settings}>
    <div>
      <img src="https://m.media-amazon.com/images/I/41HRLlcpVbL._AC_SY200_.jpg" alt="" />
    </div>
    <div>
      <img src="https://m.media-amazon.com/images/I/61XeElBKceL._AC_SY200_.jpg" alt="" />
    </div>
    <div>
      <img src="https://m.media-amazon.com/images/I/41YbMLIouhL._AC_SY200_.jpg" alt="" />
    </div>
    <div>
      <img src="https://m.media-amazon.com/images/I/51xU-ATPasL._AC_SY200_.jpg" alt="" />
    </div>
    <div>
      <img src="https://m.media-amazon.com/images/I/61Z41Z2PpsL._AC_SY200_.jpg" alt=" " />
    </div>
    <div>
      <img src="https://m.media-amazon.com/images/I/51jiGmBA9FL._AC_SY200_.jpg" alt="" />
    </div>
    <div>
        <img src="https://m.media-amazon.com/images/I/51XLoTUFlAL._AC_SY200_.jpg" alt="" />
    </div>
    <div>
        <img src="https://m.media-amazon.com/images/I/81u2+i4n4rL._AC_SY200_.jpg" alt="" />
    </div>
    <div>
        <img src="	https://m.media-amazon.com/images/I/61nO-e90NqS._AC_SY200_.jpg" alt="" />
    </div>
    <div>
        <img src="https://m.media-amazon.com/images/I/51L2iCosHGL._AC_SY200_.jpg" alt="" />
    </div>
    <div>
        <img src="https://m.media-amazon.com/images/I/71THuw2vsOL._AC_SY200_.jpg" alt="" />
    </div>
  </Slider>
</div>
</Container>
    </div>
    

    )
}
export default Makeup