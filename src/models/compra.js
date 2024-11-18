const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('user'); 

const Compra = sequelize.define('Compra', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
    },
    user_id: {
        type: DataTypes.UUID,  
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'pedidos'
});

User.hasMany(Compra, { foreignKey: 'user_id' });
Compra.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Compra;
