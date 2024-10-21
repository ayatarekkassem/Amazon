import DealsData from '../../amazoneDataa/DealsData.js';
import React from "react";
import Slider from "react-slick";
import './HomePage.css';
import { Container } from '@mui/material';
const Deals =() =>{
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
      <div className='deals'>
         <Container maxWidth="lg">
        <div className='deals-header'>
          <h2>Shop Today's Deals</h2>
          {/* <button>See More Deals</button> */}
        </div>
      <Slider {...settings}>
            
              {DealsData.map((deal) =>(
                <div key={deal.id}>
                  <img src={deal.image} alt="deal.title" />
                  <h3>{deal.title}</h3>
                  <span className="price">{deal.price}</span>
                  <span>{deal.off}</span>
                </div>
              ))}
             
            
            </Slider>
            </Container>
          </div>
    )
}
export default Deals