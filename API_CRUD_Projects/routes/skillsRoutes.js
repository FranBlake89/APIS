const express = require('express');
const skillRouter = express.Router();
const{ authMiddleware } = require('../middlewares/authMiddlewares');

const {  
    createCategory,
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkillById,
    deleteSkillById,
} = require('../controllers/skillController');

skillRouter.post('/create-category', authMiddleware, createCategory)
skillRouter.post('/create-skill', authMiddleware, createSkill);
skillRouter.get('/', getAllSkills);
skillRouter.get('/:id', getSkillById);
skillRouter.put('/:id', authMiddleware, updateSkillById);
skillRouter.delete('/:id', authMiddleware, deleteSkillById);

module.exports = skillRouter;