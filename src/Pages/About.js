import React from 'react'
import reliable from "../assets/reliable.png"


function About() {
  return (
    <div className='main-about'>
      <img src={reliable} alt=''></img>
      <div className='sb__about-links'>
        <h1>About Us</h1>
        <p>The business is led by a group of professionals from different fields and backgrounds who have the functional and technological experience. We're here to help MSMEs overcome their accounting and enforcement issues under different laws of the country.</p>
        <p>As per our Research, we found out that Large Number of MSMEs are incurring Huge Losses and are struggling daily to fulfill their accounting and enforcements needs due to Constraints with respect to their Location, Lack of Fully Trained People to execute their Accounting Works, Cost Overruns to Fulfill all enforcement needs, and Poor Quality of Services provided by existing lot. To solve these Problems, our team is committed to develop creative and cost-effective real-time customized solutions catering to your needs.</p>
        <p>MBA from a world-famous B-School for Entrepreneurship, Chartered accountants with two and a half decades of experience in practice, Information Technology Specialist with ten years of experience in growth and solution design, Cost Accountant and foreign faculty for SAP ERP, make up the Board of Directors.</p>
      </div>
    </div>
  )
}

export default About
