import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../actions/authActions';
import {Button} from 'react-bootstrap';

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
            <div>
                <h1>Hello</h1>
                <Link to="/register">Register</Link><br/>
                <Link to="/login">Login</Link> <br />
                <Button onClick={this.onSubmit}>Logout</Button>
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
