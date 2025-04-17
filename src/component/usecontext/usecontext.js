import React, { useContext, useEffect, useState } from 'react';
import ThemeContexts from './createcontext';
import { useNavigate } from 'react-router-dom';

export default function ThemeProviders({ children }) {
  const [authenticated, setAuthenticated] = useState(false);


  // useEffect(() => {
  //   // Check session-based authentication by hitting a protected route
  //   fetch('http://localhost:8000/nagarik/check-auth', {
  //     credentials: 'include',  // Important: allows cookies (sessionid) to be sent
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Response from check-auth:", data); // Log the response to verify
  //       if (data.authenticated) {
         
  //         console.log("User is authenticated");
  //         setAuthenticated(true); // User is authenticated
        
  //       } else {
  //         console.log("User is not authenticated");
  //         setAuthenticated(false); // User is not authenticated
  //       }
  //     })
  //     .catch(() => {
  //       console.log("Error while checking authentication");
  //       setAuthenticated(false); // In case of error, assume not authenticated
  //     });
  // }, []);
  // useEffect(() => {
  //   console.log("Updated authenticated value:", authenticated);
  // }, [authenticated]);
  
  return (
    <ThemeContexts.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </ThemeContexts.Provider>
  );
}

const UseProductContext = () => {
  return useContext(ThemeContexts);
};

export { UseProductContext };
