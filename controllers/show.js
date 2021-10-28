const express = require('express');
const Router = express.Router();
const Show = require('../models/show');


Router.get('/', (req,res) => {
    res.send('Hola Bitch')
});


//Index Route
Router.get('/shows', async (req, res) => {
    try {
        res.json(await Show.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});


module.exports = Router