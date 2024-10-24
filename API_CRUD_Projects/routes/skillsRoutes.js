const express = require('express');
const skillRouter = express.Router();
const{ verifyToken } = require('../middlewares/authMiddlewares');

const {  
    createCategory,
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkillById,
    deleteSkillById,
} = require('../controllers/skillController');

skillRouter.post('/create-category', verifyToken, createCategory)
skillRouter.post('/create-skill', verifyToken, createSkill);
skillRouter.get('/', getAllSkills);
skillRouter.get('/:id', getSkillById);
skillRouter.put('/:id', verifyToken, updateSkillById);
skillRouter.delete('/:id', verifyToken, deleteSkillById);

module.exports = skillRouter;