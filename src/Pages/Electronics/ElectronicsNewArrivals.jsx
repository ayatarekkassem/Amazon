import React from "react";
import Slider from "react-slick";
import './Electronics.css';
import StarIcon from '@mui/icons-material/Star';

const ElectronicsNewArrivals =() =>{
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
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
        <div className="ElectronicsNewArrivals">
            <h4>Electronics New Arrivals</h4>
             <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <div className="arrival-item">
                            <img src="https://m.media-amazon.com/images/I/416LEteuq0L.AC_SX250.jpg" alt="" />
                            <div className="arrival-info">
                               <h5>Oraimo FreePods Lite True Wireless Earbuds…</h5>
                                <h6>Oraimo</h6>
                                <div className="price">
                                    <span><del>EGP599.00</del></span>
                                    <span>EGP550.00</span>
                                </div>
                                <div className="star">
                                    <span className="star-num">802</span>
                                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}

                    <div>
                        <div className="arrival-item">
                            <img src="https://m.media-amazon.com/images/I/41aDK8UFLbL.AC_SX250.jpg" alt="" />
                            <div className="arrival-info">
                               <h5>iLOCK Travel Plug adapter Converter - bl…</h5>
                                <h6>iLOCK</h6>
                                <div className="price">
                                    <span>EGP45.00</span>
                                </div>
                                <div className="star">
                                    <span star-num>802</span>
                                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
             
                    <div>
                        <div className="arrival-item">
                            <img src="https://m.media-amazon.com/images/I/412N19zwcGL.AC_SX250.jpg" alt="" />
                            <div className="arrival-info">
                               <h5>SanDisk Ultra Dual Drive Luxe USB Type-C 128G…</h5>
                                <h6>SanDisk</h6>
                                <div className="price">
                                    <span>EGP789.00</span>
                                </div>
                                <div className="star">
                                    <span className="star-num">802</span>
                                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}

                    <div>
                        <div className="arrival-item">
                            <img src="https://m.media-amazon.com/images/I/41nzdL54z8L.AC_SX250.jpg" alt="" />
                            <div className="arrival-info">
                               <h5>SanDisk Ultra microSDXC 128GB 100MB/s Class 10 UHS-I</h5>
                                <h6>SanDisk</h6>
                                <div className="price">
                                    <span><del>EGP619.00</del></span>
                                    <span>EGP489.00</span>
                                </div>
                                <div className="star">
                                    <span className="star-num">802</span>
                                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    
                    <div>
                        <div className="arrival-item">
                            <img src="	https://m.media-amazon.com/images/I/41mG5Otn4kL.AC_SX250.jpg" alt="" />
                            <div className="arrival-info">
                               <h5>Newlight 8.5 Inch digital drawing Tablet </h5>
                                <h6>SanDisk</h6>
                                <div className="price">
                                    <span><del>EGP77.00</del></span>
                                    <span>EGP69.00</span>
                                </div>
                                <div className="star">
                                    <span className="star-num">802</span>
                                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}

                     
                    <div>
                        <div className="arrival-item">
                            <img src="https://m.media-amazon.com/images/I/51y3+5ghE4L.AC_SX250.jpg" alt="" />
                            <div className="arrival-info">
                               <h5>Adjustable Laptop Stand, Portable Aluminium  </h5>
                                <h6>SanDisk</h6>
                                <div className="price">
                                    <span><del>EGP107.00</del></span>
                                    <span>EGP58.00</span>
                                </div>
                                <div className="star">
                                    <span className="star-num">802</span>
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
export default ElectronicsNewArrivals