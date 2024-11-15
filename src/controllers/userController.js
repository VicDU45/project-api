const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

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

module.exports = router;