const projectService = require('../services/projectService');

const createProject = async (req, res) =>{
    if(!title || !shortDesc || !longDesc || !urlDemo || !urlRepo ){
        return res.status(400).json({message: 'Por favor, proporciona los campos requeridos'});
    }
    try {
        const project = await projectService.createProject(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({message:'Error creando proyecto', error})
    }
}
const getProjectById = async (req, res) =>{
    try {
        const project = await projectService.getProjectById(req.params.id);
        if(!project){
            res.status(404).json({message:'Error proyecto no encontrado'});
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({message:'Error al obtener el proyecto especificado', error});
    }
}
const updateProjectById = async (req, res) =>{
    try {
        const updateProject = await projectService.updateProjectById(req.params.id, req.body);
        res.status(200).json(updateProject);
    } catch (error) {
        res.status(500).json({message:'Error al actualizar el proyecto', error});
    }
}
const deleteProjectById = async (req, res) =>{
    try {
        await projectService.deleteProjectById(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({message:'Error al borrar el proyecto', error})
    }
}
const getAllProjects = async (req, res) =>{
    try {
        const projects = await projectService.getAllProjects();
        res.status(201).json(projects);
     } catch (error) {
        res.status(500).json({message: 'Error al obtener los proyectos', error});
    }
}
module.exports={
    getAllProjects,
    createProject,
    getProjectById,
    updateProjectById,
    deleteProjectById
}