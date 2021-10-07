import React, { useEffect, useState } from 'react'
import CartCard from "../../components/cartCard/CartCard";
import arr from '../../data';
import "./cart.css";
import {useCar} from "../../context/CarContext";

function Cart() {
 
    const{state}=useCar();
    const[newarr,setNewarr]=useState([])
    
    useEffect(()=>{
      let temp=arr.filter(elem=>state.cart.includes(elem.id))
       setNewarr(temp);
    },[state.cart])

    function sum(){
       let ans= newarr.reduce((acc,elem)=>{
           return acc+=elem.price
        },0)

        return ans;
    }

    let total_price=sum();
    console.log(total_price)
    return (
        <div className="wishlist-container">
            <h1>Cart</h1>
            {
               newarr && newarr.map(elem => <CartCard key={elem.id} id={elem.id} name={elem.name} km={elem.km} owner={elem.owner} fuel={elem.fuel} model={elem.model} emi={elem.emi} price={elem.price} img={elem.img} location={elem.location}/>)
            }

            <h3>Total worth of cart is ₹{total_price}</h3>
        </div>
    )
}

export default Cart
