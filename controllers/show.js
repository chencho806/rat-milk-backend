const express = require('express');
const Router = express.Router();
const Show = require('../models/show');


Router.get('/', (req,res) => {
    res.send('Hola Pendejo');
});


//Index Route
Router.get('/', async (req, res) => {
    try {
        res.json(await Show.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

//Create Show
Router.post('/', async (req, res) => {
    try {
        res.json(await Show.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

//Delete Route
Router.delete('/:id', async (req, res) => {
    try {
        res.json(await Show.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400),json(error);
    }
});


module.exports = Router