import React from 'react'
import "../css/home.css"


export default function Questionservice_section(props) {
    const {qnRef}=props;
    const question_service = [
        {
          "question": "What is Nagarik Mobile App?",
          "answer": "Nagarik Mobile App is a software system that runs services on mobile and tablets. The Nagarik Mobile App is the beginning of a new era of digital Nepal. If the government continues to make this app more effective in the coming days, the era of paper documentation in Nepal will come to an end. The government has announced plans to build Digital Nepal for good governance, development, and prosperity. The citizen app envisioned by the government policy and program of 2075/76 is believed to be an important cornerstone for Digital Nepal. The online services of various government and public bodies can be easily accessed from the same app through this app, and this app will also act as a service delivery gateway so that the electronic systems of government and public bodies do not have to be interconnected separately to establish contact."
        }
        ,
        {
          "question": "What is the slogan of the Nagarik App and When was it inaugurated?",
          "answer": "The government has made it public on January 15, 2021, saying that it will provide 'support of communication and information technology, government services hand in hand to the citizens."
        },
        {
          "question": "Is it mandatory for the Nagarik app to have a mobile number in one's name?",
          "answer": "Yes, by the Citizen App Operation Guideline - 2077, for operating this app, the SIM card has to be in one's name. The regulatory body, the Telecommunications Authority, has requested the service recipients to use only the SIM registered in their name as the mobile number is preparing to be the person's identity code from now on."
        },
        {
          "question": "How to use the Nagarik App?",
          "answer": "Android mobile users can download Nagarik App from Play Store and iPhone users can download it from the App Store to get services from the Nagarik App. The app can be used through the SIM of Nepal Telecom, Ncell and Smart Telcom based on the mobile number registered in one's name. To receive the service, the person concerned must mention the details of his/her Citizenship, Voter ID, Passport and Driving License."
        }
    
      ]
    
  return (
    <div ref={qnRef} className=" questionService-screen d-flex flex-column mb-3 justify-content-center">
    <div style={{ width: "100%", textAlign: "center" }} className="row justify-content-center">
      <div className="col-lg-8">
        <div className="section-title sass desktop-center margin-bottom-55">
          <h3 className="title linear-bg-title">Frequently asked Questions</h3>
        </div>
      </div>
    </div>
    <div>

    </div>
    <div style={{ width: "80%" }} className='row'>
      <div className='questionService-all col-lg-12'>
        {question_service.map((data, index) => (
          <div key={index} class="faq-single-item">
            <div class="content">
              <h3 class="title">{data.question}</h3>
              <p>{data.answer}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>

  )
}
