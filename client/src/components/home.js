import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../actions/authActions';
import {Button} from 'react-bootstrap';

import "./home.css";
import "./w3.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.logoutUser();

        // console.log(newUser);
    }
    render() {
        return (
            <div className='home'>
                <h1 className='text-center w3-center w3-animate-left wel'>Welcome to D_CODERS</h1> 
                <br />
                <div className='buttons'>
                    <div className='waste'>
                        <p>H</p>
                    </div>
                    <div className='b1 w3-animate-zoom'>
                        <Link to="/register" className='register'>Register</Link><br/>
                    </div>
                    <div className='b2 w3-animate-zoom'>
                        <Link to="/login" className='login'>Login</Link> <br />
                    </div>
                    
                    <Button onClick={this.onSubmit} className=''>Logout</Button>
                    
                    </div>
            </div>
        );
    }
}

Home.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {logoutUser})(withRouter(Home));
