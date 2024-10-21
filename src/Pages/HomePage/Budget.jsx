import React from "react";
import Slider from "react-slick";
import { Container } from '@mui/material';
const Budget  = () =>{
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
       
        <div className='makeup Budget'>
                    <Container maxWidth="lg">
        <h2>Save more with the Budget Store</h2>
        <div className="slider-container">
  <Slider {...settings}>
    <div>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1407670_4466716_Egypt_Budget_Store_EG_GW_BUB_Xsite_Under49_EN_200x200_1X._CB646559078_.jpg" alt="" />
    </div>
    <div>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1407670_4466703_Egypt_Budget_Store_EG_GW_BUB_Xsite_Under99_EN_200x200_1X._CB646559078_.jpg" alt="" />
    </div>
    <div>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199173_200x200_1X._CB604510554_.jpg" alt="" />
    </div>
    <div>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199182_200x200_1X._CB604510533_.jpg" alt="" />
    </div>
    <div>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199185_200x200_1X._CB604510516_.jpg" alt="" />
    </div>
    <div>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199185_200x200_1X._CB604510516_.jpg" alt="" />
    </div>
    <div>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199177_200x200_1X._CB604510471_.jpg" alt=" " />
    </div>
    <div>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199181_200x200_1X._CB604510516_.jpg" alt="" />
    </div>
    <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199172_200x200_1X._CB604510486_.jpg" alt="" />
    </div>
    <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199174_200x200_1X._CB604510486_.jpg" alt="" />
    </div>
    <div>
        <img src="	https://m.media-amazon.com/images/I/61nO-e90NqS._AC_SY200_.jpg" alt="" />
    </div>
    <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199176_200x200_1X._CB604510486_.jpg" alt="" />
    </div>
    <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Global_Consumer_Marketing/XCM_Manual_1498352_5199170_200x200_1X._CB604510486_.jpg" alt="" />
    </div>
  </Slider>
</div>
</Container>
    </div>
    

    )
}
export default Budget 