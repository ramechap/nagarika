import React, { useRef } from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
    Link
    
  } from "react-router-dom";
import Route_Nagarik from './nagarikroute';
import Route_user from './userroute';




export default function Route_All() {
 
  return (
   
   <>
   <BrowserRouter>
   <Routes>
        
        <Route path="/*" element={<Route_Nagarik/>} />

        
        <Route path="/citizen/*" element={<Route_user/>} />

       
      </Routes>
   </BrowserRouter>
   </>
      
    
  )
}
