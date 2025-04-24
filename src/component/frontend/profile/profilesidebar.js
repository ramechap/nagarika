import React, { useEffect, useState } from 'react'
import "../profile/profilesidebar.css"
import { MdDashboard } from "react-icons/md";
import citizicon from "../../image/citizicon.png";
import ss from "../../image/+2.png";
import pancard from "../../image/pancard.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from 'react-router-dom';

export default function Profilesidebar(props) {
    const{  toogle, settoogle }=props;
    useEffect(() => {
        // Function to handle the window resizing
        const handleResize = () => {
            if (window.innerWidth < 768) {
                settoogle(true);
            } 
        };

        // Set initial sidebar state on component mount
        handleResize(); 

        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }
    )
  const location = useLocation(); 
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
    const isActive = (path) => {
      return location.pathname === path ? "sidelink" : "";
    };
  return (
    <>
    {
        toogle?
        <div
  className="d-flex flex-column siddy flex-shrink-0 bg-light"
  style={{  width: "4.5rem",height:"100vh" ,position:"fixed"}}
>
  <Link
   
    className="d-block p-3 link-dark text-decoration-none"
    title=""
    data-bs-toggle="tooltip"
    data-bs-placement="right"
    data-bs-original-title="Icon-only"
  >
     <GiHamburgerMenu aria-disabled={`${window.innerWidth < 768?true:false}`}  onClick={()=>window.innerWidth < 768?null:settoogle(!toogle)} style={{width:"40px",color:"white",height:"30px",alignItems:"end"}}/>

    
  </Link>
  <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
    <li className="nav-item">
      <Link
        to="/citizen/user/dashboard"
        className="nav-link active py-3 border-bottom"
        aria-current="page"
        title=""
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Home"
      >
         <MdDashboard style={{width:"30px",height:"30px",marginRight:"5px"}} />

      </Link>
    </li>
    <li>
      <Link
        to="/citizen/user/citizenship"
        className="nav-link py-3 border-bottom"
        title=""
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Dashboard"
      >
         <img src={citizicon} style={{width:"30px",height:"30px",marginRight:"5px"}}/>

      </Link>
    </li>
    <li>
      <Link
        to="/citizen/user/+2-details"
        className="nav-link py-3 border-bottom"
        title=""
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Orders"
      >
            <img src={ss} style={{width:"30px",height:"30px",marginRight:"5px"}}/>

      </Link>
    </li>
  </ul>
</div>
:
<div 
className="d-flex siddy flex-column flex-shrink-0 p-3 text-white bg-dark"
style={{ width: "280px",height:"100vh" ,position:"fixed"}}
>
<Link
  
  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
>
  
  
  <GiHamburgerMenu onClick={()=>settoogle(!toogle)} style={{width:"40px",height:"30px",alignItems:"end"}}/>
</Link>
<hr />
<ul className="nav nav-pills flex-column mb-auto">
  <li className="nav-item">
    <Link to="/citizen/user/dashboard" className={`nav-link  text-white  ${isActive("/citizen/user/dashboard")} `} aria-current="page">
    <MdDashboard style={{width:"30px",height:"30px",marginRight:"5px"}} />
    Dashboard
    </Link>
  </li>
  <li>
    <Link to="/citizen/user/citizenship" className={`nav-link  text-white ${isActive("/citizen/user/citizenship")}  `}>
     <img src={citizicon} style={{width:"30px",height:"30px",marginRight:"5px"}}/>
      Citizenship
    </Link>
  </li>
  <li>
    <Link to="/citizen/user/+2-details" className={`nav-link  text-white ${isActive("/citizen/user/+2-details")}  `}>
    <img src={ss} style={{width:"30px",height:"30px",marginRight:"5px"}}/>

      +2 Detail
    </Link>
  </li>

</ul>
<hr />
</div>

    }

    </>
  )
}
