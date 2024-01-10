const Tripulacion = require("../models/Tripulacion");

exports.crearTripulacion = async (req, res) => {
    try {
        const tripulacion = new Tripulacion(req.body);

        await tripulacion.save();
        res.send(tripulacion);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTripulaciones = async (req, res) => {
    try {
        const tripulaciones = await Tripulacion.find();
        res.json(tripulaciones);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarTripulacion = async (req, res) => {
    try {
        const {_id, tripulacion, categoria, ubicacion, precio } = new Tripulacion(req.body);
        let tripulaciones = await Tripulacion.findById(req.params.id);

        if(!tripulaciones){
            res.status(404).json({ msg: 'No existe la tripulación'});
        }

        tripulacion._id = _id;
        tripulaciones.tripulacion = tripulacion;
        tripulaciones.categoria = categoria;
        tripulaciones.ubicacion = ubicacion;
        tripulaciones.precio = precio;

        console.log(tripulaciones)

        tripulaciones = await Tripulacion.findOneAndUpdate({ _id: req.params.id }, tripulaciones, { new: true } );
        res.json(tripulaciones);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.verTripulacion = async (req, res) => {
    try {
        let tripulaciones = await Tripulacion.findById(req.params.id);

        if(!tripulaciones){
            res.status(404).json({ msg: 'No existe la tripulación'});
        }

        res.json(tripulaciones);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarTripulacion = async (req, res) => {
    try {
        let tripulaciones = await Tripulacion.findById(req.params.id);

        if(!tripulaciones){
            res.status(404).json({ msg: 'No existe la tripulación'});
        }

        tripulaciones = await Tripulacion.findOneAndRemove(req.params.id);
        res.json({ msg: 'La tripulación: ' + tripulaciones.tripulacion + ' se ha eliminado' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
