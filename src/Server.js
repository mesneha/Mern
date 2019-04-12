const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 1000;
const cors = require('cors');
const ServerPortRouter = require('./ServerPortRouter');
//================================================================================================================
//import this DB.js file into the server.js file and connect a node.js application to the mongodb database.

const config = require('./DB');

mongoose.connect(config.DB).then(
  () => { console.log('Database is connected') },
  err => {
    console.log('Cannot connect to the database' + err)
  });
//================================================================================================================
app.use(cors());//cors origin error
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', ServerPortRouter);

app.listen(PORT, function () {
  console.log('Server is running on Port: ', PORT);
});