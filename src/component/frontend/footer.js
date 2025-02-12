import React from 'react'
import '../css/footer.css';
import nagriklogo from "../image/nagriklogo.png"

export default function Footer(props) {
    // const {aboutRef}=props;
    return (
        <footer className='ecomfoot'>
            <div class=" foot-ecom w-container">
                <div style={{ display: "flex", justifyContent: "space-around", textAlign: "left" }} className='container-footer'>
                    <div style={{ display: "flex", textAlign: "center", marginTop: "20px" }} className='footer-content'>
                        <span style={{ color: "white", fontSize: "40px" }}>
                            <img src={nagriklogo} width={100} height={100} alt='nagrik-logo' />
                        </span>



                    </div>
                    <div className='footer-content'>
                        <div className='footer-instruction'>
                            <div className=' title-shop'>
                                <ul>

                                    <li>Home</li>
                                    <li>How it works</li>
                                    <li>Services</li>
                                </ul>
                            </div>
                            <div className=' title-company'>
                                <ul>

                                    <li>News</li>
                                    <li>Privacy Policy</li>

                                </ul>
                            </div>
                        </div>

                    </div>


                </div>
               
            </div>

        </footer>

    )
}
