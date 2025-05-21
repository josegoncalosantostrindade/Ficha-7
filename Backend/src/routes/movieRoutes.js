const express = require('express');
const router = express.Router();

//Importar os controllers
const filmesControllers = require('../controllers/movieControllers');

//Rota para API dos filmes
router.get('/', (req, res) => {
    console.log('Entrou na rota base - Filme');
    res.json({status: 'API de Filmes'});
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

//Rota para encontrar um filme
router.get('/get/:id', (req, res) => {
    console.log('Entrou na rota encontrar - Filme');
    filmesControllers.get(req, res);
});

//Rota para editar um filme
router.put('/editar/:id', (req, res) => {
    console.log('Entrou na rota editar - Filme');
    filmesControllers.update(req, res);
});

//Rota para eliminar um filme
router.delete('/eliminar/:id', (req, res) => {
    console.log('Entrou na rota eliminar - Filme');
    filmesControllers.delete(req, res);
});

module.exports = router;