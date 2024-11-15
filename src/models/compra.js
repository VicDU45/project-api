const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Compra = sequelize.define('Pedidos', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    item: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Compra;