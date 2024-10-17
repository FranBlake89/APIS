const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddlewares');

const { createDegree, getAllDegree, getDegreeById, updateDegreeById, deleteDegreeById } = require('../controllers/educationController');

const { validateEducation } = require('../utils/validations');

router.post('/create-degree', authMiddleware, validateEducation, createDegree);// Create a new project
router.get('/', getAllDegree);             // Get all projects
router.get('/:id', getDegreeById);         // Get project by ID
router.put('/:id', authMiddleware, validateEducation, updateDegreeById);// Update a project by ID
router.delete('/:id', authMiddleware, deleteDegreeById);// Delete a project by ID


module.exports = router;