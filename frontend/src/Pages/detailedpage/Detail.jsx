import React from 'react'
import data from "../../data";
import "./detail.css";
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useCar} from "../../context/CarContext";
import { useParams } from 'react-router';

function Detail() {
    const{state,dispatch}=useCar();
    console.log(state);

    const {id}=useParams();
    
    return (
        <div className="detail-container">
            <img src={data[id].img} alt="" />
             
             <div className="detail-line-2">
                 <p className="detail-car-name">{data[id].name}</p>
                 <IconButton>
                <ShareIcon/>
                </IconButton>
             </div>

             <div className="detail-line-2">
                 <div className="feature-container">
                     <p>{data[id].km}</p>
                 </div>

                 <div className="feature-container">
                     <p>{data[id].owner}</p>
                 </div>

                 <div className="feature-container">
                     <p>{data[id].fuel}</p>
                 </div>

                 <div className="feature-container">
                     <p>{data[id].model}</p>
                 </div>
             </div>

             <div className="detail-line-2">
                 <div className="detail-emi">
                     <h3>₹{data[id].emi}</h3>
                     <h4>Zero downpayment</h4>
                     <p className="detail-emi-data">Customized EMI Plans</p>
                 </div>

                 <div className="detail-price">
                     <h3>or ₹{data[id].price}</h3>
                      <h4>20% discount</h4>
                      <p className="detail-emi-data">Free Benefits</p>
                 </div>
             </div>

              <div className="save-promotion">
                  <h3>You saved 20% on this deal</h3>
              </div>

              <div className="detail-line-2">
                  <h3>Get this car at zero down payment</h3>
                  <IconButton>
                    <ChevronRightIcon/>
                    </IconButton>
              </div>

              <div className="detail-footer">
                <IconButton>
                   {
                       !state.wishlist.includes(data[id].id)
                       ? <FavoriteBorderIcon fontSize="large" onClick={()=>dispatch({type:"ADD_TO_WISHLIST",payload:data[id].id})} />
                       : <FavoriteIcon fontSize="large" onClick={()=>dispatch({type:"REMOVE_FROM_WISHLIST",payload:data[id].id})} />
                   }
                   
                    
                </IconButton>

                

                {
                    !state.cart.includes(data[0].id)
                    ? 
                    <div onClick={()=>dispatch({type:"ADD_TO_CART",payload:data[0].id})} className="detail-book-btn">
                 <h3>Book Now</h3>
                </div>
                :
                <div onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:data[0].id})} className="detail-book-btn">
                 <h3>Booked</h3>
                </div>
                }

              </div>

        </div>
    )
}

export default Detail
