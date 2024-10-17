const express = require('express');
const router = express.Router();
const{ authMiddleware } = require('../middlewares/authMiddlewares');

const {  
    createCategory,
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkillById,
    deleteSkillById,
} = require('../controllers/skillController');

router.post('/create-category', authMiddleware, createCategory)
router.post('/create-skill', authMiddleware, createSkill);
router.get('/', getAllSkills);
router.get('/:id', getSkillById);
router.put('/:id', authMiddleware, updateSkillById);
router.delete('/:id', authMiddleware, deleteSkillById);