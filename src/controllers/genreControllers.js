var Genre = require('../models/genre.js');
var sequelize = require('../models/database.js');

const controllers = {}

//Sincroniza com a base de dados
sequelize.sync()
    .then(() => console.log('Sincronização com a base de dados realizada com sucesso!'))
    .catch((err) => console.error('Erro ao sincronizar com a base de dados:', err));

//Listar todos os géneros
controllers.list = async (req, res) => {
    const data = await Genre.findAll()
    .then(function(data) {
        console.log(`Listar os géneros: ${data}`);	        
        return data;
    })

    .catch(err => {
        console.log(`Erro ao listar os géneros: ${err}`);
        return err;
    });
    res.json({success: true, data: data});
}

module.exports = controllers;