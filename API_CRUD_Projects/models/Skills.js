const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillCategorySchema = new Schema(
    {
        category: {
            type: String,
            required: true,
            trim: true, // Removes whitespace from both ends of a string
            minlength: 3,
            maxlength: 50, 
        },
        technologies: {
            type: [String],
            required: true,
        }
    }, 
    { 
        _id: false 
    }
); 
// Define the main schema for Skills
const SkillsSchema = new Schema(
    {
        skillCategories: {
            type: [SkillCategorySchema],
            required: true,
        }
    }, 
    { 
        collection: 'Skills', timestamps: true 
    }
);
module.exports = mongoose.model('Skills', SkillsSchema);