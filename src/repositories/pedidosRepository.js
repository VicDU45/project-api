const Compra = require('../models/compra');

class pedidosRepository{
    async createPedidos(Compra){
        return await Compra.create(Compra);
    }

    async findAll(userId) {
        return await Compra.findAll({
            where: {
                userId: userId
            }
        });
    }    
}

module.exports =  new pedidosRepository;