import React, { useEffect, useState } from 'react'
import "../profile/profilenavbar.css"
import { RiShieldUserLine } from "react-icons/ri";
import nagriklogo from "../../image/nepallogo.png";
import { Link } from 'react-router-dom';
import { IoMdSettings } from "react-icons/io";

export default function Profilenavbar() {
     const [userData, setUserData] = useState(null);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchProfile = async () => {
          try {
            
            const response = await fetch('https://nagarik-api.onrender.com/nagarik/profile', {
              method: 'GET',
              credentials: 'include',  // This ensures that the session cookie is sent
            });
    
            const data = await response.json();
           
    
            if (response.ok) {
              setUserData(data);  // Set user and profile data
            } else {
              setError(data.error || 'Something went wrong');
            }
          } catch (err) {
            setError('Error fetching data');
          } finally {
            setLoading(false);
          }
        };
    
        fetchProfile();
      }, []);  // Empty dependency array to run this effect once when the component mounts
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>{error}</div>;
      }

    const LogOut=async()=>{
        try {
            const response = await fetch('https://nagarik-api.onrender.com/nagarik/logout', {
              method: 'POST',
              credentials: 'include', // This is important for session cookies
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            const data = await response.json();
        
            if (response.ok) {
              console.log(data.message); 
              
              window.location.href = '/citizen/login';
            } else {
              console.error(data.error || 'Logout failed');
            }
          } catch (error) {
            console.error('Logout error:', error);
          }
      }
      
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
                        <a class="nav-link" href="#">{userData.profile.firstname} {userData.profile.middlename} {userData.profile.lastname}<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown">
                            <IoMdSettings style={{ fontSize: "35px" }}  class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                            

                            <div class="dropdown-menu" style={{alignItems:"center"}} aria-labelledby="dropdownMenuLink">
                                <button onClick={LogOut} type='button' class="dropdown-item" >Logout</button>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </nav>
    )
}
