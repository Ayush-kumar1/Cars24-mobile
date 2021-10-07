import React from "react";
import "./cardcontainer.css";
import arr from "../../data";
import Card from "./Card";
import { Link } from "react-router-dom";

function CardContainer() {
  return (
    <div className="card-container">
      {arr.map((elem) => (
       
        <Link to={"/product/"+elem.id}>
        <Card
          key={elem.id}
          name={elem.name}
          km={elem.km}
          owner={elem.owner}
          fuel={elem.fuel}
          model={elem.model}
          emi={elem.emi}
          price={elem.price}
          img={elem.img}
          location={elem.location}
        />
        </Link>
      ))}
    </div>
  );
}

export default CardContainer;
