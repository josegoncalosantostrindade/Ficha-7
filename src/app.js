const express = require('express');
const app = express();

//Configurações
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(express.json());

//Rota de teste
app.use('/teste',(req,res)=>{
    res.send("Rota Teste");
});

//Rota padrão
app.use('/',(req,res)=>{ 
    res.send("Rota Padrão");
});

//Inicia o servidor
app.listen(app.get('port'), () => { 
    console.log("Servidor iniciado na porta: " + app.get('port'))
});