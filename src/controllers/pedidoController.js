const express = require('express');
const router = express.Router();
const pedidoService = require('../services/pedidoService');
const authenticateToken = require('../middleware/auth');

router.post('/add', authenticateToken, async (req, res) => { 
    try {
        const { item, quantidade, pedidoData } = req.body;
        console.log("- Controller Create Pedido")
        const pedido = await pedidoService.criarPedido(item, quantidade, pedidoData);
        res.json(pedido);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.put('/alterar/:id', authenticateToken,async(req, res)=>{
    try {
        const { id } = req.query;
        const { item, quantidade, pedidoData} = req.body;
        
        if (!await pedidoService.findPedidoById({id})) {
            return res.status(404).json({ error: 'pedido não encontrado.' });
        }else{
            await pedidoService.alterarPedido(pedido = { id, item, quantidade, pedidoData}); 
            console.log("- Controller alterar Pedido")           
            return res.status(200).json({pedido ,message: 'pedido Atualizado com sucesso!' })
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro interno ao atualizar o pedido.' })
    }
})
router.delete('/tirar/:id',authenticateToken, async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const idExiste = await pedidoService.findPedidoById({id})
        if (!idExiste.id) {
            return res.status(404).json({ error: 'pedido não encontrado.' });
        }else{
            console.log("- Controller Delete Pedido")
            const pedido = await pedidoService.deletarPedido(idExiste);
            return res.status(200).json({pedido,message: 'pedido Deletado com sucesso!' })
        }
    } catch (error) {
        res.status(400).json({ error, message: 'Erro de deleção de pedido' });
    }
});

router.get('/All', authenticateToken, async (req, res) => {
    try {
        // const token = req.headers['authorization'];
        const pedidos = await pedidoService.getPedidos();
        console.log("- Controller select Pedidos")
        res.status(200).json({pedidos ,message : 'get efetuado com sucesso'})
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;