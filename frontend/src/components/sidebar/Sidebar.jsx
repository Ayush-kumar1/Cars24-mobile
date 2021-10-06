import React from 'react'
import "./sidebar.css";
import CloseIcon from '@mui/icons-material/Close';
import {Link, animateScroll as scroll} from "react-scroll";
import { Button } from '@mui/material';

function Sidebar({isOpen,setOpen}) {
    return (
        <div style={{display:isOpen?"grid":"none"}} className="sidebar-container">
            <div className="sidebar-icon">
                <CloseIcon onClick={()=>setOpen(false)} style={{color:"white"}} fontSize="large" />
             </div>  
             
             <div className="sidebar-wrapper">
             <div className="sidebar-menu">
           
             <Link onClick={()=>setOpen(false)} smooth={true} duration={1000} offset={-80} to="home"  className="sidebar-link">Home</Link>
             <Link onClick={()=>setOpen(false)} smooth={true} duration={1000} to="features" offset={-80} className="sidebar-link">Features</Link>
             <Link onClick={()=>setOpen(false)} smooth={true} duration={1000} offset={-80} to="blog" className="sidebar-link">Blog</Link>
             <Link onClick={()=>setOpen(false)} smooth={true} duration={1000} to="footer" className="sidebar-link">Contact</Link>
            
            <div className="sidbar-btn-wrapper">
            
             <Button className="sidebar-btn" variant="contained" color="primary">
                Signin
            </Button>
            <Button className="sidebar-btn" variant="contained" color="primary">
                Signup
            </Button>
            </div>
            
             
             </div>
             </div>


        </div>
    )
}

export default Sidebar
