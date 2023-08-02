const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const scheduleSchema=new Schema({
    id:{type:ObjectId},
    subject:{type: ObjectId,ref:'subject'},
    cahoc:{type: String},
    diadiem:{type:String},
    ngayhoc:{type:Date}
});
module.exports = mongoose.models.schedule || mongoose.model('schedule', scheduleSchema);
