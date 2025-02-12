import React, { useState } from 'react'
import "../profile/profileuser.css"
import { IoArrowBackSharp } from "react-icons/io5";
export default function CreatePanCard(props) {
  const { settoogle, toogle } = props;
  const [district, setdistrict] = useState("")
  const [municipality, setmunicipality] = useState("")
  const [firstname, setfirstname] = useState("")
  const [middlename, setmiddlename] = useState("")
  const [lastname, setlastname] = useState("")
  const [father_firstname, setfather_firstname] = useState("")
    const [father_middlename, setfather_middlename] = useState("")
    const [father_lastname, setfather_lastname] = useState("")
    const [mother_firstname, setmother_firstname] = useState("")
    const [mother_middlename, setmother_middlename] = useState("")
    const [mother_lastname, setmother_lastname] = useState("")
    const [partner_firstname, setpartner_firstname] = useState("")
    const [partner_middlename, setpartner_middlename] = useState("")
    const [partner_lastname, setpartner_lastname] = useState("")
    const [citizennumber, setcitizennumber] = useState("")
    const [ward, setward] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    const [dob, setdob] = useState("")
    const [issuedate, setissuedate] = useState("")
    const [issueplace, setissueplace] = useState("")
    const [image, setimage] = useState("")
    const [gender, setgender] = useState("")

  const districts={
    "districts": [
      {
        "id": 1,
        "name": "Achham",
        "municipalities": [
          "Mangalsen ",
          "Kamalbazaar ",
          "Chaurpati",
          "Sanphebagar "
        ]
      },
      {
        "id": 2,
        "name": "Arghakhanchi",
        "municipalities": [
          "Sandhikharka ",
          "Sainamaina ",
          "Palladi ",
          "Rampur"
        ]
      },
      {
        "id": 3,
        "name": "Baglung",
        "municipalities": [
          "Baglung ",
          "Taman Khola ",
          "Dhorpatan ",
          "Galkot "
        ]
      },
      {
        "id": 4,
        "name": "Baitadi",
        "municipalities": [
          "Baitadi ",
          "Dasharathchand ",
          "Shivnath  ",
          "Siltimor "
        ]
      },
      {
        "id": 5,
        "name": "Bhaktapur",
        "municipalities": [
          "Bhaktapur ",
          "Changunarayan ",
          "Madhyapur Thimi "
        ]
      },
      {
        "id": 6,
        "name": "Chitwan",
        "municipalities": [
          "Bharatpur",
          "Ratnanagar ",
          "Khairahani ",
          "Madi "
        ]
      },
      {
        "id": 7,
        "name": "Kathmandu",
        "municipalities": [
          "Kathmandu  ",
          "Kirtipur ",
          "Lalitpur  ",
          "Bhaktapur "
        ]
      },
      {
        "id": 8,
        "name": "Lalitpur",
        "municipalities": [
          "Lalitpur",
          "Godawari ",
          "Lele ",
          "Mahankal "
        ]
      },
      {
        "id": 9,
        "name": "Morang",
        "municipalities": [
          "Biratnagar ",
          "Itahari ",
          "Dharan ",
          "Belbari "
        ]
      },
      {
        "id": 10,
        "name": "Nawalpur",
        "municipalities": [
          "Bardaghat ",
          "Kawasoti ",
          "Siddhartha ",
          "Gaidakot "
        ]
      }
    ]
  }
  

  return (
    <>
      <div style={{ width:toogle?(100 % - "60px") :(100 % - "280px") }} className='contentu'>
<div>
<IoArrowBackSharp style={{fontSize:"25px",marginBottom:"10px",fontWeight:"bold",cursor:"pointer"}} onClick={()=>{window.location.href="/citizen/user/pan-card"}} />
          </div>
<form>
<fieldset className="border p-3 mb-4">
          <legend className="w-auto px-2">Personal Information</legend>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input required value={firstname} onChange={(e)=>setfirstname(e.target.value)}
                type="text"
                id="firstname"
                name="firstname"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input required value={lastname} onChange={(e)=>setlastname(e.target.value)}
                type="text"
                id="lastname"
                name="lastname"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="middlename" className="form-label">
                Middle Name
              </label>
              <input
                type="text" value={middlename} onChange={(e)=>setmiddlename(e.target.value)}
                id="middlename"
                name="middlename"
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select value={gender} onChange={(e)=>setgender(e.target.value)} required id="gender" name="gender" className="form-select">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input value={dob} onChange={(e)=>setdob(e.target.value)}  required type="date" id="dob" name="dob" className="form-control" />
            </div>
            <div className="col-md-4">
              <label htmlFor="phonenumber" className="form-label">
                Phone Number
              </label>
              <input required value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)}
                type="tel"
                id="phonenumber"
                name="phonenumber"
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="borndistrict" className="form-label">
                District
              </label>
              <select required   value={district} 
                                       onChange={(e)=>setdistrict(e.target.value)}   class="form-select form-select-padding-x-lg" aria-label="Default select example" id="district" >
                                        <option  value="">  District *</option>
                                        {districts.districts.map((city,i) => (
                                            <option key={i} value={city.name.charAt(0).toUpperCase() + city.name.slice(1)}>
                                                
                                                {city.name.charAt(0).toUpperCase() + city.name.slice(1)}
                                            </option>
                                        ))}
                                    </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="bornplace" className="form-label">
                Municipality
              </label>
              <select required   value={municipality}
                                       onChange={(e)=>setmunicipality(e.target.value)}   class="form-select form-select-padding-x-lg" aria-label="Default select example" id="district" >
                                        <option  value="">Municipality *</option>
                                        {districts.districts.map((city,i) => {
                                            
                                            if(city.name.charAt(0).toUpperCase() + city.name.slice(1)==district){
                                              return(
                                                city.municipalities.map((city,i) => (
                                                    <option key={i} value={city.charAt(0).toUpperCase() + city.slice(1)}>
                                                        
                                                        {city.charAt(0).toUpperCase() + city.slice(1)}
                                                    </option>
                                                    ))
                                              )
                                               }
                                        })}
                                    </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="ward" className="form-label">
                Ward
              </label>
              <input required value={ward} onChange={(e)=>setward(e.target.value)}
                type="number"
                id="ward"
                name="ward"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="citizennumber" className="form-label">
                Citizen Number
              </label>
              <input required value={citizennumber} onChange={(e)=>setcitizennumber(e.target.value)}
                type="text"
                id="citizennumber"
                name="citizennumber"
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="issuedate" className="form-label">
                Issue Date
              </label>
              <input required value={issuedate} onChange={(e)=>setissuedate(e.target.value)}
                type="date"
                id="issuedate"
                name="issuedate"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="issueplace" className="form-label">
                Issue Place
              </label>
              <input required value={issueplace} onChange={(e)=>setissueplace(e.target.value)}
                type="text"
                id="issueplace"
                name="issueplace"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="image" className="form-label">
                Upload Image
              </label>
              <input  value={image} onChange={(e)=>setimage(e.target.value)}
               type="file" id="image" name="image" className="form-control" />
            </div>
          </div>
        </fieldset>
        {/* Father's Information */}
        <fieldset className="border p-3 mb-4">
          <legend className="w-auto px-2">Father's Information</legend>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="father_firstname" className="form-label">
                First Name
              </label>
              <input required value={father_firstname} onChange={(e)=>setfather_firstname(e.target.value)}
                type="text"
                id="father_firstname"
                name="father_firstname"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="father_lastname" className="form-label">
                Last Name
              </label>
              <input required value={father_lastname} onChange={(e)=>setfather_lastname(e.target.value)}
                type="text"
                id="father_lastname"
                name="father_lastname"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="father_middlename" className="form-label">
                Middle Name
              </label>
              <input  value={father_middlename} onChange={(e)=>setfather_middlename(e.target.value)}
                type="text"
                id="father_middlename"
                name="father_middlename"
                className="form-control"
              />
            </div>
          </div>
        </fieldset>
        {/* Mother's Information */}
        <fieldset className="border p-3 mb-4">
          <legend className="w-auto px-2">Mother's Information (Optional)</legend>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="mother_firstname" className="form-label">
                First Name
              </label>
              <input
                type="text" value={mother_firstname} onChange={(e)=>setmother_firstname(e.target.value)}
                id="mother_firstname"
                name="mother_firstname"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="mother_lastname" className="form-label">
                Last Name
              </label>
              <input value={mother_lastname} onChange={(e)=>setmother_lastname(e.target.value)}
                type="text"
                id="mother_lastname"
                name="mother_lastname"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="mother_middlename" className="form-label">
                Middle Name
              </label>
              <input value={mother_middlename} onChange={(e)=>setmother_middlename(e.target.value)}
                type="text"
                id="mother_middlename"
                name="mother_middlename"
                className="form-control"
              />
            </div>
          </div>
        </fieldset>
        {/* Partner's Information */}
        <fieldset className="border p-3 mb-4">
          <legend className="w-auto px-2">Partner's Information (Optional)</legend>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="partner_firstname" className="form-label">
                First Name
              </label>
              <input value={partner_firstname} onChange={(e)=>setpartner_firstname(e.target.value)}
                type="text"
                id="partner_firstname"
                name="partner_firstname"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="partner_lastname" className="form-label">
                Last Name
              </label>
              <input value={partner_lastname} onChange={(e)=>setpartner_lastname(e.target.value)}
                type="text"
                id="partner_lastname"
                name="partner_lastname"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="partner_middlename" className="form-label">
                Middle Name
              </label>
              <input value={partner_middlename} onChange={(e)=>setpartner_middlename(e.target.value)}
                type="text"
                id="partner_middlename"
                name="partner_middlename"
                className="form-control"
              />
            </div>
          </div>
        </fieldset>
        <button type="submit" style={{textAlign:"center",alignSelf:"center",justifySelf:"center",width:"100%"}} className="btn btn-primary">Proceed</button>
</form>


      </div>

    </>



  )
}
