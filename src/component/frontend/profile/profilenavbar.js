import React from 'react'
import "../profile/profilenavbar.css"
import { RiShieldUserLine } from "react-icons/ri";
import nagriklogo from "../../image/nepallogo.png";
import { Link } from 'react-router-dom';
import { IoMdSettings } from "react-icons/io";

export default function Profilenavbar() {
    return (
        <nav  class="navbar navvy navbar-expand-lg navbar-dark bg-dark">
            <div className='navbar-header'>
                <Link className="navbar-brand" to="#">
                    <img src={nagriklogo} width={70} height={50} alt='nagrik-logo' />
                </Link>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav" style={{ display: "flex", alignItems: "center", color: "white", fontSize: "25px" }}>
                    <li class="nav-item active" style={{ display: "flex", alignItems: "center" }}>
                        <RiShieldUserLine style={{ fontSize: "40px" }} />
                        <a class="nav-link" href="#">Bibek Yadav <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown">
                            <IoMdSettings style={{ fontSize: "35px" }}  class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                            

                            <div class="dropdown-menu" style={{alignItems:"center"}} aria-labelledby="dropdownMenuLink">
                                <button class="dropdown-item" >Action</button>
                                <button class="dropdown-item" >Another action</button>
                                <button class="dropdown-item">Something else here</button>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </nav>
    )
}
