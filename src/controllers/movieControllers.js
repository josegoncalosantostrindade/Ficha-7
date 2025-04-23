var Movies = require('../models/movie.js');
var Genre = require('../models/genre.js');
var sequelize = require('../models/database.js');

const controllers = {}

//Sincroniza com a base de dados
sequelize.sync()
    .then(() => console.log('Sincronização com a base de dados realizada com sucesso!'))
    .catch((err) => console.error('Erro ao sincronizar com a base de dados:', err));

//Listar todos os filmes
controllers.list = async (req, res) => {
    const data = await Movies.findAll({
        include: [Genre]
    })
    .the(function(data) {
        console.log(`Listar os filmes: ${data}`);	        
        return data;
    })

    .catch(err => {
        console.log(`Erro ao listar os filmes: ${err}`);
        return err;
    });
    res.json({success: true, data: data});
}

module.exports = controllers;