import React, { useState } from 'react'
import RegistrationForm1 from './registration'
import CitizenAsk from './citizenask'
import CitizenYouDetailAsk from './yourregistration'
import CitizenfatherDetailAsk from './fatherregistration'
import CitizenmotherDetailAsk from './mothercitizenask'
import CitizenpartnerDetailAsk from './partnerregistraionask'

export default function Multistep() {
    const [formdata, setformdata] = useState({
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
            return <CitizenpartnerDetailAsk formdata={formdata} setpage={setpage} page={page} setformdata={setformdata}/>
        }


    }
  return (
    <>
    
    {multipage()}
    </>
  )
}
