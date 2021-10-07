import React from 'react'
import "./cardcontainer.css";
import arr from "../../data";
import Card from "./Card";

function CardContainer() {
    return (
        <div className="card-container">
            {
                arr.map(elem=> <Card key={elem.id} name={elem.name} km={elem.km} owner={elem.owner} fuel={elem.fuel} model={elem.model} emi={elem.emi} price={elem.price} img={elem.img} location={elem.location} />)
            }
        </div>
    )
}

export default CardContainer
