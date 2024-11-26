const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const user = require('./user'); 

class Compra extends Model {}

Compra.init({
    id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    item: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pedidoData: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    }
    
}, {
    sequelize,
    modelName: 'Compra',
});

// user.hasMany(Compra, { foreignKey: 'user_id' });
// Compra.belongsTo(user, { foreignKey: 'user_id' });

module.exports = Compra;
