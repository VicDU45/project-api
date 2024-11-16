const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const authenticateToken = require('../middleware/auth');

router.post('/register', async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await userService.register(username, password);
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
});

router.post('/login', async (req, res) =>{
    try {
        const {username, password} = req.body;
        const token = await userService.login(username, password);
        res.json({token});
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
});

router.put('/actualizar', authenticateToken, async (req, res) =>{
    const {senhaAtual, novaSenha} = req.body;

    if(!senhaAtual || !novaSenha){
        return res.status(400).json({message: error.message});
    }
    try {
        const user = await User.findByUserName(req.username);
        if (!user) return res.status(404).json({message: error.message});

        const validar = await bcrypt.compare(senhaAtual, user.password);
        if (!validar) return res.status(400).json({message: error.message});

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword
        await user.save();

        res.status(200).json({message: "senha atualizada com suceso"});
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

module.exports = router;