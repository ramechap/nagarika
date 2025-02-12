import React, { useEffect, useState } from 'react'
import nagriklogo from "../../image/nepallogo.png";
import { IoArrowBackSharp } from "react-icons/io5";
import "./student.css"
import student from "./student.json"
import { Link } from 'react-router-dom';
export default function Studentmarksheet(props) {
    const { toogle, settoogle } = props
      const [roll, setroll] = useState("")

      const [showstudent, setshowstudent] = useState(false)
     
      

  return (
        <>
          <div style={{ width: toogle ? (100 % - "60px") : (100 % - "280px") }} className='contentu'>
            {showstudent ?
    <>
    <div>
    <IoArrowBackSharp style={{fontSize:"25px",marginBottom:"10px",fontWeight:"bold",cursor:"pointer"}} onClick={()=>setshowstudent(false)} />
              </div>
              {student.students.map((item,index)=>{
                if(item.rollNumber==roll){
                    return(
                        <div key={index} class="marksheet-container">
              <div class="header">
                <h1>National Examination Board (NEB)</h1>
                <h2>Class 12 Marksheet</h2>
                <p>Ministry of Education, Nepal</p>
              </div>
              
          <>
          
              <div >
                  <div class="student-info">
                <p><strong>Name:</strong> {item.name} </p>
                <p><strong>Symbol No:</strong> {item.rollNumber}</p>
                <p><strong>Faculty:</strong> {item.faculty}</p>
                <p><strong>Year:</strong> {item.year}</p>
              </div>
          
              <table class="marks-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Max Marks</th>
                    <th>Marks Obtained</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
              {item.subjects.map((mark,index)=>{
                  return(
                      <tr key={index}>
                    <td>{mark.name}</td>
                    <td>{mark.maxMarks}</td>
                    <td>{mark.marksObtained}</td>
                    <td>{mark.grade}</td>
                  </tr>
              )}
          )}
          
                </tbody>
              </table>
          
              </div>
          
          </>
              <div class="footer">
                <p>Issued by: National Examination Board, Nepal</p>
                <p>Date: 25th December 2024</p>
              </div>
            </div>
              )
          
                }
                 
})}
    </>          :
    
              <div>
                <form style={{ width: "50%", marginLeft: "25%" }}>
                  <div class="form-group">
                    <label for="exampleInput1">Enter Symbol NO :</label>
                    <input type="text" value={roll} onChange={(e) => setroll(e.target.value)} class="form-control" id="exampleInput1" placeholder="Symbol नम्बर" />
                  </div>
    
    
                  <button onClick={()=>setshowstudent(true)} style={{ width: "100%" }} type="submit" class="btn btn-primary">पेश गर्नुहोस्</button>
                </form>
    
              </div>
            }
          </div>
        </>
    
  )
}
