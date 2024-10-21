import { Container } from '@mui/material';
import React from 'react';
import '../Phones/Phones.css';
import "./HouseholdAppliances.css";
import Results from './Results';
import PhonesSidebar from '../Phones/PhonesSidebar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SyncLoader from "react-spinners/SyncLoader";
import { useEffect, useState } from 'react';
const HouseholdAppliances =() =>{
                 // Loading
  const[loading , setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>
        setLoading(false),3000)
     
   }, [])
    return(
        <section className='HouseholdAppliances'>
              {
         loading ?
         <div className="loading">
            <SyncLoader />
         </div>
         :
 <div>
               <Header />
               <Container maxWidth="lg">            
                <div className='phones-items'>
                    <PhonesSidebar />
                    <div className="phones-item">
                        <h2>Household Appliances</h2>
                        <div className="enjoy">
                            <div>
                            <h4>Enjoy FREE delivery, exclusive deals, award-winning TV and more</h4>
                            <h6>Join today. Cancel anytime.</h6>
                            </div>
                            <div className="enjoy-btn">
                                <button>Try Prime FREE for 30 days</button>
                            </div>
                        </div>
                        <div className="house-img">
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/Major_Appliances/ValU/GW_BNPL_EG_CategoryStorefrontWeb_ValU_All_Kitchen_1500x200_en.jpg" alt="Appliances" />
                            <img src="https://m.media-amazon.com/images/G/42/Egypt-hq/2024/img/OHL/SMS24/Samsung_WM_Herotator-English._CB554839279_.jpg" alt="Appliances" />
                         
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/OHL/SMS24/1colgrid_1500x200_EN_Cooling.png" alt="appliances" />
                        </div>
                        <hr />
                        <div className="brands">
                            <h4>SHOP BY BRAND</h4>
                            <div className="brands-items">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Major_Appliances/1427965_EG_OHL_Nav_Sharp_440x300_08ff6cb7-2b48-4d8e-aa21-fbc0c6861455.jpg" alt="brand" />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Major_Appliances/1427965_EG_OHL_Nav_Tornado_440x300_ae271cae-f505-4b66-a421-3d5f31a5bb71.jpg" alt='brand' />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Major_Appliances/1427965_EG_OHL_Nav_LG_440x300_17cd05a6-a6f9-46d2-9e05-9018e5946af6.jpg" alt='brand' />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Major_Appliances/1427965_EG_OHL_Nav_Tefal_440x300_b204b932-fb65-4825-8501-2bc26fb3b1ad.jpg" alt="brand" />
                            </div>
                            <div className="brands-items">
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Major_Appliances/XCM_Manual_1534172_5305739_440x300_2X.jpg' alt='brand' />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Major_Appliances/1427965_EG_OHL_Nav_Black-Decker_440x300_d517a321-573f-4ef8-a3b1-32c818736f86.jpg" alt='brand' />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Major_Appliances/XCM_Manual_1460799_4926461_440x300_2X.jpg" alt='brand' />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Major_Appliances/1427965_EG_OHL_Nav_Fresh_440x300_ffee564b-3463-408f-8916-0bd557759662.jpg" alt="brand" />
                            </div>
                        </div>
                        <img className="house-img" src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2024/img/OHL/SMS24/1colgrid_1500x200_EN_SDA.png' alt="" />
                        <hr />
                        <div className='categories'>
                            <h4>FEATURED CATEGORIES</h4>
                            <div className='categ-items'>
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/CoffeeStore/XCM_Manual_1438159_4753260_750x350_2X.jpg' alt="" />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/CoffeeStore/XCM_Manual_1438159_4753270_750x350_2X.jpg" alt="" />
                                <img src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/CoffeeStore/XCM_Manual_1438159_4753264_750x350_2X.jpg' alt="" />
                            </div>
                            <div className='categ-items'>
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/CoffeeStore/XCM_Manual_1438159_4753268_750x350_2X.jpg" alt="" />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/CoffeeStore/XCM_Manual_1438159_4753263_750x350_2X.jpg" alt='' />
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/CoffeeStore/XCM_Manual_1438159_4753261_750x350_2X.jpg" alt="" />
                            </div>
                        </div>
                        <Results />
                    </div>
                  
                </div>
            </Container>
            <Footer />
            </div>
                        } 
        </section>
    )
}
export default HouseholdAppliances