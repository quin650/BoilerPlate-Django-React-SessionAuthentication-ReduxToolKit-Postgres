import axios from 'axios';
import {
    REGISTER_SUCCESS, 
    REGISTER_FAIL
} from './types';


// ACTION ACTION ACTION ACTION
export const register = (username, password, re_password) => async dispatch => {
    const config ={
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    const body = JSON.stringify({ username, password, re_password });

    // The action submits a post request to the API URL accounts/register aka SignupView
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL/accounts/register}`, body, config);

        if (res.data.error){
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
}
