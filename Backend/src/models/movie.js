var Sequelize = require('sequelize');
var sequelize = require('./database.js');

//Importa o modelo de género
var Generos = require('./genre.js');

var Filmes = sequelize.define('Filmes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    picture: {
        type: Sequelize.STRING
    },

    generoId: {
        type: Sequelize.INTEGER,

        //Relação com a tabela de géneros (genre.js)
        references: {
            model: Generos,
            key: 'id'
        }
    },
},

{
    //Desativa createdAt e updatedAt
    timestamps: false,
});

//
Filmes.belongsTo(Generos, { foreignKey: 'generoId' });
module.exports = Filmes;