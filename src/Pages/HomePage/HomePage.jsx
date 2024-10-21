import React from 'react';
import './HomePage.css';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Budget from "./Budget.jsx";
import MainSlider from './MainSlider.jsx';
import Discoveramazon from './Discoveramazon.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
//  import Mainlider from './MainSlider.jsx';
import {Link} from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import { useEffect, useState } from 'react';

const HomePage = () =>{

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
 // Loading
 const[loading , setLoading] = useState(false)

 useEffect(() =>{
   setLoading(true)
   setTimeout(()=>
    setLoading(false),3000)
    
  }, [])
    return(
        
          <section className="homePage">
             {
         loading ?
         <div className="loading">
            <SyncLoader />
         </div>
         :
 <div>
         <Header />
         
        
            
            <MainSlider />
               <div className="slider-items">
               <Container maxWidth="lg">
               <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <div className="sliderItem">
                                <h4>Electronics | Free Delivery* on First Order</h4>
                                <div className="slideritem-img">
                                    {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2024/RMS/GW/XCM_Manual_1693222_6130890_379x304_1X._SY304_CB580373010_.jpg" alt="Img 1" /> */}
                                    <div className="sliderItem-items">
                                        <div className="sliderItem-info items">
                                            <div className='sliderInfo-imgs'>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/XCM_Manual_1531725_5295442_186x116_1X._SY116_CB615640752_.jpg" alt="" />
                                                <h5>Headphones</h5>
                                            </div>
                                            <div className='sliderInfo-imgs '>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/XCM_Manual_1531725_5295445_186x116_1X._SY116_CB615640752_.jpg" alt="" />
                                                <h5>Smartwatches</h5>
                                            </div>
                                        </div>
                                        {/*  */}
                                        <div className="sliderItem-info items">
                                            <div className='sliderInfo-imgs del-img'>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/XCM_Manual_1531725_5295444_186x116_1X._SY116_CB615640752_.jpg" alt="" />
                                                <h5>Speakers</h5>
                                            </div>
                                            <div className='sliderInfo-imgs del-img'>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/XCM_Manual_1531725_5295439_186x116_1X._SY116_CB615640752_.jpg" alt="" />
                                                <h5>Power banks</h5>
                                            </div>
                                        </div>
                                        {/*  */}
                                    </div>
                                </div>
                                <button>See More </button>
                            </div>
                        </Item>
                        <Item>
                        <div className="sliderItem">
                                <h4>Mobiles accessories | Below 49 EGP</h4>
                                <div className="slideritem-img">
                                    <div className="sliderItem-items">
                                        <div className="sliderItem-info">
                                            <div className='sliderInfo-imgs'>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1467596_4978170_379x304_1X._SY304_CB609468519_.jpg" alt="" />
                                               
                                            </div>
                                           
                                        </div>
                                        {/*  */}
                                       
                                    </div>
                                </div>
                                <button>See More </button>
                            </div>
                        </Item>
                        </Grid>
                        <Grid item xs={6} md={3}>
                        <Item>
                        <div className="sliderItem">
                                <h4>Headphones | Below 650 EGP</h4>
                                <div className="slideritem-img">
                                    <div className="sliderItem-items">
                                        <div className="sliderItem-info">
                                            <div className='sliderInfo-imgs'>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1454862_4881441_379x304_1X._SY304_CB630947473_.jpg" alt="" />
                                               
                                            </div>
                                           
                                        </div>
                                        {/*  */}
                                       
                                    </div>
                                </div>
                                <button>See More </button>
                            </div>
                        </Item>
                        <Item>
                        <div className="sliderItem">
                                <h4>Support Egyptian products | High quality </h4>
                                <div className="slideritem-img">
                                    <div className="sliderItem-items">
                                        <div className="sliderItem-info">
                                            <div className='sliderInfo-imgs'>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/3P/XCM_Manual_1478853_EG_GW_DC_3P_LocalStore_16b9c3af-3cbb-473e-bdac-1f5968191ddc_x1._SY304_CB607312444_.jpg" alt="" />
                                               
                                            </div>
                                           
                                        </div>
                                        {/*  */}
                                       
                                    </div>
                                </div>
                                <button>See More </button>
                            </div>
                        </Item>
                        
                        </Grid>
                        <Grid item xs={6} md={3}>
                        <Item>
                        <div className="sliderItem">
                                <h4>Last Chance | Fashion</h4>
                                <div className="slideritem-img">
                                    <div className="sliderItem-items">
                                        <div className="sliderItem-info">
                                            <div className='sliderInfo-imgs'>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb/XCM_Manual_1408437_4474991_Egypt_EG_GW_DC_CE_LastChance_EN_379x304_1X._SY304_CB628152535_.jpg" alt="" />
                                               
                                            </div>
                                           
                                        </div>
                                        {/*  */}
                                       
                                    </div>
                                </div>
                                <button>See More </button>
                            </div>
                        </Item>
                        <Item>
                            <div className="sliderItem">
                                <h4>Electronics | Free Delivery* on First Order</h4>
                                <div className="slideritem-img">
                                    {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2024/RMS/GW/XCM_Manual_1693222_6130890_379x304_1X._SY304_CB580373010_.jpg" alt="Img 1" /> */}
                                    <div className="sliderItem-items">
                                        <div className="sliderItem-info">
                                            <div className='sliderInfo-imgs'>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_men-s-shirts_186x116_eg-en._SY116_CB591239739_.jpg" alt="" />
                                                <h5>Men's Shirts</h5>
                                            </div>
                                            <div className='sliderInfo-imgs'>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_men-s-t-shirts_186x116_eg-en._SY116_CB591239883_.jpg" alt="" />
                                                <h5>Men's T-Shirts</h5>
                                            </div>
                                        </div>
                                        {/*  */}
                                        <div className="sliderItem-info">
                                            <div className='sliderInfo-imgs'>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_women-s-shirts_186x116_eg-en._SY116_CB591239875_.jpg" alt="" />
                                                <h5>Women's Shirts</h5>
                                            </div>
                                            <div className='sliderInfo-imgs'>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_women-s-t-shirts_186x116_eg-en._SY116_CB591239873_.jpg" alt="" />
                                                <h5>Women's Shirts</h5>
                                            </div>
                                        </div>
                                        {/*  */}
                                    </div>
                                </div>
                                <button>See More </button>
                            </div>
                        </Item>
                        </Grid>
                        <Grid item xs={6} md={3}>
                        <Item>
                            <div className="sliderItem">
                                <h4>Sportswear & Shoes | Wide Selection</h4>
                                <div className="slideritem-img">
                                    {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2024/RMS/GW/XCM_Manual_1693222_6130890_379x304_1X._SY304_CB580373010_.jpg" alt="Img 1" /> */}
                                    <div className="sliderItem-items">
                                        <div className="sliderItem-info items">
                                            <div className='sliderInfo-imgs'>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Yasmin/May23/xcm_banners_men-s-sportswear_186x116_eg-en._SY116_CB589515586_.jpg" alt="" />
                                                <h5>Men's Sportswear</h5>
                                            </div>
                                            <div className='sliderInfo-imgs'>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Yasmin/May23/xcm_banners_men-s-shoes_186x116_eg-en._SY116_CB589515604_.jpg" alt="" />
                                                <h5>Men's Sports Shoes</h5>
                                            </div>
                                        </div>
                                        {/*  */}
                                        <div className="sliderItem-info items">
                                            <div className='sliderInfo-imgs'>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Yasmin/May23/xcm_banners_women-s-sportswear_186x116_eg-en._SY116_CB589515612_.jpg" alt="" />
                                                <h5>Women's Sportwear</h5>
                                            </div>
                                            <div className='sliderInfo-imgs'>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Yasmin/May23/xcm_banners_men-s-shoes_186x116_eg-en._SY116_CB589515604_.jpg" alt="" />
                                                <h5>Women's Sports Shoes</h5>
                                            </div>
                                        </div>
                                        {/*  */}
                                    </div>
                                </div>
                                <button>See More </button>
                            </div>
                        </Item>
                        <Item>
                            <div className="sliderItem">
                                <h4>Makeup | New arrivals</h4>
                                <div className="slideritem-img">
                                    <img src="	https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Beauty_Mass_/XCM_Manual_1474863_5024994_379x304_1X._SY304_CB608898092_.jpg" alt="Img 1" />
                                </div>
                                <button>See More </button>
                            </div>
                        </Item>
                        </Grid>
                    </Grid>
                    </Box>
                </Container>
                </div>
                {/*  */}
                {/* <Makeup /> */}
                <Discoveramazon />
              
                {/* <Appliances /> */}

                <div className="car">
                <Container maxWidth="lg">
                    <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                        <Item>
                           <div className='car-item'>
                              <h4>Musical Instruments | Wide selection</h4>
                              <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Musical_Instruments/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg" alt="car info" />
                              <button>See More</button>
                           </div>
                        </Item>
 
                        </Grid>
                        <Grid item xs={6} md={3}>
                        <Item>
                          <div className="car-item">
                            <h4>Car compressors | Starting 290 EGP</h4>
                            <img src="https://m.media-amazon.com/images/I/81Wjy93WlfL._AC_UL320_.jpg" alt='car' />
                            {/* <img src="https://m.media-amazon.com/images/I/71xW1iLdxIL._AC_UL320_.jpg" alt="" /> */}
                            <button>See More</button>
                          </div>
                        </Item>
                        
                        </Grid>
                        <Grid item xs={6} md={3}>
                        <Item>
                          <div className="car-item">
                            <h4>Car essentials | From EGP 29</h4>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/BAU/XCM_Manual_1628926_5881193_379x304_1X._SY304_CB578353574_.jpg" alt='car' />
                            <button>See More</button>
                          </div>
                        </Item>

                        </Grid>
                        <Grid item xs={6} md={3}>
                        <Item>
                          <div className="car-item">
                            <h4>Mattresses | From EGP 935</h4>
                            <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Home/XCM_CUTTLE_1631808_3414975_379x304_1X_en_AE._SY304_CB578425757_.jpg' alt='car' />
                            <button>See More</button>
                          </div>
                        </Item>

                        </Grid>
                    </Grid>
                    </Box>
                </Container>
                </div>

                <Budget />
                {/* <Deals /> */}
                
                <div className='sports'>
                <Container maxWidth="lg">
                    <div className="sports-items">
                        <div className="sportsItem">
                            <h5>Sports equipment | Up to 15% off</h5>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/Gateway/XCM_Manual_1466738_4981385_379x304_1X._SY304_CB609258982_.jpg" alt="" />
                            <button>See More</button>
                        </div>
                        {/*  */}
                        <div className="sportsItem">
                            <h5>New arrivals | Jewelry & accessories</h5>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/DEC/GW/XCM_Manual_1396328_4379574_Egypt_EG_BAU_GW_DC_SL_Jewelry_379x304_1X._SY304_CB650636675_.jpg" alt="" />
                            <button>See More</button>
                        </div>
                          {/*  */}
                          <div className="sportsItem">
                            <h5>Car essentials | From EGP 29</h5>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/OHL/BAU/XCM_Manual_1628926_5881193_379x304_1X._SY304_CB578353574_.jpg" alt="" />
                            <button>See More</button>
                        </div>
                           {/*  */}
                           <div className="sportsItem">
                            <h5>Mattresses | From EGP 935</h5>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Home/XCM_CUTTLE_1631808_3414975_379x304_1X_en_AE._SY304_CB578425757_.jpg" alt="" />
                            <button>See More</button>
                        </div>
                    </div>
                    </Container>
                </div>

              
                {/*  */}
                <div className="signIn-header">
                <Container maxWidth="lg">
                    <p>See personalized recommendations</p>
                    <button><Link to="/Login"> Sign in</Link></button>
                    <p>New customer?  <span><Link to="/Register">Start Here</Link></span></p>
                </Container>
                </div>
                {/*  */}
           
           
            <Footer />
            </div>
                        } 
            </section>
        
    )
}
export default HomePage