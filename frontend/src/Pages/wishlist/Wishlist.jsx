import React,{useState,useEffect} from 'react'
import WishlistCard from '../../components/wishlistCard/WishlistCard';
import arr from '../../data';
import "./wishlist.css";
import {useCar} from "../../context/CarContext";

function Wishlist() {
    const{state}=useCar();

    const[newarr,setNewarr]=useState([])
    
    useEffect(()=>{
      let temp=arr.filter(elem=>state.wishlist.includes(elem.id))
       setNewarr(temp);
    },[state.wishlist])


    return (
        <div className="wishlist-container">

            <h1>Wishlist</h1>
            {
               newarr && newarr.map(elem => <WishlistCard key={elem.id} id={elem.id} name={elem.name} km={elem.km} owner={elem.owner} fuel={elem.fuel} model={elem.model} emi={elem.emi} price={elem.price} img={elem.img} location={elem.location}/>)
            }
        </div>
    )
}

export default Wishlist
