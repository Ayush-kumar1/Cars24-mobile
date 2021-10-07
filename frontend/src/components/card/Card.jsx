import React from 'react'
import "./cardcontainer.css";

function Card({name,km,owner,fuel,model,emi,price,img,location}) {
    return (
        <div className="card">
            <img src={img} alt="" />
            <div className="card-line">
                <h4>{name}</h4>
                ❤️
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
