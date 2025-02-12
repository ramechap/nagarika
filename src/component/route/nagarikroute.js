import React, { useRef } from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
    Link
    
  } from "react-router-dom";

import Navbar_Nagarik from '../frontend/nav';
import Home_nagarik from '../frontend/home';
import Footer from '../frontend/footer';
import News from '../frontend/news';
import Contacts from '../frontend/contact';
import LoginForm from '../frontend/auth/login';


export default function Route_Nagarik() {
  const workRef = useRef(null);
    const serviceRef = useRef(null); 
    const qnRef = useRef(null); 
    const scrollToWork = () => {
      workRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToService = () => {
      serviceRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToQn = () => {
    qnRef.current.scrollIntoView({ behavior: 'smooth' });
};
  return (
   
    <>
    <Navbar_Nagarik workRef={workRef} serviceRef={serviceRef} qnRef={qnRef} scrollToQn={scrollToQn} scrollToWork={scrollToWork} scrollToService={scrollToService} />
        <Routes>

         <Route exact path='/' element={<Home_nagarik workRef={workRef} qnRef={qnRef} serviceRef={serviceRef}/>}/> 
         
         <Route exact path='/news' element={<News/>}/> 

         <Route exact path='/contact' element={<Contacts />}/> 
      

         

            
        </Routes>
        <Footer/>
        
    </>
      
    
  )
}
