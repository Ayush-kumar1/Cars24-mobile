import React from 'react'
import "./selectors.css";
import {Link} from "react-router-dom";
import { Button } from '@mui/material';




function Selectors() {
    return (
        <div className="selector-input-container">
            <Link to="/search">
           <input className="selector-input" type="text" placeholder="Search cars by brand or model" />
             </Link> 
              
              <div className="btn-selectors">
                  <Link to="/filters">
             <Button variant="contained">Filter</Button>
             </Link>

             <Link to="/filters">
             <Button variant="contained">Sort</Button>
             </Link>
             
             
             </div>
        </div>
    )
}

export default Selectors
