const jwt = require('jsonwebtoken');
const pedidosRepository = require('../repositories/pedidosRepository');
const { Error } = require('sequelize');

const SECREt_KEY = 'vicThay1';

class PedidoService{
    async criarPedido(token, pedidoData){
        try{
            const decoded = jwt.verify(token, SECRET_KEY);
            const userId = decoded.id;

            const pedido = await pedidoRepository.createPedido({ ...pedidoData, userId });
            return { message: "Pedido criado com sucesso", pedido };
        }catch(error){
            throw new Error("Token inválido ou expirado")
        }
    }


    async deletarPedido(token, pedidoId) {
        try {
            const decoded = jwt.verify(token, SECRET_KEY);
            const userId = decoded.id;

            const pedido = await pedidoRepository.findPedidoById(pedidoId);
            if (!pedido) throw new Error("Pedido não encontrado");
            if (pedido.userId !== userId) throw new Error("Acesso não autorizado para deletar este pedido");

            await pedidoRepository.deletePedido(pedidoId);
            return { message: "Pedido deletado com sucesso" };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getPedidos(){
        try {
            const decoded = jwt.verify(token, SECRET_KEY);
            const userId = decoded.id;

            const pedidos = await pedidoRepository.findAll(userId);
            return pedidos;
        } catch (error) {
            throw new Error("Token inválido ou expirado");
        }
    }
}

module.exports = new PedidoService();