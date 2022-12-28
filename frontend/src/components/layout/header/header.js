import React, { useState } from 'react';
import classes from './header.module.css';
import Logo from '../../static/images/1Logo.png';
import Avatar from '../../static/images/Avatar.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [auth, SetAuth] = useState(false);

    return (
        <nav className={classes.nav}>
            <div className={classes.nav_container}>
                <Link to='/' className={classes.Logo}><img src={Logo} alt='Logo' className={classes.Logo}></img></Link>
                <Link to='/' className={classes.company}>TellusEd</Link>
                <Link to='/software' className={classes.software}>Software</Link>
                <Link to='/explore'  className={classes.explore}>Explore</Link>
                <div className={classes.spacer}></div>
                <div className={classes.search}>
                    <input 
                        id="search" 
                        type="text" 
                        name="search" 
                        placeholder="Search TellusEd">
                    </input>
                </div>
                <Link to='/login' className={classes.sign_in}>Sign-In</Link>
                <Link to='/register' className={classes.sign_up}>Sign-Up</Link>
                <div className={classes.hamburgerMaster}>
                    <div className={classes.hamburger}></div>
                    <div className={classes.hamburger}></div>
                    <div className={classes.hamburger}></div>
                </div>
                {auth && <img src={Avatar} alt='Avatar' className={classes.avatar} />}
            </div>
        </nav>
    );
};

export default Header;

