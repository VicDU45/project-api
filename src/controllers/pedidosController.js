const express = require('express');
const router = express.Router();
const pedidoService = require('../services/pedidosServices');
const authenticateToken = require('../middleware/auth');

router.post('/add', authenticateToken, async (req, res) => {
    try {
        const { item, quantidade } = req.body;
        const token = req.headers['authorization'];
        const pedido = await pedidoService.criarPedido(token, { item, quantidade });
        res.json(pedido);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/tirar/:pedidoId', authenticateToken, async (req, res) => {
    try {
        const pedidoId = parseInt(req.params.pedidoId);
        const token = req.headers['authorization'];
        const resultado = await pedidoService.deletarPedido(token, pedidoId);
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