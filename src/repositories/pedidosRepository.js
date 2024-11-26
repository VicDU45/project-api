const Compra = require('../models/compra');
const { Op } = require('sequelize');

class PedidosRepository {
    async createPedidos(pedidoData) {
        console.log("teste2")
        return await Compra.create(pedidoData);  
    }

    async findPedidoById(pedidoId) {
        return await Compra.findByPk(pedidoId);  
    }

    async deletePedido(pedidoId) {
        const pedido = await Compra.findByPk(pedidoId);
        if (pedido) {
            await pedido.destroy();  
        }
    }

    async findAll(userId) {
        return await Compra.findAll({
            where: { user_id: userId }  
        });
    }
}

module.exports = new PedidosRepository();
