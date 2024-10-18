const CertificateService = require('../services/CertificateService');

const createCertificate = async (req, res) => {
    try {
        const certificateData = req.body;
        const createdCertificate = await CertificateService.createCertificate(certificateData);
        res.status(201).json(createdCertificate);
    } catch (error) {
        res.status(500).json({ message:'Error creando el certificado',error });
    }
}
const getAllCertificates = async(req, res) => {
    try {
        const certificates = await CertificateService.getAllCertificates();
        res.status(200).json(certificates);
    } catch (error) {
        res.status(500).json({ message:'Error obteniendo los certificados', error });
    }
}
module.exports = {
    createCertificate,
    getAllCertificates
};