const Compra = require('../models/compra');
const { Op } = require('sequelize');

class PedidosRepository {
    async createPedidos(pedidoId) {
        console.log("- Repository Create Pedido")
        return await Compra.create(pedidoId);  
    }

    async findPedidoById(pedido) {
        console.log("- Repository select id Pedido",)
        return await Compra.findOne({ where: { id: pedido.id } });  
       
    }
    async alterarPedidos(pedido) {
        console.log("- Repository alterar Pedido", pedido.id)
        return await Compra.update({ item: pedido.item, quantidade: pedido.quantidade, pedidoData: pedido.pedidoData},{ where: { id: pedido.id } })        
        
    }

    async deletePedido(pedido) {       
        console.log("- Repository Delete Pedido", pedido.id)
        await Compra.destroy({ where: { id: pedido.id } });
        
        
    }

    async findAll() {
        console.log("- Repository select Pedido")
        // return await Compra.findAll({
        //     where: { user_id: userId }  
        // });
        return await Compra.findAll()
    }
}

module.exports = new PedidosRepository();
