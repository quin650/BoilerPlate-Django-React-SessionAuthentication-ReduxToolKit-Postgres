import React , { useState } from "react";
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from "../../actions/auth";
import classes from './login.module.css';
import CSRFToken from "../csrftoken";

const Login = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        username:'',
        password:'',
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(username, password);
    };


    if (isAuthenticated)
        return <Redirect to="/home" />;

    return (
        <div className={classes.main}>
            <div className={classes.container2}>
                <h1>Sign In</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <CSRFToken />
                    <div className={classes.input_section}>
                        <label>Username: </label>
                        <input
                            type='text'
                            placeholder='Username*'
                            name='username'
                            onChange={e => onChange(e)}
                            value={username}
                            required
                        />
                    </div>
                    <div className={classes.input_section}>
                        <label>Password: </label>
                        <input
                            type='password'
                            placeholder='Password*'
                            name='password'
                            onChange={e => onChange(e)}
                            value={password}
                            minLength='6'
                            required
                        />
                    </div>
                    <button type='submit'>Login</button>
                </form>
                <p>
                    Don't have an Account? <Link to='/register'>Register</Link>
                </p>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);