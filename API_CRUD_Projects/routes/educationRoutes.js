const express = require('express');
const educationRouter = express.Router();
const { verifyToken } = require('../middlewares/authMiddlewares');

const { createDegree, getAllDegree, getDegreeById, updateDegreeById, deleteDegreeById } = require('../controllers/educationController');

const { validateEducation } = require('../utils/validations');

educationRouter.post('/create-degree', verifyToken, validateEducation, createDegree); // Create a new project
educationRouter.get('/', getAllDegree); // Get all projects
educationRouter.get('/:id', getDegreeById); // Get project by ID
educationRouter.put('/:id', verifyToken, validateEducation, updateDegreeById);// Update a project by ID
educationRouter.delete('/:id', verifyToken, deleteDegreeById);// Delete a project by ID


module.exports = educationRouter;