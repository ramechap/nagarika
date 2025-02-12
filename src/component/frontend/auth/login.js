import React, { useState, useEffect, useRef } from 'react';
import { FaPhone } from "react-icons/fa6";
import { TbFingerprintScan } from "react-icons/tb";
import { Link } from "react-router-dom";
import "../../css/login.css";
import nagriklogo from "../../image/nagriklogo.png";


export default function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const recaptchaContainer = useRef(null); // Create a ref for the reCAPTCHA container


  

  const handlePhoneNumberChange = (e) => {
    const formattedPhone = e.target.value.replace(/[^\d]/g, '');
    setPhoneNumber(formattedPhone);
  };


  return (
    <div className='login'>
      <div className="container">
        <div className="row logi justify-content-center">
          <div className="col-md-6" style={{ marginTop: "5%" }}>
            <div className="card d-flex flex-column p-4 mt-5">
              <img style={{ marginLeft: "30%" }} className="text-center img-fluid profile-image-pic img-thumbnail rounded-circle my-3 mb-4 justify-content-center loginicon" src={nagriklogo} alt="Logo" />
              <h3 className="text-center mb-4">CITIZEN PORTAL</h3>
              <form id='recaptcha-container'>
                {/* Phone Number Input */}
                <div className="form-group mb-3 position-relative">
                  <span className="position-absolute" style={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
                    <FaPhone size={20} />
                  </span>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Mobile Number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    maxLength="10"
                    required
                  />
                </div>

                {/* OTP Input (Displayed after OTP is sent) */}
                {showOtpInput && (
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter OTP"
                      value={otp}
                     
                      maxLength="6"
                      required
                    />
                  </div>
                )}

                {/* Error Message */}
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                {/* Submit Button */}
                <div className='d-flex flex-column'>
                  <Link to="/">Forget Password?</Link>

                  {!showOtpInput ? (
                    <button type="button" className="btn btn-primary btn-block" >
                      <TbFingerprintScan style={{ fontSize: "30px" }} /> Send OTP
                    </button>
                  ) : (
                    <button type="button" className="btn btn-success btn-block" >
                      <TbFingerprintScan style={{ fontSize: "30px" }} /> Verify OTP
                    </button>
                  )}
                </div>
              </form>

              {/* reCAPTCHA container */}
              <div ref={recaptchaContainer}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
