const mongoose = require('mongoose');

const TripulacionSchema = mongoose.Schema({ 
    codigo: {
        type: String,
        require: true
    },
    nombre: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Tripulacion', TripulacionSchema)