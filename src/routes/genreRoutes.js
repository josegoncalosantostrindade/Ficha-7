const express = require('express');
const router = express.Router();

//Importar os controllers
const Genre = require('../model/Genre');

//Rota para guardar um género
router.get('/save', (req, res) => {
    console.log('Entrou na rota de save (Género)');
    res.json({status: 'Movie Saved'});
});

module.exports = router;