import React, { useEffect, useState } from 'react';
import RegistrationForm1 from './registration';
import CitizenAsk from './citizenask';
import CitizenYouDetailAsk from './yourregistration';
import CitizenfatherDetailAsk from './fatherregistration';
import CitizenmotherDetailAsk from './mothercitizenask';
import CitizenpartnerDetailAsk from './partnerregistraionask';
import axios from "axios"
import CitizenYouImageAsk from './yourimage';
import { useNavigate } from 'react-router-dom';

const ImageUpload = ({ label, setImageFile }) => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  return (
    <div className="image-upload">
      <label>{label}</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && <img src={preview} alt={label} width="100" />}
    </div>
  );
};

export default function Multistep() {
  const [users, setUsers] = useState({});
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  
  const navigate=useNavigate()
  const [otppverify, setotppverify] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formdata, setformdata] = useState({
    email: '',
   
    firstname: '',
    phonenumber: null,
    lastname: '',
    middlename: '',
    gender: '',
    borndistrict: '',
    bornward: null,
    bornplace: '',
    currentdistrict: '',
    currentward: null,
    currentplace: '',
    dob: '',
    citizennumber: '',
    issuedate: '',
    issueplace: '',
    image: '',
    frontimage: '',
    backimage: '',

    father_firstname: '',
    father_lastname: '',
    father_middlename: '',
    father_borndistrict: '',
    father_bornward: null,
    father_bornplace: '',

    mother_firstname: '',
    mother_lastname: '',
    mother_middlename: '',
    mother_borndistrict: '',
    mother_bornward: null,
    mother_bornplace: '',

    partner_firstname: '',
    partner_lastname: '',
    partner_middlename: '',
    partner_borndistrict: '',
    partner_bornward: null,
    partner_bornplace: '',
  });

  useEffect(() => {
    // Cleanup intervals and timeouts when component unmounts or when users change
    return () => {
      Object.keys(users).forEach((userId) => {
        const user = users[userId];
        clearInterval(user.interval);
        clearTimeout(user.timeout);
      });
    };
  }, [users]);
  
 


  const sendOtp = async () => {
    if (users[formdata.phonenumber]?.otppverify) {
    
      setUsers((prevUsers) => {
        clearInterval(prevUsers[formdata.phonenumber].interval);
        return {
          ...prevUsers,
          [formdata.phonenumber]: {
            otppverify: false, 
            countdown: 300, 
           
          },
        };
      });
    }
    try {
      const phoneNumberWithPlus = `+977${formdata.phonenumber}`; 
      const response = await axios.post("https://nagarik-api.onrender.com/nagarik/signin", {
        phone_number: phoneNumberWithPlus,
        email:formdata.email
      });
      // console.log("OTP sent successfully:", response);
      const userId = formdata.phonenumber
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
          ...prevUsers,[userId]:{...newUser,interval,timeout}
        }
      }
      )
    
      setotppverify(true);
    } catch (error) {
      // console.error("Error sending OTP:", error);
      setErrorMessage("Failed to send OTP. Please try again.");
    }
  };

  const [message, setMessage] = useState("");
  const verifyOtp = async () => {
    // console.log("Sending OTP data:", { phone_number: formdata.phonenumber, otp: otp });  // Log data
    try {
      const phoneNumberWithPlu= `+977${formdata.phonenumber}`; 
     
      const respons = await axios.post("https://nagarik-api.onrender.com/nagarik/verify-otp", {
        phone_number: phoneNumberWithPlu,
        otp: otp,
      });
      // console.log(respons);  // Log the response from the server
      alert("OTP verified");
    } catch (error) {
      // console.error("Error during OTP verification:", error);
      if (error.response) {
        setMessage(error.response.data.message || "Something went wrong");
      } else {
        setMessage("Network error");
      }
    }
  };
  
  const registerUser = async () => {
    try {
     
      verifyOtp();
  
      const formData = new FormData();
  
 
      formData.append('userData[phone_number]', `+977${formdata.phonenumber}`);
      formData.append('userData[firstname]', formdata.firstname);
      formData.append('userData[lastname]', formdata.lastname);
      formData.append('userData[middlename]', formdata.middlename);
      formData.append('userData[gender]', formdata.gender);
      formData.append('userData[dob]', formdata.dob);
      formData.append('userData[borndistrict]', formdata.borndistrict);
      formData.append('userData[bornward]', formdata.bornward);
      formData.append('userData[bornplace]', formdata.bornplace);
      formData.append('userData[currentdistrict]', formdata.currentdistrict);
      formData.append('userData[currentward]', formdata.currentward);
      formData.append('userData[currentplace]', formdata.currentplace);
      

      formData.append('userData[father_firstname]', formdata.father_firstname);
      formData.append('userData[father_lastname]', formdata.father_lastname);
      formData.append('userData[father_middlename]', formdata.father_middlename || "");
      formData.append('userData[father_borndistrict]', formdata.father_borndistrict);
      formData.append('userData[father_bornward]', formdata.father_bornward);
      formData.append('userData[father_bornplace]', formdata.father_bornplace);
  
  
      formData.append('userData[mother_firstname]', formdata.mother_firstname);
      formData.append('userData[mother_lastname]', formdata.mother_lastname);
      formData.append('userData[mother_middlename]', formdata.mother_middlename || "");
      formData.append('userData[mother_borndistrict]', formdata.mother_borndistrict);
      formData.append('userData[mother_bornward]', formdata.mother_bornward);
      formData.append('userData[mother_bornplace]', formdata.mother_bornplace);
  
      
      formData.append('userData[partner_firstname]', formdata.partner_firstname || "");
      formData.append('userData[partner_lastname]', formdata.partner_lastname || "");
      formData.append('userData[partner_middlename]', formdata.partner_middlename || "");
      formData.append('userData[partner_borndistrict]', formdata.partner_borndistrict);
      formData.append('userData[partner_bornward]', formdata.partner_bornward);
      formData.append('userData[partner_bornplace]', formdata.partner_bornplace);
  
  
      formData.append('userData[citizennumber]', formdata.citizennumber);
      formData.append('userData[issuedate]', formdata.issuedate);
      formData.append('userData[issueplace]', formdata.issueplace);
  
      // Append images if present
      if (formdata.image) {
        formData.append('userData[image]', formdata.image);
      }
      if (formdata.frontimage) {
        formData.append('userData[frontimage]', formdata.frontimage);
      }
      if (formdata.backimage) {
        formData.append('userData[backimage]', formdata.backimage);
      }
  
      // Send the form data to your API
      const response = await axios.post("https://nagarik-api.onrender.com/nagarik/create-profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      });
      
     
      alert("Registration Successful!");
      navigate("/nagarika/citizen/user/dashboard")
    } catch (error) {
      // console.error("Error registering user:", error);
      setErrorMessage(`Registration failed: ${error.message || "Please try again."}`);
    }
  };
  const [page, setpage] = useState(0);
  const multipage = () => {
    if (page === 0) {
      return <RegistrationForm1 formdata={formdata} setpage={setpage} page={page} setformdata={setformdata} />;
    } else if (page === 1) {
      return <CitizenAsk formdata={formdata} setpage={setpage} page={page} setformdata={setformdata} />;
    }
    else if (page === 2) {
      return <CitizenYouImageAsk formdata={formdata} setpage={setpage} page={page} setformdata={setformdata} />;
    } else if (page === 3) {
      return <CitizenYouDetailAsk formdata={formdata} setpage={setpage} page={page} setformdata={setformdata} />;
    } else if (page === 4) {
      return <CitizenfatherDetailAsk formdata={formdata} setpage={setpage} page={page} setformdata={setformdata} />;
    } else if (page === 5) {
      return <CitizenmotherDetailAsk formdata={formdata} setpage={setpage} page={page} setformdata={setformdata} />;
    } else if (page === 6) {
      return <CitizenpartnerDetailAsk otp={otp} users={users} setOtp={setOtp} sendOtp={sendOtp} registerUser={registerUser} otppverify={otppverify} errorMessage={errorMessage} formdata={formdata} setpage={setpage} page={page} setformdata={setformdata} />;
    }
  };

  return (
    <>
      {multipage()}
    </>
  );
}