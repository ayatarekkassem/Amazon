import './Footer.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Logo from "../../assets/header-logo.png";
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Copyright from './Copyright.jsx';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  


  
const Footer = () =>{
    // const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //   setAge(event.target.value);
    // };

    return(
        <>
            <section className="footer">
           
            <div className="backToTop">
                    <ScrollToTop />
                </div>
             
                        <div className="footer-items">
                        <Container maxWidth="lg">
                            <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={3}>
                                <Item>
                                <div className="footer-item">
                                    <h5>Get to Know Us</h5>
                                        <span>About Amazon</span>
                                        <span>Careers</span>
                                        <span>Amazon Science</span>
                                </div>
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                <Item>
                                <div className="footer-item">
                                    <h5>Shop with Us</h5>
                                        <span>Your Account</span>
                                        <span>Your Orders</span>
                                        <span>Your Addresses</span>
                                        <span>Your Lists</span>
                                </div>
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                <Item>
                                <div className="footer-item">
                                    <h5>Make Money with Us</h5>
                                        <span>Protect and build your brand</span>
                                        <span> Advertise Your Products</span>
                                        <span>Sell on Amazon</span>
                                        <span>Fulfillment by Amazon</span>
                                </div>
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                <Item>
                                <div className="footer-item">
                                    <h5>Let Us Help You</h5>
                                        <span>Help</span>
                                        <span> Shipping & Delivery</span>
                                        <span>  Returns & Replacements</span>
                                        <span> Amazon App Download</span>
                                </div>
                                </Item>
                                </Grid>
                            </Grid>
                            </Box>
                        </Container>
                        </div>
                        {/*  */}

                                {/* Lang */}
                    <div className="lang-lang">
                    <Container maxWidth="lg">
                        <div className='lang-items'>
                        <div className="lang-logo">
                            <img src={Logo} alt='Logo' className='logoImg' />
                        </div>
                        <div className="lang-select">
                        {/* <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" className='lang-head'>English</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>
                            <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="ِAR-العربيه" />
                            <FormControlLabel required control={<Checkbox />} label="ُEN-English" />
                            
                            </FormGroup>
                            </MenuItem>
                            <MenuItem value={20} className="menu">
                            Learn More
                            </MenuItem>
                    
                        </Select>
                        </FormControl>
                        </Box> */}
                         <select>
                            <option>English</option>
                            <option>العربيه - AR</option>
                            <option>English - EN</option>
                        </select>
                        </div>
                        <div className="lang-egy">
                        <button>Egypt</button>
                        </div>
                        </div>
                    </Container>
                    </div>
                    {/* ./lang items */}
                 
                  
                    {/* copyright */}
                    <Copyright />
                
            </section>
        </>
    )
}
export default Footer