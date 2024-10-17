const config = require('../config/config');
const { SkillCategory, Skills } = require('../models/Skills');

const createCategory = async(catData) =>{
    const newCat = new SkillCategory(catData);
    return await newCat.save();
}
const createSkill = async(skillData) =>{
    const newSkill = new Skills(skillData);
    return await newSkill.save();
}

const getSkills = async () =>{
    return await Skills.find();
}
const getSkillById = async(id) =>{
    return await Skills.findById(id);
}
const updateSkillById = async (id, dataSkill) =>{

}
const deleteSkillById = async(id) =>{

}
module.exports={
    createCategory,
    createSkill,
    getSkills,
    getSkillById,
    updateSkillById,
    deleteSkillById
}