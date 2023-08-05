const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
//ObjectId la kieu du~ lieu
const subjectSchema = new Schema({
    id: { type: ObjectId },
    nameSubject: { type: String },
    nameTeacher: { type: String },
    categorySubject: { type: String },

});
module.exports = mongoose.models.subject || mongoose.model('subject', subjectSchema);