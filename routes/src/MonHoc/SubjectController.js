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
const deleteProductById = async (id) => {
    try {
        return await subjectService.deleteSubjectById(id);
    } catch (error) {
        throw error;
    }

}
const getSubjectById = async (id) => {
    try {
        return await subjectService.getSubjectById(id);
    } catch (error) {
        return null;
    }
}
const updateSubjectById = async (id, nameSubject, nameTeacher, categorySubject ) => {
    try {
        return await subjectService.updateSubjectById(id, nameSubject, nameTeacher, categorySubject);
    } catch (error) {
        return false;
    }
}
module.exports={getAllSubject_V2,addNewSubject,deleteProductById,getSubjectById,updateSubjectById}