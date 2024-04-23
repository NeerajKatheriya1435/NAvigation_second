import React, { useState } from 'react'
import gtmLogoNavbar from "../img/gtmLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../components/navbar.module.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const handleNavbar = () => {
        setToggle((test) => !test)
    }

    return (
        <main>
            <nav className={styles.mainNavbar}>
                <div className={styles.logoContainer}>
                    <img src={gtmLogoNavbar} alt="Error loading" />
                    <GiHamburgerMenu onClick={handleNavbar} className={styles.responsiveHam}
                        style={{ fontSize: "32px", position: "relative", float: "right", margin: "5px", border: "2px solid black", borderRadius: "5px" }}
                    />
                </div>
                <div className={`${styles.pageContainer} ${toggle ? styles.k : styles.responsiveNavbar} `}>
                    <Link to="/home" >Home</Link>
                    <Link to="/service" >Service</Link>
                    <Link to="/product" >Product</Link>
                    <Link to="/team" >Team</Link>
                    <Link to="/blog" >Blog</Link>
                    <Link to="/career" >Career</Link>
                    <Link to="/director" >Director</Link>
                    <Link to="/about" >About Us</Link>
                    <Link to="/contact" >Contact Us</Link>
                </div>

            </nav>
        </main>
    )
}

export default Navbar
