var Sequelize = require('sequelize');
var sequelize = require('./database.js');

var Generos = sequelize.define('Generos', {
    Description: {
        type: Sequelize.STRING,
        allowNull: false
    }
},

{
    //Desativa createdAt e updatedAt
    timestamps: false
});

module.exports = Generos;