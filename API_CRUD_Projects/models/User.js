const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const UserSchema= new Schema (
    {
        name:{type:String, required:true, unique:true},
        password:{type:String, required:true},
        email:{type:String, required:true, unique:true},
        tokenVersion:{type:Number, required:true, default:0}
    },{collection:'User'}
);

module.exports = mongoose.model('User', UserSchema);
