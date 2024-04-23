import React, { useState } from 'react'
import gtmLogoNavbar from "../img/gtmLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "./delete.css"
const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const handleNavbar = () => {
        setToggle((test) => !test)
    }

    return (
        <main>
            <nav className='mainNavbar'>
                <div className="logoContainer">
                    <img src={gtmLogoNavbar} alt="" />
                    <GiHamburgerMenu onClick={handleNavbar} className='responsiveHam'
                        style={{ fontSize: "32px", position: "relative", float: "right", margin: "5px", border: "2px solid black", borderRadius: "5px" }}
                    />
                </div>
                <div className={`pageContainer ${toggle ? "" : "responsiveNavbar"} `}>
                    <a href="/" className="linkPage">Home</a>
                    <a href="/" className="linkPage">Service</a>
                    <a href="/" className="linkPage">Product</a>
                    <a href="/" className="linkPage">Team</a>
                    <a href="/" className="linkPage">Blog</a>
                    <a href="/" className="linkPage">Career</a>
                    <a href="/" className="linkPage">Director</a>
                    <a href="/" className="linkPage">About Us</a>
                    <a href="/" className="linkPage">Contact Us</a>
                </div>

            </nav>
        </main>
    )
}

export default Navbar
