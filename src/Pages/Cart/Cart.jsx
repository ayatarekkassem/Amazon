

import React, { useContext } from "react";
import  "./Cart.css";
import BookStoreContext from "../../context/BookStoreContext"
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from '@mui/material';
import SyncLoader from "react-spinners/SyncLoader";
import { useEffect, useState } from 'react';

const Cart = () => {
  const { cartInfo, removeFromCart, addToCart } = useContext(BookStoreContext);
 
const notify = () => toast("Order Placed");

        // Loading
        const[loading , setLoading] = useState(false)

        useEffect(() =>{
          setLoading(true)
          setTimeout(()=>
            setLoading(false),3000)
           
         }, [])
  return (
    <div className="cart">
              {
         loading ?
         <div className="loading">
            <SyncLoader />
         </div>
         :
 <div>
      <Header />

      <Container maxWidth="lg">
      <h3 className="cart-title">Shopping Cart</h3>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartInfo.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-img"
              />
              <div className="cart-item-info">
                <div>
                  <div className="cart-item-book-title">
                    <b>Title: </b>
                    {item.title}
                  </div>
                
                </div>
                <div>
                  <div className="cart-item-quantity">
                    <button
                      onClick={() => addToCart(item, parseInt(item.quantity) + 1)}
                      className="bi bi-plus-lg"
                    >+</button>
                    <b>QTY: {item.quantity}</b>
                    <button
                      disabled={item.quantity <= 1}
                      onClick={() => addToCart(item, parseInt(item.quantity) - 1)}
                      className="bi bi-dash-lg"
                    >-</button>
                  </div>
                  <div className="cart-item-price">
                  {/* EGP{(item.price * item.quantity).toFixed(2)} */}
                  EGP
                  {item.price*item.quantity}
                  </div>
                 <button className="del"  onClick={() => removeFromCart(item.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-order-summary">
          <p>
          Your order qualifies for FREE Shipping Choose this option at checkout. See details
          </p>
         
        
          <div className="order-summary-item">
            <strong>Subtotal:  </strong>
            <span>
              EGP
              {/* {cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)} */}
              {cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)}
            </span>
          </div>

          {/* <button className="buy" onClick={formButton}>Proceed To Buy </button> */}
          <button className="buy"  onClick={notify}>Proceed To Buy</button>
          <ToastContainer />
        </div>
      </div>
      </Container>
      <Footer />
      </div>
                        }    
    </div>
  );
};

export default Cart;