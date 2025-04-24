const express = require('express');
const router = express.Router();

//Importar os controllers
const filmesControllers = require('../controllers/movieControllers');

//Rota para guardar um filme
router.get('/save', (req, res) => {
    console.log('Entrou na rota de saven (Filme)');
    res.json({status: 'Filme Guardado'});
});

//Rota para listar todos os filmes
router.get('/list', (req, res) => {
    console.log('Entrou na rota de list (Filme)');
    filmesControllers.list(req, res);
});

module.exports = router;