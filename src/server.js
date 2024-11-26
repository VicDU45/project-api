//jwt.io
const express = require('express')
const swaggerUI = require('swagger-ui-express')
const PORT = 3000
const userController = require('./controllers/userController')
const pedidoController = require('./controllers/pedidoController')


const app = express()
app.use(express.json())
app.use('/api/user', userController);
app.use('/api/pedidos', pedidoController);

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(require('./swagger.json')));


app.listen( PORT, () =>{
    console.log(`Servidor rodando na PORTa ${PORT}`);
    console.log(`documentação Swagger disponivel em http://localhost:${PORT}/api-docs`);
})