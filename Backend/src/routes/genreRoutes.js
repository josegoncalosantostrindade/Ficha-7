const express = require('express');
const router = express.Router();

//Importar os controllers
const generosControllers = require('../controllers/genreControllers');

//Rota para guardar um género
router.get('/', (req, res) => {
    console.log('Entrou na rota base - Género');
    res.json({status: 'API de Géneros'});
});

module.exports = router;