import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'; // Eye icons for password visibility toggle
import nagriklogo from "../../image/nagriklogo.png"
import { IoFingerPrintSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { TbFingerprintScan } from "react-icons/tb";
import { LiaKeySolid } from "react-icons/lia";
import { FaDigitalTachograph } from "react-icons/fa";
import {
    BrowserRouter,
    Routes,
    Route,
    Link

} from "react-router-dom";
import "../../css/registration.css"
export default function TokenVerify() {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [token, settoken] = useState("")



    const handlePhoneNumberChange = (e) => {
        const phoneValue = e.target.value;
        // Restrict phone number input to numbers only
        const formattedPhone = phoneValue.replace(/[^\d]/g, '');
        setPhoneNumber(formattedPhone);
    };
    const handleTokenChange = (e) => {
        const tokenValue = e.target.value;
        // Restrict phone number input to numbers only
        const formattedPhone = tokenValue.replace(/[^\d]/g, '');
        settoken(formattedPhone);
    };

    return (
        <div className='registration'>
            <div className="container ">
                <div className="row logi justify-content-center">
                    <div className="col-md-6" style={{ marginTop: "5%" }}>

                        <div className="card d-flex flex-column p-4 mt-5">
                            <div className='registration-header'>
                                <div class="column logocol">
                                    <div class="logo-brand">
                                        <div class="logo">
                                            <img style={{}} className="text-center img-fluid profile-image-pic img-thumbnail rounded-circle my-3 mb-4 justify-content-center registrationicon" src={nagriklogo} />

                                        </div>
                                        <div style={{fontSize:"25px"}} class="text-h6 font-weight-bold text-center text-white">
                                           Enter the token below
                                        </div>
                                        <div class="reg-top-section  q-mt-lg">
                                           
                                            <p class="text-white text-center  ">
                                                A six digit code will be sent to your mobile number.
                                            </p>
                                        </div>
                                        <div class="reg-top-section q-mt-lg">
                                            <div style={{height:"50px"}} class=" text-white">
                                                
                                            </div>
                                            
                                        </div>

                                    </div>
                                </div>
                                <div class="curve">
                                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                                    </svg>
                                </div>

                            </div>

                            {/* <h3 className="text-center mb-4">CITIZEN PORTAL</h3> */}
                            {/* <p className="text-center d-flex mb-4">To register in the Nagarik App, citizens must use Mobile Number registered under own's name.</p> */}

                            <form>

                                <div className="form-group mb-3 position-relative">
                                    <span
                                        aria-disabled="true"
                                        className="position-absolute"
                                        style={{ top: '50%', left: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
                                    >
                                        <LiaKeySolid size={20} />

                                    </span>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="form-control"
                                        placeholder="Mobile Number"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                        maxLength="10"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3 position-relative">
                                    <span
                                        aria-disabled="true"
                                        className="position-absolute"
                                        style={{ top: '50%', left: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
                                    >
                                        <FaDigitalTachograph  size={20} />

                                    </span>
                                    <input
                                        type="number"
                                        id="token"
                                        className="form-control"
                                        placeholder="Token(XXXX)"
                                        value={token}
                                        onChange={handleTokenChange}
                                        maxLength="6"
                                        required
                                    />
                                </div>




                                {/* Submit Button */}
                                <div className='d-flex flex-column' >
                                <button type="submit" className="btn btn-primary btn-block">Proceed</button>

                                <button type="button" className="btn btn-outline-primary btn-block">Back</button>
                                 <Link to="/" className='text-primary text-center'>Go To Home</Link>
                                

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
