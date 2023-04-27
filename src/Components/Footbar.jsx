import React from 'react'
import { FaArrowAltCircleRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import "./Footbar.css"


function Footbar() {
    return (
        <div className='Footer'>
                <div className='sb__footer-links'>
                    <div className='sb__footer-links_add_div'>
                        <h1>BOOKXPERT</h1>
                        <div className='sb__footer-links_address'>
                            <h4><u>Hyderabad (Head Office):</u></h4>
                            <p>5th floor upstairs of Matrix lab,Dwarakamai building plot no 132,6th phase KPHB colony HYDERABAD,Telangana-500072.</p>
                            <p>Phone: 040 23800833</p>
                            <p>Mobile: +91-9392912591</p>
                        </div>
                        <div className='sb__footer-links_address'>
                            <h4><u>Guntur (Registered Office):</u></h4>
                            <p>Flat No: 102, Sai Srinivasam,3rd Lane, Ashok Nagar, Guntur, 522007 Andhra Pradesh.</p>
                            <p>Phone: 0863 - 2211335</p>
                            <p>Mobile: +91-9848042745</p>
                            <p>Email: info@bookxpert.co.in</p>
                        </div>
                        <div className='sb__footer-links_address'>
                            <h4><u>Bangalore (Regional Office):</u></h4>
                            <p># 101, 1st Floor, 208C, 1st Main Rd, HBR Layout 2nd Block, 1st Stage, Bengaluru - 560043</p>
                            <p>Mobile:+91-92978 89999</p>
                        </div>
                    </div>
                    <div className='sb__footer-links_div'>
                        <h4>Useful Links</h4>
                        <a href='/'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>Home</p></a>
                        <a href='/about'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>About Us</p></a>
                        <a href='/blogs'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>Blogs</p></a>
                        <a href='/services'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>Services</p></a>
                        <a href='/contact'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>Contact</p></a>
                        <a href='/signup'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>Sign Up</p></a>
                        <a href='/'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>What we Offer</p></a>
                        <a href='/'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>Terms of Services</p></a>
                        <a href='/'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>Privacy Policy</p></a>
                    </div>
                    <div className='sb__footer-links_div'>
                        <h4>Our Services</h4>
                        <a href='/services'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>No Security Risk</p></a>
                        <a href='/services'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>Account Management</p></a>
                        <a href='/services'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>Statuory Compliance</p></a>
                        <a href='/services'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>Audit and Filling of Returns</p></a>
                        <a href='/services'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>Data Management</p></a>
                        <a href='/services'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>Awesome Support</p></a>
                        <a href='/services'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>Always Available</p></a>
                        <a href='/services'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>Tax Planning</p></a>
                        <a href='/services'><FaArrowAltCircleRight></FaArrowAltCircleRight><p>Bank Compliances</p></a>
                    </div>
                </div>
                <hr></hr>
                <div className='copy-below'>
                    <div className='copy-links'>
                        <a href='https://facebook.com'><FaFacebook></FaFacebook></a>
                        <a href='https://twitter.com'><FaTwitter></FaTwitter></a>
                        <a href='https://instagram.com'><FaInstagram></FaInstagram></a>
                        <a href='https://linkedin.com'><FaLinkedin></FaLinkedin></a>
                    </div>
                    <div className='copy-rights'>
                        <p>&copy; Copyright <b>Book Xpert</b>. All Rights Reserved</p>
                    </div>
            </div>
        </div>
    )
}

export default Footbar
