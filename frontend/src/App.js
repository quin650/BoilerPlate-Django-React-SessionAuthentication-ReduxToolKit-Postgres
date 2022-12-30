import React, { Fragment, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainNavbar from './components/layout/header/mainNavbar';
import Footer from './components/layout/footer/footer';
import Home from './components/pages/home';
import Software from './components/software/Software';
import Explore from './components/pages/explore/Explore';
import Register from './components/pages/register';
import Login from './components/pages/login';
import { Provider } from 'react-redux';
import store from './store';

function App() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <Provider store={store}>
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
        </Provider>
    );
};

export default App;