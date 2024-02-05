import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar navbar-light">
        <div className="Shop-name">
          <div className="main">M/s. Gokul Traders</div>
          <div className="sub">Charcoal Merchant</div>
        </div>
      <div>
      <div>
      <Link to="/contactUs" id="contactUs">
          contact
        </Link>
      <Link to="/aboutUs" id="contactUs">
          about
        </Link>
      </div>
        
      </div>
    </div>
  );
}
