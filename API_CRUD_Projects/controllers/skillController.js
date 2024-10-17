const skillService = require('../services/skillService');
const createCategory= async (req,res) =>{
    const { category, technologies } = req.body;
    if(!category || !technologies){
        return res.status(400).json({message:'Por favor, proporciona todos los campos requeridos'})
    }
    try {
        const skillCategory = await skillService.createCategory(req.body);
        res.status(201).json(skillCategory);
    } catch (error) {
        res.status(500).json({ message:'Error creando la Categoria', 
            error });
    }
}
const createSkill= async (req,res) =>{
    try {
        const { skillCategory } = req.body;
        const skill = await skillService.createSkill(skillCategory);
        res.status(201).json(skill);
    } catch (error) {
        res.status(500).json({message:'Error creando habilidad', error})
    }
}
const getAllSkills= async (req,res) =>{
    try {
        const skills = await skillService.getSkills();
        res.status(201).json(skills);
    } catch (error) {
        res.status(500).json({message:'No se pudo obtener las Skills', error})
    }
}
const getSkillById= async (req,res) =>{
    const idSkill = req.params.id;
    if(!idSkill) return res.status(400).json({message:'Por favor ingresa el ID'});
    try{
        const skill = await skillService.getSkillById(idSkill);

        if(!skill) res.status(404).json({message:'Error al obtener la habilidad'});
    } catch (error) {
        res.status(500).json({message:'Error al obtener la habilidad', error})
    }
}
const updateSkillById= async (req,res) =>{
    if( !req.params.id || !req.body ) return res.status(400).json({message:'Por favor ingresa los campos requeridos'});
    
    try {
        const updatedSkill = await skillService.updateSkillById(req.params.id, req.body);
        res.status(200).json(updatedSkill); 
    } catch (error) {
        res.status(500).json({message:'Error al actualizar la habilidad', error})
    }
}
const deleteSkillById= async (req,res) =>{
    if(!req.params.id) return res.status(400).json({message:'Por favor Ingresa el ID'});

    try {
        await skillService.deleteSkillById(req.params.id);
        res.status(204).send()
    } catch (error) {
        res.status(500).json({message:'Error al borrar la habilidad', error})
    }
}
module.exports={
    createCategory,
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkillById,
    deleteSkillById
}