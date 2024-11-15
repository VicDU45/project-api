const express = require('express');
const router = express.Router();
const pedidoService = require('../services/pedidosServices');
const authenticateToken = require('../middleware/auth');

router.post('/add', async (req, res) => {
    try {
        const token = req.headers['authorization'];
        const { id, item, quantidade } = req.body;
        const pedido = await pedidoService.criarPedido(token, { id, item, quantidade });
        res.json(pedido);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

router.delete('/tirar/:pedidoId', async (req, res) => {
    try {
        const token = req.headers['authorization'];
        const pedidoId = parseInt(req.params.pedidoId);
        const resultado = await pedidoService.deletarPedido(token, pedidoId);
        res.json(resultado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/All', authenticateToken, async (req, res) =>{
    try{
        const Pedidos = await userService.getPedidos();
        res.json(Pedidos);
    }catch (error){
        res.status(400).json({error: error.message});
    }
});

module.exports = router;