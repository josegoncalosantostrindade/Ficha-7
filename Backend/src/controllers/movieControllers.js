var Filmes = require('../models/movie.js');
var Generos = require('../models/genre.js');
var sequelize = require('../models/database.js');

const controllers = {}

//Sincroniza com a base de dados
sequelize.sync()
    .then(() => console.log('Sincronização com a base de dados realizada com sucesso! (géneros)'))
    .catch((err) => console.error('Erro ao sincronizar com a base de dados:', err));

//Listar todos os filmes
controllers.list = async (req, res) => {
    const data = await Filmes.findAll({
        include: [Generos]
    })
    .then(function(data) {
        console.log(`Listar os filmes: ${data}`);	        
        return data;
    })

    .catch(err => {
        console.log(`Erro ao listar os filmes: ${err}`);
        return err;
    });
    res.json({success: true, data: data});
}

//Criar um filme
controllers.create = async (req , res) => {
    //data
    const { description, title, picture, genero } = req.body;

    //criar
    const data = await Filmes.create({
        description: description,
        title: title,
        picture: picture,
        genero: genero
    })
    .then(function(data) {
        console.log(`Criar filme: ${data}`);	        
        return data;
    })
    .catch(err => {
        console.log(`Erro ao criar filme: ${err}`);
        return err;
    });

    res.status(200).json({
        success: true,
        message: 'Filme criado com sucesso!',
        data: data
    })
}

//Editar um filme
controllers.get = async (req, res) => {
    const { id } = req.params;
    const data = await Filmes.findAll({
        where: { id: id },
        include: [Generos]
    })
    .then(function(data) {
        console.log(`Editar filme: ${data}`);	        
        return data;
    })
    .catch(err => {
        console.log(`Erro ao editar filme: ${err}`);
        return err;
    });
    res.json({success: true, data: data});
}

module.exports = controllers;