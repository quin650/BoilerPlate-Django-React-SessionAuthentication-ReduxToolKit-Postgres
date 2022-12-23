import React, { useState } from 'react';
import classes from './header.module.css';
import Logo from '../../static/images/1Logo.png';
import Avatar from '../../static/images/Avatar.png';


const Header = () => {
    const [auth, SetAuth] = useState(false);
    return (
        <nav className={classes.nav}>
            <div className={classes.nav_container}>
                <img src={Logo} alt='Logo' className={classes.Logo} />
                <div className={classes.company}>TellusEd</div>
                <div className={classes.software}>Software</div>
                <div className={classes.explore}>Explore</div>
                <div className={classes.spacer}></div>
                <div className={classes.search}>
                    <input id="search" type="text" name="search" placeholder="Search TellusEd"></input>
                </div>
                <div className={classes.sign_in}>Sign-In</div>
                <button className={classes.sign_up}>Sign-Up</button>
                <div className={classes.hamburgerMaster}>w
                    <div className={classes.hamburger}></div>
                    <div className={classes.hamburger}></div>
                    <div className={classes.hamburger}></div>
                </div>
                {auth && <img src={Avatar} alt='Avatar' className={classes.avatar} />}
            </div>
        </nav>
    )
}

export default Header;