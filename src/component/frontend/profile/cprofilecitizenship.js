import React, { useEffect, useState } from 'react'
import "./cprofilecitizenship.css"
import citizlogo from "../../image/rednepal.png";
export default function Profilecitizenship(props) {
    const { toogle } = props;
    const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('https://nagarik-api.onrender.com/nagarik/profile', {
          method: 'GET',
          credentials: 'include',  // This ensures that the session cookie is sent
        });

        const data = await response.json();
       

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
            <div style={{ width: toogle ? (100 % - "60px") : (100 % - "280px") }} className='contentu'>
                <div >
                    <div className='citizen-container'>
                        <div className='citizen-header'>
                            <div className='citizen-logo'>
                                <img src={citizlogo} alt='citizen-logo' width={70} height={70} />

                            </div>
                            <div className='citizen-title'>
                                <h2>नेपाल सरकार</h2>
                                <h2>गृह मन्त्रालय</h2>
                                <h2>जिल्ला प्रशासन कार्यालय,  &nbsp;

                                    <span style={{ textDecoration: "3px underline dotted red", color: "black" }}>काठमाडौं</span>
                                </h2>


                            </div>
                            <div className='citizen-right-photo'>


                            </div>

                        </div>
                        <div className='citizen-paragraph'>
                            <h3>नेपाली नागरिकताको प्रमाणपत्र</h3>

                        </div>
                        <div className='citizen-body'>
                            <div className='citizen-left-title' style={{display:"flex",gap:"2px"}}>
                                <p>ना.प्र.नं:</p>
                                <p>{userData.profile.citizennumber}</p>

                            </div>
                            <div className='citizen-body-inside d-flex'>
                                <div className='citizen-body-inside-img'>
                                <img  src={`https://nagarik-api.onrender.com${userData.profile.image}`}
                    alt="Profile" />
                                </div>
                                <div className='citizen-body-inside-content'>
                                    <div style={{justifyItems: "space-between", flexDirection: "row", flexWrap: "wrap" }} className='nn d-flex flex-wrap align-content-around'>
                                        <div style={{ }} className='d-flex flex-wrap kk align-content-around mr-auto'>
                                            <p>नाम थार</p>
                                            <p>{userData.profile.firstname} {userData.profile.middlename} {userData.profile.lastname}</p>
                                        </div>
                                        <div style={{ alignItems: "right",gap:"30px" }} className='mm d-flex'>
                                            <p>लिङ्ग</p>
                                            <p>{userData.profile.gender}</p>
                                        </div>

                                    </div>
                                    <div className='d-flex nn kk' style={{gap:"50px", }}>
                                        <div>
                                            <p>जन्म स्थान</p>

                                        </div>
                                        <div className='d-grid'>
                                            <div className='mm d-flex' style={{}}>
                                                <p>जिल्ला :</p>
                                                <p>{userData.profile.borndistrict}</p>

                                            </div>
                                            <div className='d-flex kk' style={{gap:"50px"}}>
                                                <div className='mm d-flex' style={{}}>
                                                    <p>म.न.पा :</p>
                                                    <p> {userData.profile.bornplace}</p>
                                                </div>
                                                <div className='mm d-flex' style={{}}>
                                                    <p>वार्ड नं. :</p>
                                                    <p> {userData.profile.bornward}</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div>

                                        </div>

                                    </div>
                                    <div className='d-flex nn kk' style={{gap:"50px", }}>
                                        <div>
                                            <p>स्थायी ठेगाना</p>

                                        </div>
                                        <div className='d-grid'>
                                            <div className='mm d-flex'style={{}}>
                                                <p>जिल्ला :</p>
                                                <p>{userData.profile.borndistrict}</p>

                                            </div>
                                            <div className='d-flex nn kk' style={{gap:"50px"}}>
                                                <div className='mm d-flex'style={{}}>
                                                    <p>म.न.पा.:</p>
                                                    <p>{userData.profile.bornplace}</p>
                                                </div>
                                                <div className='mm d-flex'style={{}} >
                                                    <p>वार्ड नं.</p>
                                                    <p>{userData.profile.bornward}</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div>

                                        </div>

                                    </div>
                                    <div className='d-flex nn' style={{justifyContent:"space-around" }}>
                                        <div>
                                            <p>जन्म मिति</p>
                                            

                                        </div>
                                        <div className='mm d-flex' style={{}}>
                                                <p>साल :</p>
                                                <p>{userData.profile.dob.split("-")[0]}</p>
                                        </div>
                                        <div className='mm d-flex' style={{}}>
                                            <p>महिना :</p>
                                            <p>{userData.profile.dob.split("-")[1]}</p>
                                        </div>
                                        <div className='mm d-flex'     style={{}} >
                                            <p>गते :</p>
                                            <p>{userData.profile.dob.split("-")[2]}</p>
                                            </div>

                                    </div>
                                    <div style={{ justifyItems: "space-between", flexDirection: "row", flexWrap: "wrap" }} className='d-flex nn flex-wrap align-content-around'>
                                        <div style={{ }} className='d-flex kk flex-wrap align-content-around mr-auto'>
                                            <p>बाबुको नाम थार</p>
                                            <p>{userData.profile.father_firstname} {userData.profile.father_middlename} {userData.profile.father_lastname}</p>
                                        </div>
                                        <div style={{ alignItems: "right", gap:"30px" }} className='mm d-flex'>
                                            <p>ना.प्र.न:</p>
                                            <p></p>
                                        </div>

                                    </div>
                                    <div style={{  justifyItems: "space-between", flexDirection: "row", flexWrap: "wrap" }} className='nn d-flex flex-wrap align-content-around'>
                                        <div style={{ }} className='d-flex kk flex-wrap align-content-around mr-auto'>
                                            <p>ठेगाना</p>
                                            <p>{userData.profile.father_bornplace}-{userData.profile.father_bornward},{userData.profile.father_borndistrict}</p>
                                        </div>
                                        <div style={{ alignItems: "right",gap:"30px"  }} className='mm d-flex'>
                                            <p>ना.की</p>
                                            <p>वंशज</p>
                                        </div>

                                    </div>

                                    <div style={{ justifyItems: "space-between", flexDirection: "row", flexWrap: "wrap" }} className='nn d-flex flex-wrap align-content-around'>
                                        <div style={{ }} className='d-flex kk flex-wrap align-content-around mr-auto'>
                                            <p>आमाको नाम थार</p>
                                            <p>{userData.profile.mother_firstname} {userData.profile.mother_middlename} {userData.profile.mother_lastname} </p>
                                        </div>
                                        <div style={{ alignItems: "right", gap:"30px" }} className='mm d-flex'>
                                            <p>ना.प्र.न:</p>
                                            <p></p>
                                        </div>

                                    </div>
                                    <div style={{ justifyItems: "space-between", flexDirection: "row", flexWrap: "wrap" }} className='nn d-flex flex-wrap align-content-around'>
                                        <div style={{ }} className='d-flex kk flex-wrap align-content-around mr-auto'>
                                            <p>ठेगाना</p>
                                            <p>{userData.profile.mother_bornplace}-{userData.profile.mother_bornward},{userData.profile.mother_borndistrict}</p>
                                        </div>
                                        <div style={{ alignItems: "right",gap:"30px"  }} className='mm d-flex'>
                                            <p>ना.की</p>
                                            <p>वंशज</p>
                                        </div>

                                    </div>
                                    <div style={{ justifyItems: "space-between", flexDirection: "row", flexWrap: "wrap" }} className='nn d-flex flex-wrap align-content-around'>
                                        <div style={{ }} className='d-flex kk flex-wrap align-content-around mr-auto'>
                                            <p>पति/पत्नीको नाम थार</p>
                                            <p>{userData.profile.partner_firstname?userData.profile.partner_firstname:"XXX"} </p>
                                        </div>
                                        <div style={{ alignItems: "right",gap:"30px"  }} className='mm d-flex'>
                                            <p>ना.प्र.न</p>
                                            <p></p>
                                        </div>

                                    </div>
                                    <div style={{ justifyItems: "space-between", flexDirection: "row", flexWrap: "wrap" }} className='nn d-flex flex-wrap align-content-around'>
                                        <div style={{ }} className='d-flex kk flex-wrap align-content-around mr-auto'>
                                            <p>ठेगाना</p>
                                            <p>{userData.profile.partner_borndistrict }</p>
                                        </div>
                                        <div style={{ alignItems: "right", gap:"30px" }} className='mm d-flex'>
                                            <p>ना.की</p>
                                            <p>{userData.profile.partner_firstname }</p>
                                        </div>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
