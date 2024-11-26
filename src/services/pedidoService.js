const PedidosRepository = require('../repositories/pedidosRepository');
const { Op } = require('sequelize');

class PedidosServices {
    async criarPedido(item, quantidade, pedidoData) {
        console.log("- Services Create Pedido")
        return await PedidosRepository.createPedidos({item, quantidade, pedidoData});  
    }

    async findPedidoById(pedidoId) {
        console.log("- Services Select id Pedido")
        return await PedidosRepository.findPedidoById(pedidoId);  
    }
    async alterarPedido(pedidoID) {
        console.log("- Services alterar Pedido")
        return await PedidosRepository.alterarPedidos(pedidoID);  
    }

    async deletarPedido(pedidoID) {
        console.log("- Services Delete Pedido")
        return await PedidosRepository.deletePedido(pedidoID);       
    }

    async getPedidos() {
        console.log("- Services Select Pedidos")
        // return await Compra.findAll({
        //     where: { user_id: userId }  
        // });
        return await PedidosRepository.findAll()
    }
}

module.exports = new PedidosServices();
