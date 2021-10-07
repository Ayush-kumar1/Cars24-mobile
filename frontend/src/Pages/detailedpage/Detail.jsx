import React from 'react'
import data from "../../data";
import "./detail.css";
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Detail() {
    return (
        <div className="detail-container">
            <img src={data[0].img} alt="" />
             
             <div className="detail-line-2">
                 <p className="detail-car-name">{data[0].name}</p>
                 <IconButton>
                <ShareIcon/>
                </IconButton>
             </div>

             <div className="detail-line-2">
                 <div className="feature-container">
                     <p>{data[0].km}</p>
                 </div>

                 <div className="feature-container">
                     <p>{data[0].owner}</p>
                 </div>

                 <div className="feature-container">
                     <p>{data[0].fuel}</p>
                 </div>

                 <div className="feature-container">
                     <p>{data[0].model}</p>
                 </div>
             </div>

             <div className="detail-line-2">
                 <div className="detail-emi">
                     <h3>₹{data[0].emi}</h3>
                     <h4>Zero downpayment</h4>
                     <p className="detail-emi-data">Customized EMI Plans</p>
                 </div>

                 <div className="detail-price">
                     <h3>or ₹{data[0].price}</h3>
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
                    <FavoriteBorderIcon fontSize="large" />
                </IconButton>

                <div className="detail-book-btn">
                 <h3>Book Now</h3>
                </div>

              </div>

        </div>
    )
}

export default Detail
