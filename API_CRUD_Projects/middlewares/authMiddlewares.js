const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authMiddleware = (req, res, next) =>{
    const token = req.headers['authorization'];
    if(!token){
        return res.status(401).json({message:'Falta el token'});
    }

    jwt.verify(token, config.JWT_SECRET, (err, decoded) =>{
        if (err){
            return res.status(401).json({message:'No autorizado'});
        }

        req.userId = decoded.indexOf;
        next();
    });
};

module.exports = authMiddleware;