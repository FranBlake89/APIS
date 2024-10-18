const config = require('../config/config')
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: config.CLOUD_NAME, 
    api_key: config.API_KEY_CLOUD, 
    api_secret: config.API_SECRET_CLOUD
});

const uploadImage = async (image) => {
    try {
        const result = await cloudinary.uploader.upload(image);
        return result.url;
    } catch (error) {
        throw error;
    }
};

module.exports = { uploadImage };