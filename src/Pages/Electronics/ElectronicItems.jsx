import React, { useState } from "react";
import '../Phones/Phones.css';
// import BookStoreContext from "../../context/BookStoreContext";
// import productsparts from "../../amazoneDataa/productsparts";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, Grid } from "@mui/material";
import ElectronicsData from "../../amazoneDataa/ElectronicsData";

const ElectronicItems =() =>{
  

    return(
        <section className="phoneProducts ElectronicItems">

        <div className="phoneProducts-header">
          <h5>1-12 of over 2,000 results for <span>Electronics</span></h5>
        </div>
           <div className="mobileItems">
           <Grid container spacing={2}>
          
        
  {
    ElectronicsData.map(item => (
      <Grid item xs={6}  md={4} >
        <Card className={"MuiElevatedCard--01"}>
          <CardContent className={"MuiCardContent-root"}>
            <Grid container>
              {/* <Grid item xs={12} sm={6} md={4} > */}
              <Grid item xs={12} sm={6} md={4} >
                <Grid container>
                  <Grid container justify="space-evenly">
                  <div key={item.id} className="item">
                      <div className="mobile-items">
             {/* <img src="https://m.media-amazon.com/images/I/71AQ3qEZ-VL._AC_UL320_.jpg" /> */}
                      <div className='mobile-item'>
                      <img src={item.image} alt={item.title} />
                      <h4>{item.title}</h4>
                          {/* <StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /> */}
                         <span>{item.starNum}</span>
                          <p className="para">{item.para}</p>
                          <ul className="price">
                              <li>EGP{item.price}</li>
                              <li><del>EGP{item.del}</del></li>
                          </ul>
                          <input
              className="book-add-to-cart-input"
              type="number"
              min="1"
              max="100"
              value={qty}
              onChange={e => setQty(e.target.value)}
            />
                          <p className="otherpara">{item.otherpara}<br />{item.otherparapara}</p>

                       
                          
                      </div>
              
                      </div>
                  </div>
                  </Grid>
                </Grid>
               
              </Grid>

            
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    ))
    
  }
  </Grid>
 
    </div>
   
      </section>
    )
}
export default ElectronicItems