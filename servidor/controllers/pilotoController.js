const Piloto = require("../models/Piloto");

exports.crearPiloto = async (req, res) => {
    try {
        const piloto = new Piloto(req.body);

        await piloto.save();
        res.send(piloto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPilotos = async (req, res) => {
    try {
        const pilotos = await Piloto.find();
        res.json(pilotos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarPiloto = async (req, res) => {
    try {
        const { _id, piloto, categoria, ubicacion, precio } = new Piloto(req.body);
        let pilotos = await Piloto.findById(req.params.id);

        if (!pilotos) {
            res.status(404).json({ msg: 'No existe el piloto' });
        }

        piloto._id = _id;
        pilotos.piloto = piloto;
        pilotos.categoria = categoria;
        pilotos.ubicacion = ubicacion;
        pilotos.precio = precio;

        console.log(pilotos);

        pilotos = await Piloto.findOneAndUpdate({ _id: req.params.id }, pilotos, { new: true });
        res.json(pilotos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.verPiloto = async (req, res) => {
    try {
        let pilotos = await Piloto.findById(req.params.id);

        if (!pilotos) {
            res.status(404).json({ msg: 'No existe el piloto' });
        }

        res.json(pilotos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarPiloto = async (req, res) => {
    try {
        let pilotos = await Piloto.findById(req.params.id);

        if (!pilotos) {
            res.status(404).json({ msg: 'No existe el piloto' });
        }

        pilotos = await Piloto.findOneAndRemove(req.params.id);

        res.json({ msg: 'El piloto: ' + pilotos.piloto + ' se ha eliminado' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
