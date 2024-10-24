const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/User');

const {validatePassword, validateEmail} = require('../utils/validations');

//Register New User
const registerUser =  async (username, password, email) => {
    
    const existingUser = await User.findOne({username});
    const existingMail = await User.findOne({email});

    if(existingUser || existingMail){
        throw new Error ('El usuario y/o email ya existen!')
    }

    if( !validatePassword(password) ){
        throw new Error ('La contraseña debe tener al menos un caracter especial y tener un largo de 8.')
    }
    if( !validateEmail(email) ){
        throw new Error('Ingrese un email válido.')
    }

   //hashing password before save it
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name: username,
        password: hashedPassword,
        email: email
    });
//todo delete this console.log
    console.log(user);
    return await user.save();    
}

//Login New User
const loginUser = async (username, password) => {
    const user = await User.findOne({name: username});
    if(!user ){
        throw new Error ('Invalid username or password');
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        throw new Error('Invalid username or password.'); 
    }

    const token = jwt.sign(
        { id: user._id, tokenVersion: user.tokenVersion },
        config.JWT_SECRET, 
        {expiresIn:'1h'}
    );

    return {user, token};
}

module.exports = {
    registerUser,
    loginUser
};