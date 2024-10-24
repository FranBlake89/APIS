const jwt = require('jsonwebtoken');
const config = require('../config/config');

const verifyToken = (req, res, next) =>{
    const token = req.headers['authorization'];
    
    if(!token){
        return res.status(403).json({message:'Autenticación errónea, token erróneo  -Authorization-'});
    }

    jwt.verify(token, config.JWT_SECRET, (err, decoded) =>{
        if (err){
            return res.status(401).json({message:'No autorizado'});
        }

        req.userId = decoded.id;
        next();
    });
};

module.exports = {
    verifyToken
}