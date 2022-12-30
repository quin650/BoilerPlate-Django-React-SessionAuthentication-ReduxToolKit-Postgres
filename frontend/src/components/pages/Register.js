import React , { useState } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from "../../actions/auth";
import classes from './Register.module.css';

const Register = ({ register }) => {
    const [formData, setFormData] = useState({
        username:'',
        password:'',
        re_password:''
    });

    const [accountCreated, setAccountCreated] = useState(false);
    const { username, password, re_password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            register(username, password, re_password);
            setAccountCreated(true);
        }
    };

    if(accountCreated)
        return <Redirect to='/' />;

    return (
        <div className={classes.main}>
            <h1>Register for an Account</h1>
            <p>Create an account with our Session Auth application</p>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <label>
                        Username:
                    </label>
                    <input 
                        type='text'
                        placeholder='Username*'
                        name='username'
                        onChange={e => onChange(e)}
                        value={username}
                        required
                        />
                </div>
                <div>
                    <label>
                        Password:
                    </label>
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
                <div>
                    <label>
                        Confirm Password:
                    </label>
                    <input 
                        type='password'
                        placeholder='Confirm Password*'
                        name='re_password'
                        onChange={e => onChange(e)}
                        value={password}
                        minLength='6'
                        required
                        />
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default connect(null, { register })(Register);