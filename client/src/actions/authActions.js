import axios from 'axios';
import {GET_ERRORS, SET_CURRENT_USER} from "./types";
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/user/register', userData)
        .then(res => history.push('/login'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
};

// Login - Get user token
export const loginUser = (userData) => dispatch => {
    axios.post('api/user/login', userData)
        .then(res => {
            // Save to localStorage
            const {token} = res.data;
            // Set token to localStorage
            localStorage.setItem('jwtToken', token);
            // Set token auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};

// Log User Out
export const logoutUser = () => dispatch => {
    // Remove token from local Storage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future request
    setAuthToken(false);
    // Set current User to {} whil will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};
