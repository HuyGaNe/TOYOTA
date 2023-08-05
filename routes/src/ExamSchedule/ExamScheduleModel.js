const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const examScheduleSchema=new Schema({
    id:{type:ObjectId},
    //tenmon:{type:String},
    idmon:{type: ObjectId,ref:'subject'},  
    cathi:{type: String}, 
    diadiem:{type:String},
    ngaythi:{type:String}
});

module.exports = mongoose.models.examschedule || mongoose.model('examschedule', examScheduleSchema);
