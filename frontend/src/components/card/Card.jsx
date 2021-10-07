import React from 'react'
import "./cardcontainer.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useCar} from "../../context/CarContext";
import { IconButton } from '@mui/material';
import data from "../../data";

function Card({id,name,km,owner,fuel,model,emi,price,img,location}) {

    const{state,dispatch}=useCar();
    return (
        <div className="card">
            <img src={img} alt="" />
            <div className="card-line">
                <h4>{name}</h4>
                <IconButton>
                   {
                       !state.wishlist.includes(data[id].id)
                       ? <FavoriteBorderIcon fontSize="large" onClick={()=>dispatch({type:"ADD_TO_WISHLIST",payload:data[id].id})} />
                       : <FavoriteIcon fontSize="large" onClick={()=>dispatch({type:"REMOVE_FROM_WISHLIST",payload:data[id].id})} />
                   }
                   
                    
                </IconButton>
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


        </div>
    )
}

export default Card
