const config = require('../config/config');
const Education = require('../models/Education');

const createDegree = async (degreeData) =>{
    const newDegree = new Education(degreeData);
    return await newDegree.save();
}
const getDegreeById = async (id) =>{
    return await Education.findById(id);
}
const updateDegreeById = async (id, updateData) =>{
    return await Education.findByIdAndUpdate(id, updateData);
}
const deleteDegreeById = async (id) =>{
    return await Education.findByIdAndDelete(id);
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