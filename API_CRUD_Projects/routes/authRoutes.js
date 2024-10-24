const express = require('express');
const {register, login, logout}=require('../controllers/authController');
const authRouter = express.Router();

authRouter.use(function(req, res, next) {
    res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

module.exports = authRouter;
