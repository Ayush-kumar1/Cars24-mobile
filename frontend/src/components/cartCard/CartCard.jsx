import React from "react";
import "./cartCard.css";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

function CartCard({
  name,
  km,
  owner,
  fuel,
  model,
  emi,
  price,
  img,
  location,
}) {
  return (
    <div className="wishlist-card">
      <img src={img} alt="" />
      <div className="card-line">
        <h4>{name}</h4>
        
      </div>
      <div className="card-line-2">
        <h5>{km}</h5>
        <h5>{owner}</h5>
        <h5>{fuel}</h5>
        <h5>{model}</h5>
      </div>

      <div className="card-line-3">
        <h3 className="emi-data">₹ {emi}/month</h3>
        <h5>₹{price}</h5>
      </div>

      <div className="wishlist-detail-container">
          <div className="detail-btn">
            <h3>View Details</h3>
          </div>
             
             <IconButton>
            <CloseIcon/>
            </IconButton>

      </div>

    </div>
  );
}

export default CartCard;
