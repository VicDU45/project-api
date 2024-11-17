const jwt = require('jsonwebtoken');
const pedidosRepository = require('../repositories/pedidosRepository');
const SECRET_KEY = 'vicThay1';

class PedidoService {
    async criarPedido(token, pedidoData) {
        try {
            const decoded = jwt.verify(token, SECRET_KEY);
            const userId = decoded.id;

            const pedido = await pedidosRepository.createPedidos({ ...pedidoData, user_id: userId });
            return { message: "Pedido criado com sucesso", pedido };
        } catch (error) {
            throw new Error("Token inválido ou expirado");
        }
    }

    async deletarPedido(token, pedidoId) {
        try {
            const decoded = jwt.verify(token, SECRET_KEY);
            const userId = decoded.id;

            const pedido = await pedidosRepository.findPedidoById(pedidoId);
            if (!pedido) throw new Error("Pedido não encontrado");
            if (pedido.user_id !== userId) throw new Error("Acesso não autorizado para deletar este pedido");

            await pedidosRepository.deletePedido(pedidoId);
            return { message: "Pedido deletado com sucesso" };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getPedidos(token) {
        try {
            const decoded = jwt.verify(token, SECRET_KEY);
            const userId = decoded.id;

            const pedidos = await pedidosRepository.findAll(userId);
            return pedidos;
        } catch (error) {
            throw new Error("Erro ao obter pedidos");
        }
    }
}

module.exports = new PedidoService();
