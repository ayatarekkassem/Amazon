import '../Electronics/Electronics.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import VideoGamesDatas from '../../amazoneDataa/VideoGamesDatas';
import VideoGamesDatasOne from '../../amazoneDataa/VideoGamesDatasOne';
import VideoGamesDatasTwo from '../../amazoneDataa/VideoGamesDatasTwo';
import VideoGamesDatasThree from '../../amazoneDataa/VideoGamesDatasThree';
import {Link} from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Results = () =>{
    // const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
      <p className='results-item-para'>1-12 of over 20,000 results for <span>Video Games</span></p>

        {/* <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div> */}
             
        <div className="results">
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Item>
          {
              VideoGamesDatasOne 
                // .filter((item) => {
                //   if(searchTerm == ""){
                //     return item;
                //   }else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
                //     return item;
                //   }
                // })
                .map((item) => {
                  return(
                    <div className="template" key={item.id}>
                            <Link
                          className="modal-content-info-link"
                          to={`/VideoGamesDatas/${item.id}`}
                          key={item.id}
                        >
                       
                       <div className="results-main-item">
                                <div className="result-img-content">
                              <img src={item.image} alt={item.title} />
                              </div>
                              <div className="result-desc">
                              <h4>{item.title}</h4>
                              <div className="star">
                                  <span className="star-num">802</span>
                                 
                              </div>
                              <p>{item.para}</p>
                                  <div className="price">
                                  <span>EGP{item.price}</span>
                                      {/* <span><del>EGP{item.del}</del></span> */}
                                      
                                  </div>
                                  <span className="get"> {item.otherpara}</span>
                                  </div>
                                  </div>
            
            
                         
                          </Link>

 
                    </div> 
                  )
                })
            }
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>   {
              VideoGamesDatasTwo 
                // .filter((item) => {
                //   if(searchTerm == ""){
                //     return item;
                //   }else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
                //     return item;
                //   }
                // })
                .map((item) => {
                  return(
                    <div className="template" key={item.id}>
                            <Link
                          className="modal-content-info-link"
                          to={`/VideoGamesDatas/${item.id}`}
                          key={item.id}
                        >
                          
                          <div className="results-main-item">
                                <div className="result-img-content">
                              <img src={item.image} alt={item.title} />
                              </div>
                              <div className="result-desc">
                              <h4>{item.title}</h4>
                              <div className="star">
                                  <span className="star-num">802</span>
                                  
                              </div>
                              <p>{item.para}</p>
                                  <div className="price">
                                  <span>EGP{item.price}</span>
                                      {/* <span><del>EGP{item.del}</del></span> */}
                                      
                                  </div>
                                  <span className="get"> {item.otherpara}</span>
                                  </div>
                                  </div>
            
            
                        
                          </Link>

 
                    </div> 
                  )
                })
            }</Item>
        </Grid>
        <Grid item xs={6} md={4}>
        <Item>   {
              VideoGamesDatasThree 
                // .filter((item) => {
                //   if(searchTerm == ""){
                //     return item;
                //   }else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
                //     return item;
                //   }
                // })
                .map((item) => {
                  return(
                    <div className="template" key={item.id}>
                            <Link
                          className="modal-content-info-link"
                          to={`/VideoGamesDatas/${item.id}`}
                          key={item.id}
                        >
                          
                              <div className="results-main-item">
                                <div className="result-img-content">
                              <img src={item.image} alt={item.title} />
                              </div>
                              <div className="result-desc">
                              <h4>{item.title}</h4>
                              <div className="star">
                                  <span className="star-num">802</span>
                                  
                              </div>
                              <p>{item.para}</p>
                                  <div className="price">
                                  <span>EGP{item.price}</span>
                                      {/* <span><del>EGP{item.del}</del></span> */}
                                      
                                  </div>
                                  <span className="get"> {item.otherpara}</span>
                                  </div>
                                  </div>
            
            
                        
                          </Link>

 
                    </div> 
                  )
                })
            }</Item>
        </Grid>
      </Grid>
    </Box>
          </div>
      </div>
    </>
  )
}
export default Results