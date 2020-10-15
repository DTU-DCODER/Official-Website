import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from '../components/home';
import Login from '../components/auth/Login';
import Register from "../components/auth/Register";

const Routes = (props) => {
    return(
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/register' exact component={Register}/>
        </Switch>
    )
}

export default Routes;
