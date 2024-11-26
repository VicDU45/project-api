const express = require('express');
const authenticateToken = require('../middleware/auth')
const userService = require('../services/userService')

const router = express.Router();

router.post('/register', async (req, res)=>{
    try{
        const {username, password} = req.body;
        const user = await userService.register(username, password)
        res.json(user);
    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
});

router.post('/login', async(req, res)=>{
    try{
        const {username, password} = req.body;
        const token =  await userService.login(username, password)
        res.json(token);
    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message})
    }
});

router.put('/atualizar', authenticateToken, async (req, res) =>{
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
})

router.get('/users',authenticateToken,async(req, res)=>{
    try{
        const users = await userService.getUsers()
        res.status(200).json({users, message: " Dados listado comSucesso"})
    }catch(err){
        console.log(`${err}`);
        res.status(400).json({erro: err.message}+"teste")
    }
})

module.exports = router;

