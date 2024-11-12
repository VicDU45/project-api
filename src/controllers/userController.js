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

router.get('/users', authenticateToken, async (req, res) =>{
    try{
        const users = await userService.getUsers();
        res.json(users);
    }catch (error){
        res.status(400).json({error: error.message});
    }
});

module.exports = router;