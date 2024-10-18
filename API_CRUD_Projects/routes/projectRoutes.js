const express = require('express');
const projectRouter = express.Router();
const { validateProject } = require('../utils/validations');
const { authMiddleware } = require('../middlewares/authMiddlewares');

const { createProject, getAllProjects, getProjectById, updateProjectById, deleteProjectById } = require('../controllers/projectController');

projectRouter.post('/create-project', authMiddleware, validateProject, createProject); // Create a new project
projectRouter.get('/', getAllProjects); // Get all projects
projectRouter.get('/:id', getProjectById); // Get project by ID
projectRouter.put('/:id', authMiddleware, validateProject, updateProjectById); // Update a project by ID
projectRouter.delete('/:id', authMiddleware, deleteProjectById); // Delete a project by ID


module.exports = projectRouter;