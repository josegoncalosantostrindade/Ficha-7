const express = require('express');
const server = express();

//Importar as rotas
const movieRoutes = require('./routes/movieRoutes');
const genreRoutes = require('./routes/genreRoutes');

//Configurações
server.set('port', process.env.PORT || 3000);

//Middleware
server.use(express.json());

//Rota Padrão
server.use('/', (req, res, next) => {
    if (req.path === '/') {
        console.log('Entrou na rota base');
        res.send("Rota Base");
    } else {
        next();
    }
});

//Rotas Filmes
server.use('/filmes', movieRoutes);

//Rotas Géneros
server.use('/genero', genreRoutes);


//Inicia o servidor
server.listen(server.get('port'), () => { 
    console.log("Servidor iniciado na porta: " + server.get('port'))
});