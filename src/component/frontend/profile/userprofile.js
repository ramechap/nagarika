import React from 'react'
import "../profile/profileuser.css"

export default function Userprofile(props) {
  const { settoogle, toogle } = props;
  return (
    <>
      <div style={{ width:toogle?(100 % - "60px") :(100 % - "280px") }} className='contentu'>

        <fieldset className="border p-3 mb-4">
          <legend className="w-auto px-2">Personal Information</legend>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
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
              <input
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
                type="text"
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
              <select id="gender" name="gender" className="form-select">
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
              <input type="date" id="dob" name="dob" className="form-control" />
            </div>
            <div className="col-md-4">
              <label htmlFor="phonenumber" className="form-label">
                Phone Number
              </label>
              <input
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
                Birth District
              </label>
              <input
                type="text"
                id="borndistrict"
                name="borndistrict"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="bornplace" className="form-label">
                Place of Birth
              </label>
              <input
                type="text"
                id="bornplace"
                name="bornplace"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="citizennumber" className="form-label">
                Citizen Number
              </label>
              <input
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
              <input
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
              <input
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
              <input type="file" id="image" name="image" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="frontimage" className="form-label">
                Upload Front Image
              </label>
              <input
                type="file"
                id="frontimage"
                name="frontimage"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="backimage" className="form-label">
                Upload Back Image
              </label>
              <input
                type="file"
                id="backimage"
                name="backimage"
                className="form-control"
              />
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
              <input
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
              <input
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
              <input
                type="text"
                id="father_middlename"
                name="father_middlename"
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="father_borndistrict" className="form-label">
                Birth District
              </label>
              <input
                type="text"
                id="father_borndistrict"
                name="father_borndistrict"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="father_bornplace" className="form-label">
                Place of Birth
              </label>
              <input
                type="text"
                id="father_bornplace"
                name="father_bornplace"
                className="form-control"
              />
            </div>
          </div>
        </fieldset>
        {/* Mother's Information */}
        <fieldset className="border p-3 mb-4">
          <legend className="w-auto px-2">Mother's Information</legend>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="mother_firstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="mother_firstname"
                name="mother_firstname"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="mother_lastname" className="form-label">
                Last Name
              </label>
              <input
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
              <input
                type="text"
                id="mother_middlename"
                name="mother_middlename"
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="mother_borndistrict" className="form-label">
                Birth District
              </label>
              <input
                type="text"
                id="mother_borndistrict"
                name="mother_borndistrict"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="mother_bornplace" className="form-label">
                Place of Birth
              </label>
              <input
                type="text"
                id="mother_bornplace"
                name="mother_bornplace"
                className="form-control"
              />
            </div>
          </div>
        </fieldset>
        {/* Partner's Information */}
        <fieldset className="border p-3 mb-4">
          <legend className="w-auto px-2">Partner's Information</legend>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="partner_firstname" className="form-label">
                First Name
              </label>
              <input
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
              <input
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
              <input
                type="text"
                id="partner_middlename"
                name="partner_middlename"
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="partner_borndistrict" className="form-label">
                Birth District
              </label>
              <input
                type="text"
                id="partner_borndistrict"
                name="partner_borndistrict"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="partner_bornplace" className="form-label">
                Place of Birth
              </label>
              <input
                type="text"
                id="partner_bornplace"
                name="partner_bornplace"
                className="form-control"
              />
            </div>
          </div>
        </fieldset>



      </div>

    </>



  )
}
