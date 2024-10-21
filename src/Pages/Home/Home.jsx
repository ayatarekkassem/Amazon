import React from "react";
import './Home.css';
import Header from "../../commponent/Header/Header";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";
import Footer from "../../commponent/Footer/Footer";





const Home = () =>{
    return(
        <>
          <Header />
          <section className="home">
            <div className="container-fluid">
                <div className="home-items">
                   <Grid container my={4}>
                        <Grid Item xs>
                            <Box>
                                <div className="home-item">
                                    <h4>All your Ramadan needs | Wide Selection</h4>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2024/RMS/GW/XCM_Manual_1693222_6130890_379x304_1X._SY304_CB580373010_.jpg" alt="" />
                                    <button>Learn More</button>
                                </div>
                            </Box>
                            <Box>
                                <div className="home-item">
                                    <h4>Just for Prime | Extra 15% off up to 200 EGP* | Code: VISA15</h4>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Partnerships/2024/VisaThursdays/XCM_Manual_1685066_6080336_379x304_1X._SY304_CB583347702_.jpg" alt="" />
                                    <button>Learn More</button>
                                </div>
                            </Box>
                        </Grid>
                      
                        <Grid Item xs>
                            <Box>
                                <div className="home-item">
                                    <h4>Ramadan Essentials | Low prices</h4>
                                    <div className="home-item-imgs">
                                        <div className="home-item-image">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Home/XCM_Manual_1693051_6125481_186x116_1X._SY116_CB581784113_.jpg" alt="" />
                                            <h6>Ramadan lanterns Ramadan lanterns</h6>
                                        </div>
                                        <div className="home-item-image">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Home/XCM_Manual_1693051_6125477_186x116_1X._SY116_CB581784113_.jpg" alt="" />
                                        <h6>Ramadan decorations</h6>
                                        </div>
                                    </div>
                                    <div className="home-item-imgs">
                                        <div className="home-item-image">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Home/XCM_Manual_1693051_6125479_186x116_1X._SY116_CB581784113_.jpg" alt=""/>
                                            <h6>RosaryRosary</h6>
                                        </div>
                                        <div className="home-item-image">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Home/XCM_Manual_1693051_6125480_186x116_1X._SY116_CB581784113_.jpg" alt="" />
                                            <h6>Praying rugs</h6>
                                        </div>
                                    </div>
                                    <button>Learn More</button>
                                </div>
                            </Box>
                            <Box>
                            <div className="home-item">
                                    <h4>Tops on deal | Wide Selection</h4>
                                    <div className="home-item-imgs">
                                        <div className="home-item-image">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_men-s-shirts_186x116_eg-en._SY116_CB591239739_.jpg" alt="" />
                                            <h6>Men's Shirts</h6>
                                        </div>
                                        <div className="home-item-image">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_men-s-t-shirts_186x116_eg-en._SY116_CB591239883_.jpg" alt="" />
                                        <h6>Men's T-Shirts</h6>
                                        </div>
                                    </div>
                                    <div className="home-item-imgs">
                                        <div className="home-item-image">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_women-s-shirts_186x116_eg-en._SY116_CB591239875_.jpg" alt=""/>
                                            <h6>Women's Shirts</h6>
                                        </div>
                                        <div className="home-item-image">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_women-s-t-shirts_186x116_eg-en._SY116_CB591239873_.jpg" alt="" />
                                            <h6>Women's T-Shirts</h6>
                                        </div>
                                    </div>
                                    <button>Learn More</button>
                                </div>
                            </Box>
                        </Grid>
                        <Grid Item xs>
                            <Box>
                                <div className="home-item">
                                    <h4>Women Power | Shop our local female sellers’ products</h4>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Events/XCM_Manual_1688994_6135029_379x304_1X._SY304_CB580622397_.jpg" alt="" />
                                    <button>Learn More</button>
                                </div>
                            </Box>
                            <Box>
                                <div className="home-item">
                                    <h4>Headphones | Below 650 EGP</h4>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1454862_4881441_379x304_1X._SY304_CB630947473_.jpg" alt="" />
                                    <button>Learn More</button>
                                </div>
                            </Box>
                        </Grid>
                        <Grid Item xs>
                            <Box>
                            <div className="home-item">
                                    <h4>Electronics | Free Delivery* on First Order</h4>
                                    <div className="home-item-imgs">
                                        <div className="home-item-image">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/XCM_Manual_1531725_5295442_186x116_1X._SY116_CB615640752_.jpg" alt="" />
                                            <h6>Headphones Headphones</h6>
                                        </div>
                                        <div className="home-item-image">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/XCM_Manual_1531725_5295445_186x116_1X._SY116_CB615640752_.jpg" alt="" />
                                        <h6>Smartwatches</h6>
                                        </div>
                                    </div>
                                    <div className="home-item-imgs">
                                        <div className="home-item-image">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/XCM_Manual_1531725_5295439_186x116_1X._SY116_CB615640752_.jpg" alt=""/>
                                            <h6>Speakers</h6>
                                        </div>
                                        <div className="home-item-image">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/XCM_Manual_1531725_5295444_186x116_1X._SY116_CB615640752_.jpg" alt="" />
                                            <h6>Power banks</h6>
                                        </div>
                                    </div>
                                    <button>Learn More</button>
                                </div>
                            </Box>
                            <Box>
                                <div className="home-item">
                                    <h4>Mobiles accessories | Below 49 EGP</h4>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1467596_4978170_379x304_1X._SY304_CB609468519_.jpg" alt="" />
                                    <button>Learn More</button>
                                </div>
                            </Box>
                        </Grid>
                        
                   </Grid>
                   

                 
                </div>
                <div className="home-items">
                   <Grid container my={4}>
                        <Grid Item xs>
                            <Box>
                                <div className="home-item">
                                    <h4>All your Ramadan needs | Wide Selection</h4>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2024/RMS/GW/XCM_Manual_1693222_6130890_379x304_1X._SY304_CB580373010_.jpg" alt="" />
                                    <button>Learn More</button>
                                </div>
                            </Box>
                            <Box>
                                <div className="home-item">
                                    <h4>Just for Prime | Extra 15% off up to 200 EGP* | Code: VISA15</h4>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Partnerships/2024/VisaThursdays/XCM_Manual_1685066_6080336_379x304_1X._SY304_CB583347702_.jpg" alt="" />
                                    <button>Learn More</button>
                                </div>
                            </Box>
                        </Grid>
                      
                        <Grid Item xs>
                            <Box>
                                <div className="home-item">
                                    <h4>Ramadan Essentials | Low prices</h4>
                                    <div className="home-item-imgs">
                                        <div className="home-item-image">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Home/XCM_Manual_1693051_6125481_186x116_1X._SY116_CB581784113_.jpg" alt="" />
                                            <h6>Ramadan lanterns Ramadan lanterns</h6>
                                        </div>
                                        <div className="home-item-image">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Home/XCM_Manual_1693051_6125477_186x116_1X._SY116_CB581784113_.jpg" alt="" />
                                        <h6>Ramadan decorations</h6>
                                        </div>
                                    </div>
                                    <div className="home-item-imgs">
                                        <div className="home-item-image">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Home/XCM_Manual_1693051_6125479_186x116_1X._SY116_CB581784113_.jpg" alt=""/>
                                            <h6>RosaryRosary</h6>
                                        </div>
                                        <div className="home-item-image">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Home/XCM_Manual_1693051_6125480_186x116_1X._SY116_CB581784113_.jpg" alt="" />
                                            <h6>Praying rugs</h6>
                                        </div>
                                    </div>
                                    <button>Learn More</button>
                                </div>
                            </Box>
                            <Box>
                            <div className="home-item">
                                    <h4>Tops on deal | Wide Selection</h4>
                                    <div className="home-item-imgs">
                                        <div className="home-item-image">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_men-s-shirts_186x116_eg-en._SY116_CB591239739_.jpg" alt="" />
                                            <h6>Men's Shirts</h6>
                                        </div>
                                        <div className="home-item-image">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_men-s-t-shirts_186x116_eg-en._SY116_CB591239883_.jpg" alt="" />
                                        <h6>Men's T-Shirts</h6>
                                        </div>
                                    </div>
                                    <div className="home-item-imgs">
                                        <div className="home-item-image">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_women-s-shirts_186x116_eg-en._SY116_CB591239875_.jpg" alt=""/>
                                            <h6>Women's Shirts</h6>
                                        </div>
                                        <div className="home-item-image">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_women-s-t-shirts_186x116_eg-en._SY116_CB591239873_.jpg" alt="" />
                                            <h6>Women's T-Shirts</h6>
                                        </div>
                                    </div>
                                    <button>Learn More</button>
                                </div>
                            </Box>
                        </Grid>
                        <Grid Item xs>
                           
                            <Box>
                                <div className="home-item">
                                    <h4>Headphones | Below 650 EGP</h4>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1454862_4881441_379x304_1X._SY304_CB630947473_.jpg" alt="" />
                                    <button>Learn More</button>
                                </div>
                            </Box>
                        </Grid>
                        <Grid Item xs>
                        
                            <Box>
                                <div className="home-item">
                                    <h4>Mobiles accessories | Below 49 EGP</h4>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1467596_4978170_379x304_1X._SY304_CB609468519_.jpg" alt="" />
                                    <button>Learn More</button>
                                </div>
                            </Box>
                        </Grid>
                        
                   </Grid>
                   

                 
                </div>

            </div>
          </section>
          <Footer /> 
     
        </>
      
    )
}
export default Home