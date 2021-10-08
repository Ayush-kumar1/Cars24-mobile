import React from 'react'
import "./location.css";
import {Link} from "react-router-dom";
import {useCar} from "../../context/CarContext";

function Location() {
    const{openlocation,setOpenLocation,location,setLocation}=useCar();

    function locate(place){
        setOpenLocation(false);
        setLocation(place)
    }
    return (
        <>
        {
            openlocation &&
        <div className="location-model">

            <div className="location-content">
             <h2>Select location</h2>

             <Link to="/home">
             <h3 onClick={()=>locate("Bangalore")}>Bangalore</h3>
             </Link>

             <Link to="/home">
             <h3 onClick={()=>locate("New Delhi")}>New Delhi</h3>
             </Link>

             <Link to="/home">
             <h3 onClick={()=>locate("Mumbai")}>Mumbai</h3>
             </Link>

             <Link to="/home">
             <h3 onClick={()=>locate("Bokaro")}>Current Location</h3>
             </Link>

             <Link to="/home">
             <h3 onClick={()=>locate("All location")}>All locations</h3>
             </Link>
             </div>


        </div>
}
        </>
    )
}

export default Location
