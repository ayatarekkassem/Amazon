import React from "react";
import "./Electronics.css";
import Container from '@mui/material/Container';
import { useParams } from "react-router-dom";
import ElectronicsDatas from '../../amazoneDataa/ElectronicsDatas';
// import Rating from "../../components/book-slider/Rating";
import {useState,useContext} from "react";
import BookStoreContext from "../../context/BookStoreContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slider from "react-slick";
import Rating from "../../components/Rating";
const InnerPage = () =>{
  const { addToCart } = useContext(BookStoreContext);

  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const ElectronicsData = ElectronicsDatas.find(p => p.id === parseInt(id));
 

  // slider
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    imageThree: true
  };
    return(
      <>
      <Header />
        <div className="InnerPage innerpage">
        <Container maxWidth="lg">
      <div className="InnerPage-content">
        <div className="InnerPage-slider">
        <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={ElectronicsData.image} alt="" />
        </div>
        <div>
        <img src={ElectronicsData.imageTwo} alt="" />

        </div>
        <div>
        <img src={ElectronicsData.imageThree} alt="" />

        </div>
        <div>
        <img src={ElectronicsData.imageFour} alt="" />

        </div>
      </Slider>
    </div>
        </div>
        {/* slider */}
        <div className="InnerPage-info">
        <h4>{ElectronicsData.title}</h4>
            <p>{ElectronicsData.para}</p>
            <Rating className="rating" rating={ElectronicsData.rating} reviews={ElectronicsData.reviews} />

               <div className="price">
                  <span>EGP{ElectronicsData.price}</span>
                  {/* <span><del>EGP{ElectronicsData.del}</del></span>   */}
                </div>
                <input
              className="book-add-to-cart-input"
              type="number"
              min="1"
              max="100"
              value={qty}
              onChange={e => setQty(e.target.value)}
            />
                  <p className="get"> {ElectronicsData.otherpara}</p>
                  <p>{ElectronicsData.otherparapara}</p>
                  <ul className="cash">
                  <li><img src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-cod._CB638858551_.png" alt="" /><span>Cash In Delivery</span> </li>
                  <li><img src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-returns._CB403797073_.png" alt="" /><span>15 days Returnable</span></li> 
                  <li><img src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB403797073_.png" alt="" /><span>Fulfilledby Amazon</span></li> 
                  <li><img src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-secure-transaction._CB414468582_.png" alt="" /><span>Secure transaction</span></li> 
                </ul>
                <div className="add">
                <button onClick={() => addToCart(ElectronicsData,qty)}  className="inner-btn" >Add To Cart</button>
                {/* <button className="buy">Buy Now</button> */}
                </div>
        </div>
      </div>
      </Container>
        </div>
        <Footer />
        </>
    )
}
export default InnerPage