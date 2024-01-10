//Rutas vuelo
const express = require('express');
const router = express.Router();
const vueloController = require('../controllers/vueloController');

//api/vuelos
router.post('/', vueloController.crearVuelo);
router.get('/', vueloController.obtenerVueloes);
router.put('/:id', vueloController.actualizarVuelo);
router.get('/:id', vueloController.verVuelo);
router.delete('/:id', vueloController.eliminarVuelo);

module.exports = router;