import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const FashionSlider = () =>{
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true
  };
    return(
        <div className="fashionSlider">
  <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Link>
          <img src="https://m.media-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1693897_6134136_1500x400_2X._CB580570677_.jpg" alt="Fashion Img" />
          </Link>
        </div>
        <div>
        <Link>
          <img src="https://m.media-amazon.com/images/G/42/SL/March24/XCM_Manual_1702007_6158170_1500x400_2X._CB579400514_.jpg" alt="Fashion Img" />
          </Link>
        </div>
        <div>
        <Link>
          <img src="https://m.media-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1693895_6126432_1500x400_2X._CB581764679_.jpg" alt="fashion Img" />
          </Link>
        </div>
        <div>
          <Link>
          <img src="https://m.media-amazon.com/images/G/42/softlines/2404GB024_EG_L2_SL_Rayban_1500x400_EN._CB560856381_.jpg" alt="Fashion img" />
          </Link>
        </div>
      </Slider>
    </div>
        </div>
    )
}
export default FashionSlider


 