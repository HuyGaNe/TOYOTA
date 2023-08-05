const { use } = require('../../index');
const examScheduleModel=require('./ExamScheduleModel');

const getAllExamSchedule=async()=>{
    try {
        //lay toan bo mon hoc
        return await examScheduleModel.find().populate('idmon','nameSubject');
        
    } catch (error) {
        console.log("loi me r") 
    }
}
const addNewExamSchedule = async (idmon,cathi, diadiem, ngaythi) => {
    try {
        // const newProduct = {
        //     _id: data.length + 1,
        //     name,
        //     price,
        //     quantity,
        //     image,
        //     category
        // }
        // data.push(newProduct);
        const newExamSchedule = {
            idmon, cathi, diadiem,ngaythi
        }
        const p = new examScheduleModel(newExamSchedule);
        await p.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
// xoa lich thi theo id
const deleteExamScheduleById = async (id) => {
    try {
        // const index = data.findIndex(item => item._id.toString() == id.toString());
        // if (index >= 0) {
        //     data.splice(index, 1);
        //     return true;
        // }
        //return false
        await examScheduleModel.findByIdAndDelete(id);// mongodb
        return true;
    } catch (error) {
        console.log('Delete product by Id error:', error);
        throw error;
        return false;
    }

}
module.exports={getAllExamSchedule,addNewExamSchedule,deleteExamScheduleById}