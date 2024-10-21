import * as React from 'react';
import './Fashion.css';
import { Container } from '@mui/material';
import PhonesSidebar from '../Phones/PhonesSidebar';
// import FashionSlider from './FashionSlider';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Results from './Results';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SyncLoader from "react-spinners/SyncLoader";
import { useEffect, useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Fashion = () =>{
             // Loading
  const[loading , setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>
        setLoading(false),3000)
     
   }, [])
    return(
        <div className='fashion'>
                  {
         loading ?
         <div className="loading">
            <SyncLoader />
         </div>
         :
 <div>
               <Header />
               <Container maxWidth="lg">

                <div className="fashion-items">
                    <div className="fashion-sidbar">
                    <PhonesSidebar />
                    </div>
                    <div className="fashion-item">
                        <h2>Fashion</h2>
                    <div className="enjoy">
                        <div>
                        <h4>Enjoy FREE delivery, exclusive deals, award-winning TV and more</h4>
                        <h6>Join today. Cancel anytime.</h6>
                        </div>
                        <div className="enjoy-btn">
                            <button>Try Prime FREE for 30 days</button>
                        </div>
                    </div>
                    <div className="fashion-image">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/ValU/New/GW_BNPL_EG_BrowsePages__Desktop_ValU_All_Fashion_1500x375_en.jpg" alt='' />
                        <img src='https://images-eu.ssl-images-amazon.com/images/G/42/SL/BAU24/2404GB016_EG_ATF_SL_Fila_1500x300_EN.jpg' alt="" />
                    </div>

                    {/* <FashionSlider /> */}

                    <div className="essintials">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/SL/August23/XCM_Manual_1611130_5807825_750x250_2X.jpg' alt='essintial' />
                                </Item>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                <Item>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/August23/XCM_Manual_1611130_5807834_750x250_2X.jpg" alt='essintial' />
                                </Item>
                                </Grid>
                            </Grid>
                            </Box>


                    </div>

                    <hr />
                    <div className="fashion-brands">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={2}>
                            <Item>
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/App22/1477304_EG_Web_Nav_Adidas_511x470.jpg" alt="brand" />
                            </Item>
                            </Grid>
                            <Grid item xs={6} md={2}>
                            <Item>
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/SL/September23/XCM_Manual_1628928_5877874_511x470_2X.jpg' alt="brand" />
                            </Item>
                            </Grid>
                            <Grid item xs={6} md={2}>
                            <Item>
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/App22/1477304_EG_Web_Nav_Andora_511x470.jpg" alt='brand' />
                            </Item>
                            </Grid>
                            <Grid item xs={6} md={2}>
                            <Item>
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/September23/XCM_Manual_1628928_5877877_511x470_2X.jpg" alt='brand' />
                            </Item>
                            </Grid>
                            <Grid item xs={6} md={2}>
                            <Item>
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/SL/September23/XCM_Manual_1628928_5877870_511x470_2X.jpg' alt='brand' />
                            </Item>
                            </Grid>
                            <Grid item xs={6} md={2}>
                            <Item>
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/SL/September23/XCM_Manual_1628928_5877875_511x470_2X.jpg' alt='brand' />
                            </Item>
                            </Grid>
                            <Grid item xs={6} md={2}>
                            <Item>
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/SL/App22/1477304_EG_Web_Nav_MK_511x470.jpg' alt='brand' />
                            </Item>
                            </Grid>
                            <Grid item xs={6} md={2}>
                            <Item>
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/SL/September23/XCM_Manual_1628928_5877871_511x470_2X.jpg' alt='brand' />
                            </Item>
                            </Grid>
                            <Grid item xs={6} md={2}>
                            <Item>
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/SL/App22/1477304_EG_Web_Nav_Defacto_511x470.jpg' alt='brand' />
                            </Item>
                            </Grid>
                            <Grid item xs={6} md={2}>
                            <Item>
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/SL/September23/XCM_Manual_1628928_5877872_511x470_2X.jpg' alt='brand' />
                            </Item>
                            </Grid>
                            <Grid item xs={6} md={2}>
                            <Item>
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/SL/September23/XCM_Manual_1628928_5877873_511x470_2X.jpg' alt='brand' />
                            </Item>
                            </Grid>
                            <Grid item xs={6} md={2}>
                            <Item>
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/SL/September23/XCM_Manual_1628928_5877876_511x470_2X.jpg' alt='brand' />
                            </Item>
                            </Grid>
                        </Grid>
                    </Box>
                    </div>

                    <hr />
                    <div className='Shop-brand'>
                        <h4>Shop by brand</h4>
                            <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc-60bx3-r7zc1-um68r-354bn-bpewm-0nme9-cz731-t3s3m-jj7o7-ewuns-4cknc-r4k5q-a6l3x-j72m9-m78aq-824e3-7u19n-zvt7s-3e6lp-4t9t7-cc20t-536vd-2wa23-r0fkd-742f1_440x150_eg-en.jpg" alt="brand" />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc-60bx3-r7zc1-um68r-354bn-bpewm-0nme9-cz731-t3s3m-jj7o7-ewuns-4cknc-r4k5q-a6l3x-j72m9-m78aq-824e3-7u19n-zvt7s-3e6lp-4t9t7-cc20t-536vd-2wa23-r0fkd_440x150_eg-en.jpg' alt="brand" />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/September/Adidas_New_logo_2.JPG" alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/CE/Storedesigns/xcm_banners_mintra-logo_440x150_eg-en.jpg" alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc-60bx3-r7zc1-um68r-354bn-bpewm-0nme9-cz731-t3s3m-jj7o7-ewuns-4cknc-r4k5q-a6l3x-j72m9-m78aq-824e3_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc-60bx3-r7zc1-um68r-354bn-bpewm-0nme9-cz731-t3s3m-jj7o7-ewuns-4cknc-r4k5q-a6l3x-j72m9-m78aq_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/SL/June/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc-60bx3-r7zc1-um68rqweq-354bn_440x150_eg-en2.png' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc-60bx3-r7zc1-um68r_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_andora-logo_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc-60bx3-r7zc1-um68r-354bn-bpewm-0nme9-cz731_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc-60bx3_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc-60bx3-r7zc1-um68r-354bn-bpewm-0nme9-cz731-t3s3m-jj7o7-ewuns-4cknc-r4k5q_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc-60bx3-r7zc1-um68r-354bn-bpewm-0nme9-cz731-t3s3m_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc-60bx3-r7zc1-um68r-354bn-bpewm-0nme9-cz731-t3s3m-jj7o7_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_dejavu-logo-6dp52_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc-60bx3-r7zc1-um68r-354bn-bpewm-0nme9-cz731-t3s3m-jj7o7-ewuns-4cknc-r4k5q-a6l3x-j72m9-m78aq-824e3-7u19n-zvt7s-3e6lp-4t9t7-cc20t_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc-60bx3-r7zc1-um68r-354bn-bpewm-0nme9-cz731-t3s3m-jj7o7-ewuns-4cknc-r4k5q-a6l3x-j72m9_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc-60bx3-r7zc1-um68r-354bn-bpewm-0nme9-cz731-t3s3m-jj7o7-ewuns-4cknc_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/CE/Storedesigns/xcm_banners_dalydress-logo-6dp52-jnc1a-u0srz_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/SL/May23/xcm_banners_jack-jones-logo_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                <Item>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/home/keeltaha/fashion_brands/xcm_banners_in-bau-440x150-8evdt-r88xr-zon92-6fspn-dacn1-nyqnl-tk8cw-tcp4k-oj9wc-60bx3-r7zc1-um68r-354bn-bpewm-0nme9-cz731-t3s3m-jj7o7-ewuns-4cknc-r4k5q-a6l3x-j72m9-m78aq-824e3-7u19n-zvt7s-3e6lp-4t9t7-cc20t-536vd-2wa23_440x150_eg-en.jpg' alt='brand' />
                                </Item>
                                </Grid>
                            </Grid>
                        </Box>
                        
                    </div>

                    <Results />
                    </div>
                </div>
            </Container>
            <Footer />
            </div>
                        }    
        </div>
    
    )
}
export default Fashion