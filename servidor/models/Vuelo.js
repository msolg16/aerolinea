const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    
    nVuelo: {
        type: String,
        require: true
    },
    
    fechaOrigen: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Producto', ProductoSchema)