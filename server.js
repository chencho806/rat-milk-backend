require('dotenv').config();
const { DATABASE_URL, PORT = 3001 } = process.env;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const showController = require('./controllers/show')

mongoose.connect(DATABASE_URL);

mongoose.connection 
    .on('open', () => console.log("You are connected"))
    .on('close', () => console.log("You are disconnected"))
    .on('error', () => console.log(error));



    app.use(cors()); 
    app.use(morgan("dev")); 
    app.use(express.json()); 
    
    app.use('/', showController);
    app.use('/shows', showController);




app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));