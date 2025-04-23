const express = require('express');
const server = express();

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

//Inicia o servidor
server.listen(server.get('port'), () => { 
    console.log("Servidor iniciado na porta: " + server.get('port'))
});