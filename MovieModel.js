const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title : {
        // type: String,
        // required: true
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Movie', movieSchema);