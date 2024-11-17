const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve(__dirname, 'dom.sqlite'),
    logging: console.log 
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados SQLite bem-sucedida.');

    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    });

module.exports = sequelize;
