const Certificate = require('../models/Certificate');
const { uploadImage } = require('../utils/cloudStorage'); // Assuming a function to upload images to CloudFlare

const createCertificate = async(certificateData) => {
    // Upload image to CloudFlare
    const imageUrl = await uploadImage(certificateData.imgCert);

    // Create certificate with updated imageUrl
    const certificate = new Certificate({
        ...certificateData,
        imgCert: imageUrl,
    });

    await certificate.save();
    return certificate;
}
const getAllCertificates = async () => {
    const certificates = await Certificate.find();
    return certificates;
}

module.exports = {
    createCertificate,
    getAllCertificates
};