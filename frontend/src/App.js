import React, { Fragment, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainNavbar from './components/layout/header/mainNavbar';
import Footer from './components/layout/footer/footer';
import Home from './components/pages/home';
import Software from './components/software/Software';
import Explore from './components/pages/explore/Explore';
import Register from './components/pages/register';
import Login from './components/pages/login';
import { connect } from 'react-redux';
import { checkAuthenticated } from './actions/auth';
import { load_user } from './actions/profile';

function App({ checkAuthenticated, load_user  }) {
    // useEffect(() => {
    //     window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    // }, []);

    useEffect(() => {
        checkAuthenticated();
        load_user();
        console.log('inside useEffect')
    }, []);
    console.log('outside useEffect');

    return (
        <Fragment>
            <header>
                <MainNavbar />
            </header>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/home" >
                        <Home />
                    </Route>
                    <Route path="/software" >
                        <Software />
                    </Route>
                    <Route path="/explore" >
                        <Explore />
                    </Route>
                    <Route path="/login" >
                        <Login />
                    </Route>
                    <Route path="/register" >
                        <Register />
                    </Route>
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    );
};

export default connect(null, { checkAuthenticated, load_user })(App);