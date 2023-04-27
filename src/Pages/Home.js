import React from 'react'
import { Link } from "react-router-dom"
import appdata from "../assets/appdata.png"
import approved from "../assets/approved.png"
import customer from "../assets/customercare.png"
import experts from "../assets/experts.png"
import reliable from "../assets/reliable.png"
import team from "../assets/team.png"

function Home() {
  return (
    <>
      <div className='main-body'>
        <div className='sb__main-body'>
          <div className='sb__background'>
            <div className='sb__background-content'>
              <h3>Now</h3>
              <p>"Fullfillment of your dreams"</p>
              <h3>has a new address!</h3>
              <h5>We're here to help MSME's overcome Accounting and Enforcement Issues.</h5>
              <Link to='/about' ><button className="about-links">Get More Info</button></Link>
            </div>
          </div>
          <div className='body-work'>
            <p>How It Works</p>
            <div className='body-work-links1'>
              <img src={team} alt=''></img>
              <div className='body-work-links-content'>
                <p>Our solution deploys the services of team comprising of accounting, law, and technology experts( instead of a conventional single individual who is neither trained nor updated.)</p>
              </div>
            </div>
            <div className='body-work-links2'>
              <img src={appdata} alt=''></img>
              <div className='body-work-links-content'>
                <p>Our specially designed app can receive all your data from your business locations eliminating the need for Physical Movement of People and Documents.(original source documents can be viewed always)</p>
              </div>
            </div>
            <div className='body-work-links1'>
              <img src={customer} alt=''></img>
              <div className='body-work-links-content'>
                <p>Trained operators in a dedicated call centre can enter all data into an specially designed online platform ( can provide Owners up to date MIS and Alerts helping them to take Rational and Data Driven Decisions instead of depending solely on Intuition)</p>
              </div>
            </div>
            <div className='body-work-links2'>
              <img src={experts} alt=''></img>
              <div className='body-work-links-content'>
                <p>Experts of accounting and compliances located in various geographical locations with special domain expertise in the Company’s Sector will validate data on a regular basis. ( a single person cannot expert in all domains)</p>
              </div>
            </div>
            <div className='body-work-links1'>
              <img src={approved} alt=''></img>
              <div className='body-work-links-content'>
                <p>Our Team ensures that data is perfect and complete before sending it for compliances & your/our professionals’ use. (Professionals’ time is reduced and reliability improves)</p>
              </div>
            </div>
            <div className='body-work-links2'>
              <img src={reliable} alt=''></img>
              <div className='body-work-links-content'>
                <p>Performs on a regular, reliable, and continuous basis (hassle free)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
