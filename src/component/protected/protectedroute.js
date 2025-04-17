import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UseProductContext } from '../usecontext/usecontext';

const ProtectedRoute = ({ children }) => {
  
    const [authenticated, setAuthenticated] = useState(false);
  
  
    useEffect(() => {
      // Check session-based authentication by hitting a protected route
      fetch('http://localhost:8000/nagarik/check-auth', {
        credentials: 'include',  // Important: allows cookies (sessionid) to be sent
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Response from check-auth:", data); // Log the response to verify
          if (data.authenticated) {
           
            console.log("User is authenticated");
            setAuthenticated(true); // User is authenticated
          
          } else {
            console.log("User is not authenticated");
            setAuthenticated(false); // User is not authenticated
          }
        })
        .catch(() => {
          console.log("Error while checking authentication");
          setAuthenticated(false); // In case of error, assume not authenticated
        });
    }, []);
  
 
  const navigate = useNavigate();



  if (authenticated === null) {
    return <div>Loading...</div>; // Show a loading state until authentication is checked
  }

  return authenticated ? children : <Navigate to="/citizen/login" replace />;
};

export default ProtectedRoute;
