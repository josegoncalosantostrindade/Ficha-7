var Sequelize = require('sequelize');
var sequelize = require('./database.js');

//Importa o modelo de género
var Genre = require('./genre.js');

var Movie = sequelize.define('Movie', {
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
            model: 'Genre',
            key: 'id'
        }
    },
},

{
    //Desativa createdAt e updatedAt
    timestamps: false,
});

//
Movie.belongsTo(Genre, { foreignKey: 'GeneroID' });
module.exports = Movie;