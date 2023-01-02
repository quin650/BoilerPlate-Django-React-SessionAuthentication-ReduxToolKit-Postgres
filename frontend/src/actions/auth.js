import Cookies from 'js-cookie'
import axios from 'axios';
import {
    REGISTER_SUCCESS, 
    REGISTER_FAIL
} from './types';


// ACTION ACTION ACTION ACTION
export const register = (username, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    };

    const body = JSON.stringify({ username, password, re_password });

    // const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/register`, body, config);
    try {
        const res = await axios.post(`http://127.0.0.1:8000/accounts/register`, body, config);

        if (res.data.error) {
            dispatch({
                type: REGISTER_FAIL
            });
        } else {
            dispatch({
                type: REGISTER_SUCCESS
            });
        }
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL
        });
    }
};
