import React, { useState } from 'react'
import RegistrationForm1 from './registration'
import CitizenAsk from './citizenask'
import CitizenYouDetailAsk from './yourregistration'
import CitizenfatherDetailAsk from './fatherregistration'
import CitizenmotherDetailAsk from './mothercitizenask'
import CitizenpartnerDetailAsk from './partnerregistraionask'
import { account, databases, storage } from '../../../appwrite/appwrite-config'
import { ID } from 'appwrite'

export default function Multiste() {

  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [otppverify, setotppverify] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
    const [formdata, setformdata] = useState({
        "email":"",
        "password":"",
        "firstname":"",
        "phonenumber":null,
        "lastname":"",
        "middlename":"",
        "gender":"",
        "borndistrict":"",
        "bornward":null,
        "bornplace":"",
        "currentdistrict":"",
        "currentward":null,
        "currentplace":"",
        "dob":"",
        "citizennumber":"",
        "issuedate":"",
        "issueplace":"",
        "image":"",
        "frontimage":"",
        "backimage":"",

        "father_firstname":"",
        "father_lastname":"",
        "father_middlename":"",
        "father_borndistrict":"",
        "father_bornward":null,
        "father_bornplace":"",

        "mother_firstname":"",
        "mother_lastname":"",
        "mother_middlename":"",
        "mother_borndistrict":"",
        "mother_bornward":null,
        "mother_bornplace":"",

        "partner_firstname":"",
        "partner_lastname":"",
        "partner_middlename":"",
        "partner_borndistrict":"",
        "partner_bornward":null,
        "partner_bornplace":"",




    })
     // Upload file to Appwrite Storage
  const uploadFile = async (file) => {
    if (!file) return null;

    const fileId = 'unique()'; // Or use a custom file ID
    const response = await storage.createFile('67b35c14002de1b59c76', fileId, file);
    return response.$id; // File ID that can be saved in the database
  };
  
  
  const sendOtp = async () => {
    try {
      // Validate the phone number format
      // const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      // if (!phoneRegex.test(formdata.phonenumber)) {
      //   setErrorMessage("Invalid phone number format. Please include the country code starting with '+' and use only numbers.");
      //   return;
      // }
  
      // Format the phone number with country code
      const phoneNumberWithPlus = `+977${formdata.phonenumber}`;  // Nepal's country code
  
      // Send OTP for phone number verification using createPhoneToken
      const result = await account.createPhoneToken(ID.unique(), phoneNumberWithPlus);
      console.log("OTP sent successfully:", result);
      // const userId = result.userId;  // Get userId from the result
  
      // Store the userId for session creation later
      setConfirmationResult(result);
      setotppverify(true);  // Mark OTP verification as true
  
      // Proceed to the next step where user can input the OTP
    } catch (error) {
      console.error("Error sending OTP:", error);
      setErrorMessage("Failed to send OTP. Please try again.");
    }
  };
      
  const registerUser = async () => {
    try {
     
      if (!otp || otp.length !== 6) {
        setErrorMessage("Please enter a valid OTP.");
        return;
      }
      const { userId  } = confirmationResult;
      if (!userId ) {
        throw new Error("Invalid userId or verificationToken.");
      }
  
  
      // Use the userId and verificationToken to create the session
      const session = await account.createSession(ID.unique(), otp); // Correct usage of userId and OTP
      console.log("Session created:", session);
      // Step 6: After OTP verification, create an account with email and password
      const user = await account.create(ID.unique(),formdata.email, formdata.password, formdata.firstname); // Appwrite account creation with email & password
      console.log("User account created:", user);
  
      // Step 7: Upload profile photo if selected
      const profilePhotoUrl = await uploadFile(formdata.image); // Upload profile picture
      const frontImageUrl = await uploadFile(formdata.frontimage); // Upload front image
      const backImageUrl = await uploadFile(formdata.backimage); // Upload back image
  
      // Step 8: Structure the user data with file URLs
      const userData = {
        phoneNumber: formdata.phonenumber,
        email: formdata.email,
        name: `${formdata.firstname} ${formdata.lastname}`, // Combine first and last name
        profilePicture: profilePhotoUrl, // Save the file URL or ID in the database
        father: {
          firstname: formdata.father_firstname,
          lastname: formdata.father_lastname,
          middlename: formdata.father_middlename,
          borndistrict: formdata.father_borndistrict,
          bornward: formdata.father_bornward,
          bornplace: formdata.father_bornplace,
        },
        mother: {
          firstname: formdata.mother_firstname,
          lastname: formdata.mother_lastname,
          middlename: formdata.mother_middlename,
          borndistrict: formdata.mother_borndistrict,
          bornward: formdata.mother_bornward,
          bornplace: formdata.mother_bornplace,
        },
        partner: {
          firstname: formdata.partner_firstname,
          lastname: formdata.partner_lastname,
          middlename: formdata.partner_middlename,
          borndistrict: formdata.partner_borndistrict,
          bornward: formdata.partner_bornward,
          bornplace: formdata.partner_bornplace,
        },
        dob: formdata.dob,
        citizennumber: formdata.citizennumber,
        issuedate: formdata.issuedate,
        issueplace: formdata.issueplace,
        frontimage: frontImageUrl, // Front image URL
        backimage: backImageUrl,   // Back image URL
      };
  
      const collectionId = '67b35be1002b0e24c7ea'; // Replace with your collection ID
      const documentId = user.$id || 'unique()'; // You can use the Appwrite UID for the document ID
      console.log("Document ID:", documentId);
  
      const response = await databases.createDocument(collectionId, documentId, userData);
      console.log('User registered and profile created in Appwrite:', response);
  
      // Optionally, navigate to the login or dashboard page
      alert("Registration Successful!");
  
    } catch (error) {
      console.error("Error registering user:", error);
      setErrorMessage(`Registration failed: ${error.message || "Please try again."}`);
    }
  };
        const [page, setpage] = useState(0)
    const multipage=()=>{
        if (page === 0){
            return <RegistrationForm1 formdata={formdata} setpage={setpage} page={page} setformdata={setformdata}/>
        }
        else if(page === 1){
            return <CitizenAsk formdata={formdata}  setpage={setpage}  page={page} setformdata={setformdata}/>
        }
        else if(page === 2){
            return <CitizenYouDetailAsk formdata={formdata} setpage={setpage}  page={page} setformdata={setformdata}/>
        }
        else if(page === 3){
            return <CitizenfatherDetailAsk formdata={formdata} setpage={setpage} page={page} setformdata={setformdata}/>
        }
        else if(page === 4){
            return <CitizenmotherDetailAsk formdata={formdata} setpage={setpage} page={page} setformdata={setformdata}/>
        }
        else if(page === 5){
            return <CitizenpartnerDetailAsk otp={otp} setOtp={setOtp} sendOtp={sendOtp} registerUser={registerUser} otppverify={otppverify} errorMessage={errorMessage}  formdata={formdata} setpage={setpage} page={page} setformdata={setformdata}/>
        }


    }
  return (
    <>
    
    {multipage()}
    </>
  )
}
