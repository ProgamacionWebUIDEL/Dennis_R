
const express = require('express');
    router = express.Router();
    cancionController = require('../controller/controller.cancion'); // Asegúrate de que la ruta es correcta y la importación es válida

// Usar la función del controlador
router.use('/c', cancionController);

module.exports = router;