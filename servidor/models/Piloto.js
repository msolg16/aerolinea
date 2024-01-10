const mongoose = require('mongoose');

const PilotoSchema = mongoose.Schema({
    
    piloto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    horaVuelo: {
        type: DataTypes.TIME,
        defaultValue: Sequelize.literal('CURRENT_TIME')
    }
});

module.exports = mongoose.model('Piloto', PilotoSchema)