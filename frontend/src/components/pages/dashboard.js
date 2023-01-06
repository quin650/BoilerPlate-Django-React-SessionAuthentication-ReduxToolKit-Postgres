import React , { useState, useEffect } from "react";
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { update_profile } from "../../actions/profile";
import classes from './dashboard.module.css';
import { delete_account } from "../../actions/auth";

const Dashboard = ({
    delete_account,
    update_profile,
    first_name_global,
    last_name_global,
    phone_global,
    city_global
}) => {

    const [formData, setFormData] = useState({
        first_name:'',
        last_name:'',
        phone:'',
        city:''
        
    });

    const { first_name, last_name, phone, city } = formData;

    useEffect(() =>{
        setFormData({
            first_name: first_name_global,
            last_name: last_name_global,
            phone: phone_global,
            city: city_global
        })
    },[first_name_global])

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        update_profile(first_name, last_name, phone, city);
    };

    return (
        <div className={classes.main}>
            <div className={classes.container2}>
                <h1>Welcome to your User Dashboard</h1>
                <p>Update your user profile below: </p>
                <form onSubmit={e => onSubmit(e)}>
                    <div className={classes.input_section}>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            type='text'
                            placeholder={`${first_name_global}`}
                            name='first_name'
                            onChange={e => onChange(e)}
                            value={first_name}
                            required
                        />
                    </div>
                    <div className={classes.input_section}>
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            type='text'
                            placeholder={`${last_name_global}`}
                            name='last_name'
                            onChange={e => onChange(e)}
                            value={last_name}
                        />
                    </div>
                    <div className={classes.input_section}>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type='text'
                            placeholder={`${phone_global}`}
                            name='phone'
                            onChange={e => onChange(e)}
                            value={phone}
                        />
                    </div>
                    <div className={classes.input_section}>
                        <label htmlFor="city">City</label>
                        <input
                            type='city'
                            placeholder={`${city_global}`}
                            name='city'
                            onChange={e => onChange(e)}
                            value={city}
                        />
                    </div>
                    <button type='submit'>Update</button>
                </form>
                <p>
                    Click the button below to delete your account:
                </p>
                <button 
                href='#!'
                onClick={delete_account}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    first_name_global: state.profile.first_name,
    last_name_global: state.profile.last_name,
    phone_global: state.profile.phone,
    city_global: state.profile.city,
});

export default connect(mapStateToProps, { 
    delete_account,
    update_profile
})(Dashboard);