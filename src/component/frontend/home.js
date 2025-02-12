import React from 'react'
import "../css/home.css"
import bajepic from "../image/bajepic.png"
import pankta from "../image/pankta.png"
import cark from "../image/cark.png"
import board from "../image/board.jpg"
import iropan from "../image/iropan.png"
import policeclear from "../image/policeclear.png"
import vehicletax from "../image/vehicletax.png"
import voterid from "../image/voterid.jpeg"
import malpot from "../image/malpot.png"
import loksewa from "../image/loksewa.png"
import citizenship from "../image/citizenship.png"
import banki from "../image/banki.png"
import otp from "../image/otp.png"
import userinterface from "../image/userinterface.png"
import check from "../image/check.png"
import sociale from "../image/sociale.png"
import cittizenholderkti from "../image/cittizenholderkti.png"
import WOW from 'wowjs';
import Workservice_section from './workservice_section'
import Joinservice_section from './joinservice_section'
import Governmentservice_section from './governmentservice_section'
import Manyservice_section from './manservice_section'
import Questionservice_section from './questionservice_section'

export default function Home_nagarik(props) {
  const {workRef,serviceRef,qnRef}=props;
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} >
      <div className='home d-flex flex-column bd-highlight mb-3'>
        <div className='home-screen'>
          <div className='home-d'>
            <div className='home-box '>



              <div className="container">
                <div className="row" style={{ width: "100%", marginLeft: "50px" }}>
                  <div className="col-xl-7 col-md-10">
                    <div className="header-inner">
                      <h1 className="title">Government Services in a Single App.</h1>
                      <p>Defining Digital Nepal Framework.</p>
                      <div className="btn-wrapper padding-top-30"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bajepic'>
                <img src={bajepic} alt={bajepic} />
              </div>
            </div>


          </div>
        </div>




      </div>
      <Workservice_section workRef={workRef}/>
      <Joinservice_section />
      <Governmentservice_section serviceRef={serviceRef} />
      <Manyservice_section/>
      <Questionservice_section qnRef={qnRef}/>

    </div>
  
  )
}
