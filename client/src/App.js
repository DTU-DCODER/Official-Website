import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from "./utils/setAuthToken";
import {logoutUser, setCurrentUser} from "./actions/authActions";


import './App.css';


import HomeRoutes from './Router/HomeRoutes';
import store from "./store";


// check for token
if (localStorage.jwtToken) {
    // set Auth Token header auth
    setAuthToken(localStorage.jwtToken);
    // decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set current user action
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const curretTime = Date.now() / 1000;
    if(decoded.exp < curretTime){
        // Logout user
        store.dispatch(logoutUser());
        // Todo: Clear current profile

        // Redirect to login
        window.location.href = '/login'
    }
}

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <HomeRoutes/>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
