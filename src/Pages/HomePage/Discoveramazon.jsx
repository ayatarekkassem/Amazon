import React from "react";
import Slider from "react-slick";
import './HomePage.css';
import { Container } from '@mui/material';

const Discoveramazon = () =>{
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
        <div className="discover">
          <Container maxWidth="lg">

            <h2>Discover Amazon</h2>
            <div className="slider-container">
        <Slider {...settings}>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886076_200x200_1X._CB577290887_.jpg" alt="" />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886068_200x200_1X._CB577290887_.jpg" alt="" />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886082_200x200_1X._CB577290887_.jpg" alt="" />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886075_200x200_1X._CB577290887_.jpg" alt="" />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886064_200x200_1X._CB577290887_.jpg" alt="" />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5900023_200x200_1X._CB577651073_.jpg" alt="" />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886066_200x200_1X._CB577290887_.jpg" alt="" />
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886069_200x200_1X._CB577290887_.jpg" alt="" />
            </div>
        </Slider>
        </div>
        </Container>
        </div>
    )
}
export default Discoveramazon