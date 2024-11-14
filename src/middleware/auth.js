const jwt = require('jsonwebtoken');
const SECREt_KEY = 'vicThay1';

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];

    if(!authHeader){
        return res.sendStatus(401);
    }

    console.log('---- authorization', authHeader);

    const token = authHeader.split(' ')[1];

    jwt.verify(token, SECREt_KEY, (err, user) => {
        if(err) {
            console.log('---- jwt.verify err', err);
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;