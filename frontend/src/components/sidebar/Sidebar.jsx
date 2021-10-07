import React from "react";
import "./sidebar.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link} from "react-router-dom";
import { Button } from "@mui/material";
import PropTypes from 'prop-types';

function Sidebar({ isOpen, setOpen }) {
  return (
    <div
      style={{ display: isOpen ? "grid" : "none" }}
      className="sidebar-container"
    >
      <div className="sidebar-icon">
        <CloseIcon
          onClick={() => setOpen(false)}
          style={{ color: "white" }}
          fontSize="large"
        />
      </div>

      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <Link
            onClick={() => setOpen(false)}
            to="/home"
            className="sidebar-link"
          >
            Home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            
            to="/cart"
            offset={-80}
            className="sidebar-link"
          >
            Cart
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/wishlist"
            className="sidebar-link"
          >
            Wishlist
          </Link>
          

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
  );
}

Sidebar.propTypes={
    isOpen: PropTypes.bool,
    setOpen: PropTypes.func
}

Sidebar.defaultProps={
    isOpen: false
}

export default Sidebar;
