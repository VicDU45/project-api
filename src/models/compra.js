const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const user = require('./user'); 

const Compra = sequelize.define('Compra', {
    item: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pedidoData: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.UUID,  
        allowNull: true,
        references: {
            model: user,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'pedidos'
});

user.hasMany(Compra, { foreignKey: 'user_id' });
Compra.belongsTo(user, { foreignKey: 'user_id' });

module.exports = Compra;
