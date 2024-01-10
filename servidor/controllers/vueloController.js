const Vuelo = require("../models/Vuelo");

exports.crearVuelo = async (req, res) => {
    try {
        const vuelo = new Vuelo(req.body);

        await vuelo.save();
        res.send(vuelo);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerVuelos = async (req, res) => {
    try {
        const vuelos = await Vuelo.find();
        res.json(vuelos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarVuelo = async (req, res) => {
    try {
        const { _id, vuelo, categoria, ubicacion, precio } = new Vuelo(req.body);
        let vuelos = await Vuelo.findById(req.params.id);

        if (!vuelos) {
            res.status(404).json({ msg: 'No existe el vuelo' });
        }

        vuelo._id = _id;
        vuelos.vuelo = vuelo;
        vuelos.categoria = categoria;
        vuelos.ubicacion = ubicacion;
        vuelos.precio = precio;

        console.log(vuelos)

        vuelos = await Vuelo.findOneAndUpdate({ _id: req.params.id }, vuelos, { new: true });
        res.json(vuelos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.verVuelo = async (req, res) => {
    try {
        let vuelos = await Vuelo.findById(req.params.id);

        if (!vuelos) {
            res.status(404).json({ msg: 'No existe el vuelo' });
        }

        res.json(vuelos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarVuelo = async (req, res) => {
    try {
        let vuelos = await Vuelo.findById(req.params.id);

        if (!vuelos) {
            res.status(404).json({ msg: 'No existe el vuelo' });
        }

        vuelos = await Vuelo.findOneAndRemove(req.params.id);
        res.json({ msg: 'El vuelo: ' + vuelos.vuelo + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
