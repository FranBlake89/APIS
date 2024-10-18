const express = require('express');
const { createCertificate, getAllCertificates } = require('../controllers/certificateController');

const certificateRouter = express.Router();   


certificateRouter.post('/', createCertificate);
certificateRouter.get('/', getAllCertificates);

module.exports = certificateRouter;