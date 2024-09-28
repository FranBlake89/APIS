const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SkillCategorySchema = new Schema (
    {
        title:{type:String, required:true},
        institution:{ type:String, required:true},
        imgCert:{type:String, required:true},
        urlCert:{type:String, default:""}
    }, 
    {
        collection:'Certification'
    }
);

module.exports = mongoose.model('Certification', CertificateSchema);