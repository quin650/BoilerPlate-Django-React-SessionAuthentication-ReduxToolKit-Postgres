import React, { Fragment, useState } from 'react';
import classes from './mainNavbar.module.css';
import Logo from '../../../../static/images/1Logo.png';
import NavbarMenu from './navbarMenu';
import SearchBar from './searchBar';
import { Link } from 'react-router-dom';
import defaultPNG from '../../../../static/images/1Avatar.png';

const MainNavbar = () => {
    const [auth, SetAuth] = useState(true);

    const guestLinks = (
        <Fragment>
                <Link to='/login' className={classes.sign_in_out}>Sign-In</Link>
                <Link to='/register' className={classes.sign_up}>Sign-Up</Link>
                <NavbarMenu />
        </Fragment>
    )

    const userLinks = (
        <Fragment>
                <Link to='/logout' className={classes.sign_in_out}>Log-Out</Link>
                <div className={classes.avatarDiv}><img src={defaultPNG} className={classes.avatar} alt='Avatar'></img></div>
        </Fragment>
    )

    return (
        <nav className={classes.nav}>
            <div className={classes.nav_container}>
                <Link to='/' className={classes.Logo}><img src={Logo} alt='Logo' className={classes.Logo}></img></Link>
                <Link to='/software' className={classes.software}>Software</Link>
                <Link to='/explore'  className={classes.explore}>Explore</Link>
                <SearchBar />
                {!auth && guestLinks}
                {auth && userLinks}
            </div>
        </nav>
    );
};

export default MainNavbar;