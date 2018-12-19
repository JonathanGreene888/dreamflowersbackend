require('dotenv').config();
console.log("I am running!");

// bring in mongoose object data model to use model schema
const mongoose = require('mongoose');
const express = require('express');

//const UserModel = require('./src/models/UserModel');




// set the port to run the server on.
const port = process.env.PORT || 5000;
const server = express();

// get mongoose to use global promise library. 
mongoose.Promise = global.Promise;

const databaseOptions = {
    useNewUrlParser: true, // mongoose's URL parser is also deprecated, so we pass this in as a option to use the new one
};
mongoose.set('useCreateIndex', true); // collection.ensureIndex is also deprecated so we use 'useCreateIndex' instead

mongoose.connect(process.env.MONGODB_URI, databaseOptions)
mongoose.connection.once('open', () => console.log('Database is connected!!!'))
.on('err', (err) => console.warn(err));


server.use(express.json());

//test routing
server.get('/', (req, res) => res.send("The server is up and running!"));


//initializing the server
server.listen(port, (req, res) => console.log('The server is listening on port: ' + port));


//module.exports = server;