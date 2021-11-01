const express = require('express');
const Router = express.Router();
const Show = require('../models/show');




//Index Route
Router.get('/shows', async (req, res) => {
    try {
        res.json(await Show.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

//Create Route
Router.post('/shows', async (req, res) => {
    try {
        res.json(await Show.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

//Delete Route
Router.delete('/shows/:id', async (req, res) => {
    try {
        res.json(await Show.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400),json(error);
    }
});

//Update Route
Router.put('/shows/:id', async (req, res) => {
    try {
        res.json(await Show.findByIdAndUpdate(req.params.id, { new: true }));
    } catch (error) {
        res.status(400).json(error);
    }
});


module.exports = Router