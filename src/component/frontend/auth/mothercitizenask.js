import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'; // Eye icons for password visibility toggle
import nagriklogo from "../../image/nagriklogo.png"

import {
    BrowserRouter,
    Routes,
    Route,
    Link

} from "react-router-dom";
import "../../css/registration.css"
export default function CitizenmotherDetailAsk(props) {
    const {formdata,page,setpage,setformdata}=props
   
   
    const districts={
        "districts": [
            "sindhuli",
            "ramechhap",
            "dolakha",
            "bhaktapur",
            "dhading",
            "kathmandu",
            "kavrepalanchok",
            "lalitpur",
            "nuwakot",
            "rasuwa",
            "sindhupalchok",
            "chitwan",
            "makwanpur",
            "achham",
            "baitadi",
            "bajhang",
            "bajura",
            "dadeldhura",
            "darchula",
            "doti",
            "kailali",
            "kanchanpur",
            "kapilvastu",
            "rupandehi",
            "arghakhanchi",
            "gulmi",
            "palpa",
            "dang",
            "pyuthan",
            "rolpa",
            "eastern rukum ",
            "banke",
            "bardiya",
            "bhojpur",
            "dhankuta",
            "ilam",
            "jhapa",
            "khotang",
            "morang",
            "okhaldhunga",
            "panchthar",
            "sankhuwasabha",
            "solukhumbu",
            "sunsari",
            "taplejung",
            "terhathum",
            "udayapur",
            "sarlahi",
            "dhanusha",
            "bara",
            "rautahat",
            "saptari",
            "siraha",
            "mahottari",
            "parsa",
            "parasi",
            "baglung",
            "gorkha",
            "kaski",
            "lamjung",
            "manang",
            "mustang",
            "myagdi",
            "nawalpur",
            "parbat",
            "syangja",
            "tanahun",
            "western rukum ",
            "salyan",
            "dolpa",
            "humla",
            "jumla",
            "kalikot",
            "mugu",
            "surkhet",
            "dailekh",
            "jajarkot"
        ]
    }



   

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
                                           Citizenship Holder's Mother Details
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


                            <form onSubmit={(e)=>setpage(page+1)}>
                            <h2>Mother's Information</h2>
                                <div className="form-group mb-3 position-relative">
                                   
                                    <input
                                        type="text"
                                        id="mother_firstname"
                                        className="form-control"
                                        placeholder="Mother's FirstName"
                                       value={formdata.mother_firstname}
                                       onChange={(e)=>setformdata({...formdata,mother_firstname:e.target.value})}
                                       
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3 position-relative">
                                   
                                   <input
                                       type="text"
                                       id="mother_middlename"
                                       className="form-control"
                                       placeholder="Mother's MiddleName (Optional)"
                                      value={formdata.mother_middlename}
                                      onChange={(e)=>setformdata({...formdata,mother_middlename:e.target.value})}
                                      
                                    
                                   />
                               </div>

                               <div className="form-group mb-3 position-relative">
                                   
                                   <input
                                       type="text"
                                       id="mother_lastname"
                                       className="form-control"
                                       placeholder="Mother's LastName"
                                      value={formdata.mother_lastname}
                                      onChange={(e)=>setformdata({...formdata,mother_lastname:e.target.value})}
                                      
                                       required
                                   />
                               </div>
                               
                               
                               <hr class="hr hr-blurry" />
                               <h2>Mother's Permanent Address</h2>
                                <div className="form-group mb-3 position-relative">
                                <select   value={formdata.mother_borndistrict}
                                       onChange={(e)=>setformdata({...formdata,mother_borndistrict:e.target.value})}  required class="form-select form-select-padding-x-lg" aria-label="Default select example" id="district" >
                                        <option disabled={!formdata.mother_borndistrict} value="">Mother's  District *</option>
                                        {districts.districts.map((city,i) => (
                                            <option key={i} value={city.charAt(0).toUpperCase() + city.slice(1)}>
                                                
                                                {city.charAt(0).toUpperCase() + city.slice(1)}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group mb-3 position-relative">
                                   
                                   <input
                                       type="text"
                                       id="mother_bornplace"
                                       className="form-control"
                                       placeholder="Mother's  Municipality"
                                      value={formdata.mother_bornplace}
                                      onChange={(e)=>setformdata({...formdata,mother_bornplace:e.target.value})}
                                      
                                       required
                                   />
                               </div>
                               <div className="form-group mb-3 position-relative">
                                   
                                   <input
                                       type="number"
                                       id="mother_bornward"
                                       className="form-control"
                                       placeholder="Mother's  Ward"
                                      value={formdata.mother_bornward}
                                      onChange={(e)=>setformdata({...formdata,mother_bornward:e.target.value})}
                                      
                                       required
                                   />
                               </div>


                              

                              
                             
                                




                                {/* Submit Button */}
                                <div className='d-flex flex-column' >
                                <button type="submit" className="btn btn-primary btn-block">Proceed</button>

                                <button onClick={()=>{setpage(page-1)}} type="button" className="btn btn-outline-primary btn-block">Back</button>
                                 <Link to="/nagarika/" className='text-primary text-center'>Go To Home</Link>
                                

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
