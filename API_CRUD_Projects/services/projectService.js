const config = require('../config/config');
const Project = require('../models/Project');

// Create new Project
const createProject = async (projectData) =>{
    const newProject = new Project(projectData);
    return await newProject.save();
}

// Read project
const getProjectById = async (id) =>{
    return await Project.findById(id);
}

// Update project
const updateProjectById = async (id, updateData) =>{
    return await Project.findByIdAndUpdate(id, updateData);
}

//Delete Project
const deleteProjectById = async (id) =>{
    return await Project.findByIdAndDelete(id);
}

// Get all 
const getAllProjects = async () =>{
    return await  Project.find();
}


module.exports={
    createProject,
    getProjectById,
    updateProjectById,
    deleteProjectById,
    getAllProjects
}