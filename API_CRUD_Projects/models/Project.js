const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const ProjectSchema = new Schema(
    {
        icon:{type:String, default:""},
        title:{type:String, required:true},
        shortDesc:{type:String, required:true},
        longDesc:{type:String, required:true},
        urlDemo:{type:String},
        urlRepo:{type:String, required:true},
        urlWebsite:{type:String},
        urlImgs:[
            {type:String}
        ],
        skills:[
            {type:String}
        ]
    },
    {
        collection:'Project'
    }
)

module.exports = mongoose.model('Project', ProjectSchema);