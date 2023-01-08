import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';

const initialState = {
    isAuthenticated: null
};


export default combineReducers({
    auth,
    profile,
});