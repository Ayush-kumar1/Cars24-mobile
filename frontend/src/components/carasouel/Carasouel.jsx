import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carasouel.css";
import {useCar} from "../../context/CarContext";
function Carasouel() {
 
  const{location}=useCar();
  return (
    <>
    <p className="location-header">Location- {location}</p>
    <Carousel
      autoPlay="true"
      infiniteLoop="true"
      showArrows="false"
      showThumbs="false"
      showStatus="false"
      showIndicators="false"
    >
      <div className="carasoul-content">
          
        <p>Handpicked cars as good as new</p>
      </div>

      <div className="carasoul-content">
        <p>7 days trial or full refund</p>
      </div>

      <div className="carasoul-content">
        <p>6 months warranty on all cars</p>
      </div>
      
    </Carousel>
    </>
  );
}

export default Carasouel;
