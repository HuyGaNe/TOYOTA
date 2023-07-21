const { model } = require('mongoose');
const subjectService=require('../MonHoc/SubjectService')
const getAllSubject_V2=async()=>{
    try {
        return await subjectService.getAllSubject();
    } catch (error) {
        throw error
    }
}
const addNewSubject = async (nameSubject, nameTeacher, categorySubject) => {
    try {
        return await subjectService.addNewSubject(nameSubject, nameTeacher, categorySubject);
    } catch (error) {
        return false;
    }
}
module.exports={getAllSubject_V2,addNewSubject}