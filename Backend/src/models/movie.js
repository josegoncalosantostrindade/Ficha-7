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

    Description: {
        type: Sequelize.STRING,
        allowNull: false
    },

    Title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    Picture: {
        type: Sequelize.STRING
    },

    GeneroID: {
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
Filmes.belongsTo(Generos, { foreignKey: 'GeneroID' });
module.exports = Filmes;