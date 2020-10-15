const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');

// Routes
const user = require('./routes/user');
const profile = require('./routes/profile');

// DB config
const db = require('./config/keys').mongoURI;

// body parser files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// connect to the database
mongoose.connect(db,{useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true});
const connection=mongoose.connection;

connection. once('open',function(){
    console.log("Mongoose database connected");
});

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

app.get('/', (req, res) => {
    res.send('Hello');
});

// Use Routes
app.use('/api/user', user);
// app.use('/api/profile', profile);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})