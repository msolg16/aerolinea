const mongoose = require('mongoose');
const DistritoSchema = require("./Avion");

const AvionSchema = mongoose.Schema({
    
    codigo: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Avion', AvionSchema)