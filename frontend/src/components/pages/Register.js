import React , { useState } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from "../../actions/auth";
import classes from './register.module.css';

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
            // At the time that the form is submitted, the register auth action is called, which
            // posts the fields 
            register(username, password, re_password);
            setAccountCreated(true);
        }
    };

    if(accountCreated)
        return <Redirect to='/' />;

    return (
        <div className={classes.main}>
            <div className={classes.container2}>
                <h1>Register for an Account</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <div className={classes.input_section}>
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
                    <div className={classes.input_section}>
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
                    <div className={classes.input_section}>
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
        </div>
    );
};

export default connect(null, { register })(Register);