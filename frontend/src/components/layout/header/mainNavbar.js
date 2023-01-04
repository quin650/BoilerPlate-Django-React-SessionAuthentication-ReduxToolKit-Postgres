import React, { Fragment } from 'react';
import classes from './mainNavbar.module.css';
import Logo from '../../../../static/images/1Logo.png';
import NavbarMenu from './navbarMenu';
import SearchBar from './searchBar';
import { Link } from 'react-router-dom';
import defaultPNG from '../../../../static/images/1Avatar.png';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';

const MainNavbar = ({ isAuthenticated, logout }) => {
    // const [auth, SetAuth] = useState(false);
    const authLinks = (
        <Fragment>
                <a onClick={logout} href='#!' className={classes.sign_in_out}>Log-Out</a>
                <div className={classes.avatarDiv}><img src={defaultPNG} className={classes.avatar} alt='Avatar'></img></div>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
                <Link to='/login' className={classes.sign_in_out}>Sign-In</Link>
                <Link to='/register' className={classes.sign_up}>Sign-Up</Link>
                <NavbarMenu />
        </Fragment>
    )

    return (
        <nav className={classes.nav}>
            <div className={classes.nav_container}>
                <Link to='/' className={classes.Logo}><img src={Logo} alt='Logo' className={classes.Logo}></img></Link>
                <Link to='/software' className={classes.software}>Software</Link>
                <Link to='/explore'  className={classes.explore}>Explore</Link>
                <SearchBar />
                { isAuthenticated ? authLinks : guestLinks }
            </div>
        </nav>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(MainNavbar);