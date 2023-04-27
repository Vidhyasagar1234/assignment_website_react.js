import "./Navbar.css"
import React, { useState } from 'react'
import pic1 from "../assets/logo.png"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {
    const [icon, setIcon] = useState(false)
    const handleClick = () => {
        setIcon(!icon)
    }
    const closeDrawer = () => {
        setIcon(false)
    }
    return (
        <>
            <nav className="navbar">
                <Link to='/' className="logo" onClick={closeDrawer}><img src={pic1} alt=""></img></Link>
                <div className="menu-icon" onClick={handleClick}>
                    {
                        icon ? <FaTimes className="fa-times"></FaTimes> : <FaBars className="fa-bars"></FaBars>
                    }
                </div>
                <ul className={
                    icon ? 'nav-menu active' : 'nav-menu'
                }>
                    <li>
                        <Link to='/' className="nav-links" onClick={closeDrawer}>Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className="nav-links" onClick={closeDrawer}>About Us</Link>
                    </li>
                    <li>
                        <Link to='/blogs' className="nav-links" onClick={closeDrawer}>Blogs</Link>
                    </li>
                    <li>
                        <Link to='/services' className="nav-links" onClick={closeDrawer}>Services</Link>
                    </li>
                    <li>
                        <Link to='/contact' className="nav-links" onClick={closeDrawer}>Contact</Link>
                    </li>
                    <li>
                        <Link to='/signup' className="nav-signup" onClick={closeDrawer}>Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
