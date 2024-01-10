//Rutas tripulacion
const express = require('express');
const router = express.Router();
const tripulacionController = require('../controllers/tripulacionController');

//api/tripulacion
router.post('/', tripulacionController.crearTripulacion);
router.get('/', tripulacionController.obtenerTripulacion);
router.put('/:id', tripulacionController.actualizarTripulacion);
router.get('/:id', tripulacionController.verTripulacion);
router.delete('/:id', tripulacionController.eliminarTripulacion);

module.exports = router;