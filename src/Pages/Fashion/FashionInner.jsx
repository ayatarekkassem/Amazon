import React from "react";
import Container from '@mui/material/Container';
import { useParams } from "react-router-dom";
import FashionResults from '../../amazoneDataa/FashionResults';
// import Rating from "../../components/book-slider/Rating";
import {useState,useContext} from "react";
import BookStoreContext from "../../context/BookStoreContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slider from "react-slick";
import Rating from "../../components/Rating";

const FashionInner = () =>{

  const { id } = useParams();
  const { addToCart } = useContext(BookStoreContext);


  const [qty, setQty] = useState(1);

  const FashionResult = FashionResults.find(p => p.id === parseInt(id));

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
        <div className="InnerPage">
        <Container maxWidth="lg">
      <div className="InnerPage-content">
        <div className="InnerPage-slider">
        <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={FashionResult.image} alt="" />
        </div>
        <div>
        <img src={FashionResult.imageTwo} alt="" />

        </div>
        <div>
        <img src={FashionResult.imageThree} alt="" />

        </div>
        <div>
        <img src={FashionResult.imageFour} alt="" />

        </div>
      </Slider>
    </div>
        </div>
        {/* slider */}
        <div className="InnerPage-info">
        <h4>{FashionResult.title}</h4>
            <p>{FashionResult.para}</p>
            <Rating className="rating" rating={FashionResult.rating} reviews={FashionResult.reviews} />

               <div className="price">
                  <span>EGP{FashionResult.price}</span>
                  {/* <span><del>EGP{FashionResult.del}</del></span>   */}
                </div>
                <input
              className="book-add-to-cart-input"
              type="number"
              min="1"
              max="100"
              value={qty}
              onChange={e => setQty(e.target.value)}
            />
                  <p className="get"> {FashionResult.otherpara}</p>
                  <p>{FashionResult.otherparapara}</p>
                <ul className="cash">
                  <li><img src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-cod._CB638858551_.png" alt="" /><span>Cash In Delivery</span> </li>
                  <li><img src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-returns._CB403797073_.png" alt="" /><span>15 days Returnable</span></li> 
                  <li><img src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB403797073_.png" alt="" /><span>Fulfilledby Amazon</span></li> 
                  <li><img src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-secure-transaction._CB414468582_.png" alt="" /><span>Secure transaction</span></li> 
                </ul>
                <div classname="btns">
                <button onClick={() => addToCart(FashionResult,qty)}  className="inner-btn" >Add To Cart</button>
                </div>
        </div>
      </div>
      </Container>
        </div>
        <Footer />
        </>
    )
}
export default FashionInner