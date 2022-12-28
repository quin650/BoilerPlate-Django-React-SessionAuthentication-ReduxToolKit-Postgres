import React, { Fragment, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainNavbar from './layout/header/mainNavbar';
import Footer from './layout/footer/footer';
import Home from './pages/home';
import Software from './software/Software';
import Explore from './pages/explore/Explore';
import Register from './pages/register';
import Login from './pages/login';

function App() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <Fragment > 
            <header>
                <MainNavbar />
            </header>
            <main>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/home' />
                    </Route>
                    <Route path='/home' exact>
                        <Home />
                    </Route>
                    <Route path="/software" exact>
                        <Software />
                    </Route>
                    <Route path="/explore" exact>
                        <Explore />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/register" exact>
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

export default App;