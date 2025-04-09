const express = require('express');
const app = express();

//Configurações
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(express.json());

//Rota de teste
app.use('/teste',(req,res)=>{
    res.send("Rota TESTE.");
});

//Rota padrão
app.use('/',(req,res)=>{ 
    res.send("Hello World");
});

//Inicia o servidor
app.listen(app.get('port'), () => { 
    console.log("Start server on port "+app.get('port'))
})