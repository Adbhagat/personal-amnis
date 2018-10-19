const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Parsing json
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI; // Go to folder config/keys to find mongodb connection URI

mongoose
	.connect(db, {useNewUrlParser:true})
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

const port = process.env.PORT || 5000; // for use with heroku

app.listen(port, () => console.log(`Server started on port ${port}`));
