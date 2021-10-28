const express = require('express');
const Router = express.Router();
const Show = require('../models/show');


Router.get('/', (req,res) => {
    res.send('Hola Bitch')
});




module.exports = Router