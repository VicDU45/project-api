const Compra = require('../models/compra');

class pedidosRepository{
    async createPedidos(compra){
        return await Compra.create(compra);
    }

    async findAll(){
        return await Compra.findAll();
    }
}

module.exports =  new pedidosRepository;