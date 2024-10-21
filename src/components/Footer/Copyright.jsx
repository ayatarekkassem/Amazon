import './Footer.css';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Copyright = () =>{
    return(
        <>
         <div className="copyright">
                {/* <Container> */}
                        <div className="copyright-items">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={3}>
                                <Item>
                                <div className="copyright-item">                                                            
                                    <h6>Amazon Advertising</h6>
                                    <span>Find, attract, and</span>
                                    <span>engage customers</span>	
                                </div>
                                <div classname="copyright-item">
                                 <h6 className="audib">Audible</h6>
                                <span>Download</span>
                                <span>Audio Books</span>
                                </div>
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                <Item>
                                <div className="copyright-item">
                                   <h6>	Sell on Amazon.ae</h6>
                                   <span>Sell globally, start with UAE</span>
                                </div>
                                <div className="copyright-item">
                                   <h6>	IMDb</h6>
                                    <span>Movies, TV</span>
                                    <span>& Celebrities</span>
                                </div>
                                </Item>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                <Item>
                                <div className="copyright-item">
                                <h6>Sell on Amazon.ae</h6>
                                <span>Sell globally, start with UAE</span>	
                                </div>
                                <div className="copyright-item">
                                <h6>Alexa</h6>
                                <span>Actionable Analytics</span>
                                <span>for the Web</span>		
                                </div>

                                </Item>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                <Item>
                                <div className="copyright-item">
                                <h6>Amazon Web Services</h6>
                                <span>Scalable Cloud</span>
                                <span>Computing Services</span>
                                </div>
                                <div className="copyright-item">
                                <h6>Shopbop</h6>
                                <span>Designer</span>
                                <span>Fashion Brands</span>		 
                                </div>
                                </Item>
                                </Grid>
                            </Grid>
                            </Box>
                        </div>
                        {/* copyright-items */}
                        <div className="copyright-lists">
                            <ul>
                                <li>Conditions of Use & Sale</li>
                                <li>Privacy Notice</li>
                                <li>Interest-Based Ads</li>
                            </ul>
                            <p>©1996–2024, Amazon.com, Inc. or its affiliates</p>
                        </div>
                {/* </Container> */}
        </div>
        </>
    )
}
export default Copyright