const {check, validationResult} = require('express-validator');
const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;

const validatePassword = (password) => {
    const specialCharacterPattern = /[!#$%^&*(),.?":{}|<>]/;

    // Check if the password meets the criteria
    const isValidLength = password.length >= 8;
    const hasSpecialCharacter = specialCharacterPattern.test(password);

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

const validateEducation= [
    check('degree')
        .notEmpty().withMessage('El grado es requerido')
        .isString(),withMessage('El grado debe ser solo letras'),
    check('institution')
        .notEmpty().withMessage('La institución es requerida')
        .isString().withMessage('Institution must be a string'),
    check('yearOfGraduation')
        .notEmpty().withMessage('Year of graduation is required')
        .isInt({ min: 1900, max: new Date().getFullYear() })
        .withMessage('Year of graduation must be a valid year'),
    check('fieldOfStudy')
        .optional()
        .isString().withMessage('Field of study must be a string')
];
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validatePassword,
    validateEmail,
    validateProject,
    validateEducation,
    validate
};
