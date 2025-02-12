import React from 'react'
import "./cprofilecitizenship.css"
import citizlogo from "../../image/rednepal.png";
export default function Profilecitizenship(props) {
    const { toogle } = props;
    const personalInfo = [
        { label: 'नाम थार', value: 'बिशेष श्रेष्ठ' },
        { label: 'जन्म स्थान', value: 'मध्यपुर थिमि' },
        { label: 'स्थायी ठेगाना', value: 'भक्तपुर' },
        { label: 'जन्म मिति', value: '2081/04/04' },
        { label: 'बाबुको नाम थार', value: 'बिशेष श्रेष्ठ' },
        { label: 'आमाको नाम थार', value: 'बिशेष श्रेष्ठ' },
        { label: 'पति/पत्नीको नाम थार', value: 'बिशेष श्रेष्ठ' }
    ];
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
                            <div className='citizen-left-title'>
                                <p>ना.प्र.नं:</p>

                            </div>
                            <div className='citizen-body-inside d-flex'>
                                <div className='citizen-body-inside-img'>

                                </div>
                                <div className='citizen-body-inside-content'>
                                    <div style={{justifyItems: "space-between", flexDirection: "row", flexWrap: "wrap" }} className='nn d-flex flex-wrap align-content-around'>
                                        <div style={{ }} className='d-flex flex-wrap kk align-content-around mr-auto'>
                                            <p>नाम थार</p>
                                            <p>बिशेष श्रेष्ठ</p>
                                        </div>
                                        <div style={{ alignItems: "right",gap:"30px" }} className='mm d-flex'>
                                            <p>लिङ्ग</p>
                                            <p>पुरुष</p>
                                        </div>

                                    </div>
                                    <div className='d-flex nn kk' style={{gap:"50px", }}>
                                        <div>
                                            <p>जन्म स्थान</p>

                                        </div>
                                        <div className='d-grid'>
                                            <div className='mm d-flex' style={{}}>
                                                <p>जिल्ला :</p>
                                                <p>भक्तपुर</p>

                                            </div>
                                            <div className='d-flex kk' style={{gap:"50px"}}>
                                                <div className='mm d-flex' style={{}}>
                                                    <p>म.न.पा :</p>
                                                    <p> मध्यपुर थिमी</p>
                                                </div>
                                                <div className='mm d-flex' style={{}}>
                                                    <p>वार्ड नं. :</p>
                                                    <p> २</p>

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
                                                <p>भक्तपुर</p>

                                            </div>
                                            <div className='d-flex nn kk' style={{gap:"50px"}}>
                                                <div className='mm d-flex'style={{}}>
                                                    <p>म.न.पा.:</p>
                                                    <p>मध्यपुर थिमी</p>
                                                </div>
                                                <div className='mm d-flex'style={{}} >
                                                    <p>वार्ड नं.</p>
                                                    <p>२</p>

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
                                                <p>२०८१</p>
                                        </div>
                                        <div className='mm d-flex' style={{}}>
                                            <p>महिना :</p>
                                            <p>०४</p>
                                        </div>
                                        <div className='mm d-flex'     style={{}} >
                                            <p>गते :</p>
                                            <p>०४</p>
                                            </div>

                                    </div>
                                    <div style={{ justifyItems: "space-between", flexDirection: "row", flexWrap: "wrap" }} className='d-flex nn flex-wrap align-content-around'>
                                        <div style={{ }} className='d-flex kk flex-wrap align-content-around mr-auto'>
                                            <p>बाबुको नाम थार</p>
                                            <p>बिशेष श्रेष्ठ</p>
                                        </div>
                                        <div style={{ alignItems: "right", gap:"30px" }} className='mm d-flex'>
                                            <p>ना.प्र.न</p>
                                            <p>पुरुष</p>
                                        </div>

                                    </div>
                                    <div style={{  justifyItems: "space-between", flexDirection: "row", flexWrap: "wrap" }} className='nn d-flex flex-wrap align-content-around'>
                                        <div style={{ }} className='d-flex kk flex-wrap align-content-around mr-auto'>
                                            <p>ठेगाना</p>
                                            <p>भक्तपुर</p>
                                        </div>
                                        <div style={{ alignItems: "right",gap:"30px"  }} className='mm d-flex'>
                                            <p>ना.की</p>
                                            <p>पुरुष</p>
                                        </div>

                                    </div>

                                    <div style={{ justifyItems: "space-between", flexDirection: "row", flexWrap: "wrap" }} className='nn d-flex flex-wrap align-content-around'>
                                        <div style={{ }} className='d-flex kk flex-wrap align-content-around mr-auto'>
                                            <p>आमाको नाम थार</p>
                                            <p>बिशेष श्रेष्ठ</p>
                                        </div>
                                        <div style={{ alignItems: "right", gap:"30px" }} className='mm d-flex'>
                                            <p>ना.प्र.न</p>
                                            <p>पुरुष</p>
                                        </div>

                                    </div>
                                    <div style={{ justifyItems: "space-between", flexDirection: "row", flexWrap: "wrap" }} className='nn d-flex flex-wrap align-content-around'>
                                        <div style={{ }} className='d-flex kk flex-wrap align-content-around mr-auto'>
                                            <p>ठेगाना</p>
                                            <p>भक्तपुर</p>
                                        </div>
                                        <div style={{ alignItems: "right",gap:"30px"  }} className='mm d-flex'>
                                            <p>ना.की</p>
                                            <p>पुरुष</p>
                                        </div>

                                    </div>
                                    <div style={{ justifyItems: "space-between", flexDirection: "row", flexWrap: "wrap" }} className='nn d-flex flex-wrap align-content-around'>
                                        <div style={{ }} className='d-flex kk flex-wrap align-content-around mr-auto'>
                                            <p>पति/पत्नीको नाम थार</p>
                                            <p>बिशेष श्रेष्ठ</p>
                                        </div>
                                        <div style={{ alignItems: "right",gap:"30px"  }} className='mm d-flex'>
                                            <p>ना.प्र.न</p>
                                            <p>पुरुष</p>
                                        </div>

                                    </div>
                                    <div style={{ justifyItems: "space-between", flexDirection: "row", flexWrap: "wrap" }} className='nn d-flex flex-wrap align-content-around'>
                                        <div style={{ }} className='d-flex kk flex-wrap align-content-around mr-auto'>
                                            <p>ठेगाना</p>
                                            <p>भक्तपुर</p>
                                        </div>
                                        <div style={{ alignItems: "right", gap:"30px" }} className='mm d-flex'>
                                            <p>ना.की</p>
                                            <p>पुरुष</p>
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
