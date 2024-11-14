const express = require('express');
const userController = require('./controllers/userController');
const swaggerUI = require("swagger-ui-express");

const app = express();
app.use(express.json());
app.use('/api/user', userController);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(require('./swagger.json')));

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`documentação Swagger disponivel em http://localhost:${PORT}/api-docs`);
})