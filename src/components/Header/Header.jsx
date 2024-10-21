import './Header.css';
import Logo from "../../assets/header-logo.png";
import Container from '@mui/material/Container';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";
import BookStoreContext from '../../context/BookStoreContext';
 import Navbar from './Navbar';
//  import Logo from "../../assets/logo.png";
 import { IoLocationOutline } from "react-icons/io5";
 import { IoCartOutline } from "react-icons/io5";
 import { FaSearch } from "react-icons/fa";
 import { useContext } from "react";
const Header = () =>{
const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

//   const { cartItemsLength } = React.useContext(BookStoreContext);
  const { cartInfoLength } = useContext(BookStoreContext);
    return(
        <header>
             <Container maxWidth="lg">
                <div className='header-items'>
                    <div className='header-left'>
                        <div className="logo">
                                <Link to="/Home">
                                    {/* <img src="https://th.bing.com/th/id/OIP.BPGuMxbx_Zyin_FUqyca0gHaE8?pid=ImgDet&w=191&h=127&c=7" alt='Logo' className='logoImg' /> */}
                                    <img src={Logo} alt="" />
                                </Link>
                            </div>
                            <div className="deliver">
                                <span><IoLocationOutline /></span>
                                <div className="deliver-info">
                                    <h6 className="deliver-item">Deliver to</h6>
                                    <h5>Egypt</h5>
                                </div>
                            </div>
                    </div>
                    <div className="header-input">
                        <div className="header-input-select">
                            {/* <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">All</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                    >
                                  <MenuItem value={10}>All Categories</MenuItem>
                                <MenuItem value={20}>Amazon Devices</MenuItem>
                                <MenuItem value={30}>Amazon Fashion</MenuItem>
                                <MenuItem value={30}>Amazon Warehouse</MenuItem>
                                <MenuItem value={30}>Arts, Crafts & Sewing</MenuItem>
                                <MenuItem value={30}>Automotive Parts & Accessories</MenuItem>
                                <MenuItem value={30}>Baby</MenuItem>
                                <MenuItem value={30}>Health, Household & Baby Care</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box> */}
                            <select>
                                <option>All</option>
                                <option>AllCategories</option>
                                <option>Amazon Devices</option>
                                <option>Amazon Fashion</option>
                                <option>Amazon Warehouse</option>
                                <option>Arts, Crafts & Sewing</option>
                                <option>Baby</option>
                                <option></option>
                            </select>
                        </div>
                                <input type="search" placeholder="Search Amazon.eg " />
                                <span className="iconSearch"><FaSearch /></span>
                    </div>
                    <div className="header-right">
                    {/* <div className="en">
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">EN</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={10}>العربيه - AR</MenuItem>
                                    <MenuItem value={20}>English - EN</MenuItem>
                                    </Select>
                                </FormControl>
                                </Box>
                               
                            </div> */}
                        <div className="header-signIn">
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" >
                                    Hello, sign in 
                                    <br />
                                    Account & Lists
                                    </InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={10}  className="signIn-firstO" >
                                        <button className="header-login-btn"><Link to="/Login">Sign In</Link></button>  <br />
                                        <div className='header-register'>
                                        New customer? <Link className="regi-link" to="/Register">Start Here </Link>
                                        </div>
                                    </MenuItem>
                                    <MenuItem value={20}>Your Account</MenuItem>
                                    <MenuItem value={30}>Your Orders</MenuItem>
                                    <MenuItem value={20}>Your Addresses</MenuItem>
                                    <MenuItem value={20}>Your Lists</MenuItem>
                                    <MenuItem value={20}>Your Recommendations</MenuItem>
                                    <MenuItem value={20}>Your Prime Membership</MenuItem>
                                    <MenuItem value={20}>Your Seller Account</MenuItem>
                                    </Select>
                                </FormControl>
                                </Box>
                                
                            </div>
                          
                            {/* <div className="orders">
                                <button>Orders</button>
                            </div> */}
                            <div className="header-cart">
                                <Link to="/cart" className="header-middle-cart-wrapper">
                                    {/* {cartItemsLength > 0 && (
                                    <b className="cart-notification">{cartItemsLength}</b>
                                    )} */}
                                     {cartInfoLength > 0 && (
          <b className="cart-notification">{cartInfoLength}</b>
        )}
                                    <span><IoCartOutline /></span>
                                    <span>Cart</span>
                                </Link>
                              
                            </div>
                        </div>
                    </div>
               
                </Container>
            <Navbar /> 
        </header>
    )
}
export default Header