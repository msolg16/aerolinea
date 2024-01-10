const Avion = require("../models/Avion");

exports.crearAvion = async (req, res) => {
    try {
        const avion = new Avion(req.body);

        await avion.save();
        res.send(avion);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerAviones = async (req, res) => {
    try {
        const aviones = await Avion.find();
        res.json(aviones);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarAvion = async (req, res) => {
    try {
        const { _id, avion, categoria, ubicacion, precio } = new Avion(req.body);
        let aviones = await Avion.findById(req.params.id);

        if (!aviones) {
            res.status(404).json({ msg: 'No existe el avion' });
        }

        avion._id = _id;
        aviones.avion = avion;
        aviones.categoria = categoria;
        aviones.ubicacion = ubicacion;
        aviones.precio = precio;

        console.log(aviones);

        aviones = await Avion.findOneAndUpdate({ _id: req.params.id }, aviones, { new: true });
        res.json(aviones);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.verAvion = async (req, res) => {
    try {
        let aviones = await Avion.findById(req.params.id);

        if (!aviones) {
            res.status(404).json({ msg: 'No existe el avion' });
        }

        res.json(aviones);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarAvion = async (req, res) => {
    try {
        let aviones = await Avion.findById(req.params.id);

        if (!aviones) {
            res.status(404).json({ msg: 'No existe el avion' });
        }

        aviones = await Avion.findOneAndRemove(req.params.id);

        res.json({ msg: 'El avion: ' + aviones.avion + ' se ha eliminado' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
