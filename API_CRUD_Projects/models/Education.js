const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = new Schema(
    {
        institution:{ type:String, required:true },
        major: {type:String, required:true},
        awards:{type:String, default:""},
        country:{
            name:{type:String, required:true},
            icon:{type:String, required:true}
        },
        gedDate:{type:String, required:true}
    }, 
    {
        collection:'Education'
    }
)

module.exports = mongoose.model('Education', EducationSchema);