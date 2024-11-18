const express = require('express');
const router = express.Router();
const pedidoService = require('../services/pedidosServices');
const authenticateToken = require('../middleware/auth');

router.post('/add',  async (req, res) => {
    try {
        const { item, quantidade, pedidoData } = req.body;
        const pedido = await pedidoService.criarPedido({ item, quantidade, pedidoData });
        res.json(pedido);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/tirar/:pedidoId', async (req, res) => {
    try {
        const pedidoId = parseInt(req.params.pedidoId);
        const resultado = await pedidoService.deletarPedido(pedidoId);
        res.json(resultado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/All', authenticateToken, async (req, res) => {
    try {
        const token = req.headers['authorization'];
        const pedidos = await pedidoService.getPedidos(token);
        res.json(pedidos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;