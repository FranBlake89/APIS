
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

module.exports = {
    validatePassword,
    validateEmail
};
