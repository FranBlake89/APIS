const express = require('express');
const router = express.Router();
const { validateProject } = require('../utils/validations');
const { authMiddleware } = require('../middlewares/authMiddlewares');

const { createProject, getAllProjects, getProjectById, updateProjectById, deleteProjectById } = require('../controllers/projectController');



router.post('/', authMiddleware, validateProject, createProject);// Create a new project
router.get('/', getAllProjects);             // Get all projects
router.get('/:id', getProjectById);         // Get project by ID
router.put('/:id', authMiddleware, validateProject, updateProjectById);// Update a project by ID
router.delete('/:id', authMiddleware, deleteProjectById);// Delete a project by ID


module.exports = router;