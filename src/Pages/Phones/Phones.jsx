import React from 'react';

import { Container} from '@mui/material';
import './Phones.css';
import PhonesSidebar from './PhonesSidebar';

 import Results from './Results';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import PhoneProducts from './phoneProducts';
import SyncLoader from "react-spinners/SyncLoader";
import { useEffect, useState } from 'react';

const Phones =() =>{
                 // Loading
  const[loading , setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>
        setLoading(false),3000)
     
   }, [])
    return(
        <>
        <section className='phones'>
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
                        <h2>Cell Phones</h2>
                        <div className="enjoy">
                            <div>
                            <h4>Enjoy FREE delivery, exclusive deals, award-winning TV and more</h4>
                            <h6>Join today. Cancel anytime.</h6>
                            </div>
                            <div className="enjoy-btn">
                                <button>Try Prime FREE for 30 days</button>
                            </div>
                        </div>
                     

                      



<div className="brands">
    
    <img className="brand-title" src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_HD_Flagship-brands_En.jpg" alt="" />
    <div className="brands-container">

    <div className="brands-imgs">
     <div className="brands-imgs-flex">
        <div className="brands-imgs-flex-left">
            <div className="brands-imgs-left width">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Samsung1.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Samsung2.jpg" alt="" />
            </div>
            <div className="brands-imgs-right width">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Samsung3.jpg" alt="" />
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Samsung4.jpg" alt="" />
            </div>
            </div>
        <div className="brands-imgs-flex-right ">
            <div className="flex">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Apple.jpg" alt="" />
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Nokia.jpg" alt="" />
            </div>
            <div className="flex">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Nokia.jpg" alt="" />
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Xiaomi2.jpg" alt="" />
            </div>
        </div>
    </div>
    {/*  */}
    <div className="brands-imgs-flex">
      
        <div className="brands-imgs-flex-right">
            <div className="flex">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Apple.jpg" alt="" />
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Nokia.jpg" alt="" />
            </div>
            <div className="flex">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Nokia.jpg" alt="" />
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Xiaomi2.jpg" alt="" />
            </div>
        </div>
        <div className="brands-imgs-flex-left">
            <div className="brands-imgs-left width">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Samsung1.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Samsung2.jpg" alt="" />
            </div>
            <div className="brands-imgs-right width">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Samsung3.jpg" alt="" />
                <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/Mobile_Store_Revamp/Mobile_Revamp_DESK/1555676_EG_CE_DT_L2_Samsung4.jpg" alt="" />
            </div>
            </div>
    </div>
    </div>
    </div>
</div>
                     
                        <Results />
                        {/* <PhoneProducts /> */}
                    </div>
                  
                </div>
            </Container>
           <Footer />
           </div>
        }  
        </section>
        </>
    )
}
export default Phones