const { model } = require('mongoose');
const scheduleService=require('./ScheduleService');
const getAllSchedule=async()=>{
    try {
        return await scheduleService.getAllSchedule();
    } catch (error) {
        throw error
    }
}
const addNewSchedule = async (idmon, cahoc, diadiem,ngayhoc) => {
    try {
        return await scheduleService.addNewSchedule(idmon, cahoc, diadiem,ngayhoc);
    } catch (error) {
        return false;
    }
}
const deleteScheduleById = async (id) => {
    try {
        return await scheduleService.deleteScheduleById(id);
    } catch (error) {
        throw error;
    }

}
module.exports={getAllSchedule,addNewSchedule,deleteScheduleById}