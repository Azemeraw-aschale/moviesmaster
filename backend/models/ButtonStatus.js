const mongoose=require('mongoose');
const ButtonSchema = mongoose.Schema({
    status :{type:Boolean,default:false}
}
);
const ButtonStatus=mongoose.model('ButtonStatus',ButtonSchema);

module.exports=ButtonStatus;