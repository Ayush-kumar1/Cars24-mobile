import React from "react";
import "./cardcontainer.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import {useCar} from "../../context/CarContext";

function CardContainer() {

  const{filterData,location}=useCar();

  let carsData=filterData.filter(elem=>elem.location===location)
  return (
    <div className="card-container">
      {carsData && carsData.map((elem) => (
       
        <Link to={"/product/"+elem.id}>
        <Card
          key={elem.id}
          id={elem.id}
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
