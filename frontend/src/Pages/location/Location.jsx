import React from 'react'
import "./location.css";
import {Link} from "react-router-dom";
import {useCar} from "../../context/CarContext";

function Location() {
    const{openlocation,setOpenLocation,setLocation}=useCar();

    function locate(place){
        setOpenLocation(false);
        setLocation(place)
    }

    function getCurrentLocation(){
        navigator.geolocation.getCurrentPosition(address,console.log);
        setOpenLocation(false);
    }

   async function address(position){
          const{latitude,longitude}=position.coords;
          const temp=await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=b7e12d4e1c2347ac852bac7088f3e2e4`);
          const res=await temp.json();
          setLocation(res.results[0].components.state_district)
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
             <h3 onClick={()=>getCurrentLocation()}>Current Location</h3>
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
