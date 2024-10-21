import React, {useState} from "react";
import ElectronicsDatas from "../amazoneDataa/ElectronicsDatas";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const InputSearch =() => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            ElectronicsDatas 
              .filter((item) => {
                if(searchTerm == ""){
                  return item;
                }else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return item;
                }
              })
              .map((item) => {
                return(
                  <div className="template" key={item.id}>
                          <Link
                        className="modal-content-info-link"
                        to={`/ElectronicsDatas/${item.id}`}
                        key={item.id}
                      >
                        <Item>
                            <div className="results-item">
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                            <div className="star">
                                <span className="star-num">802</span>
                                
                            </div>
                            <p>{item.para}</p>
                                <div className="price">
                                <span>EGP{item.price}</span>
                                    <span><del>EGP{item.del}</del></span>
                                    
                                </div>
                                <span className="get"> {item.otherpara}</span>
                                </div>
          
          
                        </Item>
                        </Link>
                  </div> 
                )
              })
          }
     
        </div>
      </div>
    </>
  )
}

export default InputSearch 