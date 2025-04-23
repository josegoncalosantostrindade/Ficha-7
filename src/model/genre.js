var Sequelize = require('sequelize');
var sequelize = require('./database.js');

var Genre = sequelize.define('Genre', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    Description: {
        type: Sequelize.STRING,
        allowNull: false
    }
},

{
    //Desativa createdAt e updatedAt
    timestamps: false
});

module.exports = Genre;