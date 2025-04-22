import React, { useState, useEffect } from 'react'; 
import { Routes, Route, Navigate } from 'react-router-dom'; 

import LoginForm from '../frontend/auth/login';
import RegistrationForm1 from '../frontend/auth/registration';
import TokenVerify from '../frontend/auth/tokenverify';
import Route_Profile from './profileroute';
import Multistep from '../frontend/auth/multistep';

export default function Route_user() {
  const [authenticated, setAuthenticated] = useState(null);  // Start with null for loading state

  useEffect(() => {
    // Check session-based authentication by hitting a protected route
    fetch('https://nagarik-api.onrender.com/nagarik/check-auth', {
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
  }, []); // Empty dependency array to run only once when component mounts

  // Check if authentication status is still loading
  if (authenticated === null) {
    return <div>Loading...</div>; // Show a loading state while checking authentication
  }

  return (
    <Routes>
      <Route exact path='/login' element={<LoginForm />} />
      <Route exact path='/registration' element={<Multistep />} />
      <Route exact path='/token-verification' element={<TokenVerify />} />
      <Route
        path="/nagarika/user/*"
        element={
          authenticated ? (
            <Route_Profile />
          ) : (
            <Navigate to="/nagarika/citizen/login" replace />
          )
        }
      />
    </Routes>
  );
}
