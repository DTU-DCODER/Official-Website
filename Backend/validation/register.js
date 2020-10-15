const Validator = require('validator');
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';


    if(!Validator.isLength(data.name, {min:2, max:30})){
        errors.name = 'Name Must be Between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is Required to Register";
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email Id is Required";
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = "Email entered is invalid";
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }
    if (!Validator.isLength(data.password, {min:6, max:20})) {
        errors.password = "Password Must be alteast 6 charactets";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Password and Confirm Password must match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}