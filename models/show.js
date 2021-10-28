const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const showSchema = new Schema({
    img: { type: String },
    date: { type: String},
    venue: { type: String},
    info: { type: String}
})


module.exports = mongoose.model("Show", showSchema);