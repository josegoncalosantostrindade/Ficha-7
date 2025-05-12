const express = require('express');
const server = express();
var cors = require('cors');

//Importar as rotas
const movieRoutes = require('./routes/movieRoutes');
const genreRoutes = require('./routes/genreRoutes');

//Configurações
server.set('port', process.env.PORT || 3000);
server.use(cors());
server.use(express.json())

//Rotas Filmes
server.use('/filmes', movieRoutes);

//Rotas Géneros
server.use('/genero', genreRoutes);

//Inicia o servidor
server.listen(server.get('port'), () => { 
    console.log("Servidor iniciado na porta: " + server.get('port'))
});