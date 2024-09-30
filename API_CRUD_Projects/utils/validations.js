const {check, validationResult} = require('express-validator');
const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;

const validatePassword = (password) => {
    const specialCharacterPattern = /[!#$%^&*(),.?":{}|<>]/;

    // Check if the password meets the criteria
    const isValidLength = password.length >= 8;
    const hasSpecialCharacter = specialCharacterPattern.test(password);

    console.log( `${password}, ${isValidLength}, ${hasSpecialCharacter}`);
    return isValidLength && hasSpecialCharacter;
};

const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return pattern.test(email);
}

const validateProject = [
    check('title').not().isEmpty().withMessage('El título es requerido'),
    check('shortDesc').not().isEmpty().withMessage('La descripción corta es requerida'),
    check('longDesc').not().isEmpty().withMessage('La descripción larga es requerida'),
    check('urlRepo').isURL().withMessage('El URL del repositorio debe ser válido'),
    // Middleware para manejar los errores de validación
    (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
    },
];

module.exports = {
    validatePassword,
    validateEmail,
    validateProject
};
