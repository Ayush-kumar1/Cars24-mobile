import React from "react";
import "./cartCard.css";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import {Link} from "react-router-dom";
import {useCar} from "../../context/CarContext";
import PropTypes from 'prop-types';

function CartCard({
  id,
  name,
  km,
  owner,
  fuel,
  model,
  emi,
  price,
  img
})
{

  const{dispatch}=useCar();
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
            <Link to={"/product/"+id}>
            <h3>View Details</h3>
            </Link>
          </div>
             
             <IconButton onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:id})}>
            <CloseIcon/>
            </IconButton>

      </div>

    </div>
  );
}

CartCard.propTypes={
  id:PropTypes.number,
  name:PropTypes.string,
  km:PropTypes.string,
  owner:PropTypes.string,
  fuel: PropTypes.string,
  model: PropTypes.string,
  emi: PropTypes.number,
  price: PropTypes.number,
  img: PropTypes.string
}

export default CartCard;
