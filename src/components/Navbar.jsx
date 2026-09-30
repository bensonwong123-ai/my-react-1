import React, { useState } from 'react'
import logo from '../assets/T.png'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const Navbar = () => {
    const [isToggle,setToogle] = useState(false);
    const handleToggle = () => setToogle(!isToggle);

    return (

<nav className="navbar">
    <div className="container navbar-flex">
        <img src={logo} alt="logo" className="logo"/>
        {/* <!-- main menu -->  */}
        <div className="main-menu">
            <PageLinks groupClass="main-menu-list"/>
            <SocialLinks groupClass="nav-icons" listItemClass="nav-icon"/>
        </div>

        {/* <!-- mobile menu --> */}
        <div className="mobile-menu">
            <div className="mobile-menu-toggle">
                <button onClick={handleToggle}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                {/* <div className="mobile-menu-items"> */}
                <div className={isToggle? "mobile-menu-items active":"mobile-menu-items"}>
                    <PageLinks groupClass="mobile-menu-list"/>
                </div>
            </div>
        </div>
    </div>
</nav>

  )
}

export default Navbar