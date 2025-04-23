const express = require('express');
const router = express.Router();

//Importar os controllers
const genreControllers = require('../controllers/genreControllers');

//Rota para guardar um género
router.get('/save', (req, res) => {
    console.log('Entrou na rota de save (Género)');
    res.json({status: 'Género Guardado'});
});

module.exports = router;