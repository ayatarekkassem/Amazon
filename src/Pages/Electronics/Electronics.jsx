import React  from 'react';
import { Container} from '@mui/material';
import './Electronics.css';
import PhonesSidebar from '../Phones/PhonesSidebar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResultsItems from './ResultsItems';
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

const Electronics =() =>{
         // Loading
  const[loading , setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>
        setLoading(false),3000)
     
   }, [])
    return(
     
        <div className='phones electronics'>
        
        {
         loading ?
         <div className="loading">
            <SyncLoader />
         </div>
         :
 <div>
    
            <Header />
            <Container maxWidth="lg">
                <div className='phones-items electronics-items'>
                    <PhonesSidebar />
                    <div className="phones-item">
                        {/* <h2>Electronics</h2> */}
                        {/* <div className="enjoy">
                            <div>
                            <h4>Enjoy FREE delivery, exclusive deals, award-winning TV and more</h4>
                            <h6>Join today. Cancel anytime.</h6>
                            </div>
                            <div className="enjoy-btn">
                                <button>Try Prime FREE for 30 days</button>
                            </div>
                        </div> */}
                        {/* <div className="electronics-best">
                            <ElectronicBest />
                        </div> */}
                        <div className="electronic-grid">
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item md={4}>
                                    <Item>
                                        <div className='"electronic-grid-item'>
                                        <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/dec/Jan/Feb/RMD/EID/anker_750x300_ASINs_EN.jpg' alt='' />
                                        </div>
                                    </Item>
                                    </Grid>
                                    <Grid item md={4}>
                                    <Item>  <div className='"electronic-grid-item'>
                                        <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/dec/Jan/Feb/RMD/EID/750x300_ASINs_EN.png' alt='' />
                                        </div>
                                        </Item>
                                    </Grid>
                                    <Grid item md={4}>
                                    <Item>
                                        <div className='"electronic-grid-item'>
                                        <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/dec/Jan/Feb/RMD/EID/huawei_750x300_ASINs_EN.jpg' alt='' />
                                        </div>
                                    </Item>
                                    </Grid>
                                   
                                </Grid>
                                </Box>
                        </div>
                        <img className='electronic-img' src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Consumer_Electronics/XCM_CUTTLE_1692310_3615470_1500x250_en_AE.jpg" alt="" />
                        
                        <div className="electronic-grid">
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item md={4}>
                                    <Item>
                                        <div className='"electronic-grid-item'>
                                        <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/dec/Jan/Feb/RMD/EID/asus_750x300_ASINs_EN.jpg' alt='' />
                                        </div>
                                    </Item>
                                    </Grid>
                                    <Grid item md={4}>
                                    <Item>  <div className='"electronic-grid-item'>
                                        <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/dec/Jan/Feb/RMD/EID/lenovo_Amazon_Eid_Campaign_750x300_EN.png' alt='' />
                                        </div></Item>
                                    </Grid>
                                    <Grid item md={4}>
                                    <Item>
                                        <div className='"electronic-grid-item'>
                                        <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/dec/Jan/Feb/RMD/EID/Schneider_750x250.jpg' alt='' />
                                        </div>
                                    </Item>
                                    </Grid>
                                   
                                </Grid>
                            </Box>
                        </div>
                        <img className='electronic-img' src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Consumer_Electronics/XCM_CUTTLE_1708370_3705272_1500x200_2X_en_AE.jpg' alt='' />
                        {/* <div className="shop">
                            <Shop />
                        </div> */}
                       <div className="shop-brands">
                            <h4>Shop by Brand</h4>
                            <div className="shopBrand-items">
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                    <Item>
                                        <div classname="shopBrand-item">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Consumer_Electronics/XCM_CUTTLE_1715966_3747029_440x300_en_AE.jpg" alt='brand' />
                                            <h5>WiWU</h5>
                                        </div>
                                    </Item>
                                    <Item>
                                        <div classname="shopBrand-item">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Stores/1452930_EG_Joyroom_440x300_fc473045-1e74-4fab-9652-424018ae1696.jpg" alt='brand' />
                                            {/* <h5>Joyroom</h5> */}
                                        </div>
                                    </Item>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Item>
                                        <div classname="shopBrand-item">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Consumer_Electronics/XCM_CUTTLE_1715966_3747030_440x300_en_AE.jpg" alt='brand' />
                                            <h5>RAVPower</h5>
                                        </div>
                                    </Item>
                                    <Item>
                                        <div classname="shopBrand-item">
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Stores/1452930_EG_XO_440x300_2ff6fe71-2fee-4f92-b295-27fa74d2bb75.jpg" alt='brand' />
                                            {/* <h5>XO</h5> */}
                                        </div>
                                    </Item>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Item>
                                        <div classname="shopBrand-item">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Consumer_Electronics/XCM_CUTTLE_1715966_3747031_440x300_en_AE.jpg" alt='brand' />
                                            <h5>BOROFONE</h5>
                                        </div>
                                    </Item>
                                    <Item>
                                        <div classname="shopBrand-item">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Stores/1452930_EG_Remax_440x300_05a36777-a028-4f09-ab3a-9a0de27ae120.jpg" alt='brand' />
                                            {/* <h5>Remax</h5> */}
                                        </div>
                                    </Item>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Item>
                                        <div classname="shopBrand-item">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Consumer_Electronics/XCM_CUTTLE_1715966_3747034_440x300_en_AE.jpg" alt='brand' />
                                            <h5>LDNIO</h5>
                                        </div>
                                    </Item>
                                    <Item>
                                        <div classname="shopBrand-item">
                                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Stores/1452930_EG_Aspor_440x300_ff8f697b-1225-481c-a4cd-ebdeda0e2141.jpg" alt='brand' />
                                            {/* <h5>Aspor</h5> */}
                                        </div>
                                  </Item>
                                    </Grid>
                                </Grid>
                                </Box>
                            </div>
                       </div>
                       <ResultsItems />
                    </div>
                    </div>
            </Container>
            <Footer />
      </div>
                        }      
        </div>
      
    )
}
export default Electronics