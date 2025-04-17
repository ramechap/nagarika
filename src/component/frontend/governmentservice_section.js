import React from 'react'
import "../css/home.css"

import pankta from "../image/pankta.png"
import cark from "../image/cark.png"

import banki from "../image/banki.png"

import cittizenholderkti from "../image/cittizenholderkti.png"

export default function Governmentservice_section(props) {
  const {serviceRef}=props;

      const govern_service = [
        {
          "photo": cittizenholderkti,
          "title": "Citizenship Details",
          "desc": "View your citizenship details on your phone",
          "arraylist": [
            { "listtext": "View citizenshihp details from CIMS database" },
            { "listtext": "Request for missing records in CIMS database" },
            { "listtext": "Request for correction in CIMS database" }
    
          ]
    
        },
        // {
        //   "photo": pankta,
        //   "title": "PAN Details",
        //   "desc": "Link and view PAN details from IRD database",
        //   "arraylist": [
        //     { "listtext": "View PAN details from IRD database" },
        //     { "listtext": "View history of taxes paid" },
        //     { "listtext": "Apply and get new PAN Number" }
    
        //   ]
    
        // },
    
        // {
        //   "photo": cark,
        //   "title": "Vihicle Registration System (VRS)",
        //   "desc": "Link your vehicle to Nagarik App",
        //   "arraylist": [
        //     { "listtext": "View your vehicle details" },
        //     { "listtext": "Many Update your vehicle details" },
        //     { "listtext": "View your vehicle's tax paid" },
        //     { "listtext": "View tax to be paid for your vehicle" },
        //     { "listtext": "Pay vehicle TAX" }
    
        //   ]
    
        // },
        // {
        //   "photo": banki,
        //   "title": "Nagarik Pahichan Dwar",
        //   "desc": "Nagarik Pahichan Dwar communicates securely with Nagarik App Core locally, fetches data, records, and then forwards them to concerned clients securely.",
        //   "arraylist": [
        //     { "listtext": "Scan and open online account in banks directly." },
        //     { "listtext": " Reduces OTP verifications for application" },
        //     { "listtext": " Reduces KYC Verification" },
        //     { "listtext": "Login with Nagarik App(On Progress)" }
    
    
        //   ]
    
        // }
      ]
    
  return (
    <div ref={serviceRef} className=" governmentService-screen d-flex flex-column mb-3 justify-content-center">
    <div style={{ width: "100%", textAlign: "center" }} className="row justify-content-center">
      <div className="col-lg-8">
        <div className="section-title sass desktop-center margin-bottom-55">
          <h3 className="title linear-bg-title">Government Services</h3>
        </div>
      </div>
    </div>
    <div>

    </div>
    <div className=' governmentService-all'>
      {govern_service.map((data, index) => (
        <div key={index} className='governmentService-items row d-flex justify-content-center'>
          <div className='governmentService-item'>
            <img src={data.photo} />

          </div>
          <div className='governmentService-item'>
            <div className="col-md-5 create-content-area content-center">
              <div className="section-title">
                <h4 className="title social-title mb-0">{data.title}</h4>
                <p>{data.desc} </p>
              </div>
              <ul className="content full-width">
                {data.arraylist.map((dat) => (
                  <li><i aria-hidden="true" className="fa fa-check">
                  </i> {dat.listtext} </li>
                ))}

              </ul>
            </div>

          </div>
        </div>

      ))}
    </div>
  </div>

  )
}
