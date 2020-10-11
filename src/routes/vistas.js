const router = require('express').Router();

const DocenteController = require('../controllers/DocenteController');

router.get('/listarDocentes', DocenteController.listaDocente);

module.exports = router;