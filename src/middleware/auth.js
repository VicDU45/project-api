const jwt = require('jsonwebtoken')
const SECRET_KEY = 'vicThay1';

function authenticateToken(req, res, next){

    const authHeader = req.header('Authorization')?.split(' ')[1]

    if(!authHeader){
        return res.status(403).json({ erro: 'Token ausente.' });
    }

    console.log('---- authorization', authHeader);

    //const token = authHeader.split(' ')[1];

    jwt.verify(authHeader, SECRET_KEY, (err , user )=>{
        if(err){
            console.log('---- jwt.verify err', err);
            return res.status(403).json(`${err}, Token inválido ou malformado.`);
        }

        req.user = user

        next()
    })
}

module.exports = authenticateToken; 