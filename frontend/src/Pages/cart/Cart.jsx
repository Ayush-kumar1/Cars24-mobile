import React from 'react'
import CartCard from "../../components/cartCard/CartCard";
import arr from '../../data';
import "./cart.css"

function Cart() {
    return (
        <div className="wishlist-container">
            {
                arr.map(elem => <CartCard key={elem.id} name={elem.name} km={elem.km} owner={elem.owner} fuel={elem.fuel} model={elem.model} emi={elem.emi} price={elem.price} img={elem.img} location={elem.location}/>)
            }
        </div>
    )
}

export default Cart
