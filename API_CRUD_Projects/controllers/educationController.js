const educationService = require('../services/educationService');

const createDegree = async (req, res) =>{
    if( !institution || !degree || !country.name ){
        return res.status(400).json({
            message: 'Por favor, proporciona todos los campos requeridos'
        })
    }
    try {
        const degree = await educationService.createDegree(req.body);
        res.status(201).json(degree);
    } catch (error) {
        res.status(500).json({
            message:'Error creando el proyecto', 
            error
        })
    }
}
const getAllDegree = async (req, res) =>{
    try {
        const degrees = await educationService.getAllDegree();
        res.status(201).json(degrees);
    } catch (error) {
        res.status(500).json({
            message:'Error al obtener los grados.', 
            error
        })
    }
} 
const getDegreeById = async (req, res) =>{
    try {
        const idDegree = await educationService.getDegreeById(req.params.id);
        if(!idDegree){
            res.status(404).json({
                message:'Error grado no encontrado'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'Error al obtener grado',
            error
        })
    }
} 
const updateDegreeById = async (req, res) =>{
    try {
        const updateDegree = await educationService.updateDegreeById(req.params.id, req.body);
        res.status(200).json(updateDegree);
    } catch (error) {
        res.status(500).json({
            message:'Error al actualizar grado',
            error
        });
    }
} 
const deleteDegreeById = async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
}

module.exports={
    createDegree,
    getAllDegree,
    getDegreeById,
    updateDegreeById,
    deleteDegreeById
}