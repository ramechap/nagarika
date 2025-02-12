import React, { useRef } from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
    Link
    
  } from "react-router-dom";


import LoginForm from '../frontend/auth/login';
import RegistrationForm1 from '../frontend/auth/registration';
import TokenVerify from '../frontend/auth/tokenverify';
import Multistep from '../frontend/auth/multistep';
import Route_Profile from './profileroute';


export default function Route_user() {

  return (
   
    <>
        <Routes>

        
         <Route exact path='/login' element={<LoginForm />}/> 
         <Route exact path='/registration' element={<Multistep />}/> 
         <Route exact path='/token-verification' element={<TokenVerify />}/> 
         <Route exact path='/user/*' element={<Route_Profile />}/> 

         

            
        </Routes>
     
        
    </>
      
    
  )
}
