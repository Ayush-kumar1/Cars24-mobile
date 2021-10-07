import React from 'react'
import WishlistCard from '../../components/wishlistCard/WishlistCard';
import arr from '../../data';
import "./wishlist.css"

function Wishlist() {
    return (
        <div className="wishlist-container">
            {
                arr.map(elem => <WishlistCard key={elem.id} name={elem.name} km={elem.km} owner={elem.owner} fuel={elem.fuel} model={elem.model} emi={elem.emi} price={elem.price} img={elem.img} location={elem.location}/>)
            }
        </div>
    )
}

export default Wishlist
