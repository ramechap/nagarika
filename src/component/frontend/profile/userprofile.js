import React, { useEffect, useState } from 'react'
import "../profile/profileuser.css"

export default function Userprofile(props) {
  const { settoogle, toogle } = props;
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:8000/nagarik/profile', {
          method: 'GET',
          credentials: 'include',  // This ensures that the session cookie is sent
        });

        const data = await response.json();
        console.log(data)

        if (response.ok) {
          setUserData(data);  // Set user and profile data
        } else {
          setError(data.error || 'Something went wrong');
        }
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);  // Empty dependency array to run this effect once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <div style={{ width: toogle ? 'calc(100% - 60px)' : 'calc(100% - 280px)' }} className='contentu'>
        {userData && userData.user && userData.profile ? (
          <>
            <fieldset className="border p-3 mb-4">
              <legend className="w-auto px-2">Personal Information</legend>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="firstname" className="form-label">First Name</label>
                  <input value={userData.profile.firstname} type="text" id="firstname" name="firstname" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="lastname" className="form-label">Last Name</label>
                  <input value={userData.profile.lastname} type="text" id="lastname" name="lastname" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="middlename" className="form-label">Middle Name</label>
                  <input value={userData.profile.middlename} type="text" id="middlename" name="middlename" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select value={userData.profile.gender} id="gender" name="gender" className="form-select">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="dob" className="form-label">Date of Birth</label>
                  <input value={userData.profile.dob} type="date" id="dob" name="dob" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="phonenumber" className="form-label">Phone Number</label>
                  <input value={userData.user.phone_number} type="tel" id="phonenumber" name="phonenumber" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="borndistrict" className="form-label">Birth District</label>
                  <input value={userData.profile.borndistrict} type="text" id="borndistrict" name="borndistrict" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="bornplace" className="form-label">Place of Birth</label>
                  <input value={userData.profile.bornplace} type="text" id="bornplace" name="bornplace" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="citizennumber" className="form-label">Citizen Number</label>
                  <input value={userData.profile.citizennumber} type="text" id="citizennumber" name="citizennumber" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="issuedate" className="form-label">Issue Date</label>
                  <input value={userData.profile.issuedate} type="date" id="issuedate" name="issuedate" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="issueplace" className="form-label">Issue Place</label>
                  <input value={userData.profile.issueplace} type="text" id="issueplace" name="issueplace" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="image" className="form-label">Profile Image</label>
                  <img
                    src={`http://localhost:8000${userData.profile.image}`}
                    alt="Profile"
                    className="form-control"
                    style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} // Add styling as needed
                  />             
                 </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="frontimage" className="form-label">Front Image</label>
                  <img
                    src={`http://localhost:8000${userData.profile.frontimage}`}
                    alt="Front Image"
                    className="form-control"
                    style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} // Add styling as needed
                  />              </div>
                <div className="col-md-4">
                  <label htmlFor="backimage" className="form-label">Back Image</label>
                  <img
                    src={`http://localhost:8000${userData.profile.backimage}`}
                    alt="Back Image"
                    className="form-control"
                    style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} // Add styling as needed
                  />              </div>
              </div>
            </fieldset>

            {/* Father's Information */}
            <fieldset className="border p-3 mb-4">
              <legend className="w-auto px-2">Father's Information</legend>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="father_firstname" className="form-label">First Name</label>
                  <input value={userData.profile.father_firstname} type="text" id="father_firstname" name="father_firstname" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="father_lastname" className="form-label">Last Name</label>
                  <input value={userData.profile.father_lastname} type="text" id="father_lastname" name="father_lastname" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="father_middlename" className="form-label">Middle Name</label>
                  <input value={userData.profile.father_middlename} type="text" id="father_middlename" name="father_middlename" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="father_borndistrict" className="form-label">Birth District</label>
                  <input value={userData.profile.father_borndistrict} type="text" id="father_borndistrict" name="father_borndistrict" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="father_bornplace" className="form-label">Place of Birth</label>
                  <input value={userData.profile.father_bornplace} type="text" id="father_bornplace" name="father_bornplace" className="form-control" />
                </div>
              </div>
            </fieldset>

            {/* Mother's Information */}
            <fieldset className="border p-3 mb-4">
              <legend className="w-auto px-2">Mother's Information</legend>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="mother_firstname" className="form-label">First Name</label>
                  <input value={userData.profile.mother_firstname} type="text" id="mother_firstname" name="mother_firstname" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="mother_lastname" className="form-label">Last Name</label>
                  <input value={userData.profile.mother_lastname} type="text" id="mother_lastname" name="mother_lastname" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="mother_middlename" className="form-label">Middle Name</label>
                  <input value={userData.profile.mother_middlename} type="text" id="mother_middlename" name="mother_middlename" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="mother_borndistrict" className="form-label">Birth District</label>
                  <input value={userData.profile.mother_borndistrict} type="text" id="mother_borndistrict" name="mother_borndistrict" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="mother_bornplace" className="form-label">Place of Birth</label>
                  <input value={userData.profile.mother_bornplace} type="text" id="mother_bornplace" name="mother_bornplace" className="form-control" />
                </div>
              </div>
            </fieldset>

            {/* Partner's Information */}
            <fieldset className="border p-3 mb-4">
              <legend className="w-auto px-2">Partner's Information</legend>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="partner_firstname" className="form-label">First Name</label>
                  <input value={userData.profile.partner_firstname || ''} type="text" id="partner_firstname" name="partner_firstname" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="partner_lastname" className="form-label">Last Name</label>
                  <input value={userData.profile.partner_lastname || ''} type="text" id="partner_lastname" name="partner_lastname" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="partner_middlename" className="form-label">Middle Name</label>
                  <input value={userData.profile.partner_middlename || ''} type="text" id="partner_middlename" name="partner_middlename" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="partner_borndistrict" className="form-label">Birth District</label>
                  <input value={userData.profile.partner_borndistrict || ''} type="text" id="partner_borndistrict" name="partner_borndistrict" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="partner_bornplace" className="form-label">Place of Birth</label>
                  <input value={userData.profile.partner_bornplace || ''} type="text" id="partner_bornplace" name="partner_bornplace" className="form-control" />
                </div>
              </div>
            </fieldset>
          </>
        ) : (
          <p>No profile data found.</p>
        )}
      </div>    </>



  )
}
