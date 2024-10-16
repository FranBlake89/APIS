const config = require('../config/config');
const Education = require('../models/Education');

const createDegree = async (degreeData) =>{

}
const getDegreeById = async (id) =>{

}
const updateDegreeById = async (id, updateData) =>{

}
const deleteDegreeById = async (id) =>{

}
const getAllDegree = async () =>{
    return await Education.find();
}


module.exports={
    createDegree,
    getDegreeById,
    updateDegreeById,
    deleteDegreeById,
    getAllDegree
}