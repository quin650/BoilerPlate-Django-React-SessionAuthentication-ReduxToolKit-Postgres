import Cookies from 'js-cookie'
import axios from 'axios';
import { load_user } from './profile';
import { userActions } from '../reducers/auth';

export const checkAuthenticated = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    try {
        console.log('1');
        const res = await axios.get(`http://127.0.0.1:8000/accounts/authenticated`, config);
        console.log('2');
        if (res.data.error || res.data.isAuthenticated === 'error') {
            console.log('AUTHENTICATED_FAIL');
        }
        else if (res.data.isAuthenticated === 'success') {
            console.log('AUTHENTICATED_SUCCESS');
        }
        else {
            console.log('AUTHENTICATED_FAIL')
        }
    } catch(err) {
        console.log('AUTHENTICATED_FAIL')
    }
};

export const register = (username, password, re_password) => {
    return async (dispatch) => {
        dispatch(userActions.resetRegistered());
        
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
    
        const body = JSON.stringify({ username, password, re_password });

        const registerData = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/accounts/register`, body, config);
            return res;
        };

        try {
            const res = await registerData();

            if (res.data.error) {
                console.log('REGISTER_FAIL-1');
                dispatch(userActions.resetRegistered());
            } else {
                console.log('REGISTER_SUCCESS');
                dispatch(userActions.registerSuccess());
            }
        } catch (err) {
            console.log('REGISTER_FAIL-2');
            dispatch(userActions.resetRegistered());
        };
    };
};

export const login = (username, password) => {
    return async (dispatch) => {

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
    
        const body = JSON.stringify({ username, password });

        const loginData = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/accounts/login`, body, config);
            return res;
        };

        try {
            const res = await loginData();

            if (res.data.success) {
                console.log('LOGIN_SUCCESS')
                dispatch(userActions.loginSuccess());
                console.log('dispatch(load_user());')
                dispatch(load_user());
            } else {
                console.log('LOGIN_FAIL')
                dispatch(userActions.loginFail());
            }
        } catch (err) {
            console.log('LOGIN_FAIL')
            dispatch(userActions.loginFail());
        };
    };
};

export const logout = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({
        'withCredentials': true
    });

    try {
        console.log('1');
        const res = await axios.post(`http://127.0.0.1:8000/accounts/logout`, body, config);
        console.log('2');
        if(res.data.success){
            console.log('LOGOUT_SUCCESS');
        } else {
            console.log('LOGOUT_FAIL');
        }
    } catch(err) {
        console.log('LOGOUT_FAIL');
    }
};

export const delete_account = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({
        'withCredentials': true
    });

    try {
        console.log('1');
        const res = await axios.delete(`http://127.0.0.1:8000/accounts/delete`, config, body);
        console.log('2');
        if (res.data.success) {
            console.log('DELETE_USER_SUCCESS')
        } else {
            console.log('DELETE_USER_FAIL')
        }
    } catch (err) {
        console.log('DELETE_USER_FAIL');
    }
};
