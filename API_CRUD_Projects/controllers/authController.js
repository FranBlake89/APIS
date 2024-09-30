const authService = require('../services/authService');

const register = async (req, res) =>{
    try{
        const {username, password, email} = req.body;
        const user = await authService.registerUser(username, password, email);
        res.status(201).json({message:'Usuario registrado exitosamente!', user});
    } catch (error){
        res.status(400).json({message: error.message});
    }
}; 

const login = async (req, res) => {
    try {
        const {username, password} = req.body;

        console.log(username, password);

        const {user, token}= await authService.loginUser(username, password);
        res.status(200).json({user, token});
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

const logout = async (req, res) =>{
    try {
        const user = await User.findBy(req.user._id);
        if(!user){
            return res.status(404).json({message:'Usuario no encontrado'});
        }

        user.tokenVersion+=1;
        await user.save();

        res.status(200).json({message:'Sesión terminada con éxito'});
    } catch (error) {
        res.status(500).json({message:'Error al cerrar sesión', error:error.message});
    }

};

module.exports = {
    register,
    login,
    logout,
};
