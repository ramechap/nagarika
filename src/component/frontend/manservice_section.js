import React from 'react'
import "../css/home.css"

import board from "../image/board.jpg"
import iropan from "../image/iropan.png"
import policeclear from "../image/policeclear.png"
import vehicletax from "../image/vehicletax.png"
import voterid from "../image/voterid.jpeg"
import malpot from "../image/malpot.png"
import loksewa from "../image/loksewa.png"
import citizenship from "../image/citizenship.png"


export default function Manyservice_section() {
      const many_service = [
        {
          "photo": citizenship,
          "title": "Citizenship"
        },
        // {
        //   "photo": malpot,
        //   "title": "Malpot"
        // },
        // {
        //   "photo": voterid,
        //   "title": "Voters Card"
        // },
        // {
        //   "photo": iropan,
        //   "title": "IRD PAN"
        // },
        {
          "photo": board,
          "title": "+2 Details"
        },
        // {
        //   "photo": policeclear,
        //   "title": "Police Clearance Report"
        // },
        // {
        //   "photo": loksewa,
        //   "title": "Lok Sewa"
        // },
        // {
        //   "photo": vehicletax,
        //   "title": "Vehicle Tax"
        // }
      ]
    
  return (
    <div className=" manyService-screen d-flex flex-column mb-3 justify-content-center">
    <div style={{ width: "100%", textAlign: "center" }} className="row justify-content-center">
      <div className="col-lg-8">
        <div className="section-title sass desktop-center margin-bottom-55">
          <h3 className="title linear-bg-title">And many more features/services</h3>
        </div>
      </div>
    </div>
    <div>

    </div>
    <div className="row manyservice-roe">
      {many_service.map((data, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div className="single-benifits-item">
            <div className="icon">
              <img className="q-icon" aria-hidden="true" role="presentation" src={data.photo} style={{ width: "100%", height: "100px" }} />
            </div>
            <div className="content">
              <h3 className="title linear-text mb-0">{data.title}</h3>
            </div>
          </div>
        </div>

      ))}
    </div>
  </div>

  )
}
