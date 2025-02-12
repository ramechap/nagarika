import React from 'react'
import "../css/home.css"

import sociale from "../image/sociale.png"

export default function Joinservice_section() {
  return (
            <div style={{marginBottom:"50px"}} className=" join-screen d-flex flex-column mb-3 justify-content-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="bg-image " style={{ visibility: "visible", animationName: "fadeInUp" }}>
                      <img  src={sociale} alt="" />
                    </div>
                  </div>
                  <div class="col-lg-10">
                    <div style={{textAlign:"center"}} class="section-title desktop-center padding-top-80">
                    <h3 class="title social-title">
                      Join the 800K+ Nepalese already using this app </h3>
                    <p> "support of communication and information technology, government services hand in hand" </p>
                    
                  </div>
                </div>
                </div>
              </div>
            </div>
    
  )
}
