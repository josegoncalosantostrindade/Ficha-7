const express = require('express');
const router = express.Router();

//Importar os controllers
const filmesControllers = require('../controllers/movieControllers');

//Rota para guardar um filme
router.get('/', (req, res) => {
    console.log('Entrou na rota base - Filme');
    res.json({status: 'Filme Guardado'});
});

//Rota para listar todos os filmes
router.get('/listar', (req, res) => {
    console.log('Entrou na rota listar - Filme');
    filmesControllers.list(req, res);
});

//Rota para criar um filme
router.post('/criar', (req, res) => {
    console.log('Entrou na rota criar - Filme');
    filmesControllers.create(req, res);
});

router.get('/get/:id', (req, res) => {
    console.log('Entrou na rota get - Filme');
    filmesControllers.get(req, res);
});

module.exports = router;