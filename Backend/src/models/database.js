const { Sequelize } = require('sequelize');

// Criar uma instância do Sequelize
const sequelize = new Sequelize(
    'ai2',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
        logging: false
    }
);

// Testar a conexão com a base de dados
sequelize.authenticate()
    .then(() => console.log(`Conexão com a base de dados estabelecida com sucesso na porta: ${sequelize.options.port}`))
    .catch((err) => console.error('Erro ao conectar à base de dados:', err));
   
module.exports = sequelize;