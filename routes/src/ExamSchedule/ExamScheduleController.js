const { model } = require('mongoose');
const examScheduleService=require('./ExamScheduleService');
const getAllExamSchedule=async()=>{
    try {
        return await examScheduleService.getAllExamSchedule();
    } catch (error) {
        throw error
    }
}
const addNewExamSchedule = async (idmon, cathi, diadiem,ngaythi) => {
    try {
        return await examScheduleService.addNewExamSchedule(idmon, cathi, diadiem,ngaythi);
    } catch (error) {
        return false;
    }
}
const deleteExamScheduleById = async (id) => {
    try {
        return await examScheduleService.deleteExamScheduleById(id);
    } catch (error) {
        throw error;
    }

}
module.exports={getAllExamSchedule,addNewExamSchedule,deleteExamScheduleById}