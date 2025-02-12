import React from 'react'
import "../css/home.css"

import otp from "../image/otp.png"
import userinterface from "../image/userinterface.png"
import check from "../image/check.png"

export default function Workservice_section(props) {
    const {workRef}=props;

      const work_service = [
        {
          "photo": otp,
          "title": "OTP Verification",
          "desc": "Mobile Number verification through OTP."
        },
        {
          "photo": check,
          "title": "Citizen Verification",
          "desc": "Citizen must verify his/her identity to link them to Nagarik App."
        },
        {
          "photo": userinterface,
          "title": "Enjoy App",
          "desc": "Enjoy government services in single app."
        }
      ]
    
  return (
    <div ref={workRef} className=" workService-screen d-flex flex-column mb-3 justify-content-center">
    <div style={{ width: "100%", textAlign: "center" }} className="row justify-content-center">
      <div className="col-lg-8">
        <div className="section-title sass desktop-center margin-bottom-55">
          <h3 className="title linear-bg-title">How it works?</h3>
        </div>
      </div>
    </div>
    <div>

    </div>
    <div className="row workService-roe">
      {work_service.map((data, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div className="single-benfits-item">
            <div className="icon">
              <img className="q-icon" aria-hidden="true" role="presentation" src={data.photo} style={{ width: "100%", height: "100px" }} />
            </div>
            <div className="content">
              <h3 class="title">{data.title}</h3>
              <p>{data.desc}</p>

            </div>
          </div>
        </div>

      ))}
    </div>
  </div>

  )
}
