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
   <BrowserRouter basename='/nagarika'>
   <Routes>
        
        <Route path="/nagarika/*" element={<Route_Nagarik/>} />

        
        <Route path="/nagarika/citizen/*" element={<Route_user/>} />

       
      </Routes>
   </BrowserRouter>
   </>
      
    
  )
}
