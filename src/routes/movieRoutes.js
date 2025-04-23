const express = require('express');
const router = express.Router();

//Importar os controllers
const Movie = require('../model/Movie');

//Rota teste
router.get('/test', (req, res) => {
    console.log('Entrou na rota de teste');
    res.send("Rota de teste");
});

//Rota para guardar um filme
router.get('/save', (req, res) => {
    console.log('Entrou na rota de saven (Filme)');
    res.json({status: 'Movie Saved'});
});

module.exports = router;