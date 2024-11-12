const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'squile',
    storage: 'dom.sqlite'
});

sequelize.authenticate()
    .then(() =>{
        console.log('conexão com sucesso.');
        return sequelize.sync();
    })
    .catch(err =>{
        console.error('desculpe, não foi possivel se conectar', err);
    })

module.exports = sequelize;