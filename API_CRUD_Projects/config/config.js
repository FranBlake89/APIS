// Config DB
require('dotenv').config();

config = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    CLOUD_NAME: process.env.CLOUD_NAME,
    API_KEY_CLOUD: process.env.API_KEY_CLOUD,
    API_SECRET_CLOUD: process.env.API_SECRET_CLOUD
}

module.exports = config;