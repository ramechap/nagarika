import React, { useRef, useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  Link

} from "react-router-dom";


import LoginForm from '../frontend/auth/login';
import Userprofile from '../frontend/profile/userprofile';
import Profilesidebar from '../frontend/profile/profilesidebar';
import Profilenavbar from '../frontend/profile/profilenavbar';
import Profilecitizenship from '../frontend/profile/cprofilecitizenship';
import { CitizenshipCard } from '../frontend/profile/citiencard';
import PanHome from '../frontend/profile/panhome';
import CreatePanCard from '../frontend/profile/createpancard';
import Studentmarksheet from '../frontend/profile/studentmarksheet';



export default function Route_Profile() {
  const [toogle, settoogle] = useState(false)

  return (

    <>
      <Profilenavbar />
      <Profilesidebar settoogle={settoogle} toogle={toogle} />
      <div style={{ marginLeft: toogle ? "60px" : "280px", marginTop: "100px" }}>
        <Routes>


          <Route exact path='dashboard' element={<Userprofile settoogle={settoogle} toogle={toogle} />} />
          <Route exact path='citizenship' element={<Profilecitizenship settoogle={settoogle} toogle={toogle} />} />



          <Route exact path='+2-details' element={<Studentmarksheet settoogle={settoogle} toogle={toogle} />} />




        </Routes>
      </div>


    </>


  )
}
