const express = require('express');
const router = express.Router();

//Importar os controllers
const generosControllers = require('../controllers/genreControllers');

//Rota para guardar um género
router.get('/', (req, res) => {
    console.log('Entrou na rota base - Género');
    res.json({status: 'API de Géneros'});
});

//Rota para listar todos os géneros
router.get('/listar', (req, res) => {
    console.log('Entrou na rota listar - Género');
    generosControllers.list(req, res);
});

module.exports = router;