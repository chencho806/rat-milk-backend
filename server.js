require('dotenv').config();
const { DATABASE_URL, PORT = 3001 } = process.env;
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(DATABASE_URL);

mongoose.connection 
    .on('open', () => console.log("You are connected"))
    .on('close', () => console.log("You are disconnected"))
    .on('error', () => console.log(error));



app.get('/', (req,res) => {
    res.send('Hola Pendejo')
});


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));