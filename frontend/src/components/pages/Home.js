import React, { Fragment }  from "react";
import LandingPage0 from "../layout/body/landingPage0";
import LandingPage1 from "../layout/body/landingPage1";
import Dashboard from "./dashboard";
import { connect } from 'react-redux';

const Home = ({isAuthenticated}) => {

    const homepage = (<Fragment><LandingPage0 /><LandingPage1 /></Fragment>);
    const dashboard = (<Fragment><Dashboard /></Fragment>);
    
    return(<Fragment>{ !isAuthenticated ? homepage : dashboard }</Fragment>);
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Home);