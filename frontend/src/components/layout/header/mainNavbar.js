import React, { useState } from 'react';
import classes from './mainNavbar.module.css';
import Logo from '../../../../static/images/1Logo.png';
import NavbarMenu from './navbarMenu';
import SearchBar from './searchBar';
import NavbarAvatarMenu from './navbarAvatarMenu';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
    const [auth, SetAuth] = useState(false);
    return (
        <nav className={classes.nav}>
            <div className={classes.nav_container}>
                <Link to='/' className={classes.Logo}><img src={Logo} alt='Logo' className={classes.Logo}></img></Link>
                <Link to='/software' className={classes.software}>Software</Link>
                <Link to='/explore'  className={classes.explore}>Explore</Link>
                <div className={classes.spacer}></div>
                <SearchBar />
                <Link to='/login' className={classes.sign_in}>Sign-In</Link>
                <Link to='/register' className={classes.sign_up}>Sign-Up</Link>
                <NavbarMenu />
                {auth && <NavbarAvatarMenu />}
            </div>
        </nav>
    );
};

export default MainNavbar;