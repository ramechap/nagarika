import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './panhome.css'
import nagriklogo from "../../image/nepallogo.png";
import { IoArrowBackSharp } from "react-icons/io5";

export default function PanHome(props) {
  const { toogle, settoogle } = props
  const [panno, setpanno] = useState("")
  const [showpan, setshowpan] = useState(false)
  return (
    <>
      <div style={{ width: toogle ? (100 % - "60px") : (100 % - "280px") }} className='contentu'>
        {showpan ?
<>
<div>
<IoArrowBackSharp style={{fontSize:"25px",marginBottom:"10px",fontWeight:"bold",cursor:"pointer"}} onClick={()=>setshowpan(false)} />
          </div>
          <div className='pan-card'>
            <div className='pan-card-header'>
              <div className='pan-card-header-logo'>
                  <img src={nagriklogo} alt="pan" />
              </div>
             <div className='pan-card-header-title'>
                <h3>नेपाल सरकार</h3>
                <h3>अनारिक राजस्वो बिवाग्बता जरि गरियेको</h3>
                <p>PAN Card</p>
              </div>

              </div>
              <div className='pan-card-body'>
              <div className='personal-info'>
              <div class="info">
          <p>प्यान नम्बर: <strong>123-456-7890</strong></p>
          <p>नाम: <strong>राजेश कुमार यादव</strong></p>
          <p>ठेगाना: <strong>काठमाडौं, नेपाल</strong></p>
          <p>जन्म मिति:<strong>जन्म मिति:</strong></p>
          <p>परिचय पत्र.नं: <strong>123-456-7890</strong></p>
          
        </div>
        <div class="info">
          <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="profile" />
        <p>जारी मिति:<strong>जन्म मिति:</strong></p>
        <p>कार्यालय: <strong>काठमाडौं, नेपाल</strong></p>
        
        </div>
                </div>
                </div>
                <div className='pan-card-footer'>
                  <p>हमिले तिरेका कर आफ्नै विकासको लागि, आधुनिक नेपालको लागि </p>
                  </div>

          </div>

</>          :

          <div>
            <form style={{ width: "50%", marginLeft: "25%" }}>
              <div class="form-group">
                <label for="exampleInput1">अफ्नो पान नम्बर. राखी कार्ड बिबरन हर्नुहोस |</label>
                <input type="number" value={panno} onChange={(e) => setpanno(e.target.value)} class="form-control" id="exampleInput1" placeholder="प्यान नम्बर" />
              </div>


              <button onClick={()=>setshowpan(true)} style={{ width: "100%" }} type="submit" class="btn btn-primary">पेश गर्नुहोस्</button>
            </form>

            <form style={{ width: "50%", marginLeft: "25%", marginTop: "20px" }}>

              <label >PAN भर्नको लागि, तलको बटनमा क्लिक गर्नुहोस्
                |</label>



              <Link to="/citizen/user/pan-card/create" style={{ width: "100%" }} type="submit" class="btn btn-outline-primary">PAN डर्टा गर्नुहोस्</Link>
            </form>
          </div>
        }
      </div>
    </>
  )
}
