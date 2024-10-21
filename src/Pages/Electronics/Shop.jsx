import React from "react";
import Slider from "react-slick";
import './Electronics.css';
import StarIcon from '@mui/icons-material/Star';


const Shop =() =>{
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
              slidesToShow: 1,
              slidesToScroll: 1,
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
        <div className="shop">
            <h4>Shop Samsung TVs | Up to 20% off | Buy with installments*</h4>
             <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <div className="shop-item">
                            <img src="https://m.media-amazon.com/images/I/41zZHZazTkL.AC_SX250.jpg" alt="" />
                            <div className="shop-info">
                              <h6>Samsung 65 Inch TV Quantum Processor Lite 4K QLED - Black - QA65Q60CAUXEG [2023 Model]</h6>
                              <p>Samsung</p>
                              <span>EGP 36,999</span>
                              <div className="star">
                                    <span className="star-num">802</span>
                                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}

                    <div>
                        <div className="shop-item">
                            <img src="https://m.media-amazon.com/images/I/41F37umdj6L.AC_SX250.jpg" alt="" />
                            <div className="shop-info">
                              <h6> Samsung 55 Inch QD-OLED Smart TV - Neural </h6>
                              <p>Samsung</p>
                              <span>EGP85,999.00</span>
                              <div className="star">
                                    <span className="star-num">2</span>
                                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}

                    <div>
                        <div className="shop-item">
                            <img src="https://m.media-amazon.com/images/I/51D4zWpaZnL.AC_SX250.jpg" alt="" />
                            <div className="shop-info">
                              <h6> Samsung 40 Inch Full HD Smart LED TV with Built-in... </h6>
                              <p>Samsung</p>
                              <span>EGP12,499.00</span>
                              <span><del>EGP13,499.00</del></span>
                              <div className="star">
                                    <span className="star-num">339</span>
                                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}

                    
                    <div>
                        <div className="shop-item">
                            <img src="https://m.media-amazon.com/images/I/51--5xidb9L.AC_SX250.jpg" alt="" />
                            <div className="shop-info">
                              <h6>  Samsung 55 Inch QLED Smart TV Neural HDR... </h6>
                              <p>Samsung</p>
                              <span>EGP92,499.00</span>
                              <div className="star">
                                    <span className="star-num">339</span>
                                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}

                    <div>
                        <div className="shop-item">
                            <img src="https://m.media-amazon.com/images/I/51D4zWpaZnL.AC_SX250.jpg" alt="" />
                            <div className="shop-info">
                              <h6> Samsung 40 Inch Full HD Smart LED TV with Built-in... </h6>
                              <p>Samsung</p>
                              <span>EGP12,499.00</span>
                              <span><del>EGP13,499.00</del></span>
                              <div className="star">
                                    <span className="star-num">339</span>
                                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}

                    
                    <div>
                        <div className="shop-item">
                            <img src="https://m.media-amazon.com/images/I/51--5xidb9L.AC_SX250.jpg" alt="" />
                            <div className="shop-info">
                              <h6>  Samsung 55 Inch QLED Smart TV Neural HDR... </h6>
                              <p>Samsung</p>
                              <span>EGP92,499.00</span>
                              <div className="star">
                                    <span className="star-num">339</span>
                                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}



                </Slider>
                </div>
        </div>
    )
}
export default Shop