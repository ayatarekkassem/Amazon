import * as React from 'react';
import './VideoGames.css';
import '../Fashion/Fashion.css';
import { Container } from '@mui/material';
import PhonesSidebar from '../Phones/PhonesSidebar';
import  "../Phones/Phones.css";
// import FashionSlider from './FashionSlider';

// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import Results from './Results';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SyncLoader from "react-spinners/SyncLoader";
import { useEffect, useState } from 'react';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));


const VideoGames = () =>{
            // Loading
  const[loading , setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>
        setLoading(false),3000)
     
   }, [])
    return(
        <div className="video-game">
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
                        <h2>Video Games</h2>
                
                    {/* <div className="fashion-image">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/gamingapr/AMAZON_EG_LAUNCH_DESKTOP_INZONE.png" alt='' />
                    </div> */}

                    {/* <FashionSlider /> */}

                    <div className="shop-items-ways">
                        <div className="shopDevice">
                            <img className="shopDevice-title" src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_02_EN.jpg" alt="Shop Title" />
                            <div className="shop-items-img">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_03_EN.jpg" alt='' />
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_04_EN.jpg' alt='' />
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_05_EN.jpg' alt='' />
                            </div>
                            <img className="title" src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_06_EN.jpg' alt='' />
                            <div className="shop-items-img">
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_07_EN.jpg' alt='' />
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_08_EN.jpg' alt='' />
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_09_EN.jpg' alt='' />
                            </div>
                            <div className='shop-items-img'>
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_10_EN.jpg' alt='' />
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_11_EN.jpg' alt='' />
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_12_EN.jpg' alt='' />
                            </div>
                            <div className="brand">
                                <img className='title' src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_13_EN.jpg' alt='' />
                                <div className='shop-items-img'>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_14_EN.jpg' alt='HP' />
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_15_EN.jpg' alt='havit' />
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_16_EN.jpg' alt='Log' />
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_17_EN.jpg' alt='Hyp' />
                                </div>
                                <div className='shop-items-img'>
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_18_EN.jpg' alt='' />
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_19_EN.jpg' alt='' />
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_20_EN.jpg' alt='' />
                                    <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Gaming/1483271_EG_Gaming_L2_Desktop_21_EN.jpg' alt='' />
                                </div>
                            </div>
                        </div>
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
export default VideoGames