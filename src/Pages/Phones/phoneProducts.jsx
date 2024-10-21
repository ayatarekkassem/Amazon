import React, { useState } from "react";
import './Phones.css';
// import BookStoreContext from "../../context/BookStoreContext";
import productsparts from "../../amazoneDataa/productsparts";
import Modal from '../../components/Modal/Modal';
import { Link } from "react-router-dom";
import { Card, CardContent, Grid } from "@mui/material";

const PhoneProducts = () =>{
    // const { addToCart } = useContext(BookStoreContext);
    const [openModal, setOpenModal] = useState(false);
    const [bookData, setBookData] = useState(null);
     // Handle Modal
  const handleOpenModal = (item) => {
    setOpenModal(true);
    setBookData(item);
  }
    return(
//   
      
      <section className="phoneProducts">
          <div className="phoneProducts-header">
            <h5>1-12 of over 2,000 results for <span>Mobile Phones</span></h5>
          </div>
             <div className="mobileItems">
             <Grid container spacing={2}>
            
          
    {
      productsparts.map(item => (
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
                        <Link onClick={() => handleOpenModal(item)} className="bi bi-eye-fill">
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                            {/* <StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /> */}
                           <span>{item.starNum}</span>
                            <p className="para">{item.para}</p>
                            <ul className="price">
                                <li>EGP{item.price}</li>
                                <li><del>EGP{item.del}</del></li>
                            </ul>
                            <p className="otherpara">{item.otherpara}<br />{item.otherparapara}</p>
                           </Link>
                            
                        </div>
                
                        </div>
                    </div>
                    </Grid>
                  </Grid>
                 
                </Grid>

                {/* <Grid item xs={12} sm={6} md={3}>
                  <Grid container>
                    <Grid container justify="space-evenly">
                      <label>last_name:</label>
                      <label>{item.otherpara}</label>
                    </Grid>
                  </Grid>
                
                </Grid> */}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))
      
    }
    {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
    </Grid>
   
      </div>
     
        </section>
    )
}
export default PhoneProducts