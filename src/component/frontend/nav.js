import React, { useEffect, useState } from 'react';
import nagriklogo from "../image/nagriklogo.png";
import { IoEarthOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import "../css/nav.css";

export default function Navbar_Nagarik(props) {
  const [locate, setLocate] = useState("/");
  const location = useLocation();  // This will help track the current location

  useEffect(() => {
    console.log(window.location.href);  // Log current URL in console
  }, []);

  const { workRef, serviceRef, scrollToWork, scrollToService, scrollToQn } = props;

  // Helper function to check if the current route is active
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed">
      <div className='navbar-header'>
        <Link className="navbar-brand" to="#">
          <img src={nagriklogo} width={100} height={100} alt='nagrik-logo' />
        </Link>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item ${isActive("/")}`}>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  onClick={scrollToWork}>How it works?</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={scrollToService}>Services</Link>
          </li>
          <li className={`nav-item ${isActive("/news")}`}>
            <Link className="nav-link" to="/news">News</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={scrollToQn}>FAQS</Link>
          </li>
          <li className={`nav-item ${isActive("/contact")}`}>
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link id="nav-btn" className="nav-link" to="/citizen/login"> <IoEarthOutline /> Web App</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
