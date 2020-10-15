const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport')

// load input validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

// Load USer model
const User = require('../models/User');

// @route   GET api/user/test
// @desc    Testing
// @access  Public
router.get('/test', (req, res)=>{
    res.json({msg:"Working"});
});

// @route   Get api/user/register
// @desc    Register user
// @access  Public
router.post('/register',(req, res)=>{
    const {errors, isValid} = validateRegisterInput(req.body);

    // Check Validation
    if(!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email})
        .then(user => {
            if(user){
                errors.email = "Email exist";
                return res.status(400).json(errors);
            } else{
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt)=>{
                    bcrypt.hash(newUser.password, salt, (err, hash)=>{
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
});

// @route   Get api/user/login
// @desc    Login user
// @access  Public
router.post('/login', (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const {errors, isValid} = validateLoginInput(req.body);

    // Check Validation
    if(!isValid){
        return res.status(400).json(errors);
    }

    // Find the User
    User.findOne({email: email})
        .then(user => {
            if(!user){
                errors.email = "Username or password incorrect";
                return res.status(400).json(errors);
            } else{
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (isMatch) {
                            // User Matched
                            const payload = { id:user.id, name: user.name }
                            // Sign the token
                            jwt.sign(payload,
                                keys.secretOrKey,
                                { expiresIn:3600 },
                                (err, token)=>{
                                    res.json({
                                        success: true,
                                        token: 'Bearer ' + token
                                    });
                            });
                        } else {
                            errors.password = "Username or password incorrect";
                            return res.status(400).json(errors);
                        }
                    });
            }
        });
});

// @route   Get api/user/current
// @desc    Return Current User
// @access  Private
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res)=>{
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

module.exports = router;