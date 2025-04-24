import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaPhone } from "react-icons/fa";
import { TbFingerprintScan } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import "../../css/login.css";

import nagriklogo from "../../image/nagriklogo.png";
import axios from 'axios';
import { UseProductContext } from '../../usecontext/usecontext';


export default function LoginForm() {
  // const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setemail] = useState("")
  const [users, setUsers] = useState({});
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const recaptchaContainer = useRef(null);
  const navigate = useNavigate()

  const [otppverify, setotppverify] = useState(false);
  const handlePhoneNumberChange = (e) => {
    const formattedPhone = e.target.value.replace(/[^\d]/g, ''); // Remove non-digit characters
    setPhoneNumber(formattedPhone);
  };
  const [csrfToke, setCsrfToken] = useState(null);

  // useEffect(() => {
  //   // Fetch the CSRF token from the backend
  //   axios.get('https://nagarik-api.onrender.com/nagarik/get-csrf-token')
  //     .then((response) => {
  //       setCsrfToken(response.data.csrfToken);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching CSRF token:', error);
  //     });
  // }, []);
  const sendOtp = async (e) => {
    e.preventDefault();
    if (users[phoneNumber]?.otppverify) {
      setUsers((prevUsers) => {
        clearInterval(prevUsers[phoneNumber].interval);
        return {
          ...prevUsers,
          [phoneNumber]: {
            otppverify: false,
            countdown: 300,
          },
        };
      });
    }
    if (phoneNumber.length !== 10) {
      setErrorMessage("Enter a valid 10-digit phone number!");
      return;
    }
    setErrorMessage(""); // Clear error message if valid

    try {
      const phoneNumberWithPlus = `+977${phoneNumber}`;
      const response = await axios.post("https://nagarik-api.onrender.com/nagarik/login", {
        phone_number: phoneNumberWithPlus,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      console.log("OTP sent successfully:", response);
      setotppverify(true);
      setShowOtpInput(true); // Show OTP input field

      const userId = phoneNumber;
      if (!userId) return;
      setUsers((prevUsers) => {
        const newUser = {
          otppverify: true,
          countdown: 300, // 5 minutes countdown (300 seconds)
        };

        const interval = setInterval(() => {
          setUsers((prevUser) => {
            const user = prevUser[userId];
            if (user.countdown <= 0) {
              clearInterval(interval);
              return {
                ...prevUser,
                [userId]: { ...user, otppverify: false, countdown: 0 },
              };
            }

            return {
              ...prevUser,
              [userId]: { ...user, countdown: user.countdown - 1 },
            };
          });
        }, 1000);

        const timeout = setTimeout(() => {
          setUsers((prevUsers) => ({
            ...prevUsers,
            [userId]: { ...prevUsers[userId], otppverify: false, countdown: 300 },
          }));
        }, 300000);

        return {
          ...prevUsers,
          [userId]: { ...newUser, interval, timeout },
        };
      });
    } catch (error) {
      console.error("Error sending OTP:", error);
      setErrorMessage("Failed to send OTP. Please try again.");
    }
  };
  const [message, setMessage] = useState("");
  const verifyOtp = async () => {
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }
    const csrfTokenFromCookie = getCookie("csrftoken");
    
    try {
      const phoneNumberWithPlus = `+977${phoneNumber}`;
      const response = await axios.post("https://nagarik-api.onrender.com/nagarik/verify-otp", {
        phone_number: phoneNumberWithPlus,
        otp: otp,
      } , {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfTokenFromCookie,
        },
        withCredentials: true,  // This ensures the session is sent with the request
      });
  
      console.log("Navigating...");
    
      alert("Login Successfully");
      window.location.href = "/citizen/user/dashboard";

  
      setMessage(response.data.message);
   
  
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || "Something went wrong");
      } else {
        setMessage("Network error");
      }
    }
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
              <meta name="csrf-token" content="{{ csrf_token }}"></meta>
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
                <Link to="/citizen/registration">Register An Account?</Link>
                

                <div className='d-flex flex-column' >
                  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                  {

                    users[phoneNumber]?.otppverify ?

                      <>
                        <input
                          type="text"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                        {users[phoneNumber]?.countdown > 0 && (
                          <p>Time left For New Otp: {users[phoneNumber]?.countdown} seconds</p>
                        )}
                        <button type='button' onClick={verifyOtp} className="btn btn-primary btn-block">
                          <TbFingerprintScan style={{ fontSize: "30px" }} /> Verify OTP
                        </button>
                      </> :
                      <button type='button' onClick={sendOtp} className="btn btn-primary btn-block">
                        <TbFingerprintScan style={{ fontSize: "30px" }} /> Send OTP
                      </button>
                  }

                </div>

              </form>

              {/* reCAPTCHA container */}
              <div ref={recaptchaContainer}></div> {/* This is the ref where reCAPTCHA is rendered */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
